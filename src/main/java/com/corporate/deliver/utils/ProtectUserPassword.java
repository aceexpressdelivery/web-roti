package com.corporate.deliver.utils;

public class ProtectUserPassword {
	public static void main(String[] args) throws Exception{
		
		String myPassword = "myPassword123";

		// Protect user's password. The generated value can be stored in DB.
		String mySecurePassword = PasswordUtils.encrypt(myPassword);
		        
		String result = PasswordUtils.decrypt(mySecurePassword);
		// Print out protected password 
		// System.out.println("My secure password = " + mySecurePassword);
		// System.out.println("Password = " + result);
	}
}
