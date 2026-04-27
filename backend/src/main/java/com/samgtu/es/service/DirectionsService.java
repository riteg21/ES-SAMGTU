package com.samgtu.es.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.samgtu.es.dto.Direction;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class DirectionsService {

    private final TableSheets tableSheets;

    @Cacheable("directions")
    public List<Direction> getAllDirectionsScores()  {
        log.info("Fetch all directions");
        List<List<Object>> rows = tableSheets.readData("Направления", "B3:F");

        return rows.stream()
                .filter(row -> row.size() >= 5)
                .map(this::mapRowToDirection)
            .collect(Collectors.toList());
    }

    private Direction mapRowToDirection(List<Object> row) {
        return Direction.builder()
                .id(Long.valueOf(toStringSafe(row.get(0))))
                .name(toStringSafe(row.get(1)))
                .number(toStringSafe(row.get(2)))
                .url(toStringSafe(row.get(3)))
                .imageURL(toStringSafe(row.get(4)))
            .build();
    }

    private String toStringSafe(Object obj) {
        return obj != null ? obj.toString() : "";
    }
}
