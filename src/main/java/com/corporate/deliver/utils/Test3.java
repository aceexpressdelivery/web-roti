package com.corporate.deliver.utils;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Test3 {

	public static void main(String[] args) {
		try {
	        Date mToday = new Date();

	        SimpleDateFormat sdf = new SimpleDateFormat("hh:mm aa");
	        String curTime = sdf.format(mToday);
	        Date start = sdf.parse("4:15 PM");
	        Date end = sdf.parse("4:27 PM");
	        Date userDate = sdf.parse(curTime);
	        if(end.before(start))
	        {
	            Calendar mCal = Calendar.getInstance();
	            mCal.setTime(end);
	            mCal.add(Calendar.DAY_OF_YEAR, 1);
	            end.setTime(mCal.getTimeInMillis());
	        }

	        if (userDate.after(start) && userDate.before(end)) {
	            System.out.println("result falls between start and end , go to screen 1 ");
	        }
	        else{
	            System.out.println("result does not fall between start and end , go to screen 2 ");
	        }
	    } catch (ParseException e) {
	        // Invalid date was entered
	    }
	}

}
