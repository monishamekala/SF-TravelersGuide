package com.crud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.backend.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

}
