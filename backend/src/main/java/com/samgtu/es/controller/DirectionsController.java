package com.samgtu.es.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.samgtu.es.dto.Directions;
import com.samgtu.es.service.DirectionsService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/directions")
@AllArgsConstructor
public class DirectionsController {
    
    private DirectionsService directionsService;

    @GetMapping
    public ResponseEntity<List<Directions>> getAllDirections() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(directionsService.getAllDirectionsScores());
    }
}
