package com.crud.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.crud.backend.model.City;
import com.crud.backend.service.ICityService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/city")
public class CityController {
	
	@Autowired
	private ICityService cityService;

	@GetMapping("")
	public String CityMain() {
		return "City Controller";
	}
	
	@GetMapping("/getallcities")
	public List<City> GetAllCities() {
		return cityService.getAllCities();
	}
	
	@GetMapping("/getcitiesbycountrycode")
	public List<City> GetCitiesByCountryCode(@RequestParam String code) {
		return cityService.getCitiesByCountryCode(code);
	}
	
}
