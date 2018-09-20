package com.corporate.delivery.forms;

import org.springframework.beans.factory.annotation.Required;

public class SectionForm {
	
	private int id;
	private String name;
	private String value;
	
	public int getId() {
		return id;
	}
	
	@Required
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	@Required
	public void setName(String name) {
		this.name = name;
	}
	
	
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	

}
