package com.corporate.delivery.exception;

@SuppressWarnings("serial")
public class CreditCardException extends RuntimeException{
	
	public CreditCardException(String creditCardException){
		
		super(creditCardException);
	}

}
