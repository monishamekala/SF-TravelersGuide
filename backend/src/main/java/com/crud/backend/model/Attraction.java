package com.crud.backend.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Attraction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "comments")
	private String comments;
	
	@Column(name = "deleted")
	private Boolean deleted;
	
	@Column(name = "city_id")
	private int city_id;
	
	@Column(name = "country_id")
	private int country_id;
	
	@Column(name = "createdby")
	private String createdby;
	
	@Column(name = "createddatetime")
	private Date createddatetime;
	
	@Column(name = "lastupdatedby")
	private String lastupdatedby;
	
	@Column(name = "lastupdateddatetime")
	private Date lastupdateddatetime;
	
	//Constructor
	public Attraction() {
		// TODO Auto-generated constructor stub
	}
	
	//Getters
	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public String getComments() {
		return comments;
	}
	
	public Boolean getDeleted() {
		return deleted;
	}
	
	public int getCity_id() {
		return city_id;
	}
	
	public int getCountry_id() {
		return country_id;
	}
	
	public String getCreatedby() {
		return createdby;
	}
	
	public Date getCreateddatetime() {
		return createddatetime;
	}
	
	public String getLastupdatedby() {
		return lastupdatedby;
	}
	
	public Date getLastupdateddatetime() {
		return lastupdateddatetime;
	}
	
	//Setters
	public void setId(int id) {
		this.id = id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public void setComments(String comments) {
		this.comments = comments;
	}
	
	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
	
	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}
	
	public void setCountry_id(int country_id) {
		this.country_id = country_id;
	}
	
	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}
	
	public void setCreateddatetime(Date createddatetime) {
		this.createddatetime = createddatetime;
	}
	
	public void setLastupdatedby(String lastupdatedby) {
		this.lastupdatedby = lastupdatedby;
	}
	
	public void setLastupdateddatetime(Date lastupdateddatetime) {
		this.lastupdateddatetime = lastupdateddatetime;
	}
	
}
