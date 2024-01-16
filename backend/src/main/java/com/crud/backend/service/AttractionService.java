package com.crud.backend.service;

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
}
