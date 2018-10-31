<html>
	<head>
		<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
		<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
		<link href="${pageContext.request.contextPath}/resources/css/index.css" rel="stylesheet">
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/js/index.js"></script>
		
		<!-- Address LookUp -->

		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/address/css/jquery.address-suggest.css">
		<script src="//code.jquery.com/jquery.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/address/js/jquery.address-suggest.js"></script>

		   
		 <link href="${pageContext.request.contextPath}/resources/Content/bootstrap.min.css" rel="stylesheet" />
		 <link href="${pageContext.request.contextPath}/resources/Content/dpNumberPicker-2.x-skin.grey-min.css" rel="stylesheet" />
		 
		<!--<script src="${pageContext.request.contextPath}/resources/Scripts/jquery.min.js"></script>-->
		<script src="${pageContext.request.contextPath}/resources/Scripts/bootstrap.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/Scripts/jquery.validate.min.js"></script>
		
		<script src="${pageContext.request.contextPath}/resources/Scripts/jquery.payment.js"></script>
		<script src="${pageContext.request.contextPath}/resources/Scripts/dpNumberPicker-2.x-min.js"></script>
		
		<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.eot"></script>
		<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.svg"></script>
		<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.ttf"></script>
		<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.woff"></script>

		<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUTefqhrdeC-OBY_tZcXf-M9OghCh4Vx8&libraries=places&callback=initAutocomplete"
			async defer></script>

			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
			<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">
	</head>
	<body>
	
		<div class="top_menu" id="top_menu">	
		<input type="hidden" id="time" value='${time}'/>
		<input type="hidden" id="list" value='${message2}'/>
		<input type="hidden" id="list" value='${message1}'/>
			<table cellpadding=0 id="menu" style="font-weight:bold;width: 1400px;">
				<tr class="spaceUnder">
					<td width=8%><img id="logohome" src="${pageContext.request.contextPath}/resources/images/delivery22.jpg"/></td>
					<td width=15%>
						<a id="gohome" >
					<b style="font-size:30px;">Ace Roti </b><br/>
						
						</a>
					</td>
					<td width=350px></td>
					<td width=150px style="text-decoration:none;margin-top:50px;cursor: pointer;margin-left:70px">
						<button type="button" id="login" value="Sign In" class="btn btn-danger btn-group-justified" style="width:80px;height:auto;border-radius: 30px;display:block;margin-left:50px;" data-toggle="modal" data-target="#myModal_login">
						Sign In
						</button>
						<a id="logged_in" style="display:none;color:black;margin-top:10px"></a>
					</td>
					<td>
						<button type="button" id="register" value="Sign Up" class="btn btn-danger btn-group-justified" data-toggle="modal" data-target="#myModal_register"
						style="width:80px;height:auto;border-radius: 30px;display:block;margin-left:20px;">Sign Up</button>
					</td>
					<td>
						<button type="button" id="sign_out" value="Sign out" class="btn btn-danger btn-group-justified" 
						style="width:80px;height:auto;border-radius: 30px;display:none;margin-right:120px;">Sign Out</button>
					</td>
					<td id="hide_userid" style="display:none"></td>
					<td id="hide_userfname" style="display:none"></td>
					<td id="hide_userlname" style="display:none"></td>
					<td id="hide_useremail" style="display:none"></td>
					<td id="hide_userphone" style="display:none"></td>
					<td id="hide_zipid" style="display:none"></td>
				</tr>
			</table>    
		</div><br/><br/>
	   
		<div class="picture" id="picture"></div>
	<div id="div_address" class="div_address" style="display:block;margin-top:55px;background-image: url(${pageContext.request.contextPath}/resources/images/pic6.jpg);">
		<div id="locationField">
			<table>
				<tr>
					<td width=75%>
						<input id="autocomplete" placeholder=" Street address, city, state"
							onFocus="geolocate()" type="text" style="position:relative;width:500px;margin-left:295px;height:35px; font-size:14pt;"/>
					</td>
					<!-- <td>
						<button type="submit" id="schedule_order" value="schedule_order" class="btn btn-danger btn-group-justified"
						style="width:125px;height:auto;margin-left:30px;">Recurrening Schedule</button>
					</td> -->
				</tr>
			</table>
		</div>

		<table id="address" style="display:none">
			<tr>
				<td class="label">Street address</td>
				<td class="slimField"><input class="field" id="street_number" disabled="true" /></td>
				<td class="wideField" colspan="2"><input class="field" id="route" disabled="true" /></td>
			</tr>
			<tr>
				<td class="label">City</td>
				<td class="wideField" colspan="3"><input class="field" id="locality" disabled="true" /></td>
			</tr>
			<tr>
				<td class="label">State</td>
				<td class="slimField"><input class="field" id="administrative_area_level_1" disabled="true" /></td>
				<td class="label">Zip code</td>
				<td class="wideField"><input class="field" id="postal_code" disabled="true" /></td>
			</tr>
			<tr>
				<td class="label">Country</td>
				<td class="wideField" colspan="3"><input class="field" id="country" disabled="true" /></td>
			</tr>
		</table>
	
		<div id="select_btn" style="display:none"></div>
		<div id="hideerror_details" style="display:none"></div>
		<div>
		<table>
			<tr style="display:block">
				<td>
				<div id="date_corp" class="dropdown" style="margin-left: 210%;margin-top: 22%;text-align:center;">
						<button id="dd_btn11" class="btn dropdown-toggle btn-group-justified" style="width:164px;background-color:#eec591" data-toggle="dropdown">
							<span class="caret"></span>
						</button>
						<ul id="dd_date_rest" class="dropdown-menu" style="width:120px">
							<li><a id="demo00"></a></li>
							<li><a id="demo01"></a></li>
							<li><a id="demo02"></a></li>
							<li><a id="demo03"></a></li>
							<li><a id="demo04"></a></li>
							<li><a id="demo05"></a></li>
							<li><a id="demo06"></a></li>	
						</ul>
					</div>
					<!-- <div id="dd_btn1" value="" class="well-sm col-md-2" style="margin-left: 190%;
    margin-top: 18%;text-align:center;width:130px;background-color:#eec591">
				</div> -->
				</td>
				<td>
				<div style="margin-left:246%;margin-top: 22%;">
						<button id="schedule_order" value="schedule_order" class="btn btn-group-justified"
						style="width:auto;background-color:#eec591;">Recurrening Schedule</button>
						</div>
				</td>
			</tr>
		</table> 
		</div>
	<!-- <div class="row">
		
				
		<div class="col-md-2">
	
		</div>
		</div> -->

		<%-- <div style="margin-left:425px;margin-top:30px;font-size:1.3vw">
			<label><font color="#727675">Delivery Time:${message1} to ${message2}</font></label>		
		</div> --%>
		
			<table>
			<tr id="date_time_rest" style="display:none">
				<td>
					<div class="dropdown" style="margin-left:360px;margin-top:30px;width:150px">
						<button id="dd_btn11" class="btn dropdown-toggle" type="button" style="width:120px;background-color:#eec591" data-toggle="dropdown">
							 Select Date
							<span class="caret"></span>
						</button>
						<ul id="dd_date_rest" class="dropdown-menu" style="width:120px">
							<li><a id="demo00"></a></li>
							<li><a id="demo01"></a></li>
							<li><a id="demo02"></a></li>
							<li><a id="demo03"></a></li>
							<li><a id="demo04"></a></li>
							<li><a id="demo05"></a></li>
							<li><a id="demo06"></a></li>	
						</ul>
					</div>
				</td>
				<td>
					<div class="dropdown" id="time"  style="margin-left:50px;margin-top:30px;width:200px">
						<button id="dd_btn22" class="btn dropdown-toggle" type="button" data-toggle="dropdown" style="background-color:#eec591" onclick="set_rest_time()">
							Select Time
							<span class="caret"></span>
						</button>
						<ul id="dd_time_rest" class="dropdown-menu scrollable-menu"  role="menu" style="width:200px">
							<li><a id="time00">ASAP</a></li>
							<li><a id="time01"></a></li>
							<li><a id="time02"></a></li>
							<li><a id="time03"></a></li>
							<li><a id="time04"></a></li>
							<li><a id="time05"></a></li>
							<li><a id="time06"></a></li>
							<li><a id="time07"></a></li>
							<li><a id="time08"></a></li>
							<li><a id="time09"></a></li>
							<li><a id="time010"></a></li>
							<li><a id="time011"></a></li>
							<li><a id="time012"></a></li>
							<li><a id="time013"></a></li>
							<li><a id="time014"></a></li>
							<li><a id="time015"></a></li>
							<li><a id="time016"></a></li>
							<li><a id="time017"></a></li>
							<li><a id="time018"></a></li>
							<li><a id="time019"></a></li>
							<li><a id="time020"></a></li>
							<li><a id="time021"></a></li>
							<li><a id="time022"></a></li>
							<li><a id="time023"></a></li>
							<li><a id="time024"></a></li>
							<li><a id="time025"></a></li>
							<li><a id="time026"></a></li>
							<li><a id="time027"></a></li>
							<li><a id="time028"></a></li>
							<li><a id="time029"></a></li>
							<li><a id="time030"></a></li>
							<li><a id="time031"></a></li>
						</ul>
					</div>
				</td>
			</tr>
		</table> 
	</div> 
	<br/>
 <div class="container" >
  <div class="modal fade" id="profile_details" role="dialog" style="overflow: hidden;">
    <div class="modal-dialog modal-lg" style="width:1100px;">
    
      <div class="modal-content" style="width:1100px;">
        <div class="modal-header">
	
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h3 style="text-align: center;font-weight:bold">Your Account Details</h3>
        </div>
        <div class="modal-body col-md-12" style="padding: 20px;" >
			<div class="col-md-6">
				<div id="account_edit" style="border-radius: 7px;border:1px solid #dadada;padding-left:10px;width:500px;"> 
						<h4 class="glyphicon glyphicon-user" style="font-size:24px; font-weight:500">
						<span id="nameofuser"></span></h4><br/><br/>
						<a id="edit_user_details">Edit</a>	
						<a id="reset_password" style="float:right;padding-right: 5px;" data-toggle="modal" data-target="#myModal_reset_password" data-dismiss="modal">Reset Password</a>
				</div>
			<br/>
			<div id="payment_details" style="border-radius: 7px;border:1px solid #dadada;margin-bottom:20px;width:500px;">
					<div style="margin-bottom: 25px;margin-left:20px;">
					<h4>
						<label style="width:250px;">Your Cards</label>
						<label style="width:100px;;margin-left:30px">Expires</label>
					</h4>
					</div>
	    			<div id="card_details"></div>
	    <div style="margin-bottom:10px;margin-top:10px;padding-top: 10px;margin-left:20px;margin-right:20px;">
	   
	   <button type="button" class="btn btn-info"  style="width:150px;border-radius:10px;padding-bottom:10px;margin-left:150px;"
			 id="modal_save_card">Add new card</button>
		</div>
		</div>
  
		</div>
  
  <div class="col-md-6">
	<div style="border-radius: 7px;border:1px solid #dadada;padding-left:10px;width:500px;">
	<h4 style="font-size:24px;margin-bottom: 20px; font-weight:500">
	My Orders</h4>
	<div style="margin-left:20px;">
		<h6>
			<label style="width: 50px;text-align: center;">Order ID</label>
			<label style="width: 120px;text-align: center;">Order Date</label>
   			 <label style="width: 100px;text-align: center;">Schedule Status</label>
			<label style="width:125px;text-align: center;">Order Status</label>
			<label style="width:50px;text-align: center;"></label>
		</h6>
		<hr style="margin-top: 0px;margin-bottom: 0px;">
	</div>
    <div id="account_orders" style="margin-left:20px;"></div>
   </div>
  </div>
 </div>
         <div class="modal-footer">
         
        </div>
      </div>
      
    </div>
  </div>
  </div>


	
<div class="when well well-lg col-md-12" id="when" style="display:block">  
  		<div class="col-md-2 col-md-offset-0.5">
		<div class="dropdown">
			<button id="dd_btn3" class="btn dropdown-toggle" style="background-color:orange;" type="button" data-toggle="dropdown">Select Apartment Complex
				<span class="caret"></span></button>
					<ul id="dd3" class="dropdown-menu">
					</ul>
		</div>
   </div>
   <div class="col-md-3" style="font-size:1.2vw;margin-left: 21%;padding-top: 0.3%;">
   <label><font color="#727675">Delivery Time: ${message1} to ${message2} </font></label>
   </div>
	</div> 

<div id="restAndCartContainer" class="col-md-12" >
	
	<div id="table_menus" class = "col-md-8" style="margin-bottom:10px;">
	
	
	</div>
	

<!--Show Cart-->		
			<div class="col-md-4">
					<div class="col-md-1">
					</div>
					
					<div class="col-md-10" id="showcart" style="display:none;border:1px solid #c4c4c4;border-radius: 10px;">
						<div class="row">
							<div style="padding-left:60px;padding-top:10px;"><img src="${pageContext.request.contextPath}/resources/images/icon_cart.png" />&nbsp;&nbsp;Your Cart is Empty
							</div>
						</div>
						<div class="row">
								<div style="padding-left:25px;padding-bottom:10px;">
										<table id="cartTable" style="align-items:left">
											<tbody id="tid" style="height:50px;overflow-y: auto;"></tbody>
										</table>
						
										<table style="margin-bottom:10px;align-items:left;margin-top:10px;">
												<tr style="margin-bottom:10px;"><td width=10%></td> 
													<td style="font-size:16px;font-weight:bold;width:150px">Subtotal</td>
													<td>
													<span id="sales_subtotal" style="font-size:16px;font-weight:bold;float:left;"></span>
													</td>
													<td id="base_subtotal" style="display:none"></td>
													<td id="rest_subtotal" style="display:none"></td>
												</tr>
										</table>
										<button type="submit" name="Review Your Order" id="review_order" style="margin-bottom:10px;"
										class="btn btn-success btn-group-justified">
											Review Your Order
										</button>
								</div>
						</div>
					</div>
					<div class="col-md-1">
					</div>
			</div>
					
	
	<!--Empty Cart-->
			<div class="col-md-4">
				<div class="col-md-1">
				</div>
				<div class="col-md-10" id="show_empty_cart" style="border:1px solid #c4c4c4;border-radius: 10px;margin-bottom:10px;">
				<div class="row">
					<div style="padding-left:60px;padding-top:10px;"><img src="${pageContext.request.contextPath}/resources/images/icon_cart.png" />&nbsp;&nbsp;Your Cart is Empty
					</div>
				</div>
				<div class="row">
					<div style="padding-bottom:10px;">
						<img src="${pageContext.request.contextPath}/resources/images/shopping_cart_red.png" 
								style="margin-left:90px;height:100px;width:120px;"/>
					</div>
				</div>
				</div>
				<div class="col-md-1">
				</div>
			</div> 
  </div>
	
	
<div class="modal fade" id="applyCoupon" role="dialog">
    <div class="modal-dialog">
   
      <!-- Modal content-->
      <div class="modal-content">
       <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Please note:</h4>
        </div>
        <div class="modal-body">
          <p>Only Logged in users can apply coupons!</p>
        </div>
      </div>
      
    </div>
  </div>
	
	
	<div class="modal fade" id="myModal_login" role="dialog">
		<div class="modal-dialog">
    
			<!-- Modal content-->
			<div class="modal-content" style="color:black;width:400px;margin-left:100px">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" style="margin-left:150px;">
						<b>Sign In</b>
					</h4>
				</div>
				<div class="modal-body">
					<form action="" name="login" id="login">
						<div class="input-group">
							<span class="input-group-addon"><label class="glyphicon glyphicon-user"></label></span>
							<input type="text" class="form-control" name="login_user" id="login_user" placeholder="Email">
						</div><br/>
						<div class="input-group">
							<span class="input-group-addon"><label class="glyphicon glyphicon-lock"></label></span>
							<input id="login_pass" type="password" class="form-control" name="login_pass" placeholder="Password">
						</div>
						<a style="font-size:14px;font-weight:bold;float:right;" 
							data-toggle="modal" data-target="#myModal_forgot_password" data-dismiss="modal">Forgot Password?</a><br/><br/>
						
						<div class="form-group">
							<button type="button" class="btn btn-success" id="submit_login" style="font-size:16px;width:100%;font-weight:bold">
								Sign In
							</button>
						</div>	  
						<p style="margin-left:50px;">Don't have an account? <a data-toggle="modal" data-target="#myModal_register" data-dismiss="modal"> Create Your Account</a></p>
					</div>
					</form>
			</div>
      
		</div>
	</div>
	
	<div class="modal fade" id="myModal_reset_password" role="dialog">
    <div class="modal-dialog">
    
     
     
      <div class="modal-content" style="width:300px;margin-left:130px">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" data-toggle="modal" data-target="#profile_details">&times;</button>
          <h4 class="modal-title" style="margin-left:50px">Change Password</h4>
        </div>
        <div class="modal-body">
        
        <div class="form-group">
         <label>Current Password</label>
		 <input type="password" class="form-control" name="pass_current" id="pass_current">
	 </div>
     
     <div class="form-group">
         <label>New Password</label>
		 <input type="password" class="form-control" name="pass_new" id="pass_new">
	 </div>
     
     <div class="form-group">
         <label>Confirm Password</label>
		 <input type="password" class="form-control" name="pass_confirm" id="pass_confirm">
	 </div>
     
	 <div class="form-group">
          <button class="btn" data-dismiss="modal" aria-hidden="true" data-toggle="modal" data-target="#profile_details">Close</button>
        <button class="btn btn-primary" id="pass_modal_save">Save changes</button>
        </div>
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
						<input type="email" class="form-control" name="forgotpass_email" id="forgotpass_email" placeholder="Please Enter your Email">
					</div><br/>    
					<button type="button" id="submit_forgotpass" class="btn btn-success" style="font-size:16px;width:100%;font-weight:bold">Submit</button>
				</div>
				</form>
			</div> 
		</div>
	</div>
  

  <div class="modal fade" id="myModal_register" role="dialog">
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
                    <span style="color:red">*</span><label>First name</label>
					
                    <input type="text" class="form-control" name="firstname" id="firstname">
					
                </div>
                <div class="form-group col-md-offset-6">
                    <span style="color:red">*</span><label>Last name</label>
                    <input type="text" class="form-control" name="lastname" id="lastname">
                </div>
               
                <div class="form-group col-md-6">
                    <span style="color:red">*</span><label>Email address</label>
                    <input type="text" class="form-control" name="email" id="email">
                </div>
				 <div class="form-group col-md-offset-6">
                    <span style="color:red">*</span><label>Phone number </label> (For Password Reset)
                    <input type="text" class="form-control" name="phone" id="phone" maxlength="10" onkeypress="return isNumber(event)">
                </div>
                <div class="form-group col-md-6">
                    <span style="color:red">*</span><label>Password</label>
                    <input type="password" class="form-control" name="password" id="password">
                </div>
				 <div class="form-group col-md-offset-6">
                    <span style="color:red">*</span><label>Confirm Password</label>
                    <input type="password" class="form-control" name="confirm_password" id="confirm_password">
                </div>
                <br/>
				<p style="font-size:14px">By clicking "Submit" I confirm that I have read and agree to the <a data-toggle="modal" 
				data-target="#myModal_terms_conditions"> Terms & Conditions </a> and 
				<a data-toggle="modal" data-target="#myModal_terms_conditions"> Privacy Policy </a></p>
				
			<div class="form-group">
                  <button type="button" id="submit_registration" class="btn btn-success" style="font-size:16px;width:100%;font-weight:bold">Create Your Account</button></div>
				  
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


<div id="result"></div>

    <div class="container-fluid col-md-12" id="popupclose">
        <div class="row">
            <div id="myModal1" class="modal fade" >
                <div class="modal-dialog" style="width:52%">
                    <div class="modal-content" class="col-md-12">
                        <div class="modal-header" class="col-md-12" style="background-color: #f3a707;">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        	<div class="modal-title">
                                <div style="font-size:26px; font-weight:500; padding-bottom:none;" name="display1" id="display1"></div>
                       		 </div>
                         </div>
                      <div class="modal-body">
                      <div class="row">
                      <h4 style="height: 200px;width: 300px;margin-left: 53%;" id="display4"></h4>
                      </div>
                      
          
                       <div>
                       <p style="font-size:19px;text-align:center;" id="display3"></p>
                       </div>
                    
					</div>
					</div>
					</div>
				</div>
            </div>
	</div>
<div class="container-fluid col-md-12" id="popupclose">
		<div class="row">
			<div id="myModal2" class="modal fade">
				<div class="modal-dialog" style="width: 52%">
					<div class="modal-content" class="col-md-12">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<div class="modal-title">
								<div class="col-md-12" name="display1" id="display1">
								</div>
							</div>
						</div>
						<div class="modal-body col-md-12" style="color: steelblue;">
							<div class="col-md-6">
									<div name="display2" id="display2"></div>
									<div name="display3" id="display3"></div>
									<div style="display: block" name="base_price" id="base_price"></div>
									<div style="display: block" name="rest_price" id="rest_price"></div>
									<div style="display: block" name="display5" id="display5"></div>
									<div style="display: block" name="display6" id="display6"></div>
									<div style="display: block" name="display7" id="display7"></div>
									<div style="display: block" name="save_menuid" id="save_menuid"></div>
							</div>
							<div class="col-md-6" id="display4" name="display4">
							</div>
							
						</div>
						<div class="modal-footer col-md-12" id="updatecart">
							<div class="col-md-3 col-md-offset">
								<button type="button" id="qtyminus2" field="item_qty" class="glyphicon glyphicon-minus-sign btn btn-group-justified btn-danger"></button>
								<input type="text" name="item_qty" id="qty2" value="1" />
								<button type="button" id="qtyplus2" field="item_qty" class="glyphicon glyphicon-plus-sign btn btn-group-justified btn-success"></button>
							</div>
							<div class="col-md-9">
								<button type="submit" style="height:45px;" name="updatetocart" id="update_qtycart" field="item_qty" class="btn btn-success btn-group-justified col-md-push-5" data-dismiss="modal"></button>
								<p id="updaterowid" style="display: none"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

  
  
  <div class="modal fade" id="myModal_payment" role="dialog">
     <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content" style="width:480px;height:300px">
		 <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" align="center" style="color:black"><b>My Payment Details</b></h4>
		  <span>
            <div class="form-group">
<input id="cc-number" type="tel" class="form-control cc-number" autocomplete="cc-number" placeholder="Card Number" onkeyup="ValidateCreditCardNumber()"
				style="width:250px;float:left;margin-bottom:10px" required>
            </div>
            <div class="form-group">
               <input id="cc-exp" type="tel" class=" form-control cc-exp" autocomplete="cc-exp" placeholder="MM / YY"  onkeyup="ValidateCreditCardNumber()"
				style="width:85px;float:left;margin-left:12px;margin-bottom:10px"	required>
             </div>
            <div class="form-group">
			<input id="cc-cvc" type="tel" class="form-control cc-cvc" autocomplete="off" placeholder="CVC"  onkeyup="ValidateCreditCardNumber()"
				style="width:80px;float:right;margin-left:8px;margin-bottom:10px" required>
            </div><br/><br/></span>
 <div class="form-group">
               
  <input type="text" id="cc-name" class="form-control" placeholder="Card Holder Name" style="width:438px;margin-bottom:5px;" /> </div>
  <div class="form-group">
  <input type="text" id="cc-address" class="form-control" placeholder="Billing Address" style="width:215px;float:left;margin-bottom:10px" /></div>
    <div class="form-group">
  <input type="text" id="cc-city" class="form-control" placeholder="City" style="width:215px;float:right;margin-bottom:10px" /></div>
  <div class="form-group">
  <input type="text" id="cc-state" class="form-control" placeholder="State" style="width:215px;float:left;margin-bottom:15px;" /></div>
    <div class="form-group">
  <input type="text" id="cc-zip" class="form-control" placeholder="Zipcode" style="width:215px;float:right;margin-bottom:15px" maxlength="5" onkeypress="return isNumber(event)"/></div>
         
        <!--</div>
        <div class="modal-footer">-->
		<div class="form-group">
		 <button type="button" id="save_ccard" style="width:210px;display:none;float:left" class="btn btn-primary">Save Credit Card</button>
		 <button type="button" id="update_ccard" style="width:210px;display:none;float:left" class="btn btn-primary">Update Credit Card</button>
         <button type="button" id="submit_card" style="width:210px;display:none;float:left" class="btn btn-primary">Add Credit Card</button>
		 <button type="button" id="update_card" style="width:210px;display:none;float:left" class="btn btn-primary">Update Card</button>
		 <button type="button" id="cancel_card" style="width:210px;float:right" class="btn" data-dismiss="modal">Cancel </button>
        </div>
		</div>
      </div>
      
    </div>
  </div>
  
  
  
  
 <!--<div class="modal fade" id="myModal_payment1" role="dialog">
    <div class="modal-dialog">
    
     
     <div class="modal-content" style="width:480px">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" align="center" style="color:blue"><b>My Payment Details</b></h4>

        </div>
		
		  <div class="modal-body">
		  <span>
            <div class="form-group">
               
                <input id="cc-number1" type="tel" class="form-control cc-number1" autocomplete="cc-number" placeholder="Card Number" onkeyup="ValidateCreditCardNumber1()"
				style="width:250px;float:left;" required>
            </div>

            <div class="form-group">
               
                <input id="cc-exp1" type="tel" class=" form-control cc-exp1" autocomplete="cc-exp" placeholder="MM / YY" onkeyup="ValidateCreditCardNumber1()"
				style="width:80px;float:left;margin-left:12px;"	required>
             </div>

            <div class="form-group">
                
                <input id="cc-cvc1" type="tel" class="form-control cc-cvc1" autocomplete="off" placeholder="CVC" onkeyup="ValidateCreditCardNumber1()"
				style="width:80px;float:right;margin-left:12px;" required>
            </div><br/><br/></span>
    
  <input type="text" id="cc-name1" class="form-control" placeholder="Card Holder Name" style="width:440px;margin-bottom:5px;" />
  <input type="text" id="cc-address1" class="form-control" placeholder="Billing Address" style="width:215px;float:left;margin-bottom:5px" />
  <input type="text" id="cc-city1" class="form-control" placeholder="City" style="width:215px;float:right;margin-bottom:5px" />
  <input type="text" id="cc-state1" class="form-control" placeholder="State" style="width:215px;float:left;margin-bottom:15px;" />
  <input type="text" id="cc-zip1" class="form-control" placeholder="Zipcode" style="width:215px;float:right;margin-bottom:5px" />
  
        </div>
        <div class="modal-footer">
         <button type="button" id="save_card" style="width:210px;display:block;" class="btn btn-lg btn-primary"  onclick="ValidateCreditCardNumber1()">Save</button>
		 <button type="button" id="update_cc" style="width:210px;display:none;" class="btn btn-lg btn-primary" onclick="ValidateCreditCardNumber1()">Update Card</button>
        </div>
		 
		
      </div>
      
    </div>
  </div>-->
  
  
  <div class="modal fade" id="myModal_edit" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content" style="color:black">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="margin-left:200px"><b>Edit Account Details</b></h4>
        </div>
        <div class="modal-body">
         

                <div class="form-group col-md-6">
                    <label>First name</label>
                    <input type="text" class="form-control" id="edit_firstname" value="" />
                </div>
                <div class="form-group col-md-offset-6">
                    <label>Last name</label>
                    <input type="text" class="form-control" id="edit_lastname" value="" />
                </div>
               
                <div class="form-group col-md-6">
                    <label>Email address:</label>
                    <input type="text" class="form-control" id="edit_email" value="" />
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Telephone number:</label>
                    <input type="text" class="form-control" id="edit_phone" maxlength="10" value="" onkeypress="return isNumber(event)"/>
                </div>
              
			<div class="form-group col-md-6">
                  <button type="button" id="save_details" class="btn btn-success" style="font-size:16px;width:100%;font-weight:bold">
				  Update</button></div>
				  
				  <div class="form-group col-md-offset-6">
                  <button type="button" id="cancel_details" class="btn" data-toggle="modal" data-target="#profile_details" data-dismiss="modal"
				  style="font-size:16px;width:100%;font-weight:bold">
				  Cancel</button></div>
               
        </div>
		
  <br/>
       
        
      </div>
      
    </div>
  </div>
  <div id="loader" style="display:none;"></div>
  
  <div class="col-md-12" style="float:left;padding-left:13px;display:none;" id="review_details"> 
 <div class="col-md-12" style="margin-left:1%;padding-left:13px;background-color:lightgray;height:40px;margin-bottom:5px;width:1300px;padding-top:10px;">
  <div class="col-md-8" style="display:none;" id="back_corp_checkout_panel">
 
 <a style="text-decoration:none;color:black;font-size:16px;cursor: pointer;" id="corp_review_menu_back"> Menu </a><p style="font-size:18px" class="fa">&#xf054;</p>
 <a style="text-decoration:none;color:black;font-size:16px;cursor: pointer;">  Checkout </a>
<a style="text-decoration:none;color:black;font-size:16px;margin-left:50%"></a></div>
 
 <div class="col-md-8" style="display:none;" id="back_rest_checkout_panel">
 
 <a style="text-decoration:none;color:black;font-size:16px;cursor: pointer;" id="rest_review_menu_back"> Menu </a><p style="font-size:18px" class="fa">&#xf054;</p>
 <a style="text-decoration:none;color:black;font-size:16px;cursor: pointer;">  Checkout </a></div>
 
  <div class="col-md-4">
  <a style="float:right;padding-right:15px;font-size:16px;display:none" id="print_pdf">Print as PDF</a>
 </div> </div>
 <embed id="frPDF" height="10" type="application/pdf" width="800" src="http://eurecaproject.eu/files/5013/9885/7113/example4.pdf"></embed>
  <div class="col-md-6">
  <div id="review_corp_delivery_details" style="border:1px solid #dadada;padding-left:10px;margin-bottom:5px;display:none">
  <h4 style="font-size:24px; font-family: Times New Roman">
  Delivery Details</h4><br/>
  <label style="width:70px;margin-bottom:5px;font-weight:lighter">When:</label><label style="width:200px;font-weight:lighter" align="left" for="date_delivery" id="date_delivery"></label>
  <br/>
  <div id="where_corp"><label style="width:70px;margin-bottom:5px;font-weight:lighter;">Where:</label><label id="corp_address_delivery" style="font-weight:lighter"></label><br/>
 <label style="width:70px;margin-bottom:5px;font-weight:lighter"></label> <label id="address_delivery" style="font-weight:lighter"></label></div><br/><br/>

  <label style="width:70px;margin-bottom:5px;font-weight:lighter"><span style="color:red">*</span>Name:</label>
  <input type="text" class=" form-control" style="width:300px;display:inline-block;margin-bottom:5px;" id="corp_name_delivery" value="" required />
  <label style="width:20px"></label>
   <label style="width:50px;margin-bottom:5px;font-weight:lighter"><span style="color:red">*</span>Phone:</label>
  <input type="text" class=" form-control" style="width:150px;display:inline-block;margin-bottom:5px;" id="corp_phone_delivery" value="" onkeypress="return isNumber(event)" required /><br/><br/>
  
  
   <label style="width:70px;margin-bottom:5px;font-weight:lighter">Email:</label>
  <input type="text" class=" form-control" style="width:300px;display:inline-block;margin-bottom:5px;" id="corp_email_delivery" value="" required /><br/><br/>
  
  <!--<span><label style="width:70px"></label>
   <textarea placeholder="Special instructions" class="form-control" rows="1" style="width:605px;resize:none; display:inline-block;margin-bottom:5px;" 
  id="textarea_delivery"></textarea></span>-->
  <textarea placeholder="Delivery instructions" class="form-control" rows="1" style="width:605px;resize:none; display:inline-block;margin-bottom:29px;" 
  id="textarea_delivery"></textarea>
  </div>
  
  <div id="review_rest_delivery_details" style="border:1px solid #dadada;padding-left:10px;margin-bottom:5px;display:none">
  <h4 style="font-size:24px; font-family: Times New Roman">
  Delivery Details</h4><br/>
  <label style="width:70px;margin-bottom:5px;font-weight:lighter">When:</label><label style="width:400px;font-weight:lighter;" align="left" id="rest_date_delivery"></label>
  <br/>
  <label style="width:70px;margin-bottom:5px;font-weight:lighter;">Where:</label>
  <label id="rest_address_delivery" style="font-weight:lighter"></label><br/><br/>
  
  <label style="width:70px;margin-bottom:5px;font-weight:lighter"><span style="color:red">*</span>Name:</label>
  <input type="text" class=" form-control" style="width:300px;display:inline-block;margin-bottom:5px;" id="rest_name_delivery" value="" required />
  <label style="width:20px"></label>
   <label style="width:50px;margin-bottom:5px;font-weight:lighter"><span style="color:red">*</span>Phone:</label>
  <input type="text" class=" form-control" style="width:150px;display:inline-block;margin-bottom:5px;" id="rest_phone_delivery" value="" required /><br/><br/>
  
  
  <label style="width:400px"></label>
   <label style="width:50px;margin-bottom:5px;font-weight:lighter">Email:</label>
  <input type="text" class=" form-control" style="width:150px;display:inline-block;margin-bottom:5px;" id="rest_email_delivery" value="" required /><br/><br/>
  
  <!--<span><label style="width:70px"></label>
   <textarea placeholder="Special instructions" class="form-control" rows="1" style="width:605px;resize:none; display:inline-block;margin-bottom:5px;" 
  id="textarea_delivery"></textarea></span>-->
  <textarea placeholder="Special instructions" class="form-control" rows="1" style="width:605px;resize:none; display:inline-block;margin-bottom:5px;" 
  id="textarea_delivery"></textarea>
  </div>
  <br/>
  
  <div id="print_delivery_details" style="width:850px;border:1px solid #dadada;;padding-left:10px;margin-bottom:15px;display:none">
  <h4 style="font-size:24px; font-family: Times New Roman">
  Delivery Details</h4><br/>
  <label style="width:70px;margin-bottom:5px;font-weight:lighter">When:</label><label style="width:400px;font-weight:lighter" align="left" id="print_date_delivery"></label>
  <br/>
  <label style="width:70px;margin-bottom:5px;font-weight:lighter">Where:</label><label id="print_corp_address_delivery" style="font-weight:lighter"></label><br/>
 <label style="width:70px;margin-bottom:5px;font-weight:lighter"></label> <label id="print_address_delivery" style="font-weight:lighter"></label><br/><br/>
  <label style="width:70px;margin-bottom:5px;font-weight:lighter">Name:</label>
  <label style="width:300px;display:inline-block;margin-bottom:5px;" id="print_name_delivery"/></label>
  <label style="width:20px"></label>
   <label style="width:50px;margin-bottom:5px;font-weight:lighter">Phone:</label>
  <label style="width:150px;display:inline-block;margin-bottom:5px;" id="print_phone_delivery"></label><br/><br/>
  
  
  <label style="width:400px"></label>
   <label style="width:50px;margin-bottom:5px;font-weight:lighter">Email:</label>
  <label style="width:150px;display:inline-block;margin-bottom:5px;" id="print_email_delivery"/></label><br/><br/>
  
  <!--<span><label style="width:70px"></label>
   <textarea placeholder="Special instructions" class="form-control" rows="1" style="width:605px;resize:none; display:inline-block;margin-bottom:5px;" 
  id="textarea_delivery"></textarea></span>-->
   <label style="width:150px;margin-bottom:5px;font-weight:lighter">Special instructions:</label><label id="print_textarea_delivery" style="font-weight:lighter"></label><br/>
  
  </div>
  
  
 <div id="review_paymentcard_details" style="border:1px solid #dadada;margin-bottom:20px;padding-left:10px;display:block">
 <h4 style="font-size:24px; font-family: Times New Roman">
  Payment Card Details</h4>

<div style=" padding-bottom: 20px;">
         <div><h5><label width=15%></label><label style="width:300px;font-weight:lighter;padding-left:20px"> Your Credit & Debit Cards</label>
		 <label style="width:100px;font-weight:lighter;padding-left:10px">Expires</label></h5></div>
		
		<div id="disply_new_card"></div>
		
			<button type="button" class="btn btn-info"  style="width:150px;border-radius: 10px; padding-bottom: 10px;margin-left:5px;" 
			data-toggle="modal"" data-dismiss="modal" id="modal_add_card">
			
			Add new card</button>
			
       </div> 
	   <br/>
  
 
 </div>
  </div>
  
	<div class="col-md-6">
		<div id="review_order_details" style="border:1px solid #dadada;padding-left:10px;display:block">
			<h4 style="font-size:24px;font-family:Times New Roman">Order Details</h4><br/>
			<div id="cart_item_details" style="padding-left: 30px;"></div>
		</div><br/>
		 <!-- <div id="print_review_order_details" style="border:1px solid #dadada;padding-left:10px;display:none">
		 
		  <h4 style="font-size:24px;font-family:Times New Roman">
		  Order Details</h4><br/>
		  <div id="print_cart_item_details">
		  </div>
		  </div>-->
		  <br/>
  
		<div id="review_order_summary" style="border:1px solid #dadada;margin-bottom:20px;padding-left:10px;">
		
			<h4 style="font-size:24px; font-family: Times New Roman">
				Order Summary
			</h4><br/>
		  

			<div style="width:320px;padding-left:30px" class="col-md-12">Subtotal<span style="float:right;padding-right:60px" id="sales_review_subtotal"></span>
				<span style="display:none" id="base_review_subtotal"></span>
				<span style="display:none" id="rest_review_subtotal"></span>
			</div><br />
			<div style="width:600px;" class="col-md-12">
				<div class="col-md-3" style="float:left;padding-right:30px">Coupon</div>
				<div class="col-md-7" style="padding-bottom:20px;margin-left: 44px;display:block" id="review_coupon"><a style="cursor:pointer;text-decoration:none">Apply Coupon</a></div>
				
				<div class="col-md-7" id="hide_applycoupon" style="display:none">
					<input type="text" class="form-control col-md-3" id="coupon_code" placeholder="Coupon Code" style="width:120px"><span>
					<button type="submit" id="submit_coupon" class="btn btn-info col-md-push-5" style="margin-left: 5px;" disabled>Apply</button></span>
				</div>
				
				<div id="hide_coupon" style="display:none">0</div>
				
				<div class="col-md-7" id="hide_removecoupon" style="display:none;padding-bottom:10px;">
					<label id="display_code"></label>
					<a id="remove_coupon" class="col-md-push-5" style="padding-bottom:20px;margin-left:5px;cursor:pointer;text-decoration:none">Remove</a></span>
				</div>
				
				<!--<div class="col-md-push-6"><a id="remove_coupon" style="display:none">Remove</a></span></div>-->
			</div><br />
			<div style="width:320px;padding-left:30px" class="col-md-12">Taxes<span style="float:right;padding-right:50px" id="review_tax"></span></div><br />
			<!-- <div style="width:320px;padding-left:30px" class="col-md-12">Delivery Charges<span style="float:right;padding-right:60px" id="review_delivery_charges"></span></div><br />-->

			<div style="width:600px;display:block;" class="col-md-12" id="driver_tip">
				<div class="col-md-3" style="float:left;padding-right:30px">Driver's Tip</div>
			
				<div class="col-md-7" id="tip_buttons" style="display:block;margin-left: 5.3%;">
					<button type="button" class="btn showinfo"  id="tip_btn1">$1</button>
					<button type="button" class="btn showinfo"  id="tip_btn2">$2</button>
					<button type="button" class="btn showinfo"  id="tip_btn3">$3</button>
					<button type="button" class="btn showinfo"  id="tip_btn4">$4</button>
					<button type="button" class="btn showinfo"  id="tip_btn5">Other</button>
				</div>
				
				<div class="col-md-7" id="change_btn" style="display:none;margin-left: 5.3%;">
				<div class="col-md-3" id="tip_value">0</div>
				<a id="remove_tip" class="col-md-push-5" style="margin-left:5px;cursor:pointer;text-decoration:none">Change</a>
				</div>
			
				
			
				<div class="col-md-7" id="hide_othertip" style="display:none">
					<input type="text" class="form-control col-md-3" id="othertip_value" placeholder="Tip" style="width:120px" onkeypress="return isNumber(event)"><span>
					<button type="submit" id="submit_othertip" class="btn btn-info col-md-push-5" style="margin-left: 5px;" disabled>Apply</button></span>
				</div>
				<br />
			<hr>
				<div style="width:320px;" class="col-md-12">Total<span style="float:right;padding-right:60px" id="review_place_order_total"></span>
					<span style="display:none" id="base_review_place_order_total"></span>
					<span style="display:none" id="sales_review_place_order_total"></span>
				</div><br /><br />
				<button type="button" id="review_order_submit" style="width:410px;margin-bottom:90px;margin-left:10px;display:block" class="btn btn-lg btn-success" >
					Order Now
				</button>
			</div>
	  
			<div style="width:600px;display:none;" class="col-md-12" id="print_driver_tip">
				<div style="width:320px" class="col-md-12">Driver's Tip<span style="float:right;padding-right:70px" id="print_np"></span></div><br />
				<div style="width:320px" class="col-md-12">Total<span style="float:right;padding-right:70px" id="print_review_place_order_total"></span></div><br />
			</div>
		</div>
		  <!-- calculation of baseprice -->
		   <!--<div id="base_review_order_summary" style="display:none">
		  <h4 style="font-size:24px; font-family: Times New Roman">
		  Base price Order Summary</h4><br/>
	  

		<div style="width:320px;padding-left:30px" class="col-md-12">Subtotal<span style="float:right;padding-right:60px" id="base_review_subtotal"></span></div><br />
		<div style="width:330px;padding-left:30px" class="col-md-12">Coupon<a style="float:right;padding-right:60px" id="base_review_coupon" data-toggle="modal" data-target="#myModal_coupon">Apply Coupon</a></div><br />
		<div style="width:320px;padding-left:30px" class="col-md-12">Taxes<span style="float:right;padding-right:60px" id="base_review_tax"></span></div><br />
		<div style="width:320px;padding-left:30px" class="col-md-12">Delivery Charges<span style="float:right;padding-right:60px" id="base_review_delivery_charges"></span></div><br />

		<div style="width:600px;display:block;" class="col-md-12" id="base_driver_tip">
		<div class="col-md-3" style="float:left;padding-right:30px">Driver's Tip</div>
		<div class="col-md-4" style="padding-bottom:20px;" id="base_np"></div>
		<div class="col-md-push-5" style="float:left">
		<input type="radio" style="margin-left:15px;" name="rad" id="base_rad_10"/><b>10%</b>
		<input type="radio" style="margin-left:15px;" name="rad" id="base_rad_15"/><b>15%</b>
		<input type="radio" style="margin-left:15px;" name="rad" id="base_rad_20"/><b>20%</b><br/>
		<!--<button type="button" style="width:40px;border-radius: 150px;margin-left:10px;margin-top:10px" class="btn btn-info" >10%</button>
		<button type="button" style="width:40px;border-radius: 15px;margin-left:10px;margin-top:10px" class="btn btn-info" >15%</button>
		<button type="button" style="width:40px;border-radius: 150px;margin-left:10px;margin-top:10px" class="btn btn-info" >20%</button><br/>-->
		<!--<div><span id="base_review_10" style="margin-left:10px;"></span>
		<span id="base_review_15" style="margin-left:5px;"></span>
		<span id="base_review_20" style="margin-left:5px;"></span></div>
		</div>
		<br /><br />
		
		<div style="width:320px" class="col-md-12">Total<span style="float:right;padding-right:60px" id="base_review_place_order_total"></span></div><br />
		<br />
		   <button type="button" id="base_review_order_submit" style="width:410px;margin-bottom:10px;margin-left:10px;display:block" class="btn btn-lg btn-success" >Order Now</button>
	  
	 
	  </div>
	  
	  <div style="width:600px;display:none;" class="col-md-12" id="base_print_driver_tip">
		
		  <div style="width:320px" class="col-md-12">Driver's Tip<span style="float:right;padding-right:70px" id="base_print_np"></span></div><br />
		<div style="width:320px" class="col-md-12">Total<span style="float:right;padding-right:70px" id="base_print_review_place_order_total"></span></div><br />
	   </div>
	   
	  </div>-->
	</div>
	  
  </div>
   <!--<div class="container">

  <div class="modal fade" id="myModal_coupon" role="dialog">
    <div class="modal-dialog">
    
   
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Coupon Code</h4>
        </div>
        <div class="modal-body">
        <div class="form-group col-md-12">
  <span>
  <input type="text" class="form-control col-md-9" id="coupon_code" placeholder="Enter Coupon Code here" style="width:400px">
  <button type="submit" id="submit_coupon" class="btn btn-info col-md-push-3" data-dismiss="modal">Apply</button></span>
</div>
        </div>
        
      </div>
      
    </div>
  </div>
  
</div>-->

 <div class="modal fade" id="orderNoModel" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header" style="background-colour:grey;">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <img style="width:50px;height:50px;float:left;" src="${pageContext.request.contextPath}/resources/images/delivery22.jpg"/>
         <h5 class="modal-title"><b style="margin-left: 5%;padding-top: 3%;font-size: 2vw;color:MediumVioletRed;">Ace Roti</b></h5>
       <hr> </div>
        <div class="modal-body col-md-offset-3" style="padding: 4px;">
        <h4 style="color:FF5733;font-size:1.5vw;"><b>Thank you for ordering!</b></h4>
          <h4 style="color: black;padding-bottom: 50px;"><b style:"margin-left:10%;><p" id="corp_review_orderno"></p></b></h4>
        </div>
      </div>
    </div>
  </div>




<div class="container">
  
  <!-- Modal -->
  <div class="modal fade" id="myModal_dismiss_cart" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
         
        </div>
        <div class="modal-body">
          <p>Your cart will be dismissed. Are you sure you want to go to the home page?</p>
        </div>
        
		 <div class="modal-footer">
               
                <button type="button" class="btn btn-success" id="btn_dismiss_yes" data-dismiss="modal">Yes</button>
				 <button type="button" class="btn btn-danger" id="btn_dismiss_no" data-dismiss="modal">No</button>
            </div>
      </div>
      
    </div>
  </div>
  
</div>

  <br/>
  
<div class="container">
  
  <!-- Modal -->
  <div class="modal fade" id="myModal_invalid_datetime" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
         
        </div>
        <div class="modal-body">
          <p>The item you have selected is not available for the selected time. Do you want to remove the item from cart?</p>
        </div>
        
		 <div class="modal-footer">
               
                <button type="button" class="btn btn-success" id="btn_invalid_time_yes" data-dismiss="modal">Ok</button>
				 <button type="button" class="btn btn-danger" id="btn_invalid_time_no" data-dismiss="modal">Cancel</button>
            </div>
      </div>
      
    </div>
  </div>
  
</div>

<div class="container">
  
  <!-- Modal -->
  <div class="modal fade" id="myModal_delete_cc" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
         
        </div>
        <div class="modal-body">
          <p>The card will be deleted. Are you sure you would like to remove this card?</p>
        </div>
        
		 <div class="modal-footer">
               
                <button type="button" class="btn btn-success" id="btn_delete_cc_yes" data-dismiss="modal">Ok</button>
				 <button type="button" class="btn btn-danger" id="btn_delete_cc_no" data-dismiss="modal">Cancel</button>
            </div>
      </div>
      
    </div>
  </div>
  
</div>

<div class="container">
  
  <!-- Modal -->
  <div class="modal fade" id="myModal_review_login" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
         
        </div>
        <div class="modal-body">
		<h4 style="margin-left:120px;margin-top: 30px;">Please select an option to continue.</h4><br/>
				<button type="button" class="btn btn-info" data-dismiss="modal" data-toggle="modal" data-target="#myModal_login" 
				style="width:200px;height: 40px;margin-left: 60px;margin-top: 30px;">Sign In</button>
				 <button type="button" class="btn btn-info" data-dismiss="modal" id="btn_guestlogin" style="width:200px;height: 40px;margin-left: 15px;margin-top: 30px;">Continue as Guest</button>
        </div>
        
		 <div class="modal-footer">
             
            </div>
      </div>
      
    </div>
  </div>
  
</div>

<div style="display:none" class="snackbar" id="snackbar_acc_created">Account created successfully</div>

<div style="display:none" class="snackbar" id="snackbar_time">Please select Delivery Time</div>
<div style="display:none" class="snackbar" id="snackbar_date">Please select Delivery Date</div>
<div style="display:none" class="snackbar" id="snackbar_center">Please select Corporate center</div>
<div style="display:none" class="snackbar" id="snackbar_company">Please enter Company name</div>
<div style="display:none" class="snackbar" id="snackbar_suite">Please enter Suite number</div>


  <br/>
  
	<div id="div_footer" class="div_footer" style="display:block">
	<table>
	
	<tr class="spaceUnder">
	<td width=4%></td>
	<td width=10%><a href="#" style="text-decoration:none; color:white"><b>About</b></a></td>
	<td width=4%></td>
	<td width=15%><a href="#" style="text-decoration:none; color:white"><b>About Uber eats</b></a></td>
	<td width=4%></td>
	<td width=15%><a href="#" style="text-decoration:none; color:white"><b>Become a delivery partner</b></a></td>
	<td width=6%></td>

	<td ><a href="#" style="text-decoration:none; color:white;padding-left:40px"><b>1234567890</b></a></td>
	
	
	</tr>
	
	<tr class="spaceUnder">
	<td width=4%></td>
	<td width=10%><a href="#" style="text-decoration:none; color:white"><b>FAQ</b></a></td>
	<td width=4%></td>
	<td width=15%><a href="#" style="text-decoration:none; color:white"><b>Gift Cards</b></a></td>
	<td width=4%></td>
	<td width=15%><a href="#" style="text-decoration:none; color:white"><b>Become a restaurant partner</b></a></td>
	<td width=6%></td>
	<td><a href="#" class="fa fa-facebook-official" style="text-decoration:none;font-size:26px;width:60px;padding-left:50px;color:white">
	</a>
	<a href="#" class="fa fa-linkedin-square" style="text-decoration:none;font-size:26px;width:60px;padding-left:50px;color:white">
	</a>
	<a href="#" class="fa fa-twitter-square" style="text-decoration:none;font-size:26px;width:60px;padding-left:50px;color:white">
	</a>
	<a href="#" class="fa fa-instagram" style="text-decoration:none;font-size:26px;width:60px;padding-left:50px;color:white">
	</a>
	</td></tr>

	
	<tr class="spaceUnder">
	<td width=4%></td>
	<td width=10%><a href="/delivery/merchants/" style="text-decoration:none; color:white"><b>Merchant Page</b></a></td>
	</tr>
	
	</table>
	 </div>
    <br/>

  
</body>
</html>