package com.samgtu.es.googlesheets;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.Spreadsheet;
import com.google.api.services.sheets.v4.model.ValueRange;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import com.samgtu.es.exception.GoogleSheetsException;

import java.io.FileInputStream;
import java.util.Collections;
import java.util.List;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GoogleTableSheetsImpl implements TableSheets {

    private final String spreadsheetId;
    private final Sheets sheetsService;

    public GoogleTableSheetsImpl(String spreadsheetId, String serviceAccountKeyPath) throws Exception {
        this.spreadsheetId = spreadsheetId;
        this.sheetsService = createSheetsService(serviceAccountKeyPath);
    }

    private Sheets createSheetsService(String serviceAccountKeyPath) throws Exception {
        GoogleCredentials credentials = GoogleCredentials
                .fromStream(new FileInputStream(serviceAccountKeyPath))
                .createScoped(Collections.singleton("https://www.googleapis.com/auth/spreadsheets"));

        return new Sheets.Builder(
                GoogleNetHttpTransport.newTrustedTransport(),
                GsonFactory.getDefaultInstance(),
                new HttpCredentialsAdapter(credentials))
                .setApplicationName("es-samgtu-app")
                .build();
    }

    public String columnNumberToLetter(int columnNumber) {
        if (columnNumber <= 0) {
            throw new IllegalArgumentException("Номер столбца должен быть положительным: " + columnNumber);
        }

        StringBuilder result = new StringBuilder();
        while (columnNumber > 0) {
            columnNumber--;
            result.insert(0, (char) ('A' + (columnNumber % 26)));
            columnNumber /= 26;
        }
        return result.toString();
    }

    @Override
    public int countSheetsStartingWith(String prefix) {
        try {
            Spreadsheet spreadsheet = sheetsService.spreadsheets()
                    .get(spreadsheetId)
                    .setFields("sheets.properties.title")
                    .execute();

            int count = 0;
            for (var sheet : spreadsheet.getSheets()) {
                String title = sheet.getProperties().getTitle();
                if (title.startsWith(prefix)) {
                    count++;
                }
            }
            return count;
        } catch (Exception e) {
            throw new GoogleSheetsException("Error get sheets: " + e.getMessage());
        }
    }

    @Override
    public List<List<Object>> readData(String titleSheet, String regionRead) {
        try {
            ValueRange response = sheetsService.spreadsheets()
                    .values()
                    .get(spreadsheetId, titleSheet + "!" + regionRead)
                .execute();
            return response.getValues();
        } catch (Exception e) {
            throw new GoogleSheetsException("Error read: " + e.getMessage());
        }
    }

    @Override
    public void writeData(String titleSheet, String regionWrite, List<List<Object>> writeData) {
        try {
            ValueRange body = new ValueRange()
                    .setValues(writeData);

            sheetsService.spreadsheets()
                    .values()
                    .update(spreadsheetId, titleSheet + "!" + regionWrite, body)
                    .setValueInputOption("RAW")
                .execute();
        } catch (Exception e) {
            throw new GoogleSheetsException("Error write: " + e.getMessage());
        }
    }
}
