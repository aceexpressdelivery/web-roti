package com.corporate.delivery.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.corporate.deliver.utils.Utils;
import com.corporate.delivery.exception.CreditCardException;
import com.corporate.delivery.forms.MenuForm;
import com.corporate.delivery.forms.OrderForm;
import com.corporate.delivery.forms.RestaurantForm;
import com.corporate.delivery.model.CouponUser;
import com.corporate.delivery.model.DateAndTime;
import com.corporate.delivery.model.JsonResponse;
import com.corporate.delivery.model.Menu;
import com.corporate.delivery.model.OrderRestaurantMenu;
import com.corporate.delivery.model.RestaurantMenuDto;
import com.corporate.delivery.model.ZipCorpCenter;
import com.corporate.delivery.model.order.OrderAddresses;
import com.corporate.delivery.model.order.OrderHeader;
import com.corporate.delivery.model.order.OrderProcess;
import com.corporate.delivery.model.order.OrderRestaurant;
import com.corporate.delivery.model.order.OrderStatus;
import com.corporate.delivery.model.order.OrderStatusEnum;
import com.corporate.delivery.service.CouponUserService;
import com.corporate.delivery.service.OrderHeaderService;
import com.corporate.delivery.service.RestaurantMenuService;
import com.corporate.delivery.service.ZipCorpCenterService;
import com.corporate.delivery.service.order.OrderService;
import com.twilio.type.PhoneNumber;

@Controller
@RequestMapping("/orderSchedule")
public class OrderScheduleController {

	@Autowired
	RestaurantMenuService restaurantMenuService;

	@Autowired
	ZipCorpCenterService zipCorpCenterService;

	@Autowired
	MessageSource messageSource;

	@Autowired
	CouponUserService couponUserService;

	@Autowired
	OrderService orderservice;

	@Autowired
	OrderHeaderService orderHeaderService;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String getMain(ModelMap model) {
		model.addAttribute("message1", messageSource.getMessage("delivery.time1", null, Locale.getDefault()));
		model.addAttribute("message2", messageSource.getMessage("delivery.time2", null, Locale.getDefault()));
		return "orderSchedule";
	}

	@RequestMapping(value = "/menus", method = RequestMethod.GET)
	public @ResponseBody List<Menu> getMenus(@RequestParam("id") String restId) {
		List<Menu> restRotiList = restaurantMenuService.getScheduleRestaurantMenus(Integer.parseInt(restId));
		return restRotiList;
	}

	@RequestMapping(value = "/zipcorpcenter", method = RequestMethod.GET)
	public @ResponseBody List<ZipCorpCenter> getZipCorpCenter(@RequestParam("corpZipCode") String corpZipCode) {
		List<ZipCorpCenter> zipCorpCenter = zipCorpCenterService
				.getZipCorpCenter(new Integer(Integer.parseInt(corpZipCode)));
		return zipCorpCenter;
	}

	@RequestMapping(value = "/scheduleOrder", method = RequestMethod.POST)
	public @ResponseBody JsonResponse processOrder(@RequestBody OrderForm orderForm) {
		String orderDate = orderForm.getOrderDate();

		String orderNumber = "";
		String[] dateList = orderDate.split(",");
		String[] orderNoList = new String[dateList.length];
		for (int i = 0; i < dateList.length; i++) {

			orderForm.setOrderDate(dateList[i]);

			System.out.println(Arrays.toString(dateList));
			System.out.println("....name se" + "nd is :" + orderForm.getOrderType());

			OrderHeader orderHeader = getOrderHeader(orderForm);
			OrderAddresses orderAddress = getOrderAddresses(orderForm);
			List<RestaurantMenuDto> orderRestaurantDtos = getOrderRestaurants(orderForm);
			// List<OrderRestaurantMenu> orderRestaurantMenuList =
			// getOrdetRestaurantMenus(orderForm);//This needs to be implemented
			OrderStatus orderStatus = getOpenOrderStatus();

			OrderProcess orderProcess = new OrderProcess(orderHeader, orderRestaurantDtos, orderAddress, orderStatus);

			orderNumber = processsOrder(orderProcess);
			orderNoList[i] = orderNumber;
		}

		Utils.sendEmail("swapnildshelke@gmail.com", " Testing Mail",
				" Your Order Number is :" + Arrays.toString(orderNoList));

		JsonResponse jasonResponse = new JsonResponse();
		jasonResponse.setResult(Arrays.toString(orderNoList));
		// sendMessages(orderForm);
		return jasonResponse;
	}

	@RequestMapping(value = "/applyCoupon", method = RequestMethod.GET)
	public @ResponseBody JsonResponse applyCoupon(@RequestParam("userId") String userId,
			@RequestParam("zipcode") String zipCode, @RequestParam("couponcode") String couponCode,
			@RequestParam("subtotal") String subTotal) {
		String result = couponUserService.applyCoupon(userId, zipCode, couponCode, subTotal);
		JsonResponse jasonResponse = new JsonResponse();
		jasonResponse.setResult(result);
		return jasonResponse;
	}

	@RequestMapping(value = "/userScheduleOrders", method = RequestMethod.GET)
	public @ResponseBody List<OrderHeader> getUserOrderss(@RequestParam("userid") String userId) {
		return orderHeaderService.getOrderHeader(Integer.parseInt(userId));
	}

	private void sendMessages(OrderForm orderForm) {
		// SEND SMS messages to customer and restaurant
		List<PhoneNumber> phoneNumbers = new ArrayList<PhoneNumber>();
		PhoneNumber phoneNumber = new PhoneNumber(orderForm.getPhone());
		phoneNumbers.add(phoneNumber);
		Utils.sendMessages(phoneNumbers);
	}

	private String processsOrder(OrderProcess orderProcess) {
		String orderNumber = null;
		try {
			orderNumber = orderservice.processsOrder(orderProcess);
		} catch (CreditCardException e) {
			return "fail:Invalid Credit card";
		} catch (Exception e) {
			return "fail:Order failed";
		}
		return orderNumber;
	}

	private OrderHeader getOrderHeader(OrderForm orderForm) {
		OrderHeader orderHeader = new OrderHeader();

		try {
			SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
			Date date = dateFormat.parse(orderForm.getOrderDate());
			orderHeader.setOrderDate(date);
		} catch (ParseException e) {
			throw new RuntimeException("Error in formatting date");
		}

		orderHeader.setBusinessType(orderForm.getBusinessType());
		orderHeader.setCardType(orderForm.getCardType());
		orderHeader.setDeliveryAddress(orderForm.getDeliveryAddress());
		orderHeader.setDeliveryCharge(orderForm.getDeliveryCharge());
		orderHeader.setDeliveryCity(orderForm.getDeliveryCity());
		orderHeader.setDeliveryState(orderForm.getDeliveryState());
		orderHeader.setDeliveryZip(orderForm.getDeliveryZip());
		orderHeader.setExpDate(orderForm.getExpDate());
		orderHeader.setInstructions(orderForm.getInstructions());
		orderHeader.setLastFourDigits(orderForm.getLastFourDigits());
		orderHeader.setName(orderForm.getName());
		orderHeader.setOrderTime(orderForm.getOrderTime());
		orderHeader.setToken(orderForm.getToken());
		orderHeader.setSubTotalSales(orderForm.getSubTotalSales());
		orderHeader.setTaxSales(orderForm.getTaxSales());
		orderHeader.setTotalSales(orderForm.getTotalSales());
		orderHeader.setTotalBase(orderForm.getTotalBase());
		orderHeader.setTotalRestaurant(orderForm.getTotalRestaurant());
		orderHeader.setTip(orderForm.getTip());
		orderHeader.setUserId(orderForm.getUserId());
		orderHeader.setZipBustypeMerchantId(orderForm.getZipBusTypeMerchantId());
		orderHeader.setCouponCode(orderForm.getCouponCode());
		orderHeader.setCouponType(orderForm.getCouponCode());
		orderHeader.setCouponAmount(orderForm.getCouponAmount());

		orderHeader.setSchedule(orderForm.getSchedule());
		orderHeader.setOrderStatus(orderForm.getOrderStatus());

		return orderHeader;
	}

	private OrderAddresses getOrderAddresses(OrderForm orderForm) {
		OrderAddresses orderAddresses = new OrderAddresses();
		orderAddresses.setBillingAddress(orderForm.getBillingAddress());
		orderAddresses.setBillingCity(orderForm.getBillingCity());
		orderAddresses.setBillingState(orderForm.getBillingState());
		orderAddresses.setBillingZip(orderForm.getBillingZip());
		orderAddresses.setDeliveryAddress(orderForm.getDeliveryAddress());
		orderAddresses.setDeliveryCity(orderForm.getDeliveryCity());
		orderAddresses.setDeliveryState(orderForm.getDeliveryState());
		orderAddresses.setDeliveryZip(orderForm.getDeliveryZip());
		orderAddresses.setOrderId(orderForm.getOrderId());
		return orderAddresses;
	}

	private List<RestaurantMenuDto> getOrderRestaurants(OrderForm orderForm) {
		List<RestaurantMenuDto> restaurantMenuDtoList = new ArrayList<RestaurantMenuDto>();
		List<RestaurantForm> restaurantsForms = orderForm.getRestaurantForms();

		for (RestaurantForm restaurantForm : restaurantsForms) {
			OrderRestaurant orderRestaurant = new OrderRestaurant();
			orderRestaurant.setRestaurantId(new Integer(restaurantForm.getId()));
			orderRestaurant.setRestaurantName(restaurantForm.getName());
			orderRestaurant.setBaseRestaurantPrice(restaurantForm.getBaseRestaurantPrice());
			orderRestaurant.setRestaurantPrice(restaurantForm.getRestaurantPrice());
			orderRestaurant.setSaleRestaurantPrice(restaurantForm.getSalesRestaurantPrice());
			orderRestaurant.setSaleTax(restaurantForm.getSalesRestaurantTax());

			List<MenuForm> menuList = restaurantForm.getMenus();
			List<OrderRestaurantMenu> orderRestaurantMenus = new ArrayList<OrderRestaurantMenu>();

			for (MenuForm menuForm : menuList) {
				OrderRestaurantMenu orm = new OrderRestaurantMenu();

				// orm.setMenuId(menuForm.getId());
				orm.setQuantity(menuForm.getQuantity());
				orm.setBasePriceMenu(menuForm.getBasePrice());
				orm.setRestaurantPriceMenu(new Double(menuForm.getRestaurantPrice()));
				orm.setSalePriceMenu(new Double(menuForm.getSalesPrice()));
				orm.setSalePriceTax(menuForm.getSalesTax());
				orm.setMenuName(menuForm.getName());
				orm.setDescription(menuForm.getDescription());

				orderRestaurantMenus.add(orm);
			}
			RestaurantMenuDto restaurantMenuDto = new RestaurantMenuDto(orderRestaurant, orderRestaurantMenus);
			restaurantMenuDtoList.add(restaurantMenuDto);
		}
		return restaurantMenuDtoList;
	}

	private OrderStatus getOpenOrderStatus() {
		Date now = new Date();
		DateAndTime date = new DateAndTime();
		OrderStatus orderStatus = new OrderStatus();
		orderStatus.setNewDate(now);
		orderStatus.setNewStatus(OrderStatusEnum.OPEN.getValue());
		orderStatus.setNewTime(now);
		return orderStatus;
	}

	private CouponUser getcouponUser(OrderForm orderForm) {
		CouponUser couponUser = new CouponUser();
		return couponUser;
	}

}
