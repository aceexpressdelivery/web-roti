package com.corporate.delivery.forms;

public class MenuAdd {

	private Integer id;	 
	private Integer restaurantBustypeId;	
	private Integer groupNumber;
	private String groupName;
	private Integer groupMenuNumber;
	private String name;	 
	private String description;	
	private String menuImage;	 
	private Integer price;
	
	private String basePrice;
	private String salesPrice;
	private String restaurantPrice;

	private Boolean active;
	
	private Boolean mon;	
	
	private Boolean tue;	
	private Boolean wed;	
	private Boolean thu;	
	private Boolean fri;	
	private Boolean sat;	
	private Boolean sun;
	
	private Boolean schedule;	
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getRestaurantBustypeId() {
		return restaurantBustypeId;
	}
	public void setRestaurantBustypeId(Integer restaurantBustypeId) {
		this.restaurantBustypeId = restaurantBustypeId;
	}
	public Integer getGroupNumber() {
		return groupNumber;
	}
	public void setGroupNumber(Integer groupNumber) {
		this.groupNumber = groupNumber;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public Integer getGroupMenuNumber() {
		return groupMenuNumber;
	}
	public void setGroupMenuNumber(Integer groupMenuNumber) {
		this.groupMenuNumber = groupMenuNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getMenuImage() {
		return menuImage;
	}
	public void setMenuImage(String menuImage) {
		this.menuImage = menuImage;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public String getBasePrice() {
		return basePrice;
	}
	public void setBasePrice(String basePrice) {
		this.basePrice = basePrice;
	}
	public String getSalesPrice() {
		return salesPrice;
	}
	public void setSalesPrice(String salesPrice) {
		this.salesPrice = salesPrice;
	}
	public String getRestaurantPrice() {
		return restaurantPrice;
	}
	public void setRestaurantPrice(String restaurantPrice) {
		this.restaurantPrice = restaurantPrice;
	}
	
	public Boolean getMon() {
		return mon;
	}
	public void setMon(Boolean mon) {
		this.mon = mon;
	}
	public Boolean getTue() {
		return tue;
	}
	public void setTue(Boolean tue) {
		this.tue = tue;
	}
	public Boolean getWed() {
		return wed;
	}
	public void setWed(Boolean wed) {
		this.wed = wed;
	}
	public Boolean getThu() {
		return thu;
	}
	public void setThu(Boolean thu) {
		this.thu = thu;
	}
	public Boolean getFri() {
		return fri;
	}
	public void setFri(Boolean fri) {
		this.fri = fri;
	}
	public Boolean getSat() {
		return sat;
	}
	public void setSat(Boolean sat) {
		this.sat = sat;
	}
	public Boolean getSun() {
		return sun;
	}
	public void setSun(Boolean sun) {
		this.sun = sun;
	}
	public Boolean getSchedule() {
		return schedule;
	}
	public void setSchedule(Boolean schedule) {
		this.schedule = schedule;
	}
	
}
