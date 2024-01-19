package com.crud.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Country {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "code")
	private String code;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "phone")
	private int phone;
	
	@Column(name = "capital")
	private String capital;
	
	@Column(name = "currency")
	private String currency;
	
	@Column(name = "continent")
	private String continent;
	
	@Column(name = "continentcode")
	private String continentcode;
	
	@Column(name = "alpha3")
	private String alpha3;
	
	//constructor
	public Country() {
		// TODO Auto-generated constructor stub
	}
	
	//Getters
	public int getId() {
		return id;
	}
	
	public String getCode() {
		return code;
	}
	
	public String getName() {
		return name;
	}
	
	public int getPhone() {
		return phone;
	}
	
	public String getCapital() {
		return capital;
	}
	
	public String getCurrency() {
		return currency;
	}
	
	public String getContinent() {
		return continent;
	}
	
	public String getContinentCode() {
		return continentcode;
	}
	
	public String getAplha3() {
		return alpha3;
	}
	
	//Setters
	public void setId(int id) {
		this.id = id;
	}
	
	public void setCode(String code) {
		this.code = code;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setPhone(int phone) {
		this.phone = phone;
	}
	
	public void setCapital(String capital) {
		this.capital = capital;
	}
	
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	
	public void setContinent(String continent) {
		this.continent = continent;
	}
	
	public void setContinentCode(String continentcode) {
		this.continentcode = continentcode;
	}
	
	public void setAlpha3(String alpha3) {
		this.alpha3 = alpha3;
	}
}
