package com.corporate.deliver.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.corporate.delivery.configuration.HibernateConfiguration;
import com.twilio.type.PhoneNumber;

public class Utils {
	
/*	public static List<MenuSectionForm> populateMenuSectionForm(List<MenuSection> list) {
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
	}*/
	
	
	//Checks if two dates are on the same day ignoring time
	public static boolean isSameDay(Date date1, Date date2) {
		if (date1 == null || date2 == null) {
	            throw new IllegalArgumentException("The dates must not be null");
		}
	        Calendar cal1 = Calendar.getInstance();
	        cal1.setTime(date1);
	        Calendar cal2 = Calendar.getInstance();
	        cal2.setTime(date2);
	        return isSameDay(cal1, cal2);
	}

	//Checks if two calendars represent the same day ignoring time
	public static boolean isSameDay(Calendar cal1, Calendar cal2) {
	        if (cal1 == null || cal2 == null) {
	            throw new IllegalArgumentException("The dates must not be null");
	        }
	        return (cal1.get(Calendar.ERA) == cal2.get(Calendar.ERA) &&
	                cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR) &&
	                cal1.get(Calendar.DAY_OF_YEAR) == cal2.get(Calendar.DAY_OF_YEAR));
	} 
	
	//Checks if the first date is before the second date ignoring time.
	public static boolean isBeforeDay(Date date1, Date date2) {
	        if (date1 == null || date2 == null) {
	            throw new IllegalArgumentException("The dates must not be null");
	        }
	        Calendar cal1 = Calendar.getInstance();
	        cal1.setTime(date1);
	        Calendar cal2 = Calendar.getInstance();
	        cal2.setTime(date2);
	        return isBeforeDay(cal1, cal2);
	}
	
	//Checks if the first calendar date is before the second calendar date ignoring time.
	public static boolean isBeforeDay(Calendar cal1, Calendar cal2) {
	        if (cal1 == null || cal2 == null) {
	            throw new IllegalArgumentException("The dates must not be null");
	        }
	        if (cal1.get(Calendar.ERA) < cal2.get(Calendar.ERA)) return true;
	        if (cal1.get(Calendar.ERA) > cal2.get(Calendar.ERA)) return false;
	        if (cal1.get(Calendar.YEAR) < cal2.get(Calendar.YEAR)) return true;
	        if (cal1.get(Calendar.YEAR) > cal2.get(Calendar.YEAR)) return false;
	        return cal1.get(Calendar.DAY_OF_YEAR) < cal2.get(Calendar.DAY_OF_YEAR);
	}
	 
	//Checks if the first date is after the second date ignoring time.
	public static boolean isAfterDay(Date date1, Date date2) {
	        if (date1 == null || date2 == null) {
	            throw new IllegalArgumentException("The dates must not be null");
	        }
	        Calendar cal1 = Calendar.getInstance();
	        cal1.setTime(date1);
	        Calendar cal2 = Calendar.getInstance();
	        cal2.setTime(date2);
	        return isAfterDay(cal1, cal2);
	}

	//Checks if the first calendar date is after the second calendar date ignoring time.
	public static boolean isAfterDay(Calendar cal1, Calendar cal2) {
	        if (cal1 == null || cal2 == null) {
	            throw new IllegalArgumentException("The dates must not be null");
	        }
	        if (cal1.get(Calendar.ERA) < cal2.get(Calendar.ERA)) return false;
	        if (cal1.get(Calendar.ERA) > cal2.get(Calendar.ERA)) return true;
	        if (cal1.get(Calendar.YEAR) < cal2.get(Calendar.YEAR)) return false;
	        if (cal1.get(Calendar.YEAR) > cal2.get(Calendar.YEAR)) return true;
	        return cal1.get(Calendar.DAY_OF_YEAR) > cal2.get(Calendar.DAY_OF_YEAR);
	}
	
	public static Date formatDate(String dateValue) {
	    	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-M-dd");
	    	Date date = null;	   
	    	try {
	    		date = formatter.parse(dateValue);
	    	}catch (ParseException e) {
			   throw new RuntimeException("Invalid date passed. Date parse exception");
	    	}
		   
	    	return date;
	 }
	
	public static void sendEmail(String toEmailAddr, String emailSubject, String emailContent) {
		
		SendMail sendMail = new SendMail();
		sendMail.sendEmail(	HibernateConfiguration.getEmail_user(), 
							HibernateConfiguration.getEmail_password(), 
							toEmailAddr, emailSubject, emailContent);
	}
	
	
	public static void sendMessages(List<PhoneNumber> phoneNumbers) {
		
		// SEND SMS messages to customer and restaurant
		SMSSender SMSSender = new SMSSender();
		SMSSender.sendSMSMessages(phoneNumbers);
	}	
	
}
