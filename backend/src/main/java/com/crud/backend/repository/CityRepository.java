package com.crud.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.crud.backend.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

	@Query(value =  "SELECT * FROM city c WHERE c.countrycode = :countrycode", nativeQuery = true)
	List<City> findCitiesByCountryCode(@Param("countrycode") String countrycode);
	
	@Query(value = "SELECT * FROM city WHERE name ILIKE %:name%", nativeQuery = true)
	List<City> findCitiesByCityName(@Param("name") String name);
}
