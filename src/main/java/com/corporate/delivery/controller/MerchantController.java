package com.corporate.delivery.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.corporate.delivery.forms.MenuAdd;
import com.corporate.delivery.forms.MenuSectionForm;
import com.corporate.delivery.forms.RestaurantForm;
import com.corporate.delivery.model.JsonResponse;
import com.corporate.delivery.model.LoginType;
import com.corporate.delivery.model.Menu;
import com.corporate.delivery.model.MenuSection;
import com.corporate.delivery.model.Restaurant;
import com.corporate.delivery.model.User;
import com.corporate.delivery.model.order.OrderHeader;
import com.corporate.delivery.model.order.OrderRestaurant;
import com.corporate.delivery.service.LoginService;
import com.corporate.delivery.service.OrderHeaderService;
import com.corporate.delivery.service.OrderRestaurantMenuService;
import com.corporate.delivery.service.OrderRestaurantService;
import com.corporate.delivery.service.OrderTypesService;
import com.corporate.delivery.service.RestaurantMenuSectionItemsService;
import com.corporate.delivery.service.RestaurantMenuService;
import com.corporate.delivery.service.RestaurantService;
import com.corporate.delivery.service.ZipCorpCenterService;

@Controller
@RequestMapping("/merchants")
public class MerchantController {

	@Autowired
	RestaurantService restaurantService;
	
	@Autowired
	OrderHeaderService orderHeaderService;

	@Autowired
	RestaurantMenuService restaurantMenuService;

	@Autowired
	OrderTypesService orderTypesService;

	@Autowired
	MessageSource messageSource;

	@Autowired
	RestaurantMenuSectionItemsService restaurantMenuSectionItemsService;

	@Autowired
	ZipCorpCenterService zipCorpCenterService;

	@Autowired
	LoginService loginService;
	
	@Autowired
	OrderRestaurantService orderRestaurantService;
	
	@Autowired
	OrderRestaurantMenuService orderRestaurantMenuService;

	private static final Logger logger = Logger.getLogger(MerchantController.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String getMain(ModelMap model) {

		return "merchants";
	}

	@RequestMapping(value = "/autheticate", method = RequestMethod.GET)
	public @ResponseBody String autheticate(@RequestParam("username") String username,
			@RequestParam("password") String password) {

		// Check user name in database
		if (loginService.isUserNameExists(username, LoginType.USER.getValue())) {
			User user = loginService.getUser(username);
			if (!user.getPassword().equalsIgnoreCase(password)) {
				return "Password invalid";
			}
			return "success:" + user.getId();
		} else {
			return "User Name invalid";
		}
	}

	@RequestMapping(value = "/getRestaurant", method = RequestMethod.GET)
	public @ResponseBody Restaurant getRestaurant(@RequestParam("id") String restId) {
		Restaurant restaurant = restaurantService.findById(Integer.parseInt(restId));
		return restaurant;
	}

	@RequestMapping(value = "/restaurants", method = RequestMethod.GET)
	public @ResponseBody List<Restaurant> getRestaurants(@RequestParam("id") String zipBustypeMerchantId) {
		List<Restaurant> restaurants = restaurantService.getByZipcodeAndOrderType(Integer.parseInt(zipBustypeMerchantId));
		return restaurants;
	}
	
	@RequestMapping(value = "/orderHeader", method = RequestMethod.GET) 
	public @ResponseBody List<OrderHeader> getOrderHeaderAsOfToday(@RequestParam("id") String zipBustypeMerchantId){
		
		List<OrderHeader> orderHeader  = orderHeaderService.getMerchantOrRestaurantOrders(Integer.parseInt(zipBustypeMerchantId));
		return orderHeader;
	} 
	
	//Daily Summery Report
	@RequestMapping(value = "/orderHeaderBetweenDates", method = RequestMethod.GET) 
	public @ResponseBody List<OrderHeader> getOrderHeaderbetweendates(@RequestParam("id") String zipBustypeMerchantId,
			@RequestParam("fromDate") String fromdate,  @RequestParam("toDate") String todate){
		
		List<OrderHeader> orderHeader = orderHeaderService.getOrderHeaderDetail(Integer.parseInt(zipBustypeMerchantId), fromdate, todate);
		return orderHeader;
	} 
	
	
	@RequestMapping(value = "/orderHeaderReportBetweenDates", method = RequestMethod.GET) 
	public @ResponseBody  Map<Integer, List<OrderRestaurant>> getOrderHeaderReportBetweenDates(@RequestParam("id") String zipBustypeMerchantId,
			@RequestParam("fromDate") String fromdate,  @RequestParam("toDate") String todate){
		
		Map<Integer, List<OrderRestaurant>> orderRestaurantsMap = new HashMap<Integer, List<OrderRestaurant>>();
		List<OrderHeader> list = orderHeaderService.getOrderHeaderDetail(Integer.parseInt(zipBustypeMerchantId), fromdate, todate);
		
		if(list != null && !list.isEmpty()) {  
			for(OrderHeader orderHeader:list){
				List<OrderRestaurant> restaurants = orderRestaurantService.getOrderRestaurantDetail(orderHeader.getId());
				orderRestaurantsMap.put(orderHeader.getId(), restaurants);
			}
    	}
		
		return orderRestaurantsMap;
	} 
	
	/*
	@RequestMapping(value = "/orderHeaderReportBetweenDates", method = RequestMethod.GET) 
	public @ResponseBody  Map<Integer, List<OrderRestaurantMenu>> getOrderHeaderReportBetweenDates(@RequestParam("id") String zipBustypeMerchantId,
			@RequestParam("fromDate") String fromdate,  @RequestParam("toDate") String todate){
		
		Map<Integer, List<OrderRestaurantMenu>> orderRestaurantsMap = new HashMap<Integer, List<OrderRestaurantMenu>>();
		
		List<OrderHeader> orderHeaderlist = orderHeaderService.getOrderHeaderDetail(Integer.parseInt(zipBustypeMerchantId), fromdate, todate);
		
		if(orderHeaderlist != null && !orderHeaderlist.isEmpty()) { 
			
			for(OrderHeader orderHeader : orderHeaderlist){
				List<OrderRestaurant> orderRestaurantsList = orderRestaurantService.getOrderRestaurantDetail(orderHeader.getId());
				
				if(orderRestaurantsList != null && !orderRestaurantsList.isEmpty()){
					
					
					for(OrderRestaurant orderRestaurant : orderRestaurantsList){
						
						List<OrderRestaurantMenu> orderRestaurantMenuList = orderRestaurantMenuService.getOrderRestaurantMenuDetail(orderRestaurant.getId());
						orderRestaurantsMap.put(orderHeader.getId(), orderRestaurantMenuList);
					}
				}
			}
    	}
		
		return orderRestaurantsMap;
	}*/
	
	
	/*
	@RequestMapping(value = "/restaurants", method = RequestMethod.GET)
	public @ResponseBody List<RestaurantForm> getRestaurants(@RequestParam("id") String zipBustypeMerchantId) {

		List<Restaurant> restaurants = restaurantService.getByZipcodeAndOrderType(Integer.parseInt(zipBustypeMerchantId));
		List<RestaurantForm> restaurantform = populateRestaurantForm(restaurants);
		return restaurantform;
	}
	 */

	/*@RequestMapping(value = "/menus", method = RequestMethod.GET)
	public @ResponseBody List<Menu> getMenus(@RequestParam("id") String restId) {
		List<Menu> list = restaurantMenuService.getRestaurantMenus(Integer.parseInt(restId));
		return list;
	}*/

	@RequestMapping(value = "/sections", method = RequestMethod.GET)
	public @ResponseBody List<MenuSectionForm> getMenuSections(@RequestParam("id") String menuId) {
		
		List<MenuSection> list = restaurantMenuSectionItemsService.getMenuSections(Integer.parseInt(menuId));
		List<MenuSectionForm> result = populateMenuSectionForm(list);
		
		return result;
	}
	
	private List<MenuSectionForm> populateMenuSectionForm(List<MenuSection> list) {
		List<MenuSectionForm> result =  new ArrayList<MenuSectionForm>();
		
		for(MenuSection menuSection : list){
			MenuSectionForm menuSectionForm = new MenuSectionForm();
			
			menuSectionForm.setId(menuSection.getId());
			menuSectionForm.setMenuId(menuSection.getMenuId());
			menuSectionForm.setSelectSection(menuSection.getType());
			menuSectionForm.setSectionText(menuSection.getName());
			menuSectionForm.setSectionText(menuSection.getDescription());
			menuSectionForm.setOption1(menuSection.getOption1());
			menuSectionForm.setOption2(menuSection.getOption2());			
			menuSectionForm.setOption3(menuSection.getOption3());	
			menuSectionForm.setOption4(menuSection.getOption4());	
			menuSectionForm.setOption5(menuSection.getOption5());	
			menuSectionForm.setOption6(menuSection.getOption6());	
			
			String price = (menuSection.getPrice1() != null ? Double.toString(menuSection.getPrice1()) : null);
			menuSectionForm.setPrice1(price);
			
			price = (menuSection.getPrice2() != null ? Double.toString(menuSection.getPrice2()) : null);
			menuSectionForm.setPrice2(price);
			
			price = (menuSection.getPrice3() != null ? Double.toString(menuSection.getPrice3()) : null);
			menuSectionForm.setPrice3(price);
			
			price = (menuSection.getPrice4() != null ? Double.toString(menuSection.getPrice4()) : null);
			menuSectionForm.setPrice4(price);
			
			price = (menuSection.getPrice5() != null ? Double.toString(menuSection.getPrice5()) : null);
			menuSectionForm.setPrice5(price);
			
			price = (menuSection.getPrice6() != null ? Double.toString(menuSection.getPrice6()) : null);
			menuSectionForm.setPrice6(price);
						
			result.add(menuSectionForm);
		}
		return result;
	}
	
	

	// CRUD operations for restaurant	
	@RequestMapping(value = "/addRestaurant", method = RequestMethod.POST)
	public @ResponseBody String addRestaurant(@RequestBody RestaurantForm restaurantForm) {
		
		Restaurant restaurant = populateRestaurant(restaurantForm);
		restaurantService.insert(restaurant);
		return  Integer.toString(restaurant.getId()); 
	}
	
	/*@RequestMapping(value = "/addRestaurant", method = RequestMethod.POST)
	public @ResponseBody JsonResponse addRestaurant(@RequestBody RestaurantForm restaurantForm) {

		Restaurant restaurant = populateRestaurant(restaurantForm);
		restaurantService.insert(restaurant);
		return   new JsonResponse();
	}*/

	@RequestMapping(value = "/updateRestaurant", method = RequestMethod.POST)
	public @ResponseBody JsonResponse updateRestaurant(@RequestBody RestaurantForm restaurantForm) {

		Restaurant restaurant = populateRestaurant(restaurantForm);
		restaurantService.updateRestaurant(restaurant);
		return new JsonResponse();
	}
	
	@RequestMapping(value = "/deleteRestaurant", method = RequestMethod.GET)
	public @ResponseBody void deleteRestaurant(@RequestParam("id") Integer restaurantId) {

		restaurantService.deleteRestaurant(restaurantId);
	}

	// CRUD operations for menus
	@RequestMapping(value = "/addMenu", method = RequestMethod.POST)
	public @ResponseBody String addMenu(@RequestBody MenuAdd menuAdd) {
		
		Menu menu = populateMenu(menuAdd);
		restaurantMenuService.insertMenu(menu);
		return Integer.toString(menu.getId());
	}
	
	/*@RequestMapping(value = "/addMenu", method = RequestMethod.POST)
	public @ResponseBody JsonResponse addMenu(@RequestBody MenuAdd menuAdd) {
		Menu menu = populateMenu(menuAdd);
		restaurantMenuService.insertMenu(menu);
		return new JsonResponse();
	}*/

	@RequestMapping(value = "/updateMenu", method = RequestMethod.POST)
	public @ResponseBody JsonResponse updateMenu(@RequestBody MenuAdd menuAdd) {

		System.out.println("...");
		Menu menu = populateMenu(menuAdd);
		restaurantMenuService.updateRestaurantMenus(menu);
		return new JsonResponse();
	}

	@RequestMapping(value = "/deleteMenu", method = RequestMethod.GET)
	public @ResponseBody void deleteMenu(@RequestParam("id") Integer menuId) {

		restaurantMenuService.deleteRestaurantMenus(menuId);
	}

	// CRUD operations for sections
	@RequestMapping(value = "/addMenuSection", method = RequestMethod.POST)
	public @ResponseBody String addMenuSection(@RequestBody MenuSectionForm menuSectionForm) {
		MenuSection menuSection = populateMenuSection(menuSectionForm);
		restaurantMenuSectionItemsService.insert(menuSection);
		return Integer.toString(menuSection.getId());
	}
	
	/*@RequestMapping(value = "/addMenuSection", method = RequestMethod.POST)
	public @ResponseBody JsonResponse addMenuSection(@RequestBody MenuSectionForm menuSectionForm) {
		MenuSection menuSection = populateMenuSection(menuSectionForm);
		restaurantMenuSectionItemsService.insert(menuSection);
		return new JsonResponse();
	}*/
	
	
	@RequestMapping(value = "/updateMenuSection", method = RequestMethod.POST)
	public @ResponseBody JsonResponse updateMenuSection(@RequestBody MenuSectionForm menuSectionForm) {
		
			MenuSection menuSection = populateMenuSection(menuSectionForm);
			restaurantMenuSectionItemsService.updateMenuSections(menuSection); 
			return new JsonResponse();
	}

	@RequestMapping(value = "/deleteMenuSection", method = RequestMethod.GET)
	public @ResponseBody void deleteMenuSection(@RequestParam("id") Integer  menuSectionId) {

		restaurantMenuSectionItemsService.deleteMenuSection(menuSectionId);
	}

	/*private List<RestaurantForm> populateRestaurantForm(List<Restaurant> restaurants) {
		List<RestaurantForm> result =new ArrayList<RestaurantForm>();
		
		for(Restaurant rest : restaurants){
			RestaurantForm restaurantForm = new RestaurantForm();
		
			restaurantForm.setId(rest.getId());
			restaurantForm.setName(rest.getName());
			restaurantForm.setAddress(rest.getAddress());
			restaurantForm.setCity(rest.getCity());
			restaurantForm.setState(rest.getState());
			
			restaurantForm.setZip(rest.getZip());
			
			restaurantForm.setImage(rest.getImage());
			restaurantForm.setZipBustypeMerchantId(rest.getZipBustypeMerchantId());
			restaurantForm.setTagLine(rest.getTagLine());
			restaurantForm.setOpencloseTime(rest.getOpencloseTime());
			restaurantForm.setTimeRange(rest.getTimeRange());
			restaurantForm.setPricelevel(rest.getPricelevel());
			
			result.add(restaurantForm);
		}
		return result;
	}
	*/
	
	private Restaurant populateRestaurant(RestaurantForm restaurantForm) {
		Restaurant restaurant = new Restaurant();
		
		restaurant.setId(restaurantForm.getId());
		restaurant.setName(restaurantForm.getName());
		
		restaurant.setManagerName(restaurantForm.getManagerName());
		restaurant.setEmail(restaurantForm.getRestEmail());
		restaurant.setPhone(restaurantForm.getRestPhone());
		
		restaurant.setAddress(restaurantForm.getAddress());
		
		restaurant.setCity(restaurantForm.getCity());
		
		restaurant.setState(restaurantForm.getState());
		restaurant.setZip(restaurantForm.getZip());
		
		restaurant.setImage(restaurantForm.getImage());
		restaurant.setTagLine(restaurantForm.getTagLine());
		restaurant.setTimeRange(restaurantForm.getTimeRange());
		restaurant.setOpencloseTime(restaurantForm.getOpencloseTime());
		restaurant.setPricelevel(restaurantForm.getPricelevel());
		restaurant.setZipBustypeMerchantId(Integer.parseInt(restaurantForm.getZipBustypeMerchantId()));
		
		restaurant.setContractPercent(Double.parseDouble(restaurantForm.getContractPercent()));
		
		//restaurant.setActive(restaurantForm.getActive());
		
		//restaurant.setZipBustypeMerchantId(Integer.parseInt(restaurantForm.getMerchantId()));
		//restaurant.setZipBustypeMerchantId(1);
		return restaurant;
	}

	private Menu populateMenu(MenuAdd menuAdd) {
		Menu menu = new Menu();
		menu.setId(menuAdd.getId());
		menu.setRestaurantBustypeId(menuAdd.getRestaurantBustypeId());
		menu.setGroupNumber(menuAdd.getGroupNumber());
		menu.setGroupMenuNumber(menuAdd.getGroupMenuNumber());
		menu.setName(menuAdd.getName());
		menu.setDescription(menuAdd.getDescription());
		menu.setMenuImage(menuAdd.getMenuImage());
		
		menu.setBasePrice(Double.parseDouble(menuAdd.getBasePrice()));
		menu.setSalesPrice(Double.parseDouble(menuAdd.getSalesPrice()));
		menu.setRestaurantPrice(Double.parseDouble(menuAdd.getRestaurantPrice()));
		
		//menu.setPrice(menuAdd.getPrice());
		menu.setActive(menuAdd.getActive());
		
		return menu;
	}
	
	private MenuSection populateMenuSection(MenuSectionForm menuSectionForm) {
		MenuSection menuSection = new MenuSection();
		
		menuSection.setId(menuSectionForm.getId());
		menuSection.setDescription(menuSectionForm.getSectionText());
		menuSection.setMenuId(menuSectionForm.getMenuId());
		menuSection.setType(menuSectionForm.getSelectSection());
		menuSection.setName(menuSectionForm.getSectionText());
		
		if(menuSectionForm.getOption1() != null && !menuSectionForm.getOption1().isEmpty()){
			menuSection.setOption1(menuSectionForm.getOption1());
		}
		if(menuSectionForm.getOption2() != null && !menuSectionForm.getOption2().isEmpty()){
			menuSection.setOption2(menuSectionForm.getOption2());
		}
		
		if(menuSectionForm.getOption3() != null && !menuSectionForm.getOption3().isEmpty()){
			menuSection.setOption3(menuSectionForm.getOption3());
		}
		
		if(menuSectionForm.getOption4() != null && !menuSectionForm.getOption4().isEmpty()){
			menuSection.setOption4(menuSectionForm.getOption4());
		}
		
		if(menuSectionForm.getOption5() != null && !menuSectionForm.getOption5().isEmpty()){
			menuSection.setOption5(menuSectionForm.getOption5());
		}
		
		if(menuSectionForm.getOption6() != null && !menuSectionForm.getOption6().isEmpty()){
			menuSection.setOption6(menuSectionForm.getOption6());
		}
	
	
		if(menuSectionForm.getPrice1() != null && !menuSectionForm.getPrice1().isEmpty()) {
			menuSection.setPrice1(Double.parseDouble(menuSectionForm.getPrice1()));
		}
		
		if(menuSectionForm.getPrice2() != null && !menuSectionForm.getPrice2().isEmpty()){
			menuSection.setPrice2(Double.parseDouble(menuSectionForm.getPrice2()));
		}
		
		if(menuSectionForm.getPrice3() != null && !menuSectionForm.getPrice3().isEmpty()){
			menuSection.setPrice3(Double.parseDouble(menuSectionForm.getPrice3()));
		}
		
		if(menuSectionForm.getPrice4() != null && !menuSectionForm.getPrice4().isEmpty()){
			menuSection.setPrice4(Double.parseDouble(menuSectionForm.getPrice4()));
		}
		
		if(menuSectionForm.getPrice5() != null && !menuSectionForm.getPrice5().isEmpty()){
			menuSection.setPrice5(Double.parseDouble(menuSectionForm.getPrice5()));
		}
		
		if(menuSectionForm.getPrice6() != null && !menuSectionForm.getPrice6().isEmpty()){
			menuSection.setPrice6(Double.parseDouble(menuSectionForm.getPrice6()));
		}

		return menuSection;
	}
}