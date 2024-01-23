package com.crud.backend.service;

import java.util.List;

import com.crud.backend.model.Attraction;

public interface IAttractionService {
	
	public List<Attraction> getAllAttractions();
	
	public Attraction createAttraction(Attraction attraction);
	
	public Attraction deleteAttraction(String id);

}
