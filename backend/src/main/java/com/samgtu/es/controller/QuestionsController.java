package com.samgtu.es.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.samgtu.es.dto.result.AllDirectionsScores;
import com.samgtu.es.dto.question.QuestionDto;
import com.samgtu.es.service.QuestionService;
import com.samgtu.es.service.ResultService;

@RestController
@RequestMapping("/api/question")
public class QuestionsController {
    
    @Autowired
    private QuestionService questionService;
    
    @Autowired
    private ResultService resultService;

    @GetMapping
    public ResponseEntity<Page<QuestionDto>> getQuestion(@RequestParam(defaultValue = "1") int questionNumber) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(questionService.getQuestion(questionNumber));
    }

    @PostMapping
    public ResponseEntity<?> postScores(@RequestBody AllDirectionsScores form) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .location(URI.create("/api/result/" + resultService.createResult(form)))
            .build();
    }
}
