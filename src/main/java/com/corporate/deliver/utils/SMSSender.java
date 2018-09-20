package com.corporate.deliver.utils;

import java.util.List;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SMSSender  {
	
	public static final String ACCOUNT_SID = "ACdfb931fbdc612b111728f6bab99e57eb";   //"AC5ef872f6da5a21de157d80997a64bd33"; 
	public static final String AUTH_TOKEN = "eb9194275a5a20aa0f1dc74588e5b666";
	  
	public void sendSMSMessages( List<PhoneNumber> phoneNumbers) {
		// Find your Account Sid and Token at twilio.com/user/account
		
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
		//String toPhone = phoneNumbers.toString(); 
		Message message = Message.creator(
											new PhoneNumber(phoneNumbers.toString()),
											new PhoneNumber("+18442230900"),
											"Test message from AceExpressDelivery").create();
		
		/*Message message = Message.creator(new PhoneNumber("6105645109"), new PhoneNumber("18442230900"),
			  "Test message from AceExpressDelivery").setMediaUrl("http://localhost:8080/delivery/rests/").create();*/
		    
		System.out.println(message.getSid());  
	}
	public static void main(String [] args) {
		
		SMSSender sMSSender = new SMSSender();
		sMSSender.sendSMSMessages(null);
	}
}

	