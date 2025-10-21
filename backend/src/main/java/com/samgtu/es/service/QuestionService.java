package com.samgtu.es.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.samgtu.es.dto.question.AnswersDto;
import com.samgtu.es.dto.question.QuestionDto;
import com.samgtu.es.entity.Questions;
import com.samgtu.es.repository.AnswerScoresRepository;
import com.samgtu.es.repository.AnswersRepository;
import com.samgtu.es.repository.QuestionsRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class QuestionService {
    
    @Autowired
    private QuestionsRepository questionsRepository;
    
    @Autowired
    private AnswersRepository answersRepository;
    
    @Autowired
    private AnswerScoresRepository answerScoresRepository;

    private QuestionDto convertToQuestionDto(Questions question) {
        log.debug("Converting 'Answers' to 'AnswersDto'");
        List<AnswersDto> answerDtos = answersRepository.findByQuestionId(question.getId()).stream()
                .map(answer -> 
                    AnswersDto.builder()
                            .text(answer.getAnswerText())
                            .scores(answerScoresRepository.findByAnswerId(answer.getId()).stream()
                                .collect(Collectors.toMap(
                                    ansscore -> ansscore.getDirection().getId(), 
                                    ansscore -> ansscore.getScore()))
                            )
                        .build()
                ).toList();
        
        log.debug("'Answers' was converted to 'AnswersDto'");
        return QuestionDto.builder()
                .id(question.getId())
                .question(question.getQuestionText())
                .answers(answerDtos)
            .build();
    }

    public Page<QuestionDto> getQuestion(int questionNumber) {
        log.debug("Fetching question: {}", questionNumber);
        Pageable page = PageRequest.of(questionNumber - 1, 1, Sort.by("id").ascending());

        Page<Questions> questionsPage = questionsRepository.findAll(page);

        log.info("Question fetched by id: {}", questionNumber);
        log.debug("Convert 'Question' to 'QuestionDto'");
        List<QuestionDto> questionDtos = questionsPage.getContent().stream()
                .map(this::convertToQuestionDto)
                .collect(Collectors.toList());

        log.debug("'Question' was converted to 'QuestionDto'");
        return new PageImpl<>(questionDtos, page, questionsPage.getTotalElements());
    }
}
