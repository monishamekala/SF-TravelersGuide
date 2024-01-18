package com.crud.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.backend.model.Attraction;
import com.crud.backend.repository.AttractionRepository;

@Service
public class AttractionService implements IAttractionService {
	
	@Autowired
	private AttractionRepository attractionRepository;	
	
	@Override
	public List<Attraction> getAllAttractions() {
		// TODO Auto-generated method stub
		return attractionRepository.findAll();
	}
	
	@Override
	public Attraction createAttraction(Attraction attraction) {
		// TODO Auto-generated method stub
		
		// Set the current date
		attraction.setDeleted(false);
		Date currentDate = new Date();
		attraction.setCreatedby("User");
		attraction.setCreateddatetime(currentDate);
		attraction.setLastupdatedby("User");
		attraction.setLastupdateddatetime(currentDate);
		
		// Save the attraction and return to the controller
		Attraction savedAttraction = attractionRepository.save(attraction);
		return savedAttraction;
	}
}
