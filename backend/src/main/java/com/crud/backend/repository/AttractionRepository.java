package com.crud.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.crud.backend.model.Attraction;

@Repository
public interface AttractionRepository extends JpaRepository<Attraction, Integer> {

	@Query(value = "SELECT * FROM attraction a WHERE a.Deleted = false", nativeQuery = true)
	List<Attraction> getCitiesByDeletedField();

}
