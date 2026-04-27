package com.samgtu.es.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.samgtu.es.dto.Institute;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class InstituteService {

    private final TableSheets tableSheets;

    @Cacheable("institutions")
    public List<Institute> getAllInstitutions() {
        log.info("Fetch all institutions");
        List<List<Object>> rows = tableSheets.readData("Институты", "B3:D");
        return rows.stream()
                .filter(row -> row.size() == 3)
                .map(this::mapRowToInstitute)
            .collect(Collectors.toList());
    }

    private Institute mapRowToInstitute(List<Object> row) {
        return Institute.builder()
                .groupQuestions(toStringSafe(row.get(0)))
                .name(toStringSafe(row.get(1)))
                .description(toStringSafe(row.get(2)))
            .build();
    }

    private String toStringSafe(Object obj) {
        return obj != null ? obj.toString() : "";
    }
}
