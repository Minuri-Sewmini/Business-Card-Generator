package com.minuri.backend.dto;

public class GoogleLoginRequest {
    private String email;
    private String name;

    // 💡 1. Default (No-Args) Constructor
    public GoogleLoginRequest() {
    }

    // 💡 2. All-Args Constructor
    public GoogleLoginRequest(String email, String name) {
        this.email = email;
        this.name = name;
    }

    // 💡 3. Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}