package com.minuri.backend.controller;

import com.minuri.backend.dto.RegisterRequest;
import com.minuri.backend.dto.LoginRequest;
import com.minuri.backend.dto.GoogleLoginRequest; // අලුතින්
import com.minuri.backend.dto.AuthResponse;
import com.minuri.backend.model.User;
import com.minuri.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 1. SIGN UP / REGISTER ENDPOINT
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Error: Email is already registered!");
        }

        User user = new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword()); 
        user.setRole("USER"); // Default හැමෝම සාමාන්‍ය යූසර්ස්ලා
        user.setAuthProvider("LOCAL");

        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    // 2. NORMAL LOGIN ENDPOINT
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            if (user.getPassword() != null && user.getPassword().equals(loginRequest.getPassword())) {
                return ResponseEntity.ok(new AuthResponse("Login Successful!", true, user.getName(), user.getRole()));
            }
        }
        return ResponseEntity.status(401).body(new AuthResponse("Invalid Email or Password!", false, null, null));
    }

    // 3. GOOGLE LOGIN ENDPOINT (අලුතින් එකතු කළ කොටස)
    @PostMapping("/google-login")
    public ResponseEntity<AuthResponse> googleLogin(@RequestBody GoogleLoginRequest googleRequest) {
        Optional<User> userOptional = userRepository.findByEmail(googleRequest.getEmail());
        User user;

        if (userOptional.isPresent()) {
            // යූසර් දැනටමත් ඉන්නවා නම්, කෙලින්ම ලොග් කරගන්නවා
            user = userOptional.get();
        } else {
            // පළවෙනි පාර නම් Google එකෙන් ලොග් වෙන්නේ, Database එකේ අලුතින් එකක් හදනවා
            user = new User();
            user.setName(googleRequest.getName());
            user.setEmail(googleRequest.getEmail());
            user.setRole("USER"); // Default සාමාන්‍ය යූසර්
            user.setAuthProvider("GOOGLE");
            userRepository.save(user);
        }

        return ResponseEntity.ok(new AuthResponse("Google Login Successful!", true, user.getName(), user.getRole()));
    }
}