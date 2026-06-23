package com.minuri.backend.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
public class AiController {

    // Environment Variable Name
    private final String API_KEY = System.getenv("GROQ_API_KEY");

    public static class ChatRequest {
        private String message;

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }

    @PostMapping("/chat")
    public ResponseEntity<?> processChat(@RequestBody ChatRequest chatRequest) {

        String userMessage = chatRequest.getMessage();

        if (userMessage == null || userMessage.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Message is required");
        }

        String prompt =
                "Extract professional information from this text. "
                        + "Return ONLY valid JSON.\n"
                        + "Fields:\n"
                        + "name,\n"
                        + "title,\n"
                        + "email,\n"
                        + "phone,\n"
                        + "linkedin,\n"
                        + "github,\n"
                        + "portfolio,\n"
                        + "skills (array).\n"
                        + "If a field is missing use empty string or empty array.\n\n"
                        + "Text: " + userMessage;

        try {

            JSONObject requestBody = new JSONObject();
            requestBody.put("model", "llama3-8b-8192");

            JSONArray messages = new JSONArray();

            JSONObject message = new JSONObject();
            message.put("role", "user");
            message.put("content", prompt);

            messages.put(message);

            requestBody.put("messages", messages);

            HttpClient client = HttpClient.newHttpClient();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.groq.com/openai/v1/chat/completions"))
                    .header("Authorization", "Bearer " + API_KEY)
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody.toString()))
                    .build();

            HttpResponse<String> response =
                    client.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() != 200) {
                return ResponseEntity.status(response.statusCode())
                        .body(response.body());
            }

            JSONObject responseJson = new JSONObject(response.body());

            String aiResponse = responseJson
                    .getJSONArray("choices")
                    .getJSONObject(0)
                    .getJSONObject("message")
                    .getString("content")
                    .trim();

            if (aiResponse.startsWith("```")) {
                aiResponse = aiResponse
                        .replaceAll("^```json\\s*", "")
                        .replaceAll("^```\\s*", "")
                        .replaceAll("```$", "")
                        .trim();
            }

            return ResponseEntity.ok(aiResponse);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body("Groq AI extraction failed: " + e.getMessage());
        }
    }
}