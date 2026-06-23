package com.minuri.backend.repository;

import com.minuri.backend.model.BusinessCard;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface BusinessCardRepository extends MongoRepository<BusinessCard, String> {
    // යූසර්ගේ ID එකෙන් එයාගේ කාඩ් එක හොයාගන්න ක්‍රමයක්
    Optional<BusinessCard> findByUserId(String userId);
}