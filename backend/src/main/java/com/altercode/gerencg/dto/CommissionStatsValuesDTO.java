package com.altercode.gerencg.dto;

import com.altercode.gerencg.entity.CommissionStats;

import java.io.Serializable;

public class CommissionStatsValuesDTO implements Serializable {
    private String statsId;
    private Double maxValueCommission;
    private Double minValueCommission;

    public CommissionStatsValuesDTO(CommissionStats statsId, Double maxValueCommission, Double minValueCommission) {
        this.statsId = statsId.getId();
        this.maxValueCommission = maxValueCommission;
        this.minValueCommission = minValueCommission;
    }

    public String getStatsId() {
        return statsId;
    }

    public void setStatsId(String statsId) {
        this.statsId = statsId;
    }

    public Double getMaxValueCommission() {
        return maxValueCommission;
    }

    public void setMaxValueCommission(Double maxValueCommission) {
        this.maxValueCommission = maxValueCommission;
    }

    public Double getMinValueCommission() {
        return minValueCommission;
    }

    public void setMinValueCommission(Double minValueCommission) {
        this.minValueCommission = minValueCommission;
    }
}

