package com.corporate.delivery.forms;

import java.util.List;

public class OrderForm {
	
	// delivery details
	private String name;
	private String age;
	private Integer userId;
	private String phone;
	private String restEmail;
	
	private String time;
	private String currentDate;

	private String corpCenter;
	private String companyName;
	private String suiteNumber;
	
	private String deliveryAddress;
	private String deliveryCity;
	private String deliveryState;
	private Integer deliveryZip;
	
	private double deliveryCharge;
	
	public List<RestaurantForm> restaurantForms;
	//public List<OrderItemDesc> orderItemDescription;
	
	private String description;
	private String instructions;
	private String businessType;
	private String orderType;
	
	private String orderDate;
	private String orderTime;
	private Integer orderId;
	private Integer zipBusTypeMerchantId;
	private Integer restaurantId;
	
	// payment detail
	private String cardType;
	private Integer lastFourDigits;
	private String expDate;
	private String token;
	private String cardNumber;
	private String cardHolderName;
	private String cvc;
	private String billingAddress;
	private String billingCity;
	private String billingState;
	private Integer billingZip;
		
	//Order summary
	private double subTotalSales;
	private double taxSales;
	private double totalSales;
	private double totalBase;
	private double totalRestaurant;
	private double tip;
	
	//CouponUser
	private String couponType;
	private String couponCode;
	private double couponAmount;
	
	private String maxValidDate;
	private Integer maxNumberOfUsages;
	private Integer numberOfUsagesComplete;
	private Integer amountOffPerUsage;
	private Integer maxPercentageOffPerUsage;
	private Integer minOrderAmount;
	private Integer maxAmountOffPerUsage;
	private Integer zip;
			
	//OrderStatus
	private String newStatus;
	private String newDate;
	private String newTime;
	private String openStatus;
	private String openDate;
	private String openTime;
	private String ackStatus;
	private String ackDate;
	private String ackTime;
	private String ready;
	private String readyDate;
	private String readyTime;
	private String handover;
	private String handoverDate;
	private String handoverTime;
	private String delivered;
	private String deliveredDate;
	private String deliveredTime;
	
	private Boolean schedule;
	
	private Integer orderStatus;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	
	public Integer getUserId() {
		return userId;
	}

	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getCurrentDate() {
		return currentDate;
	}
	public void setCurrentDate(String currentDate) {
		this.currentDate = currentDate;
	}
	
	public String getDeliveryAddress() {
		return deliveryAddress;
	}
	public void setDeliveryAddress(String deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}
	public String getDeliveryCity() {
		return deliveryCity;
	}
	public void setDeliveryCity(String deliveryCity) {
		this.deliveryCity = deliveryCity;
	}
	public String getDeliveryState() {
		return deliveryState;
	}
	public void setDeliveryState(String deliveryState) {
		this.deliveryState = deliveryState;
	}
	public double getDeliveryCharge() {
		return deliveryCharge;
	}
	public void setDeliveryCharge(double deliveryCharge) {
		this.deliveryCharge = deliveryCharge;
	}
	public Integer getDeliveryZip() {
		return deliveryZip;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getInstructions() {
		return instructions;
	}
	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}
	public String getBusinessType() {
		return businessType;
	}
	public void setBusinessType(String businessType) {
		this.businessType = businessType;
	}
	public String getOrderType() {
		return orderType;
	}
	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}
	public String getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}
	public String getOrderTime() {
		return orderTime;
	}
	public void setOrderTime(String orderTime) {
		this.orderTime = orderTime;
	}
	public Integer getOrderId() {
		return orderId;
	}
	
	public Integer getZipBusTypeMerchantId() {
		return zipBusTypeMerchantId;
	}
	
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public Integer getLastFourDigits() {
		return lastFourDigits;
	}
	
	public String getExpDate() {
		return expDate;
	}
	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}
	public String getToken() {
		return token;
	}
	
	public String getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	public String getCardHolderName() {
		return cardHolderName;
	}
	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}
	public String getCvc() {
		return cvc;
	}
	public void setCvc(String cvc) {
		this.cvc = cvc;
	}
	public String getBillingAddress() {
		return billingAddress;
	}
	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}
	public String getBillingCity() {
		return billingCity;
	}
	public void setBillingCity(String billingCity) {
		this.billingCity = billingCity;
	}
	public String getBillingState() {
		return billingState;
	}
	public void setBillingState(String billingState) {
		this.billingState = billingState;
	}
	public Integer getBillingZip() {
		return billingZip;
	}
	public void setBillingZip(Integer billingZip) {
		this.billingZip = billingZip;
	}
	
	public double getSubTotalSales() {
		return subTotalSales;
	}
	public void setSubTotalSales(double subTotalSales) {
		this.subTotalSales = subTotalSales;
	}
	public double getTaxSales() {
		return taxSales;
	}
	public void setTaxSales(double taxSales) {
		this.taxSales = taxSales;
	}
	public double getTotalSales() {
		return totalSales;
	}
	public void setTotalSales(double totalSales) {
		this.totalSales = totalSales;
	}
	public double getTotalBase() {
		return totalBase;
	}
	public void setTotalBase(double totalBase) {
		this.totalBase = totalBase;
	}
	public double getTotalRestaurant() {
		return totalRestaurant;
	}
	public void setTotalRestaurant(double totalRestaurant) {
		this.totalRestaurant = totalRestaurant;
	}
	public double getTip() {
		return tip;
	}
	public void setTip(double tip) {
		this.tip = tip;
	}
	
	public String getCouponType() {
		return couponType;
	}
	public void setCouponType(String couponType) {
		this.couponType = couponType;
	}
	public String getCouponCode() {
		return couponCode;
	}
	public void setCouponCode(String couponCode) {
		this.couponCode = couponCode;
	}
	public String getMaxValidDate() {
		return maxValidDate;
	}
	public void setMaxValidDate(String maxValidDate) {
		this.maxValidDate = maxValidDate;
	}
	public Integer getMaxNumberOfUsages() {
		return maxNumberOfUsages;
	}
	public void setMaxNumberOfUsages(Integer maxNumberOfUsages) {
		this.maxNumberOfUsages = maxNumberOfUsages;
	}
	public Integer getNumberOfUsagesComplete() {
		return numberOfUsagesComplete;
	}
	public void setNumberOfUsagesComplete(Integer numberOfUsagesComplete) {
		this.numberOfUsagesComplete = numberOfUsagesComplete;
	}
	public Integer getAmountOffPerUsage() {
		return amountOffPerUsage;
	}
	public void setAmountOffPerUsage(Integer amountOffPerUsage) {
		this.amountOffPerUsage = amountOffPerUsage;
	}
	public Integer getMaxPercentageOffPerUsage() {
		return maxPercentageOffPerUsage;
	}
	public void setMaxPercentageOffPerUsage(Integer maxPercentageOffPerUsage) {
		this.maxPercentageOffPerUsage = maxPercentageOffPerUsage;
	}
	public Integer getMinOrderAmount() {
		return minOrderAmount;
	}
	public void setMinOrderAmount(Integer minOrderAmount) {
		this.minOrderAmount = minOrderAmount;
	}
	public Integer getMaxAmountOffPerUsage() {
		return maxAmountOffPerUsage;
	}
	public void setMaxAmountOffPerUsage(Integer maxAmountOffPerUsage) {
		this.maxAmountOffPerUsage = maxAmountOffPerUsage;
	}
	public String getNewStatus() {
		return newStatus;
	}
	public void setNewStatus(String newStatus) {
		this.newStatus = newStatus;
	}
	public String getNewDate() {
		return newDate;
	}
	public void setNewDate(String newDate) {
		this.newDate = newDate;
	}
	public String getNewTime() {
		return newTime;
	}
	public void setNewTime(String newTime) {
		this.newTime = newTime;
	}
	public String getOpenStatus() {
		return openStatus;
	}
	public void setOpenStatus(String openStatus) {
		this.openStatus = openStatus;
	}
	public String getOpenDate() {
		return openDate;
	}
	public void setOpenDate(String openDate) {
		this.openDate = openDate;
	}
	public String getOpenTime() {
		return openTime;
	}
	public void setOpenTime(String openTime) {
		this.openTime = openTime;
	}
	public String getAckStatus() {
		return ackStatus;
	}
	public void setAckStatus(String ackStatus) {
		this.ackStatus = ackStatus;
	}
	public String getAckDate() {
		return ackDate;
	}
	public void setAckDate(String ackDate) {
		this.ackDate = ackDate;
	}
	public String getAckTime() {
		return ackTime;
	}
	public void setAckTime(String ackTime) {
		this.ackTime = ackTime;
	}
	public String getReady() {
		return ready;
	}
	public void setReady(String ready) {
		this.ready = ready;
	}
	public String getReadyDate() {
		return readyDate;
	}
	public void setReadyDate(String readyDate) {
		this.readyDate = readyDate;
	}
	public String getReadyTime() {
		return readyTime;
	}
	public void setReadyTime(String readyTime) {
		this.readyTime = readyTime;
	}
	public String getHandover() {
		return handover;
	}
	public void setHandover(String handover) {
		this.handover = handover;
	}
	public String getHandoverDate() {
		return handoverDate;
	}
	public void setHandoverDate(String handoverDate) {
		this.handoverDate = handoverDate;
	}
	public String getHandoverTime() {
		return handoverTime;
	}
	public void setHandoverTime(String handoverTime) {
		this.handoverTime = handoverTime;
	}
	public String getDelivered() {
		return delivered;
	}
	public void setDelivered(String delivered) {
		this.delivered = delivered;
	}
	public String getDeliveredDate() {
		return deliveredDate;
	}
	public void setDeliveredDate(String deliveredDate) {
		this.deliveredDate = deliveredDate;
	}
	public String getDeliveredTime() {
		return deliveredTime;
	}
	public void setDeliveredTime(String deliveredTime) {
		this.deliveredTime = deliveredTime;
	}
	public Integer getZip() {
		return zip;
	}
	public void setZip(Integer zip) {
		this.zip = zip;
	}
	public double getCouponAmount() {
		return couponAmount;
	}
	public void setCouponAmount(double couponAmount) {
		this.couponAmount = couponAmount;
	}
	
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public void setDeliveryZip(Integer deliveryZip) {
		this.deliveryZip = deliveryZip;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	public void setZipBusTypeMerchantId(Integer zipBusTypeMerchantId) {
		this.zipBusTypeMerchantId = zipBusTypeMerchantId;
	}
	public void setLastFourDigits(Integer lastFourDigits) {
		this.lastFourDigits = lastFourDigits;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Integer getRestaurantId() {
		return restaurantId;
	}
	public void setRestaurantId(Integer restaurantId) {
		this.restaurantId = restaurantId;
	}
	
	public List<RestaurantForm> getRestaurantForms() {
		return restaurantForms;
	}
	public void setRestaurantForms(List<RestaurantForm> restaurantForms) {
		this.restaurantForms = restaurantForms;
	}
	public String getCorpCenter() {
		return corpCenter;
	}
	public void setCorpCenter(String corpCenter) {
		this.corpCenter = corpCenter;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getSuiteNumber() {
		return suiteNumber;
	}
	public void setSuiteNumber(String suiteNumber) {
		this.suiteNumber = suiteNumber;
	}
	public String getRestEmail() {
		return restEmail;
	}
	public void setRestEmail(String restEmail) {
		this.restEmail = restEmail;
	}
	
	public Boolean getSchedule() {
		return schedule;
	}
	public void setSchedule(Boolean schedule) {
		this.schedule = schedule;
	}
	
	public Integer getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(Integer orderStatus) {
		this.orderStatus = orderStatus;
	}
	
}
