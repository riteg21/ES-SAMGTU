package com.samgtu.es.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.samgtu.es.dto.Direction;
import com.samgtu.es.service.DirectionsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/directions")
@RequiredArgsConstructor
public class DirectionsController {
    
    private final DirectionsService directionsService;

    @GetMapping
    public ResponseEntity<List<Direction>> getAllDirections() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(directionsService.getAllDirectionsScores());
    }
}
