package com.samgtu.es.service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.samgtu.es.dto.question.AnswersDto;
import com.samgtu.es.dto.question.QuestionDto;
import com.samgtu.es.googlesheets.TableSheets;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@AllArgsConstructor
public class QuestionService {

    private final TableSheets tableSheets;

    public Page<QuestionDto> getQuestion(int questionNumber) {
        log.info("Fetching question: {}", questionNumber);
        Pageable page = PageRequest.of(questionNumber, 1, Sort.by("id").ascending());

        List<List<Object>> rows = tableSheets.readData("Вопрос_" + questionNumber, "B6:ZZ");
        String question = toStringSafe(tableSheets.readData("Вопрос_" + questionNumber, "B3").get(0).get(0));

        List<Long> directionIds = rows.get(0).stream()
            .skip(1)
            .map(cell -> cell != null ? Long.valueOf(cell.toString()) : 0L)
            .collect(Collectors.toList());

        List<AnswersDto> lAnswersDtos = rows.stream()
            .skip(1)
            .filter(row -> row != null && !row.isEmpty() && row.get(0) != null)
            .map(row -> {
                String text = toStringSafe(row.get(0));

                Map<Long, Integer> scores = IntStream.range(1, row.size())
                        .filter(j -> j - 1 < directionIds.size())
                        .boxed()
                        .collect(Collectors.toMap(
                                j -> directionIds.get(j - 1),
                                j -> row.get(j) != null ? Integer.parseInt(row.get(j).toString()) : 0
                        ));

                return AnswersDto.builder()
                        .text(text)
                        .scores(scores)
                        .build();
            })
            .collect(Collectors.toList());
        
        return new PageImpl<>(List.of(QuestionDto.builder()
                .id(Long.valueOf(questionNumber))
                .question(question)
                .answers(lAnswersDtos)
            .build()), 
            page, 
            tableSheets.countSheetsStartingWith("Вопрос_"));
    }

    private String toStringSafe(Object obj) {
        return obj != null ? obj.toString() : "";
    }
}
