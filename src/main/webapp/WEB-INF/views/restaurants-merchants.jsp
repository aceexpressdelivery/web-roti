<html>
<head>
	<%@ taglib  prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
	<link href="${pageContext.request.contextPath}/resources/css/Merchant.css" rel="stylesheet">
	
	<script src="${pageContext.request.contextPath}/resources/js/merchant.js"></script>
	
	<script src="//code.jquery.com/jquery.min.js"></script>
	
     <link href="${pageContext.request.contextPath}/resources/Content/bootstrap.min.css" rel="stylesheet" />
	 
	 
    <script src="${pageContext.request.contextPath}/resources/Scripts/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/Scripts/bootstrap.min.js"></script>
   
	<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.eot"></script>
	<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.svg"></script>
	<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.ttf"></script>
	<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.woff"></script>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
</head>
<body>
<div class="top_menu" id="top_menu">   
 <table cellpadding=0 id="menu" style="font-weight:bold;width: 1400px;">
  
   <tr class="spaceUnder">
	
	<td width=8%><a href="http://localhost:8080/delivery/rests/" ><img id="logohome" src="${pageContext.request.contextPath}/resources/images/delivery22.jpg" 
	style="padding-bottom:35px;margin-bottom:0px;padding-right:50px;height:120px;width:140px;margin-right:300px;"/></a></td>
	
	<td width=10%><a href="http://localhost:8080/delivery/rests/" style="text-decoration:none;"><h2 id="gohome" 
	style="color:MediumVioletRed;font-family:Georgia;font-weight:300px;width:400px;margin-right:10px;padding-left:50px;margin-bottom:42px;">
	<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ace<br/>Express Delivery</b></h2></a></td>
	<td width=150px></td>
	
	<!--<td width=1%>|</td>-->
	<td width=100px id="login" style="text-decoration:none; color:red;margin-top:60px;" data-toggle="modal" data-target="#myModal_login"><b>Sign In</b></a></td>
	
	
	<td id="register"  data-toggle="modal" data-target="#myModal_contactus">
		<button type="button" class="btn btn-danger btn-group-justified" style="width:100px;height:auto;border-radius: 30px;margin-right:30px;">Contact Us</button></a></td>
			 
			
	</tr>
   
  </table>    
 </div>
       
<div class="portal" id="portal" style="align:center;display:block;">

		
		<div style="font-size:22px;font-weight:400px;color:Red;font-family:Georgia;padding-left:420px;"><h3>Merchant Management Portal</h3></div>

		<table>
	<tr style=" margin-bottom:20px; padding-bottom: 1.1em;">

	
	<td width=50px style="padding-left:380px;"><button type="button" id="login_btn" class="btn btn-danger" 
			 style="width:120px;height:60px;border-radius:30px;">Sign In</button></td>
	
	<td width=50px style="padding-left:120px;"><button type="button" id="register_btn" class="btn btn-danger" 
			 style="width:150px;height:60px;border-radius:30px;float:left;">Contact Us</button></td></tr>
			 </table>
 </div>  
 
 <div class="welcome_portal" id="welcome_portal" style="align:center;display:block;">
	
		<div style="font-size:22px;font-weight:400px;font-family:Georgia;padding-left:350px;"><h3>Welcome to Merchant Management Portal</h3></div>
<table>
	<tr style=" margin-bottom:20px; padding-bottom: 1.1em;">
	<tr>

	
	<td style="padding-left:300px;"><button type="button" id="restaurant" class="btn btn-primary" 
			 style="width:120px;height:60px;">Restaurant</button></td>
			 
	<td style="padding-left:100px;"><button type="button" id="reports" class="btn btn-primary"
			 style="width:120px;height:60px;">Reports</button></td>
	
	<td style="padding-left:100px;"><button type="button" id="financials" class="btn btn-primary" 
	style="width:120px;height:60px;">Financials</button></td></tr>
			 </table>
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
                  <button type="submit" class="btn btn-success" id="submit_login" data-dismiss="modal" style="font-size:16px;width:100%;font-weight:bold">
				  Sign In</button></div>
				 
        
		 </form>
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
  

  <div class="modal fade" id="myModal_contactus" role="dialog">
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
                    <label>First name</label>
                    <input type="text" class="form-control" name="firstname" id="firstname">
                </div>
                <div class="form-group col-md-offset-6">
                    <label>Last name</label>
                    <input type="text" class="form-control" name="lastname" id="lastname">
                </div>
               
                <div class="form-group col-md-6">
                    <label>Email address:</label>
                    <input type="email" class="form-control" name="email" id="email">
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Telephone number:</label>
                    <input type="text" class="form-control" name="phone" id="phone" maxlength="10">
                </div>
				
				<div class="form-group col-md-6">
                    <label>Zipcode:</label>
                    <input type="text" class="form-control" name="zipcode" id="zipcode">
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Subject:</label>
                    <input type="text" class="form-control" name="subject" id="subject">
                </div>
                <div class="form-group col-md-12">
                    <label>Message</label>
                    <input type="password" class="form-control" name="message" id="message">
                </div>
                <br/>
				
				
			<div class="form-group">
                  <button type="submit" id="submit_registration" class="btn btn-success" data-dismiss="modal" 
				  style="font-size:16px;width:100%;font-weight:bold">Submit</button></div>
				  
				
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


  <br/><br/>
	<div id="div_footer" class="div_footer">
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
	</td>
	</table>
	 </div>
    <br/>

  
</body>
</html>