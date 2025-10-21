package com.samgtu.es.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samgtu.es.dto.result.AllDirectionsScores;
import com.samgtu.es.dto.result.DirectionsWithPercent;
import com.samgtu.es.dto.result.ResultDto;
import com.samgtu.es.entity.Result;
import com.samgtu.es.entity.ResultScores;
import com.samgtu.es.exception.NotFoundException;
import com.samgtu.es.repository.DirectionsRepository;
import com.samgtu.es.repository.QuestionsRepository;
import com.samgtu.es.repository.ResultRepository;
import com.samgtu.es.repository.ResultScoresRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ResultService {
    
    @Autowired
    private QuestionsRepository questionsRepository;
    
    @Autowired
    private DirectionsRepository directionsRepository;
    
    @Autowired
    private ResultRepository resultRepository;
    
    @Autowired
    private ResultScoresRepository resultScoresRepository;

    public String createResult(AllDirectionsScores form) {
        log.debug("Start create result");
        Result newResult = resultRepository.save(new Result());
        log.info("Result: {}, was created.", newResult.getId());

        List<ResultScores> newResultScores = new ArrayList<>();
        form.getAnswers().forEach(obj ->
            newResultScores.add(ResultScores.builder()
                    .score(obj.getScores())
                    .direction(
                        directionsRepository.findById(obj.getDirectionsId())
                            .orElseThrow(() -> new NotFoundException("Direction")))
                    .result(newResult)
                .build())
        );
        resultScoresRepository.saveAll(newResultScores);
        log.info("Scores to result: {} was succesefully added.", newResult.getId());

        return newResult.getId().toString();
    }

    public List<ResultScores> findTop3ByResultId(Long resultId) {
        log.debug("Fetch 3 best directions by scores");
        List<ResultScores> allScores = resultScoresRepository.findByResultIdOrderByScoreDesc(resultId);
        log.debug("3 best directions by scores was fetched");
        return allScores.stream()
                .limit(3)
                .collect(Collectors.toList());
    }

    public ResultDto getResult(Long resultId) {
        log.debug("Fetch Result: {}", resultId);
        Result fetchedResult = resultRepository.findById(resultId)
            .orElseThrow(() -> new NotFoundException("Result"));
        log.info("Fetched Result: {}", resultId);
        long cq = questionsRepository.count();
        List<ResultScores> top3 = findTop3ByResultId(resultId);

        log.debug("Building ResultDto for Result: {}", resultId);
        ResultDto returnVal = ResultDto.builder()
                .result(fetchedResult)
                .directionsWithPercent(
                    top3.stream()
                        .map(resultScore -> {
                            float percent = (float) resultScore.getScore() / (cq * 2) * 100;
                            return DirectionsWithPercent.builder()
                                    .percent(percent)
                                    .direction(resultScore.getDirection())
                                    .build();
                        })
                        .collect(Collectors.toList())
                )
            .build();

        log.debug("ResultDto for Result: {} was builded", resultId);
        return returnVal;
    }
}
