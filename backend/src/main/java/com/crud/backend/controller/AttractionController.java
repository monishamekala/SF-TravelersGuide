package com.crud.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@PostMapping(value = "/createattraction", consumes = { "application/json" })
	public ResponseEntity<Attraction> CreateAttraction(@RequestBody Attraction attraction) {		
		Attraction savedAttraction = attractionService.createAttraction(attraction);
		// HTTP Status of 201 - A resource (attraction) was created.
		return new ResponseEntity<Attraction>(savedAttraction, HttpStatus.CREATED);
	}
	
	@PutMapping("/deleteattraction")
	public ResponseEntity<Attraction> DeleteAttraction(@RequestParam String id) {
		Attraction deletedAttraction = attractionService.deleteAttraction(id);
		if (deletedAttraction == null) {
			return new ResponseEntity<Attraction>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Attraction>(deletedAttraction, HttpStatus.OK);
	}
}
