package com.corporate.delivery.forms;

import java.util.List;

public class MenuForm {
	
	private Integer id;
	
	private String name;
	
	private Double basePrice;
	private Double salesPrice;
	private Double salesTax;
	private Double restaurantPrice;
	
	private String description;
	private String specialInstuctions;
	private Integer quantity;
	
	private List<SectionForm> sections;

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public Double getBasePrice() {
		return basePrice;
	}
	public void setBasePrice(Double basePrice) {
		this.basePrice = basePrice;
	}

	public Double getSalesPrice() {
		return salesPrice;
	}
	public void setSalesPrice(Double salesPrice) {
		this.salesPrice = salesPrice;
	}

	public Double getRestaurantPrice() {
		return restaurantPrice;
	}
	public void setRestaurantPrice(Double restaurantPrice) {
		this.restaurantPrice = restaurantPrice;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getSpecialInstuctions() {
		return specialInstuctions;
	}
	public void setSpecialInstuctions(String specialInstuctions) {
		this.specialInstuctions = specialInstuctions;
	}

	public List<SectionForm> getSections() {
		return sections;
	}
	public void setSections(List<SectionForm> sections) {
		this.sections = sections;
	}
	
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	public Double getSalesTax() {
		return salesTax;
	}
	public void setSalesTax(Double salesTax) {
		this.salesTax = salesTax;
	}	
	
	@Override
	public String toString() {
		return "MenuForm [id=" + id + ", name=" + name + ", basePrice=" + basePrice + ", salesPrice=" + salesPrice
				+ ", salesTax=" + salesTax + ", restaurantPrice=" + restaurantPrice + ", description=" + description
				+ ", specialInstuctions=" + specialInstuctions + ", quantity=" + quantity + ", sections=" + sections
				+ "]";
	}
}
