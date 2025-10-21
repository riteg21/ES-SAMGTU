package com.samgtu.es.dto.result;

import com.samgtu.es.entity.Directions;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DirectionsWithPercent {
    private Float percent;
    private Directions direction;
}
