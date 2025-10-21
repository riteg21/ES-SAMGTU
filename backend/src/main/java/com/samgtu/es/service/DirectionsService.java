package com.samgtu.es.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samgtu.es.entity.Directions;
import com.samgtu.es.repository.DirectionsRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class DirectionsService {
    
    @Autowired
    private DirectionsRepository directionsRepository;

    public List<Directions> getAllDirectionsScores() {
        log.info("Fetch all directions");
        return directionsRepository.findAll();
    }
}
