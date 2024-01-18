package com.crud.backend.service;

import java.util.List;

import com.crud.backend.model.City;

public interface ICityService {
	
	public List<City> getAllCities();
	public List<City> getCitiesByCountryCode(String code);

}
