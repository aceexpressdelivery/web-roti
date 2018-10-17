package com.corporate.delivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.corporate.delivery.model.JsonResponse;
import com.corporate.delivery.model.Menu;
import com.corporate.delivery.model.ZipCorpCenter;
import com.corporate.delivery.service.RestaurantMenuService;
import com.corporate.delivery.service.ZipCorpCenterService;

@Controller
@RequestMapping("/orderSchedule")
public class OrderScheduleController {
	
	 @Autowired
	 RestaurantMenuService restaurantMenuService;
	 
	 @Autowired
	 ZipCorpCenterService zipCorpCenterService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String getMain(ModelMap model) {
		
		String rotiRestId="1";
    	List<Menu>  restRotiList = restaurantMenuService.getScheduleRestaurantMenus(Integer.parseInt(rotiRestId));
    	model.addAttribute("list", restRotiList);
    	return "orderSchedule";
	}
	
	
	@RequestMapping(value = "/zipcorpcenter", method = RequestMethod.GET)
	public  @ResponseBody List<ZipCorpCenter>   getZipCorpCenter( @RequestParam("corpZipCode") String corpZipCode) {
	      	List<ZipCorpCenter> zipCorpCenter = zipCorpCenterService.getZipCorpCenter(new Integer(Integer.parseInt(corpZipCode)));
	      	return zipCorpCenter;
	}

	@RequestMapping(value = "/scheduleOrder", method = RequestMethod.POST)
	public @ResponseBody JsonResponse processScheduleOrder() {
		
		return null;
	}
	
}
