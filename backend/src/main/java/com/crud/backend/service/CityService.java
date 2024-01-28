package com.crud.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.backend.model.City;
import com.crud.backend.repository.CityRepository;

@Service
public class CityService implements ICityService {

	@Autowired
	private CityRepository cityRepository;
	
	@Override
	public List<City> getAllCities() {
		// TODO Auto-generated method stub
		return cityRepository.findAll();
	}
	
	@Override
	public List<City> getCitiesByCountryCode(String code) {
		// TODO Auto-generated method stub
		return cityRepository.findCitiesByCountryCode(code);
	}
	
	@Override
	public List<City> getCitiesByCityName(String name) {
		return cityRepository.findCitiesByCityName(name);
	}
}
