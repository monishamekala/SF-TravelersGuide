package com.crud.backend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.service.ICountryService;
import com.crud.backend.model.Country;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/country")
public class CountryController {
	@Autowired
	private ICountryService countryService;
	
	@GetMapping("")
	public String CountryMain() {
		return "Country Main";
	}
	
	@GetMapping("/getallcountries")
	public List<Country> GetAllCountries() {
		return countryService.getAllCountries();
	}
}
