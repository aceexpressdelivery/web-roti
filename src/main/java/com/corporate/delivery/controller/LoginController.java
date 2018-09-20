
package com.corporate.delivery.controller;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.corporate.deliver.utils.PasswordUtils;
import com.corporate.deliver.utils.Utils;
import com.corporate.delivery.forms.MerchantForm;
import com.corporate.delivery.forms.UpdatePasswordForm;
import com.corporate.delivery.forms.UserForm;
import com.corporate.delivery.forms.UserPaymentForm;
import com.corporate.delivery.model.JsonResponse;
import com.corporate.delivery.model.LoginType;
import com.corporate.delivery.model.Merchant;
import com.corporate.delivery.model.User;
import com.corporate.delivery.model.creditcard.UserPayment;
import com.corporate.delivery.service.LoginService;
import com.corporate.delivery.service.MailService;
import com.corporate.delivery.service.MerchantService;
import com.corporate.delivery.service.UserPaymentService;
import com.corporate.delivery.service.UserService;
import com.corporate.delivery.service.order.OrderService;

@Controller
@RequestMapping("/login")
public class LoginController {
	
	 @Autowired
	 LoginService loginService;
	 
	 @Autowired
	 OrderService orderService;
	 
	 @Autowired
	 UserPaymentService userPaymentService; 
	 
	 @Autowired
	 UserService userService;
	 
	 @Autowired
	 MerchantService merchantService;
	 
	 @Autowired
	 MailService mailService;
	 
	 private static final Logger logger = Logger.getLogger(LoginController.class);
	
	 @RequestMapping(value = "/autheticateMR", method = RequestMethod.GET)
	 public  @ResponseBody String  autheticateMR( @RequestParam("username") String username, @RequestParam("password") String password) {
		 if(loginService.isUserNameExists(username, LoginType.MERCHANT_OR_RESTAURANT.getValue())) {
			Merchant merchant = loginService.getMerchantOrRestaurant(username);
			//String pass = null;
			String pass = PasswordUtils.decrypt(merchant.getPassword());
			if(!pass.equalsIgnoreCase(password)){
				return "Password invalid";
			}
			return merchant.getId() + "," + merchant.getFirstname() ;
		}  else {
			return "User Name invalid";
		}
	}		
	 
	@RequestMapping(value = "/autheticate", method = RequestMethod.GET)
    public  @ResponseBody String  autheticate( @RequestParam("username") String username, @RequestParam("password") String password) {

		if(loginService.isUserNameExists(username, LoginType.USER.getValue())) {
			User user = loginService.getUser(username);
			String  pass = PasswordUtils.decrypt(user.getPassword());
			if(!pass.equalsIgnoreCase(password)){
				return "Password invalid";
			}
			return user.getId() + "," + user.getFirstname() + "," + user.getLastname() + "," + user.getUsername() + ","+ user.getPhone();
		} else {
			return "User Name invalid";
		}
    }
	
	@RequestMapping(value = "/createuser", method = RequestMethod.POST)
    public  @ResponseBody String createUser(@RequestBody UserForm userFrom) {	
		User user = null;
		try {
			user  = populateUser(userFrom);
		} catch (Exception e) {
			return "User Creation Failed";
		}
		userService.insert(user);
		
		return Integer.toString(user.getId());
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
    public  @ResponseBody JsonResponse updateUser(@RequestBody UserForm userForm) {
		
		User user = null;
		User user1 = userService.getById(userForm.getId());
		try {
			user = populateUpdateUser(userForm, user1);
		} catch (Exception e) {
			return new JsonResponse("", "User updation Failed: " + e.getMessage());
		}
		userService.updateUser(user);
		JsonResponse jasonResponse = new JsonResponse();
		return jasonResponse;
	}
	
	@RequestMapping(value = "/updateUserPassword", method = RequestMethod.POST)
    public  @ResponseBody JsonResponse updateUserPassword(@RequestBody UpdatePasswordForm resetPasswordForm) {
		
		User user = null;
		User user1 = userService.getById(resetPasswordForm.getId());
		String  pass = PasswordUtils.decrypt(user1.getPassword());
		
		if(!pass.equalsIgnoreCase(resetPasswordForm.getOldPassword())){
			return new JsonResponse("", "Please enter correct password!");
		}
		
		try {	
			user = populateUpdateUserPassword(resetPasswordForm, user1);
		} catch (Exception e){
			return new JsonResponse("", "Password update Failed: " + e.getMessage());
		}
		
		userService.updateUser(user);
		return new JsonResponse("", "Password changed successfully");
	}
	
	@RequestMapping(value="/resetPassword" , method=RequestMethod.GET)
	public String resetRequest(@RequestParam(value="email") String email){
		//check if the email id is valid and registered with us.
		if(mailService.isMailExists(email)){
			
			//mailService.sendMail(email);
			Utils.sendEmail(email,
							"[AceExpressDelivery]Please reset your password",
							"<html>We heard that you lost your AceExpressDelivery password. Sorry about that!" + 
							"But don't worry! You can use the following link to reset your password:" + 
							"http://localhost:8080/delivery/login/newPassword/" + email +
							"If you don't use this link within 3 hours, it will exprre.To get a new password reset link,"
							+ "visit http://localhost:8080/delivery/rests/" + "Thanks");
		}
			return "Email id is invalid";
	}
	
	/*@RequestMapping(value="/newPassword/{email}" )
	public String resetPassword(@PathVariable String email,Map<String,String> model)
	{
		//check if the email id is valid and registered with us.
		model.put("emailid", email);
		return "newPassword";
	}*/

	@RequestMapping(value = "/createmerchant", method = RequestMethod.POST)
	public  @ResponseBody JsonResponse createMerchant(@RequestBody MerchantForm merchantForm) {
		
		Merchant merchant = populateMerchant(merchantForm);
		merchantService.insert(merchant);
		JsonResponse jasonResponse = new JsonResponse();
		return jasonResponse;
	}
		
	@RequestMapping(value = "/createCreditCard", method = RequestMethod.POST)
	public  @ResponseBody String createCreditCard(@RequestBody UserPaymentForm userPaymentForm) {
		
		UserPayment userPayment = populateUserPayment(userPaymentForm);
		userPaymentService.insert(userPayment);
		return Integer.toString(userPayment.getId());
	}
	
	@RequestMapping(value = "/updateCreditCard", method = RequestMethod.POST)
	public  @ResponseBody JsonResponse updateCreditCard(@RequestBody UserPaymentForm userPaymentForm) {
		
		UserPayment userPayment = populateUserPayment(userPaymentForm);
		userPaymentService.updateUserPayment(userPayment);
		JsonResponse jasonResponse = new JsonResponse();
		return jasonResponse;
	}

	/*@RequestMapping(value = "/getUserPayments", method = RequestMethod.GET)
	public @ResponseBody List<UserPayment> getUserPayments(@RequestParam("username") String username) {
		User user = loginService.getUser(username);
		List<UserPayment> list = userPaymentService.getUserPayment(user.getId());
		return list;
	}*/
	
	@RequestMapping(value = "/getUserPayments", method = RequestMethod.GET)
	public @ResponseBody List<UserPayment> getUserPayments(@RequestParam("userid") String userId) {
		List<UserPayment> list = userPaymentService.getUserPayment(Integer.parseInt(userId));
		return list;
	}
    
	@RequestMapping(value = "/deleteCreditCard", method = RequestMethod.GET)
	public @ResponseBody void deleteCreditCard(@RequestParam("id") String Id) {
		userPaymentService.deleteUserPayment(Integer.parseInt(Id));
	}
	
	public class UserDetails {		
		String message;
		List<UserPayment> userPayments;	
		public UserDetails(String message, List<UserPayment> userPayments) {
			this.message = message;
			this.userPayments = userPayments;
		}
	}
	
	private User populateUser(UserForm userFrom) throws Exception {
		User user = new User();
		user.setId(userFrom.getId());
		user.setUsername(userFrom.getUsername());
		user.setPassword(PasswordUtils.encrypt(userFrom.getPassword()));
		user.setFirstname(userFrom.getFirstname());
		user.setLastname(userFrom.getLastname());
		user.setPhone(userFrom.getPhone());
		user.setActive(userFrom.isActive());
		return user;
	}
	
	private User populateUpdateUser(UserForm userForm, User user1) throws Exception {
		
		User user = new User();
		
		user.setId(userForm.getId());
		user.setUsername(userForm.getUsername());
		String pass = PasswordUtils.decrypt(user1.getPassword());
		user.setPassword(PasswordUtils.encrypt(pass));
		user.setFirstname(userForm.getFirstname());
		user.setLastname(userForm.getLastname());
		user.setPhone(userForm.getPhone());
		
		return user;
	}
	
	private User populateUpdateUserPassword(UpdatePasswordForm resetPasswordForm, User user1) throws Exception {
		
		User user = new User();

		user.setId(resetPasswordForm.getId());
		user.setUsername(user1.getUsername());
		user.setPassword(PasswordUtils.encrypt(resetPasswordForm.getNewPassword()));
		user.setFirstname(user1.getFirstname());
		user.setLastname(user1.getLastname());
		user.setPhone(user1.getPhone());
		
		return user;
	}
	
	private Merchant populateMerchant(MerchantForm merchantForm) {
		Merchant merchant = new Merchant();	
		merchant.setId(merchantForm.getId());
		merchant.setFirstname(merchantForm.getFirstname());
		merchant.setLastname(merchantForm.getLastname());
		merchant.setUsername(merchantForm.getUsername());
		merchant.setEmail(merchantForm.getUsername());
		merchant.setPhone(merchantForm.getPhone());
		
		try {
			merchant.setPassword(PasswordUtils.encrypt(merchantForm.getPassword()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		merchant.setAddress(merchantForm.getAddress());
		merchant.setCity(merchantForm.getCity());
		merchant.setState(merchantForm.getState());
		merchant.setZip(merchantForm.getZip());
		merchant.setMrType(merchantForm.getMrType());
		merchant.setLastVisited(merchantForm.getLastVisited());
		merchant.setTimeRange(merchantForm.getTimeRange());
		merchant.setAreaLimit(merchantForm.getAreaLimit());
		merchant.setActive(merchantForm.isActive());
		return merchant;
	}
	
	private UserPayment populateUserPayment(UserPaymentForm userPaymentForm) {
		UserPayment userPayment = new UserPayment();
		userPayment.setId(userPaymentForm.getId());
		userPayment.setUserId(userPaymentForm.getUserId());
		userPayment.setCardType(userPaymentForm.getCardType());
		userPayment.setLastFourDigits(userPaymentForm.getLastFourDigits());
		userPayment.setExpDate(userPaymentForm.getExpDate());
		userPayment.setToken("78999");
		userPayment.setBillingAddress(userPaymentForm.getBillingAddress());
		userPayment.setCity(userPaymentForm.getCity());
		userPayment.setState(userPaymentForm.getState());
		userPayment.setZip(userPaymentForm.getZip());
		userPayment.setCountry("USA");
		return userPayment;
	}
	
	
}
