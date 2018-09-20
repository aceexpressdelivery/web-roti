<html>
	<head>
		<%@ taglib  prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
		<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
		<link href="${pageContext.request.contextPath}/resources/css/Merchant.css" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/js/merchant.js"></script>
		
		<!--<script src="//code.jquery.com/jquery.min.js"></script>-->
		<link href="${pageContext.request.contextPath}/resources/Content/bootstrap.min.css" rel="stylesheet" />
		<script src="${pageContext.request.contextPath}/resources/Scripts/bootstrap.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/Scripts/jquery.calendrical.js"></script>
		
		
		<script src="${pageContext.request.contextPath}/resources/Scripts/moment.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/Scripts/daterangepicker.js"></script>
		<link href="${pageContext.request.contextPath}/resources/Content/daterangepicker.css" rel="stylesheet" />
		
		
		<link href="${pageContext.request.contextPath}/resources/Content/calendrical.css" rel="stylesheet" />

		<!--<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.eot"></script>
		<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.svg"></script>
		<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.ttf"></script>
		<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.woff"></script>-->

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
			
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">
	</head>
	<body>
	<div class="top_menu" id="top_menu">   
		<table cellpadding=0 id="menu" style="font-weight:bold;width: 1400px;">
			<tr class="spaceUnder">
				<td width=8%>
					<a href="/delivery/merchants/">
						<img id="logohome" src="${pageContext.request.contextPath}/resources/images/delivery22.jpg" 
							style="padding-bottom:35px;margin-bottom:0px;padding-right:50px;height:120px;width:140px;margin-right:300px;"/>
					</a>
				</td>
				
				<td width=15%>
					<a href="/delivery/merchants/" id="gohome"
						style="text-decoration:none;color:MediumVioletRed;font-family:Georgia;font-weight:300px;width:400px;margin-right:10px;padding-left:100px;margin-bottom:42px;padding-bottom:40px">
						<b style="font-size:30px;">Ace </b><br/>
						<span style="padding-left:50px;">Express Delivery</span>
					</a>
				</td>
				<td width=350px></td>
				
				<!--<td width=1%>|</td>-->
				<!--<td width=100px id="login" style="text-decoration:none; color:red;margin-top:60px;" data-toggle="modal" data-target="#myModal_login"><b>Sign In</b></a></td>
				<td id="logged_in" style="text-decoration:none;margin-top:50px;display:none;margin-left:10px;color:black;"></td>
				<td><button type="button" id="sign_out" class="btn btn-danger btn-group-justified" 
						 style="width:80px;height:auto;border-radius: 30px;display:none;margin-right:30px;">Sign Out</button></a></td>
				<td id="register"  data-toggle="modal" data-target="#myModal_createaccount">
					<button type="button" class="btn btn-danger btn-group-justified" style="width:100px;height:auto;border-radius: 30px;margin-right:30px;">Sign Up</button></a></td>-->
				
				<td width=150px style="text-decoration:none;margin-top:50px;cursor: pointer;margin-left:70px">
					<a id="login" style="color:red;display:block;margin-left:50px;margin-top:10px" data-toggle="modal" data-target="#myModal_login">
						<b>Sign In</b>
					</a>
					<a id="logged_in" style="display:none;color:black;margin-top:10px"></a>
				</td>
				<td>
					<button type="button" id="register" value="Sign Up" class="btn btn-danger btn-group-justified" data-toggle="modal" data-target="#myModal_createaccount"
						 style="width:80px;height:auto;border-radius: 30px;display:block;margin-left:20px;">
						Sign Up
					</button>
				</td>
				<td>
					<button type="button" id="sign_out" value="Sign out" class="btn btn-danger btn-group-justified" 
							style="width:80px;height:auto;border-radius: 30px;display:none;margin-right:120px;">Sign Out</button>
				</td>		 
				<td id="hide_merchantid" style="display:none"></td>
				<td id="hide_merchantfname" style="display:none"></td>
				<!--<td id="contactus"  data-toggle="modal" data-target="#myModal_contactus">
					<button type="button" class="btn btn-danger btn-group-justified" style="width:100px;height:auto;border-radius: 30px;margin-right:30px;">Contact Us</button></a></td>-->	 
			</tr>
		</table>    
	</div>
       
	<div class="portal" id="portal" style="align:center;display:block;">
		<div style="font-size:22px;font-weight:400px;color:Red;font-family:Georgia;padding-left:380px;"><h3>Merchant Management Portal</h3></div>

		<table>
			<tr style=" margin-bottom:20px; padding-bottom: 1.1em;">
				<td width=50px style="padding-left:330px;">
					<button type="button" id="login_btn" class="btn btn-danger" style="width:150px;height:60px;border-radius:30px;" data-toggle="modal" data-target="#myModal_login">Sign In</button>
				</td>
			 
				<td width=50px style="padding-left:120px;">
					<button type="button" id="register_btn" class="btn btn-danger" style="width:150px;height:60px;border-radius:30px;float:left;">Contact Us</button>
				</td>
			</tr>
		</table>
	</div><br/>
 
	<div class="welcome_portal" id="welcome_portal" style="align:center;display:none;height:350px;">
		<div style="font-weight:bold;font-family:Impact;padding-left:320px;margin-top:20px;margin-bottom:20px;padding-top:20px;color:red">
			<h3>Welcome to Merchant Management Portal</h3>
		</div><br/>
		<table>
			<tr style="margin-bottom:20px; padding-bottom: 1.1em;"></tr>
			<tr style="margin-top:20px;margin-bottom:10px;"></tr>
			<td style="padding-left:100px;">
				<button type="button" id="btn_restaurant" class="btn showhover" 
					style="border-radius: 100%;width:228px;height:228px;background-image: url(${pageContext.request.contextPath}/resources/images/rest1.png);">
				</button>
			</td>
				 
			<td style="padding-left:70px;">
				<button type="button" id="btn_summary_report" class="btn showhover"
					style="border-radius: 100%;width:228px;height:228px;background-image: url(${pageContext.request.contextPath}/resources/images/rep1s.png);">
				</button>
			</td>
		
			<td style="padding-left:70px">
				<button type="button" id="btn_detailed_report" class="btn showhover" 
					style="border-radius: 100%;width:228px;height:228px;background-image: url(${pageContext.request.contextPath}/resources/images/rep2.png);">
				</button>
			</td></tr>
		</table>
		<table style="margin-top:10px;margin-bottom:50px;">
			<tr>
				<td style="padding-left:180px;">Restaurant</td>
				<td style="padding-left:190px;">Summary Report</td>
				<td style="padding-left:180px;">Detailed Report</td>
			</tr>			
		</table><br/><br/>
	</div>
	
	<div  id="rest_page" style="display:none">
		<label style="margin-top:100px;margin-left:500px;font-size:26px">Restaurant Page</label><br/>
		<span>
			<button type="button" class="btn btn-primary" style="margin-left:55px;margin-top:10px;" data-toggle="modal" data-target="#myModal_add_restaurant">Add Restaurant</button>
			<button type="button" class="btn btn-primary" style="margin-left:1052px; margin-top:10px; height:34px;" id="go_to_welcome_pg">
			<p class="glyphicon glyphicon-chevron-left" style="font-size:11px"></p> Back</button>
		</span>
		<!-- <div id="go_to_welcome_pg" class="btn">
		<p class="glyphicon glyphicon-chevron-left" style="vertical-align:top;float:left;position:relative;background-color:#dadada"> Go back to Main Page</p></div>-->
		<table id="table_rest" style="margin-top:10px;margin-left:55px;"></table>
    </div>
	 
	<div  id="menu_page" style="display:none">
		<label style="display:none" id="rest_id"></label>
		<label style="margin-top:100px;margin-left:500px;font-size:26px">Menu Page</label><br/>
		<span>
			<button type="button" class="btn btn-primary" style="margin-left:55px;margin-top:10px;" data-toggle="modal" data-target="#myModal_add_menu">Add Menu</button>
			<button type="button" class="btn btn-primary" style="margin-left:1085px; margin-top:10px; height:34px;" id="go_to_rest_pg">
			<p class="glyphicon glyphicon-chevron-left" style="font-size:11px"></p> Back</button>
		</span>
		<table id="table_menu" style="margin-top:10px;margin-left:55px;"></table>
	</div>
	 
	<div  id="section_page" style="display:none">
		<label style="display:none" id="menu_id"></label>
		<label style="margin-top:100px;margin-left:500px;font-size:26px">Section Page</label><br/>
		<span>
			<button type="button" class="btn btn-primary" style="margin-left:5px;margin-top:10px;" data-toggle="modal" data-target="#myModal_add_section">Add Section</button>
			<button type="button" class="btn btn-primary" style="  float: right; margin-top:10px; height:34px;" id="go_to_menu_pg">
			<p class="glyphicon glyphicon-chevron-left" style="font-size:11px"></p> Back</button>
		</span>
		<table id="table_section" style="margin-top:10px;margin-left:5px;"></table>
	</div></div><br/>
	  
	<div  id="summary_page" style="display:none">
		<label style="margin-top:100px;margin-left:500px;font-size:26px">Summary Page</label><br/><br/>
			<div class="col-md-12">
			
				<div class="col-md-7">
					<div class="input-group" >
						<span class="input-group-addon">
							<label  class="glyphicon glyphicon-calendar" ></label>
						</span>
						<input id="date_start" type="text" class="form-control" placeholder="select date" style="width:250px"/>
						<span><button type="button" class="btn" style="margin-left: 10px;width:70px;" id="go_dates">Find</button></span>
					</div>
				</div>
				
				<div class="col-md-5">
					<button type="button" class="btn go_back" style="margin-left:330px;width:100px" id="go_back">Go back</button>
				</div>
			</div><br/>
		
		<table id="table_summary" style="margin-top:30px;margin-left:30px;"></table>
	</div>
	
		<div  id="report_page" style="display:none">
		<label style="margin-top:100px;margin-left:500px;font-size:26px">Report Page</label><br/><br/>
			<div class="col-md-12">
			
				<div class="col-md-7">
					<div class="input-group" >
						<span class="input-group-addon">
							<label  class="glyphicon glyphicon-calendar" ></label>
						</span>
						<input id="date_start1" type="text" class="form-control" placeholder="select date" style="width:250px"/>
						<span><button type="button" class="btn" style="margin-left: 10px;width:70px;" id="go_dates1">Find</button></span>
					</div>
				</div>
				
				<div class="col-md-5">
					<button type="button" class="btn go_back" style="margin-left:330px;width:100px" id="go_back">Go back</button>
				</div>
			</div><br/>
		
		
		<table id="table_report" style="margin-top:30px;margin-left:30px;"></table>
	</div>
	<!--<div id="div_carousel" style="display:block;margin-top:10px;">
  
	<div id="myCarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
	  
    </ol>    
    <div class="carousel-inner">

      <div class="item active">
        <img src="${pageContext.request.contextPath}/resources/images/pic7.jpg" style="width:1300px;height:350px;margin-left:2%;">
      </div>
    
      <div class="item">
        <img src="${pageContext.request.contextPath}/resources/images/pic6.jpg" style="width:1300px;height:350px;margin-left:2%;">
      </div>
	  <div class="item">
        <img src="${pageContext.request.contextPath}/resources/images/pic5.jpg" style="width:1300px;height:350px;margin-left:2%;">
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" style="transform: rotate(-135deg);"></span>
      <span class="sr-only">Previous</span>
	  
    </a>
	
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
	</div>
	</div> -->

  <div class="modal fade" id="myModal_login" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content" style="color:black">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:230px;">
		   <b>Sign In</b>
		  </h4>
        </div>
        <div class="modal-body">
          <form action="" name="login" id="login">
              
				<div class="input-group">
      <span class="input-group-addon"><label class="glyphicon glyphicon-user"></label></span>
      <input type="text" class="form-control" name="login_user" id="login_user" placeholder="Email">
    </div>
	<br/>
	<div class="input-group">
    <span class="input-group-addon"><label class="glyphicon glyphicon-lock"></label></span>
    <input id="login_pass" type="password" class="form-control" name="login_pass" placeholder="Password">
	
  </div><a style="font-size:14px;font-weight:bold;float:right;" 
  data-toggle="modal" data-target="#myModal_forgot_password" data-dismiss="modal">Forgot Password?</a>
  <br/>
                
				<br/>
                <div class="form-group">
                  <button type="button" class="btn btn-success" id="submit_login" style="font-size:16px;width:100%;font-weight:bold">
				  Sign In</button></div>
				 
				  <p style="margin-left:150px;">Don't have an account? <a data-toggle="modal" data-target="#myModal_contactus" data-dismiss="modal"> Create Your Account</a></p>
     
        
		 </form>
      </div>
      
    </div>
  </div>
  </div>
  <div class="modal fade" id="myModal_forgot_password" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content" style="color:black">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" >
		   <b>Forgot Your Password?</b>
		  </h4>
        </div>
        <div class="modal-body">
		
          
              <form action="" name="forgotpass" id="forgotpass">
				
	
  <div class="input-group">
      <span class="input-group-addon"><label class="glyphicon glyphicon-user"></label></span>
      <input type="email" class="form-control" name="user_email" id="user_email" placeholder="Please Enter your Email">
    </div><br/>
                
                  <button type="submit" id="submit_forgotpass" class="btn btn-success" style="font-size:16px;width:100%;font-weight:bold">Submit</button></div>
				  
           
       
        
		 </form>
      </div>
      
    </div>
  </div>
  

  <div class="modal fade" id="myModal_createaccount" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content" style="color:black">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:200px"><b>Create Account</b></h4>
        </div>
        <div class="modal-body">
          <form action="" name="registration">

                <div class="form-group col-md-6">
                    <label>First name:</label>
                    <input type="text" class="form-control" name="firstname" id="firstname" />
                </div>
				
                <div class="form-group col-md-offset-6">
                    <label>Last name:</label>
                    <input type="text" class="form-control" name="lastname" id="lastname" />
                </div>
               
                <div class="form-group col-md-6">
                    <label>Email address:</label>
                    <input type="email" class="form-control" name="email" id="email" />
                </div>
				
				 <div class="form-group col-md-offset-6">
                    <label>Phone number:</label>
                    <input type="text" class="form-control" name="phone" id="phone" maxlength="10" onkeypress="return isNumber(event)" />
                </div>
				
				 <div class="form-group col-md-6">
				   <label>Password:</label>
				   <input type="password" class="form-control" name="password" id="password" />
				</div>
     
				<div class="form-group col-md-offset-6">
				  <label>Confirm Password:</label>
				  <input type="password" class="form-control" name="confirm_password" id="confirm_password" />
				</div>
				
				<div class="form-group col-md-6">
                    <label>Address:</label>
                    <input type="text" class="form-control" name="address" id="address" />
                </div>
				
				<div class="form-group col-md-offset-6">
				  <label>City:</label>
				  <input type="text" class="form-control" name="city" id="city" />
				</div>
				
				<div class="form-group col-md-6">
                    <label>State:</label>
                    <input type="text" class="form-control" name="state" id="state" />
                </div>
				
				<div class="form-group col-md-offset-6">
				  <label>Zipcode:</label>
				  <input type="text" class="form-control" name="zipcode" id="zipcode"  onkeypress="return isNumber(event)" />
				</div>
                <br/>
				
				
			<div class="form-group">
                  <button type="submit" id="submit_registration" class="btn btn-success" data-dismiss="modal" 
				  style="font-size:16px;width:100%;font-weight:bold">Create Your Account</button></div>
				  
				   <p style="margin-left:200px">Have an account? <a id="again_login" data-toggle="modal" data-target="#myModal_login" data-dismiss="modal"> Sign In</a></p>
        
        </div>
		
  <br/>
         </form>
        
      </div>
      
    </div>
  </div>
  
   <div class="modal fade" id="myModal_contactus" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content" style="color:black">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:200px"><b>Contact Us</b></h4>
        </div>
        <div class="modal-body">
          <form action="" name="contactus">

                <div class="form-group col-md-6">
                    <label>First name:</label>
                    <input type="text" class="form-control" name="c_firstname" id="c_firstname">
                </div>
                <div class="form-group col-md-offset-6">
                    <label>Last name:</label>
                    <input type="text" class="form-control" name="c_lastname" id="c_lastname">
                </div>
               
                <div class="form-group col-md-6">
                    <label>Email address:</label>
                    <input type="email" class="form-control" name="c_email" id="c_email">
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Telephone number:</label>
                    <input type="text" class="form-control" name="c_phone" id="c_phone" maxlength="10" onkeypress="return isNumber(event)">
                </div>
				 
				 <div class="form-group col-md-12">
                    <label>Subject:</label>
                    <input type="text" class="form-control" name="c_subject" id="c_subject">
                </div>
                <div class="form-group col-md-12">
                    <label>Message:</label>
                    <input type="password" class="form-control" name="message" id="message">
                </div>
                <br/>
				
				
			<div class="form-group">
                  <button type="submit" id="submit_contactus" class="btn btn-success" data-dismiss="modal" 
				  style="font-size:16px;width:100%;font-weight:bold">Submit Form</button></div>
				  
				   <p style="margin-left:200px">Have an account? <a id="again_login" data-toggle="modal" data-target="#myModal_login" data-dismiss="modal"> Sign In</a></p>
        
        </div>
		
  <br/>
         </form>
        
      </div>
      
    </div>
  </div>
  
  <div class="modal fade" id="myModal_terms_conditions" role="dialog" >
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h3 class="modal-title"><b>Terms of Use</b></h3>
        </div>
        <div class="modal-body">
          <p>Welcome to our site! We are so happy you are here, and we can't wait to deliver you food happiness, but before you use the site, please read these terms of use carefully!
</p><br/><p>
THE SECTION BELOW ENTITLED "DISPUTE RESOLUTION" HAS A MANDATORY ARBITRATION PROVISION. IT AFFECTS YOUR LEGAL RIGHTS. PLEASE READ IT.</p>
<br/>
<h3><b>ABOUT</b></h3>
<p>          The restaurants available on our Sites operate independently and have entered into agreements with us to provide the food and delivery services available to you on the Sites. The restaurants are required to comply with federal, state and local laws, rules, regulations, and standards pertaining to the preparation, sale and marketing of food, including food preparation and safety and menu disclosure; Grubhub is not responsible for the restaurants' food preparation or safety and does not verify any restaurant's compliance with applicable laws. In addition, Grubhub does not guarantee the quality of what the restaurants sell, nor does it guarantee the services provided by the restaurant, including in those cases where the restaurant provides the delivery services. In addition, Grubhub does not independently verify representations made by restaurants regarding their food, including without limitation any menu- or restaurant-level descriptors or disclosures.
</p><p>
         Some deliveries are provided by Grubhub's network of independent delivery service providers ("DSPs"). DSPs have entered into agreements with Grubhub, which require DSPs to comply with all applicable federal, state and local laws, rules and regulations, including without limitation traffic laws, requirements of the applicable Department of Motor Vehicle, and applicable insurance requirements. Grubhub shall not be liable or responsible for any delivery services provided by DSPs or any errors or misrepresentations made by them.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
    </div>
 </div>

 
 <div class="modal fade" id="myModal_add_restaurant" role="dialog">
    <div class="modal-dialog">
    
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:150px">Add Restaurant</h4>
        </div>
        <div class="modal-body">
          
		  <div class="form-group col-md-6">
                    <label>Restaurant name</label>
                    <input type="text" class="form-control" name="restaurantname" id="restaurantname"/>
                </div>
                <div class="form-group col-md-offset-6">
                    <label>Manager name</label>
                    <input type="text" class="form-control" name="managername" id="managername"/>
                </div>
               
                <div class="form-group col-md-6">
                    <label>Email ID:</label>
                    <input type="email" class="form-control" name="rest_email" id="rest_email"/>
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Phone number:</label>
                    <input type="text" class="form-control" name="rest_phone" id="rest_phone" maxlength="10" onkeypress="return isNumber(event)" />
                </div>
				
				<div class="form-group col-md-6">
                    <label>Tagline:</label>
                    <input type="text" class="form-control" name="rest_tagline" id="rest_tagline"/>
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Open-Close time:</label>
                    <input type="text" class="form-control" name="rest_openclosetime" id="rest_openclosetime"/>
                </div>
				
				<div class="form-group col-md-6">
                    <label>Time range:</label>
                    <input type="text" class="form-control" name="rest_timerange" id="rest_timerange"/>
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Price level:</label>
                    <input type="text" class="form-control" name="rest_pricelevel" id="rest_pricelevel"/>
                </div>
				
                <div class="form-group col-md-6">
                    <label>Address</label>
                    <input type="text" class="form-control" name="rest_address" id="rest_address"/>
                </div>
				
				<div class="form-group col-md-offset-6">
                    <label>City:</label>
                    <input type="text" class="form-control" name="rest_city" id="rest_city"/>
                </div>
				
				<div class="form-group col-md-6">
                    <label>State:</label>
                    <input type="text" class="form-control" name="rest_state" id="rest_state"/>
                </div>
				
				<div class="form-group col-md-offset-6">
                    <label>Zip:</label>
                    <input type="text" class="form-control" name="rest_zip" id="rest_zip"  onkeypress="return isNumber(event)"/>
                </div>
				
				<div class="form-group col-md-6">
                    <label>Image</label>
                    <input type="text" class="form-control" name="rest_image" id="rest_image"/>
                </div>
				
				<div class="form-group col-md-offset-6">
                    <label>Contract Percent:</label>
                    <input type="text" class="form-control" name="rest_contractpercent" id="rest_contractpercent"/>
                </div>
		  
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="submit_add_rest">Save</button>
		    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>

  
   <div class="modal fade" id="myModal_edit_restaurant" role="dialog">
    <div class="modal-dialog">
    
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:150px">Edit Restaurant Details</h4>
        </div>
        <div class="modal-body">
          <label style="display:none" id="rest_row"></label>
		  <div class="form-group col-md-6">
                    <label>Restaurant name</label>
                    <input type="text" class="form-control" name="edit_restaurantname" id="edit_restaurantname">
                </div>
                <div class="form-group col-md-offset-6">
                    <label>Manager name</label>
                    <input type="text" class="form-control" name="edit_managername" id="edit_managername">
                </div>
               
                <div class="form-group col-md-6">
                    <label>Email ID:</label>
                    <input type="email" class="form-control" name="edit_rest_email" id="edit_rest_email">
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Phone number:</label>
                    <input type="text" class="form-control" name="edit_rest_phone" id="edit_rest_phone" maxlength="10"  onkeypress="return isNumber(event)">
                </div>
				
				<div class="form-group col-md-6">
                    <label>Tagline:</label>
                    <input type="text" class="form-control" name="edit_rest_tagline" id="edit_rest_tagline">
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Open-Close time:</label>
                    <input type="text" class="form-control" name="edit_rest_openclosetime" id="edit_rest_openclosetime">
                </div>
				
				<div class="form-group col-md-6">
                    <label>Time range:</label>
                    <input type="text" class="form-control" name="edit_rest_timerange" id="edit_rest_timerange">
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Price level:</label>
                    <input type="text" class="form-control" name="edit_rest_pricelevel" id="edit_rest_pricelevel">
                </div>
				
                 <div class="form-group col-md-6">
                    <label>Address</label>
                    <input type="text" class="form-control" name="edit_rest_address" id="edit_rest_address"/>
                </div>
				
				<div class="form-group col-md-offset-6">
                    <label>City:</label>
                    <input type="text" class="form-control" name="edit_rest_city" id="edit_rest_city"/>
                </div>
				
				<div class="form-group col-md-6">
                    <label>State:</label>
                    <input type="text" class="form-control" name="edit_rest_state" id="edit_rest_state"/>
                </div>
				
				<div class="form-group col-md-offset-6">
                    <label>Zip:</label>
                    <input type="text" class="form-control" name="edit_rest_zip" id="edit_rest_zip"  onkeypress="return isNumber(event)"/>
                </div>
				
				<div class="form-group col-md-6">
                    <label>Image</label>
                    <input type="text" class="form-control" name="edit_rest_image" id="edit_rest_image">
                </div>
		  
		  <div class="form-group col-md-offset-6">
                    <label>Contract Percent:</label>
                    <input type="text" class="form-control" name="edit_contractpercent" id="edit_contractpercent"/>
                </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary" id="submit_edit_changes">Save</button>
		    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>
  
  
  <div class="modal fade" id="myModal_add_menu" role="dialog">
    <div class="modal-dialog">
    
     <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:200px">Add Menu</h4>
        </div>
        <div class="modal-body">
          
		  <div class="form-group col-md-12">
                    <label>Menu name</label>
                    <input type="text" class="form-control" name="menu_name" id="menu_name"/>
                </div>
             
               
                <div class="form-group col-md-6">
                    <label>Group Number</label>
                    <input type="text" class="form-control" name="groupNumber" id="groupNumber"  onkeypress="return isNumber(event)"/>
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Group Name:</label>
                    <input type="text" class="form-control" name="groupName" id="groupName"/>
                </div>
				
				<div class="form-group col-md-6">
                    <label>Group Menu Number:</label>
                    <input type="text" class="form-control" name="groupMenuNumber" id="groupMenuNumber" onkeypress="return isNumber(event)"/>
                </div>
				
				<div class="form-group col-md-offset-6">
                    <label>Base Price:</label>
                    <input type="text" class="form-control" name="baseprice" id="baseprice" onkeypress="return isNumber(event)"/>
                </div>
				
				<div class="form-group col-md-6">
                    <label>Sales Price:</label>
                    <input type="text" class="form-control" name="salesprice" id="salesprice" onkeypress="return isNumber(event)"/>
                </div>
				
				 <div class="form-group col-md-offset-6">
                    <label>Restaurant Price:</label>
                    <input type="text" class="form-control" name="restaurantprice" id="restaurantprice" onkeypress="return isNumber(event)"/>
                </div>
				
				<div class="form-group col-md-12">
                    <label>Description:</label>
                    <input type="text" class="form-control" name="description" id="description"/>
                </div>
				
               <div class="form-group col-md-12">
                    <label>Image</label>
                    <input type="text" class="form-control" name="menuImage" id="menuImage"/>
                </div>
		  
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="submit_add_menu">Save</button>
		    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>
  
  <div class="modal fade" id="myModal_edit_menu" role="dialog">
    <div class="modal-dialog">
    
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:200px">Edit Menu</h4>
        </div>
        <div class="modal-body">
          <div id="hidemenuid" style="display:none"></div>
		  <div class="form-group col-md-12">
                    <label>Menu name</label>
                    <input type="text" class="form-control" name="edit_menu_name" id="edit_menu_name"/>
                </div>
               
               
                <div class="form-group col-md-6">
                    <label>Group Number</label>
                    <input type="text" class="form-control" name="edit_groupNumber" id="edit_groupNumber"  onkeypress="return isNumber(event)"/>
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Group Name:</label>
                    <input type="text" class="form-control" name="edit_groupName" id="edit_groupName" />
                </div>
				
				<div class="form-group col-md-6">
                    <label>Group Menu Number:</label>
                    <input type="text" class="form-control" name="edit_groupMenuNumber" id="edit_groupMenuNumber"  onkeypress="return isNumber(event)" />
                </div>
				<div class="form-group col-md-offset-6">
                    <label>Base Price:</label>
                    <input type="text" class="form-control" name="edit_baseprice" id="edit_baseprice" onkeypress="return isNumber(event)"/>
                </div>
				
				<div class="form-group col-md-6">
                    <label>Sales Price:</label>
                    <input type="text" class="form-control" name="edit_salesprice" id="edit_salesprice" onkeypress="return isNumber(event)"/>
                </div>
				
				 <div class="form-group col-md-offset-6">
                    <label>Restaurant Price:</label>
                    <input type="text" class="form-control" name="edit_restaurantprice" id="edit_restaurantprice" onkeypress="return isNumber(event)"/>
                </div>
				
				<div class="form-group col-md-12">
                    <label>Description:</label>
                    <input type="text" class="form-control" name="edit_description" id="edit_description"/>
                </div>
				
               <div class="form-group col-md-12">
                    <label>Image</label>
                    <input type="text" class="form-control" name="edit_menuImage" id="edit_menuImage"/>
                </div>
		  
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="submit_edit_menu">Save</button>
		    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>
  
  
  
  
  
  
  <div class="modal fade" id="myModal_add_section" role="dialog">
    <div class="modal-dialog">
    
    
      <div class="modal-content" style="width:450px">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:200px">Select sections</h4>
        </div>
        <div class="modal-body">
          
		  
				 <div>
				<div class="form-group">
				                   
                    <input type="text" class="form-control" name="section_text1" id="section_text1" placeholder="Heading 1" style="width:300px"/>
                </div>
               
				<div class="form-group">
                    <div class="dropdown">
        <button id="select_section" class="btn dropdown-toggle" type="button" style="width:150px;background-color:#eec591" data-toggle="dropdown">
            Select
            <span class="caret"></span>
        </button>
        <ul id="dd_section" class="dropdown-menu" style="width:150px">
		
            <li><a id="radio_btn">Radio Button</a></li>
            <li><a id="check_box">Checkbox</a></li>
            
        </ul>
    </div>
	</div></div>
	
	<div class="col-md-12">
				 <div class="form-group col-md-6">
				 <input type="text" id="type1" class="form-control" style="width:200px;" placeholder="Type 1"/>
				</div>
				<div class="form-group col-md-6">
                   <input type="text" class="form-control" name="section_price1" style="width:100px;float:right" id="section_price1" placeholder="Price 1"  onkeypress="return isNumber(event)" />
                </div><br/>
				<div class="form-group col-md-6">
				<input type="text" id="type2" class="form-control" style="width:200px" placeholder="Type 2"/>
				</div>
				<div class="form-group col-md-6">
                   <input type="text" class="form-control" name="section_price2" style="width:100px;float:right" id="section_price2" placeholder="Price 2"  onkeypress="return isNumber(event)" />
                </div><br/>
				<div class="form-group col-md-6">
				<input type="text" id="type3" class="form-control" style="width:200px" placeholder="Type 3"/>
				</div> 
				<div class="form-group col-md-6">
                   <input type="text" class="form-control" name="section_price3" style="width:100px;float:right" id="section_price3" placeholder="Price 3"  onkeypress="return isNumber(event)" />
                </div><br/>
				<div class="form-group col-md-6">
				<input type="text" id="type4" class="form-control" style="width:200px" placeholder="Type 4"/>
				</div> 
				<div class="form-group col-md-6">
                   <input type="text" class="form-control" name="section_price4" style="width:100px;float:right" id="section_price4" placeholder="Price 4"  onkeypress="return isNumber(event)" />
                </div><br/>
				<div class="form-group col-md-6">
				 <input type="text" id="type5" class="form-control" style="width:200px" placeholder="Type 5"/>
				 </div> 
				<div class="form-group col-md-6">
                   <input type="text" class="form-control" name="section_price5" style="width:100px;float:right" id="section_price5" placeholder="Price 5"  onkeypress="return isNumber(event)" />
                </div><br/>
				<div class="form-group col-md-6">
				 <input type="text" id="type6" class="form-control" style="width:200px" placeholder="Type 6"/>
				 </div>
				 
				<div class="form-group col-md-6">
                   <input type="text" class="form-control" name="section_price6" style="width:100px;float:right" id="section_price6" placeholder="Price 6"  onkeypress="return isNumber(event)" />
                </div><br/>
			</div>
				
				
				
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="submit_add_section">Save</button>
		    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div></div>
	
	
		<div class="modal fade" id="myModal_edit_section" role="dialog">
			<div class="modal-dialog">
			<div class="modal-content" style="width:450px">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title" style="margin-left:200px">Edit sections</h4>
			</div>
				<div class="modal-body">
					<label style="display:none" id="section_row"></label>
					<div>
						<div class="form-group">                  
							<input type="text" class="form-control" name="edit_section_text1" id="edit_section_text1" placeholder="Heading 1" style="width:300px"/>
						</div>
						<div class="form-group">
							<div class="dropdown">
								<button id="select_section_edit" class="btn dropdown-toggle" type="button" style="width:150px;background-color:#eec591" data-toggle="dropdown">
									Select
									<span class="caret"></span>
								</button>
								<ul id="dd_section_edit" class="dropdown-menu" style="width:150px">
									<li><a id="radio_btn">Radio Button</a></li>
									<li><a id="check_box">Checkbox</a></li>
								</ul>
							</div>
						</div>
					</div>
	
					<div class="col-md-12">
						 <div class="form-group col-md-6">
						 <input type="text" id="edit_type1" class="form-control" style="width:200px;" placeholder="Type 1"/>
						</div>
						<div class="form-group col-md-6">
						   <input type="text" class="form-control" name="edit_section_price1" style="width:100px;float:right" id="edit_section_price1" placeholder="Price 1"  onkeypress="return isNumber(event)" />
						</div><br/>
						<div class="form-group col-md-6">
						<input type="text" id="edit_type2" class="form-control" style="width:200px" placeholder="Type 2"/>
						</div>
						<div class="form-group col-md-6">
						   <input type="text" class="form-control" name="edit_section_price2" style="width:100px;float:right" id="edit_section_price2" placeholder="Price 2"  onkeypress="return isNumber(event)" />
						</div><br/>
						<div class="form-group col-md-6">
						<input type="text" id="edit_type3" class="form-control" style="width:200px" placeholder="Type 3"/>
						</div> 
						<div class="form-group col-md-6">
						   <input type="text" class="form-control" name="edit_section_price3" style="width:100px;float:right" id="edit_section_price3" placeholder="Price 3"  onkeypress="return isNumber(event)" />
						</div><br/>
						<div class="form-group col-md-6">
						<input type="text" id="edit_type4" class="form-control" style="width:200px" placeholder="Type 4"/>
						</div> 
						<div class="form-group col-md-6">
						   <input type="text" class="form-control" name="edit_section_price4" style="width:100px;float:right" id="edit_section_price4" placeholder="Price 4"  onkeypress="return isNumber(event)" />
						</div><br/>
						<div class="form-group col-md-6">
						 <input type="text" id="edit_type5" class="form-control" style="width:200px" placeholder="Type 5"/>
						 </div> 
						<div class="form-group col-md-6">
						   <input type="text" class="form-control" name="edit_section_price5" style="width:100px;float:right" id="edit_section_price5" placeholder="Price 5"  onkeypress="return isNumber(event)" />
						</div><br/>
						<div class="form-group col-md-6">
						 <input type="text" id="edit_type6" class="form-control" style="width:200px" placeholder="Type 6"/>
						 </div>
						 
						<div class="form-group col-md-6">
						   <input type="text" class="form-control" name="edit_section_price6" style="width:100px;float:right" id="edit_section_price6" placeholder="Price 6"  onkeypress="return isNumber(event)" />
						</div><br/>
						
					</div>
					</div>
					<div class="modal-footer">
					<button type="button" class="btn btn-primary" id="submit_edit_section">Save</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				</div>
				</div>
			</div>
		</div><br/><br/>
		<div id="div_footer" class="div_footer">
		<table>
			<tr class="spaceUnder">
				<td width=4%></td>
				<td width=10%>
					<a href="#" style="text-decoration:none; color:white"><b>About</b></a>
				</td>
				<td width=4%></td>
				<td width=15%>
					<a href="#" style="text-decoration:none; color:white"><b>About Uber eats</b></a>
				</td>
				<td width=4%></td>
				<td width=15%>
					<a href="#" style="text-decoration:none; color:white"><b>Become a delivery partner</b></a>
				</td>
				<td width=6%></td>
				<td >
					<a href="#" style="text-decoration:none; color:white;padding-left:40px"><b>1234567890</b></a>
				</td>
			</tr>
			<tr class="spaceUnder">
				<td width=4%></td>
				<td width=10%>
					<a href="#" style="text-decoration:none; color:white"><b>FAQ</b></a>
				</td>
				<td width=4%></td>
				<td width=15%>
					<a href="#" style="text-decoration:none; color:white"><b>Gift Cards</b></a>
				</td>
				<td width=4%></td>
				<td width=15%>
					<a href="#" style="text-decoration:none; color:white"><b>Become a restaurant partner</b></a>
				</td>
				<td width=6%></td>
				<td>
					<a href="#" class="fa fa-facebook-official" style="text-decoration:none;font-size:26px;width:60px;padding-left:50px;color:white"></a>
					<a href="#" class="fa fa-linkedin-square" style="text-decoration:none;font-size:26px;width:60px;padding-left:50px;color:white"></a>
					<a href="#" class="fa fa-twitter-square" style="text-decoration:none;font-size:26px;width:60px;padding-left:50px;color:white"></a>
					<a href="#" class="fa fa-instagram" style="text-decoration:none;font-size:26px;width:60px;padding-left:50px;color:white"></a>
				</td>
			</tr>
			<tr class="spaceUnder">
				<td width=4%></td>
				<td width=10%><a href="/delivery/rests/" style="text-decoration:none; color:white"><b>Restaurant Page</b></a></td>
			</tr>
		</table>
		</div><br/>
	</body>
</html>