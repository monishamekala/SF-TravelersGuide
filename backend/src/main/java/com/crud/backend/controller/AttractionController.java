package com.crud.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.model.Attraction;
import com.crud.backend.service.IAttractionService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/attraction")
public class AttractionController {

	@Autowired
	private IAttractionService attractionService;
	
	@GetMapping("")
	public String AttractionMain() {
		return "Attraction Controller";
	}
	
	@GetMapping("/getallattractions")
	public List<Attraction> GetAllAttractions() {
		return attractionService.getAllAttractions();
	}
}
