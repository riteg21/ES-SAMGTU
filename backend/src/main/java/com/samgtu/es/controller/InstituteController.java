package com.samgtu.es.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.samgtu.es.dto.Institute;
import com.samgtu.es.service.InstituteService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/institute")
@RequiredArgsConstructor
public class InstituteController {
    
    private final InstituteService instituteService;

    @GetMapping
    public ResponseEntity<List<Institute>> getAllInstitutions() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(instituteService.getAllInstitutions());
    }
}
