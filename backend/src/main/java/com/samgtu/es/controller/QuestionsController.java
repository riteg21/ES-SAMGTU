package com.samgtu.es.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.samgtu.es.dto.question.QuestionDto;
import com.samgtu.es.service.QuestionService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/question")
@AllArgsConstructor
public class QuestionsController {
    
    private QuestionService questionService;

    @GetMapping
    public ResponseEntity<Page<QuestionDto>> getQuestion(@RequestParam(defaultValue = "1") int questionNumber) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(questionService.getQuestion(questionNumber));
    }
}
