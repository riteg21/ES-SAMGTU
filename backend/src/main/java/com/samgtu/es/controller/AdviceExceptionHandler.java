package com.samgtu.es.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.samgtu.es.exception.NotFoundException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class AdviceExceptionHandler {
    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String notFoundException(NotFoundException ex)
    {
        log.warn("Resource not found: {}", ex.getMessage());
        return ex.getMessage();
    }
}
