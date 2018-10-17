package com.corporate.delivery.forms;

import java.util.List;

public class RestaurantForm {
	
	private Integer id;
	
	private String zipBustypeMerchantId;
	
	private String name;
	private String managerName;
	private String restEmail;
	private String restPhone;
	
	private String address;
	private String city;
	private String state;
	private String zip;
	
	private String image;
	private String tagLine;
	private String opencloseTime;
	private String timeRange;
	private String pricelevel;
	
	
	private String contractPercent;
	
	private double baseRestaurantPrice;
	private double restaurantPrice;
	private double salesRestaurantPrice;
	private double salesRestaurantTax;

	//private Boolean active;
	
	public List<MenuForm> menus;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public List<MenuForm> getMenus() {
		return menus;
	}
	public void setMenus(List<MenuForm> menus) {
		this.menus = menus;
	}
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getTagLine() {
		return tagLine;
	}
	public void setTagLine(String tagLine) {
		this.tagLine = tagLine;
	}
	public String getTimeRange() {
		return timeRange;
	}
	public void setTimeRange(String timeRange) {
		this.timeRange = timeRange;
	}
	public String getOpencloseTime() {
		return opencloseTime;
	}
	public void setOpencloseTime(String opencloseTime) {
		this.opencloseTime = opencloseTime;
	}
	public String getPricelevel() {
		return pricelevel;
	}
	public void setPricelevel(String pricelevel) {
		this.pricelevel = pricelevel;
	}
	
	public String getRestEmail() {
		return restEmail;
	}
	public void setRestEmail(String restEmail) {
		this.restEmail = restEmail;
	}
	public String getRestPhone() {
		return restPhone;
	}
	public void setRestPhone(String restPhone) {
		this.restPhone = restPhone;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getZipBustypeMerchantId() {
		return zipBustypeMerchantId;
	}
	public void setZipBustypeMerchantId(String zipBustypeMerchantId) {
		this.zipBustypeMerchantId = zipBustypeMerchantId;
	}
	
	public String getContractPercent() {
		return contractPercent;
	}
	public void setContractPercent(String contractPercent) {
		this.contractPercent = contractPercent;
	}
	public double getSalesRestaurantPrice() {
		return salesRestaurantPrice;
	}
	public void setSalesRestaurantPrice(double salesRestaurantPrice) {
		this.salesRestaurantPrice = salesRestaurantPrice;
	}
	public double getSalesRestaurantTax() {
		return salesRestaurantTax;
	}
	public void setSalesRestaurantTax(double salesRestaurantTax) {
		this.salesRestaurantTax = salesRestaurantTax;
	}
	public double getRestaurantPrice() {
		return restaurantPrice;
	}
	public void setRestaurantPrice(double restaurantPrice) {
		this.restaurantPrice = restaurantPrice;
	}
	public double getBaseRestaurantPrice() {
		return baseRestaurantPrice;
	}
	public void setBaseRestaurantPrice(double baseRestaurantPrice) {
		this.baseRestaurantPrice = baseRestaurantPrice;
	}
	public String getManagerName() {
		return managerName;
	}
	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	/*public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}*/
	
	@Override
	public String toString() {
		return "RestaurantForm [id=" + id + ", zipBustypeMerchantId=" + zipBustypeMerchantId + ", name=" + name
				+ ", managerName=" + managerName + ", restEmail=" + restEmail + ", restPhone=" + restPhone
				+ ", address=" + address + ", city=" + city + ", state=" + state + ", zip=" + zip + ", image=" + image
				+ ", tagLine=" + tagLine + ", opencloseTime=" + opencloseTime + ", timeRange=" + timeRange
				+ ", pricelevel=" + pricelevel + ", contractPercent=" + contractPercent + ", baseRestaurantPrice="
				+ baseRestaurantPrice + ", restaurantPrice=" + restaurantPrice + ", salesRestaurantPrice="
				+ salesRestaurantPrice + ", salesRestaurantTax=" + salesRestaurantTax + ", menus=" + menus + "]";
	}
	

}
