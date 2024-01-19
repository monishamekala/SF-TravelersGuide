package com.crud.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.backend.model.Country;
import com.crud.backend.repository.CountryRepository;

@Service
public class CountryService implements ICountryService{
	@Autowired
	private CountryRepository countryRepository;
	
	@Override
	public List<Country> getAllCountries(){
		return countryRepository.findAll();
	}
}
