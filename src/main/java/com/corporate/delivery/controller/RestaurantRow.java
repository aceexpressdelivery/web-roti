package com.corporate.delivery.controller;

import org.apache.log4j.Logger;

import com.corporate.delivery.model.Restaurant;

public class RestaurantRow {
	
	 private static final Logger logger = Logger.getLogger(RestaurantRow.class);
	
	Restaurant reastaurantOne;
	Restaurant reastaurantSecond;
	
	public Restaurant getReastaurantOne() {
		return reastaurantOne;
	}
	public void setReastaurantOne(Restaurant reastaurantOne) {
		this.reastaurantOne = reastaurantOne;
	}
	public Restaurant getReastaurantSecond() {
		return reastaurantSecond;
	}
	public void setReastaurantSecond(Restaurant reastaurantSecond) {
		this.reastaurantSecond = reastaurantSecond;
	}
	

}
