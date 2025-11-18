package com.samgtu.es.googlesheets;

import java.util.List;

public interface TableSheets {
    int countSheetsStartingWith(String prefix);
    List<List<Object>> readData(String titleSheet, String regionRead);
    void writeData(String titleSheet, String regionWrite, List<List<Object>> writeData);
}
