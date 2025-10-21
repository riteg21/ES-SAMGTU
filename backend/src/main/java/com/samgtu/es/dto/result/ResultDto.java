package com.samgtu.es.dto.result;

import java.util.List;

import com.samgtu.es.entity.Result;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ResultDto {
    private Result result;
    private List<DirectionsWithPercent> directionsWithPercent;
}
