package com.corporate.delivery.controller;
 
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.corporate.deliver.utils.Utils;
import com.corporate.delivery.forms.MenuSectionForm;
import com.corporate.delivery.model.Menu;
import com.corporate.delivery.model.MenuSection;
import com.corporate.delivery.model.Restaurant;
import com.corporate.delivery.model.ZipBusTypeMerchant;
import com.corporate.delivery.model.ZipCorpCenter;
import com.corporate.delivery.service.OrderTypesService;
import com.corporate.delivery.service.RestaurantMenuSectionItemsService;
import com.corporate.delivery.service.RestaurantMenuService;
import com.corporate.delivery.service.RestaurantService;
import com.corporate.delivery.service.ZipCorpCenterService;
import com.google.gson.Gson;
 
@Controller
@RequestMapping("/rests")
public class RestaurantController {
 
    @Autowired
    RestaurantService restaurantService;
    
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
 
    private static final Logger logger = Logger.getLogger(RestaurantController.class);
    
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getMain(ModelMap model) {
    	return "restaurants";
    }
  
    @RequestMapping(value = "/restaurantsWithdateAndTime", method = RequestMethod.GET)
    public  @ResponseBody List<Restaurant>  getRestaurantsWithDateAndTime( 	@RequestParam("zipBustypeMerchantId") String zipBustypeMerchantId ,
    																		@RequestParam("date") String dateValue, 
    																		@RequestParam("time") String time, 
    																		@RequestParam("orderType") String orderType) {
    	Date date = formatDate(dateValue);
    	Integer zipid = Integer.getInteger(zipBustypeMerchantId);
    	List<Restaurant> restaurants = restaurantService.getByTime(zipid, time);   
    	for(Restaurant Restaurant : restaurants) {
		   
    	}
 	    return restaurants;
    }
    
    @RequestMapping(value = "/restaurants", method = RequestMethod.GET)
    public  @ResponseBody List<Restaurant>  getRestaurants( @RequestParam("id") String zipBustypeMerchantId) {
       	List<Restaurant> restaurants = restaurantService.getByZipcodeAndOrderType(new Integer(Integer.parseInt(zipBustypeMerchantId)));
       	return restaurants;
    }
    
    @RequestMapping(value = "/restaurantsInZip", method = RequestMethod.GET)
    public  @ResponseBody Map<Integer, List<Restaurant>>  getRestaurantsWithZipBustypeMerchantId(	@RequestParam("city") String city,
    																								@RequestParam("state") String state, 
    																								@RequestParam("zipcode") String zipcode) {
    	
    	Map<Integer, List<Restaurant>> restaurantsMap = new HashMap<Integer, List<Restaurant>>();
    	List<ZipBusTypeMerchant>  list = orderTypesService.getOrderTypes(zipcode);
    	
    	if(list != null && !list.isEmpty()) {
    		ZipBusTypeMerchant zipBusTypeMerchant = list.get(0);
	       	List<Restaurant> restaurants = restaurantService.getByZipcodeAndOrderType(zipBusTypeMerchant.getId());
	       	restaurantsMap.put(zipBusTypeMerchant.getId(), restaurants);
    	}
       	return restaurantsMap;
    }
    
    
    @RequestMapping(value = "/ordertypes", method = RequestMethod.GET)
    public  @ResponseBody List<ZipBusTypeMerchant>  getOrderTypes( 	@RequestParam("city") String city, 
    																@RequestParam("state") String state, 
    																@RequestParam("zipcode") String zipcode) {
 	    
    	List<ZipBusTypeMerchant>  list = orderTypesService.getOrderTypes(zipcode);
    	return list;  	
    }
    
    @RequestMapping(value = "/menus", method = RequestMethod.GET)
    public  @ResponseBody List<Menu>  getMenus( @RequestParam("id") String restId) {
    	
	    List<Menu>  list = restaurantMenuService.getRestaurantMenus(Integer.parseInt(restId));
   		return list;
    }
    
    /*@RequestMapping(value = "/sections", method = RequestMethod.POST)
   	public void menuSectionProcess(@RequestBody MenuSection  menuSection){
	   
	   menuSection.getDescription();
	   menuSection.getId();
	   menuSection.getMenuId();
	   menuSection.getMenuItems();
	   menuSection.getName();
	   menuSection.getType();
	   
	   restaurantMenuSectionItemsService.insert(menuSection);
   }*/
    
    private Date formatDate(String dateValue) {
    	SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
    	Date date = null;
	   
    	try {
    		date = formatter.parse(dateValue);
    	}catch (ParseException e) {
		   throw new RuntimeException("Invalid date passed. Date parse exception");
    	}
	   
    	return date;
    }
   
    @RequestMapping(value = "/sections", method = RequestMethod.GET)
    public  @ResponseBody List<MenuSectionForm>  getMenuSections( @RequestParam("id") String menuId) {
    	
    	List<MenuSection>  list = restaurantMenuSectionItemsService.getMenuSections(Integer.parseInt(menuId));
    	List<MenuSectionForm> result = populateMenuSectionForm(list);
		
		Gson gson = new Gson();
		
		// convert your list to json
		String jsonCartList = gson.toJson(result);
		
		 // print your generated json
		 System.out.println("jsonCartList: " + jsonCartList);
		
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
	
	
   
    @RequestMapping(value = "/zipcorpcenter", method = RequestMethod.GET)
    public  @ResponseBody List<ZipCorpCenter>   getZipCorpCenter( @RequestParam("corpZipCode") String corpZipCode) {
      	List<ZipCorpCenter> zipCorpCenter = zipCorpCenterService.getZipCorpCenter(new Integer(Integer.parseInt(corpZipCode)));
      	return zipCorpCenter;
    }
    
    public static void compareTimeJava8(String startTimeStr, String endTimeStr) {
 	   
		LocalDate today = LocalDate.now();
		String startTimeStrT = today + " " + startTimeStr;
		String endTimeStrT = today + " " + endTimeStr;

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

		try {

			LocalDateTime startTime = LocalDateTime.parse(startTimeStrT, formatter);
			LocalDateTime endTime = LocalDateTime.parse(endTimeStrT, formatter);
			Duration d = Duration.between(startTime, endTime);

			System.out.println("dur " + d.getSeconds());
			if (d.getSeconds() == 0)
				System.out.println("Both Start time and End Time are equal");
			else if (d.getSeconds() > 0)
				System.out.println("Start time is less than end time");
			else
				System.out.println("Start time is greater than end time");

		} catch (DateTimeParseException e) {
			System.out.println("Invalid Input" + e.getMessage());
			throw new RuntimeException("Date Time Parse Exception exception : " + e.getMessage());
		}
	}  
}