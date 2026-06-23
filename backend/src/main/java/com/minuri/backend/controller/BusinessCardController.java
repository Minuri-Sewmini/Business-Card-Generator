package com.minuri.backend.controller;

import com.minuri.backend.dto.CardRequest;
import com.minuri.backend.model.BusinessCard;
import com.minuri.backend.repository.BusinessCardRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/cards")
@CrossOrigin(origins = "http://localhost:5173") // React Frontend එකට අවසර දීම
public class BusinessCardController {

    private final BusinessCardRepository cardRepository;

    public BusinessCardController(BusinessCardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    // 1. CREATE OR UPDATE CARD (කාඩ් එකක් අලුතින් හැදීම හෝ දැනට තියෙන එක වෙනස් කිරීම)
    @PostMapping
    public ResponseEntity<?> saveOrUpdateCard(@RequestBody CardRequest cardRequest) {
        // මේ යූසර්ට දැනටමත් කාඩ් එකක් තියෙනවද බලනවා
        Optional<BusinessCard> existingCard = cardRepository.findByUserId(cardRequest.getUserId());
        BusinessCard card;

        if (existingCard.isPresent()) {
            // දැනටමත් තියෙනවා නම් ඒක අප්ඩේට් කරනවා
            card = existingCard.get();
        } else {
            // නැත්නම් අලුත් එකක් හදනවා
            card = new BusinessCard();
            card.setUserId(cardRequest.getUserId());
        }

        // දත්ත ටික සෙට් කරනවා
        card.setName(cardRequest.getName());
        card.setTitle(cardRequest.getTitle());
        card.setPhone(cardRequest.getPhone());
        card.setEmail(cardRequest.getEmail());
        card.setLinkedin(cardRequest.getLinkedin());
        card.setGithub(cardRequest.getGithub());
        card.setPortfolio(cardRequest.getPortfolio());
        card.setSkills(cardRequest.getSkills());

        cardRepository.save(card);
        return ResponseEntity.ok("Business Card saved successfully!");
    }

    // 2. GET CARD BY USER ID (යූසර් ලොග් වුණාම එයාගේ කාඩ් එක Dashboard එකට ගන්න)
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getCardByUserId(@PathVariable String userId) {
        Optional<BusinessCard> card = cardRepository.findByUserId(userId);
        if (card.isPresent()) {
            return ResponseEntity.ok(card.get());
        }
        return ResponseEntity.status(404).body("No business card found for this user.");
    }

    // 3. GET CARD BY CARD ID (පිටින් එන අයට Public Profile එක පේන්න දෙන Endpoint එක)
    @GetMapping("/{id}")
    public ResponseEntity<?> getCardById(@PathVariable String id) {
        Optional<BusinessCard> card = cardRepository.findById(id);
        if (card.isPresent()) {
            return ResponseEntity.ok(card.get());
        }
        return ResponseEntity.status(404).body("Business Card not found.");
    }
}