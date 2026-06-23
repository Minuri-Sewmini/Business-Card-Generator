package com.minuri.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private String password; // Google වලින් ලොග් වෙන අයට මේක null වෙන්න පුළුවන්
    private String role;     // "USER" හෝ "ADMIN"
    private String authProvider; // "LOCAL" (සාමාන්‍ය ලොගින්) හෝ "GOOGLE"

    // 💡 1. Default (No-Args) Constructor
    public User() {
    }

    // 💡 2. All-Args Constructor
    public User(String id, String name, String email, String password, String role, String authProvider) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.authProvider = authProvider;
    }

    // 💡 3. Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getAuthProvider() {
        return authProvider;
    }

    public void setAuthProvider(String authProvider) {
        this.authProvider = authProvider;
    }
}