 

	  var placeSearch, autocomplete;
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      };

			  
function initAutocomplete() {
        
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});
			// autocomplete = new google.maps.places.Autocomplete(
        //  /** @type {!HTMLInputElement} */(document.getElementById('autocomplete1')),
          //  {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress);
      }

function fillInAddress() {
        
        var place = autocomplete.getPlace();

        for (var component in componentForm) {
          document.getElementById(component).value = '';
          document.getElementById(component).disabled = false;
        }

        
        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
          }
        }
      }

      
function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }
	  
	  function isNumber(evt) {
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}
	
  function s_acc_created() {
	 var x = document.getElementById("snackbar_acc_created");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
	function snack_error() {
		
		 if ($('#dd_btn1').text().trim() == "Select Date") 
			{
				var dd_btn1="Date";
			}
		 else
			{
			   var dd_btn1="";
			}
		 
		if ($('#dd_btn2').text().trim() == "Select Time") 
			{
			   var dd_btn2=",Time";
			}
		 
		else
			{
			   var dd_btn2="";
			}
		 
		if ($('#dd_btn3').text().trim() == "Select Corporate Center") 
			 {
				 var dd_btn3=",Corporate Center";
          	 }
		 else
			 {
			   var dd_btn3="";
			}
		 
		 
		 if ($('#company_name').val() == "") 
			 {
				 var company_name=",Company name";
             } 
		 else
			  {
			   var company_name="";
			  }
		 if ($('#suite_number').val() == "") 
			 {
				  var suite_number=",Suite number";
			 }
			 else
			 {
				 var suite_number="";
			 }
			 var show_errormsg = "Please select "+dd_btn1+ " "+dd_btn2+ " "+dd_btn3+ " "+company_name+ " "+suite_number+" to proceed";
			 console.log("show_errormsg "+show_errormsg);
			 $("#hideerror_details").text(show_errormsg);
	//var x = document.getElementById("snackbar_time");
   // show_errormsg.className = "show";
 //   setTimeout(function(){ show_errormsg.className = show_errormsg.className.replace("show", ""); }, 3000);
}
	function s_time() {
	var x = document.getElementById("hideerror_details");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function s_date() {
	 var x = document.getElementById("snackbar_date");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}	   
		   
function clearfields() {
	
            $("#textarea1").val("");
            $("#qty").val("1");
			$("#qty2").val("1");
			$("#display4").val("");
			
        }
/*function showcc(){
	
        var test = $(this).val();
      
		if(test=='select_newcard')
			{ 
        $("#form_payment").show();
			}
			else
      {
        $("#form_payment").hide();
      }
			

}*/
//var section_edit=[];
	function setValue(row_price, row_id) {
		$('#hide_id').append('<tr id=section_'+row_id+'><td>'+row_price+'</td></tr>');
		
		var sd=$("#qtycart").text(); 
		var qty=$("#qty").val(); 	
		var number = Number(sd.replace(/[^0-9\.]+/g,""));
		
		var finalcost= JSON.parse(number) +  JSON.parse(qty * row_price);
		$("#qtycart").text("Add to cart - $" + finalcost);
		
		var sd1=$("#update_qtycart").text(); 
		var qty1=$("#qty2").val(); 	
		var number1 = Number(sd1.replace(/[^0-9\.]+/g,""));
		
		var finalcost1= JSON.parse(number1) +  JSON.parse(qty1 * row_price);
		$("#update_qtycart").text("Update to cart - $" + finalcost1);
	}	

	function removeValue(row_price, row_id){
		$('#section_'+row_id).closest('tr').remove();
		
		var sd=$("#qtycart").text();  
		var qty=$("#qty").val(); 
		var number = Number(sd.replace(/[^0-9\.]+/g,""));

		var finalcost= Number(number) -  Number(qty * row_price);
		$("#qtycart").text("Add to cart - $" + finalcost);
		
		var sd1=$("#update_qtycart").text();  
		var qty1=$("#qty2").val(); 
		var number1 = Number(sd1.replace(/[^0-9\.]+/g,""));

		var finalcost1= Number(number1) -  Number(qty1 * row_price);
		$("#update_qtycart").text("Update to cart - $" + finalcost1);	
	}
	
	function setPrice(prev_price, current_price, prev_row_id, current_row_id){
		$('#section_'+prev_row_id).closest('tr').remove();
		$('#hide_id').append('<tr id=section_'+current_row_id+'><td>'+current_price+'</td></tr>');
		
		var sd=$("#qtycart").text();  
		var qty=$("#qty").val(); 
		var number = Number(sd.replace(/[^0-9\.]+/g,""));
		var finalcost= JSON.parse(number) -  JSON.parse(prev_price * qty) +  JSON.parse(current_price * qty);
		
		$("#qtycart").text("Add to cart - $" + finalcost);
		
			var sd1=$("#update_qtycart").text();  
		var qty1=$("#qty2").val(); 
		var number1 = Number(sd1.replace(/[^0-9\.]+/g,""));
		var finalcost1= JSON.parse(number1) -  JSON.parse(prev_price * qty1) +  JSON.parse(current_price * qty1);
		$("#update_qtycart").text("Update to cart - $" + finalcost);
	}
	
	function calculate(){
		theTotal = 0;
	  
		$("#cartTable #tid td:nth-child(3)").each(function () {
			var val1 = $(this).text().replace("$", "");
			//console.log(val1);
			//var price = $("#display2").text().replace("$", "");
			var val2 = JSON.parse(val1);
			theTotal += (val2);
		});
		$("#sales_subtotal").html("$"+ theTotal);
		
		base_theTotal = 0;
	  
		$("#cartTable #tid td:nth-child(12)").each(function () {
			var base_val1 = $(this).text();
			//console.log(base_val1);
			var base_val2 = JSON.parse(base_val1);
			base_theTotal += (base_val2);
		});
		$("#base_subtotal").text(base_theTotal);
		
		rest_theTotal = 0;
	  
		$("#cartTable #tid td:nth-child(13)").each(function () {
			var rest_val1 = $(this).text();
			//console.log(rest_val1);
			var rest_val2 = JSON.parse(rest_val1);
			rest_theTotal += (rest_val2);
		});
		$("#rest_subtotal").text(rest_theTotal);
	}


	function final_calculate(){
		var final_total=0;
		//var r_subtotal=$("#subtotal").text();
		
		var sales_r_subtotal = $("#sales_subtotal").text().replace("$", "");
		var base_r_subtotal = $("#base_subtotal").text();
		var rest_subtotal =	$("#rest_subtotal").text();
		   
		$("#sales_review_subtotal").text('$ '+sales_r_subtotal);
		$("#base_review_subtotal").text(base_r_subtotal);
		$("#rest_review_subtotal").text(rest_subtotal);
			
		var review_sales_tax=((6/100)*sales_r_subtotal).toFixed(2);
		$("#review_tax").text('$ '+review_sales_tax);
			
			
		var deilvery_charge=0;
		//$("#review_delivery_charges").text('$ 0.00');
		
		var tip= parseFloat($("#tip_value").text().replace("$", ""));
			
		/*	var review_10=((10/100)*sales_r_subtotal).toFixed(2);
			$("#review_10").empty().append('<b style="padding-left:5px">($ '+review_10+')</b>');
			
			$("#rad_10").click(function(e){
			$(".dpui-numberPicker-input").val("$ "+review_10);
			final_calculate()
			});
			
			var review_15=((15/100)*sales_r_subtotal).toFixed(2);
			$("#review_15").empty().append('<b style="padding-left:5px">($ '+review_15+')</b>');
			
			$("#rad_15").click(function(e){
			$(".dpui-numberPicker-input").val("$ "+review_15);
			final_calculate()
			});
			
			var review_20=((20/100)*sales_r_subtotal).toFixed(2);
			$("#review_20").empty().append('<b style="padding-left:5px">($ '+review_20+')</b>');
			
			$("#rad_20").click(function(e){
			$(".dpui-numberPicker-input").val("$ "+review_20);
			final_calculate()
			});
			*/
			
		var str=$("#hide_coupon").text();
		var count_len = str.length;
		console.log("count_len "+count_len);
		if(count_len<5){
			var review_coupon=parseFloat($("#hide_coupon").text().replace("$", ""));
		} else {
			var review_coupon=($("#hide_coupon").text().replace("$", ""));
		}
			
		if (typeof review_coupon === 'string' || review_coupon instanceof String){
			review_coupon=0;
		} else {
				
		}
			
		var r1=parseFloat(sales_r_subtotal);
		var r2= parseFloat(review_sales_tax);
		var r3= parseFloat(tip);
		if(r3 == NaN){
			r3=0;
		}
		console.log("r3 "+r3);
		var r4= parseFloat(deilvery_charge);
		var r5=parseFloat(review_coupon);
		if(r5 == NaN){
			r5=0;
		}
		console.log("r5 "+r5);
			
		final_total=(r1+r2+r3+r4-r5).toFixed(2);
			
		$("#review_place_order_total").text('$ '+final_total);
			
		$("#base_review_place_order_total").text(base_r_subtotal);
			
		$("#sales_review_place_order_total").text(rest_subtotal);
	}			

	
	function backrest_corp(){
		
		var time;
		var date;
		 
		var date=$("#dd_btn1").text();
		var time=$("#dd_btn2").text();
		$('#restaurants').css("display", "block");
		$('#choose_rest').css("display", "block");
		$('#select_rest').css("display", "block");
		$("#table_menus").css("display", "none");
		$("#backto_rest").css("display", "none");
		$('#select_rest').val('');
		$('#table_menus').empty();
		var city = $("#locality").val();
		var state = $("#administrative_area_level_1").val();
		
		$.ajax({
			url: pageURL+"restaurantsInZip",
			type: "GET",
			data: {
					"zipcode": "19406",
					"state":"PA",
					"city":"KingOfPrussia"
			},
			success: function(data) {
				$("#choose_restaurant").css("display", "block");
				$('#select_rest').show();
		  
				var html = '';		
							
				$.each(data, function(key, value) { 
				var zipbusid=key[0];
							$("#hide_zipid").text(zipbusid);
					var len=value.length;				
					for(i=0; i < len; i++){
						html += '<tr id="tryme_rest" class="btn spaceUnder_rest" ordertype="'+ordertype+'" zipBustypeMerchantId="'+value[i]['zipBustypeMerchantId']+'" valuename="'+value[i]["name"]+'" valueid="'+value[i]['id']+
								'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
								'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value[i]['image']+'"/></label></td>'+
								'<td rest_code=' + value[i]['id']+'>'+ 
								'<h4><label style="margin-bottom:0px;">' + value[i]['name'] +
								'</label></td></tr><br/>';
					}
				});
				
				$('#select_rest').last().empty().append(html);			
			}, 
			error: function() {
				alert('Something went wrong');
		   }
		});
	}

	function showrest_corp(){
	
		var date=$("#dd_btn1").text();
		var time=$("#dd_btn2").text();
      
		//if(time=='1:30 noon')
		// {
		$('#restaurants').css("display", "block");
		$('#choose_rest').css("display", "block");
		$('#select_rest').css("display", "block");
		$("#table_menus").css("display", "none");
		$("#backto_rest").css("display", "none");
		$('#select_rest').val('');
		$('#table_menus').empty();
		var city = $("#locality").val();
		var state = $("#administrative_area_level_1").val();
	
		zipcode=$("#postal_code").val();
		var username= $("#input_zipcode").val();
   
		$.ajax({
			url: pageURL+"restaurantsInZip",
			type: "GET",
			//data: {"zipcode": zipcode, "state":state,"city":city},
			data: {
					"zipcode": "19406",
					"state":"PA",
					"city":"KingOfPrussia"
				},
			success: function(data) {
				$("#choose_restaurant").css("display", "block");
				$('#select_rest').show();
      
				var html = '';		
											
				$.each(data, function(key, value) { 
				var zipbusid=key[0];
							$("#hide_zipid").text(zipbusid);
					var len=value.length;				
					for(i=0; i < len; i++){
						html += '<tr id="tryme_rest" class="btn spaceUnder_rest" ordertype="'+ordertype+'" zipBustypeMerchantId="'+value[i]['zipBustypeMerchantId']+'" valuename="'+value[i]["name"]+'" valueid="'+value[i]['id']+
								'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
								'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value[i]['image']+'"/></label></td>'+
								'<td rest_code=' + value[i]['id']+'>'+ 
								'<h4><label style="margin-bottom:0px;">' + value[i]['name'] +
								'</label></td></tr><br/>';
					}
				});
				//$("#select_rest").css("display", "block");
				$('#select_rest').last().empty().append(html);
				//	$("#show_empty_cart").css("display", "block");
			}, 
			error: function() {
				alert('Something went wrong');
			}
		});
	}
   
	/*
	function showrest_rest(){
	
		var date=$("#dd_btn11").text();
		var time=$("#dd_btn22").text();
       
		$('#restaurants').css("display", "block");
		$('#choose_rest').css("display", "block");
		$('#select_rest').css("display", "block");
		$("#table_menus").css("display", "none");
		$("#backto_rest").css("display", "none");
		$('#select_rest').val('');
		$('#table_menus').empty();
		var city = $("#locality").val();
		var state = $("#administrative_area_level_1").val();
	
		$.ajax({
			url: pageURL+"restaurantsWithdateAndTime",
			type: "GET",
			data: {
					"id":4
				},
			success: function(data) {
				$("#choose_restaurant").css("display", "block");
				$('#select_rest').show();
      
				var html = '';		
						
				$.each(data, function(key, value) { 
							
					html +=  '<tr id="tryme_rest" class="btn spaceUnder_rest" valueid="'+value['id']+
					'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
					'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value['image']+'"/></label></td>'+
					'<td id="tryme_rest" rest_code=' + value['rest_code']+'>'+ 
					'<h4><label style="margin-bottom:0px;margin-right:150px;">' + value['name'] +
					'</label></h4><label>' + value['tagLine']  + 
					'</label><br/><label>'+value['opencloseTime']+
					'</label></td><td><h5><label>'+value['timeRange']+
					'</label></h5><br/>'+value['pricelevel']+
					'</td><td style="float:right"><label>'+value['city']+'</label></td></tr><br/>';
				});
				
				//$("#select_rest").css("display", "block");
				$('#select_rest').last().empty().append(html);
				//	$("#show_empty_cart").css("display", "block");
			}, 
			error: function() {
				alert('Something went wrong');
			}
		});
	}
	*/

	
	function enter_address(){
		
		// test for menu section
		/* 
			var menuSection = {
				"menuId":"1",
				"name":"Burritos",
				"description":"Burritos test",
				"type":"Pizza"
				
			}; 
			
			
			$.ajax({
				
		             type: "POST",
		             contentType: "application/json",
					 url: pageURL+"sections",
		             data: JSON.stringify(menuSection),
		             dataType: 'json',
		             //timeout: 600000,
		             success: function (data) {
						alert('success'+data);	
						
						
						
					},
		             error: function (err) {
						 console.log(err);
						
		              alert(err + 'tttttttt');
		             }
			});
		 */
		
		// menu section end
		
		street_number=$("#street_number").val();
		locality=$("#locality").val();
		administrative_area_level_1=$("#administrative_area_level_1").val();
		country=$("#country").val();
		if(street_number==0){
			alert("Please enter complete address");
		} else {
			if(("#locality")==0)
			{
				alert("Please enter complete address");
			}
			if(("#administrative_area_level_1")==0)
			{
				alert("Please enter complete address");
			}
			if(("#postal_code")==0)
			{
				alert("Please enter complete address");
			}
			if(("#country")==0)
			{
				alert("Please enter complete address");
			}
			else
			{
			$('#myModal1').modal('show');
			//$('#section_chk').empty();
			}
		}
	}

	/*function hide_empty_section()
	{
		
							if(value['option1']=="" ||value['option1']==null)
							{
								document.getElementById('rad1').style.visibility='hidden';
								document.getElementById('rad_p1').style.visibility='hidden';
								document.getElementById('chk1').style.visibility='hidden';
								document.getElementById('chk_p1').style.visibility='hidden';
							}
							if(value['option2']=="" ||value['option2']==null)
							{
								document.getElementById('rad2').style.visibility='hidden';
								document.getElementById('rad_p2').style.visibility='hidden';
								document.getElementById('chk2').style.visibility='hidden';
								document.getElementById('chk_p2').style.visibility='hidden';
							}
							if(value['option3']=="" ||value['option3']==null)
							{
								document.getElementById('rad3').style.visibility='hidden';
								document.getElementById('rad_p3').style.visibility='hidden';
								document.getElementById('chk3').style.visibility='hidden';
								document.getElementById('chk_p3').style.visibility='hidden';
							}
							if(value['option4']=="" ||value['option4']==null)
							{
								document.getElementById('rad4').style.visibility='hidden';
								document.getElementById('rad_p4').style.visibility='hidden';
								document.getElementById('chk4').style.visibility='hidden';
								document.getElementById('chk_p4').style.visibility='hidden';
							}
							if(value['option5']=="" ||value['option5']==null)
							{
								document.getElementById('rad5').style.visibility='hidden';
								document.getElementById('rad_p5').style.visibility='hidden';
								document.getElementById('chk5').style.visibility='hidden';
								document.getElementById('chk_p5').style.visibility='hidden';
							}
							if(value['option6']=="" ||value['option6']==null)
							{
								document.getElementById('rad6').style.visibility='hidden';
								document.getElementById('rad_p6').style.visibility='hidden';
								document.getElementById('chk6').style.visibility='hidden';
								document.getElementById('chk_p6').style.visibility='hidden';
							}
	}*/
	/*function show_empty_section()
	{
		
								document.getElementById('rad1').style.visibility='visible';
								document.getElementById('rad_p1').style.visibility='visible';
								document.getElementById('chk1').style.visibility='visible';
								document.getElementById('chk_p1').style.visibility='visible';
						
								document.getElementById('rad2').style.visibility='visible';
								document.getElementById('rad_p2').style.visibility='visible';
								document.getElementById('chk2').style.visibility='visible';
								document.getElementById('chk_p2').style.visibility='visible';
							
								document.getElementById('rad3').style.visibility='visible';
								document.getElementById('rad_p3').style.visibility='visible';
								document.getElementById('chk3').style.visibility='visible';
								document.getElementById('chk_p3').style.visibility='visible';
							
								document.getElementById('rad4').style.visibility='visible';
								document.getElementById('rad_p4').style.visibility='visible';
								document.getElementById('chk4').style.visibility='visible';
								document.getElementById('chk_p4').style.visibility='visible';
							
								document.getElementById('rad5').style.visibility='visible';
								document.getElementById('rad_p5').style.visibility='visible';
								document.getElementById('chk5').style.visibility='visible';
								document.getElementById('chk_p5').style.visibility='visible';
							
								document.getElementById('rad6').style.visibility='visible';
								document.getElementById('rad_p6').style.visibility='visible';
								document.getElementById('chk6').style.visibility='visible';
								document.getElementById('chk_p6').style.visibility='visible';
							
	}*/
	
function dynamic_chkbox(ID)
{
	console.log(ID);
	// $('#section_chk').empty();
	$('#hide_id').empty();
	
	$.ajax({
      		url: pageURL+"sections",
      		type: "GET",
      	    data: { "id" :ID},
      		success: function(data){
				
            	console.log("success"+data);
        			var html = '';
						
						
						//var d=JSON.parse(data);
						
						var i=0;
						$.each(data, function(key, value) {
				i++;
						console.log(key,value);
								
								
							if(value["selectSection"]=="C")
						{
							html ='<tr class="heading row'+i+'" name="row_chk'+i+'" id_num="'+value['id']+'" id="heading_name'+value['id']+'"><td colspan="2"><label>'+
							value['sectionText'] +'</label></td></tr>'+
							       '<tr><td id="select'+value['id']+'1" heading_id="'+value['id']+'" price="'+value['price1']+'" width=100px>'+
								   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option1']+'" id="s_select'+value['id']+
								   '1"/>'+'&nbsp;&nbsp;' + value['option1']+'</td>'+
								   '<td width=200px id="select'+value['id']+'_p1">$'+value['price1']+'</td>'+																				
								       '<td id="select'+value['id']+'2" heading_id="'+value['id']+'" price="'+value['price2']+'" width=100px>'+
									   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option2']+'" id="s_select'+value['id']+
									   '2" />&nbsp;&nbsp;' + value['option2']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p2">$'+value['price2']+'</td></tr>'+
									   
								   '<tr><td id="select'+value['id']+'3" heading_id="'+value['id']+'" price="'+value['price3']+'" width=100px>'+
								   '<input type="checkbox" '+'class="check_checkbox section" name="chk'+i+'" value="'+value['option3']+'" id="s_select'+value['id']+
								   '3"/>&nbsp;&nbsp;' + value['option3']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p3">$'+value['price3']+'</td>'+
								       '<td id="select'+value['id']+'4" heading_id="'+value['id']+'" price="'+value['price4']+'" width=100px>'+
									   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option4']+'" id="s_select'+value['id']+
									   '4" />&nbsp;&nbsp;' + value['option4']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p4">$'+value['price4']+'</td></tr>'+
									   
								   '<tr><td id="select'+value['id']+'5" heading_id="'+value['id']+'" price="'+value['price5']+'" width=100px>'+
								   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option5']+'" id="s_select'+value['id']+
								   '5" />&nbsp;&nbsp;' + value['option5']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p5">$'+value['price5']+'</td>'+
								       '<td id="select'+value['id']+'6" heading_id="'+value['id']+'" price="'+value['price6']+'" width=100px>'+
									   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option6']+'" id="s_select'+value['id']+
									   '6" />&nbsp;&nbsp;' + value['option6']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p6">$'+value['price6']+'</td></tr>';
									   
						
							 $('#section_chk').append(html);
							 
						}
						if(value['selectSection']=="R")
						{
							 html ='<tr class="heading row'+i+'" name="row_rad'+i+'" id_num="'+value['id']+'" id="heading_name'+value['id']+'"><td colspan="2"><label>'+ value['sectionText'] +'</label></td></tr>'+
							       '<tr><td id="select'+value['id']+'1" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value    ['price1']+'" name="rad'+i+'" value="'+value['option1']+'" id="s_select'+value['id']+'1"/>&nbsp;&nbsp;' + value['option1']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p1">$'+value['price1']+'</td>'+
								       '<td id="select'+value['id']+'2" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value['price2']+'" name="rad'+i+'" value="'+value['option2']+'" id="s_select'+value['id']+'2" />&nbsp;&nbsp;' + value['option2']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p2">$'+value['price2']+'</td></tr>'+
								   '<tr><td id="select'+value['id']+'3" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value    ['price3']+'" name="rad'+i+'" value="'+value['option3']+'" id="s_select'+value['id']+'3" />&nbsp;&nbsp;' + value['option3']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p3">$'+value['price3']+'</td>'+
								       '<td id="select'+value['id']+'4" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value['price4']+'" name="rad'+i+'" value="'+value['option4']+'" id="s_select'+value['id']+'4" />&nbsp;&nbsp;' + value['option4']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p4">$'+value['price4']+'</td></tr>'+
								   '<tr><td id="select'+value['id']+'5" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value    ['price5']+'" name="rad'+i+'" value="'+value['option5']+'" id="s_select'+value['id']+'5" />&nbsp;&nbsp;' + value['option5']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p5">$'+value['price5']+'</td>'+
								       '<td id="select'+value['id']+'6" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value['price6']+'" name="rad'+i+'" value="'+value['option6']+'" id="s_select'+value['id']+'6" />&nbsp;&nbsp;' + value['option6']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p6">$'+value['price6']+'</td></tr>';
							
							
							 $('#section_chk').append(html);
							 
						}
					
								
						for(j=1;j<7;j++)
						{
							if(value['option'+j]=="" ||value['option'+j]==null)
							{
								document.getElementById('select'+value['id']+j).style.visibility='hidden';
								document.getElementById('select'+value['id']+'_p'+j).style.visibility='hidden';
								//console.log('select'+value['id']+j);
								//console.log('select'+value['id']+'_p'+j);
								
							}
						}
							
						for(k=1;k<7;k++)
						{
							if(value['price'+k]=="" ||value['price'+k]==null)
							{
								document.getElementById('select'+value['id']+'_p'+k).style.visibility='hidden';
							}
						}
							
							
				});
				
      		},
      		error: function(passParams){
           			alert("inside error " + passParams);
      		}
		});
}	

function dynamic_section(r_menuid,section_data)
{
	console.log(r_menuid);
	console.log(section_data);
	// $('#section_chk').empty();
	 $('#hide_id').empty();
	
	$.ajax({
      		url: pageURL+"sections",
      		type: "GET",
      	    data: { "id" :r_menuid},
      		success: function(data){
				
            	console.log("success"+data);
        			var html = '';
						
						
						//var d=JSON.parse(data);
						
						var i=0;
						$.each(data, function(key, value) {
				i++;
					//	console.log(key,value);
								
								
							if(value["selectSection"]=="C")
						{
							html ='<tr class="heading row'+i+'" name="row_chk'+i+'" id_num="'+value['id']+'" id="heading_name'+value['id']+'"><td colspan="2"><label>'+
							value['sectionText'] +'</label></td></tr>'+
							       '<tr><td id="select'+value['id']+'1" heading_id="'+value['id']+'" price="'+value['price1']+'" width=100px>'+
								   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option1']+'" id="s_select'+value['id']+
								   '1" price="'+value['price1']+'"/>'+'&nbsp;&nbsp;' + value['option1']+'</td>'+
								   '<td width=200px id="select'+value['id']+'_p1">$'+value['price1']+'</td>'+																				
								       '<td id="select'+value['id']+'2" heading_id="'+value['id']+'" price="'+value['price2']+'" width=100px>'+
									   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option2']+'" id="s_select'+value['id']+
									   '2" price="'+value['price2']+'"/>&nbsp;&nbsp;' + value['option2']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p2">$'+value['price2']+'</td></tr>'+
									   
								   '<tr><td id="select'+value['id']+'3" heading_id="'+value['id']+'" price="'+value['price3']+'" width=100px>'+
								   '<input type="checkbox" '+'class="check_checkbox section" name="chk'+i+'" value="'+value['option3']+'" id="s_select'+value['id']+
								   '3" price="'+value['price3']+'"/>&nbsp;&nbsp;' + value['option3']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p3">$'+value['price3']+'</td>'+
								       '<td id="select'+value['id']+'4" heading_id="'+value['id']+'" price="'+value['price4']+'" width=100px>'+
									   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option4']+'" id="s_select'+value['id']+
									   '4" price="'+value['price4']+'"/>&nbsp;&nbsp;' + value['option4']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p4">$'+value['price4']+'</td></tr>'+
									   
								   '<tr><td id="select'+value['id']+'5" heading_id="'+value['id']+'" price="'+value['price5']+'" width=100px>'+
								   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option5']+'" id="s_select'+value['id']+
								   '5" price="'+value['price5']+'" />&nbsp;&nbsp;' + value['option5']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p5">$'+value['price5']+'</td>'+
								       '<td id="select'+value['id']+'6" heading_id="'+value['id']+'" price="'+value['price6']+'" width=100px>'+
									   '<input type="checkbox" class="check_checkbox section" name="chk'+i+'" value="'+value['option6']+'" id="s_select'+value['id']+
									   '6" price="'+value['price6']+'"/>&nbsp;&nbsp;' + value['option6']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p6">$'+value['price6']+'</td></tr>';
									   
						
							 $('#section_chk').append(html);
							 
						}
						if(value['selectSection']=="R")
						{
							 html ='<tr class="heading row'+i+'" name="row_rad'+i+'" id_num="'+value['id']+'" id="heading_name'+value['id']+'"><td colspan="2"><label>'+ value['sectionText'] +'</label></td></tr>'+
							       '<tr><td id="select'+value['id']+'1" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value    ['price1']+'" name="rad'+i+'" value="'+value['option1']+'" id="s_select'+value['id']+'1"/>&nbsp;&nbsp;' + value['option1']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p1">$'+value['price1']+'</td>'+
								       '<td id="select'+value['id']+'2" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value['price2']+'" name="rad'+i+'" value="'+value['option2']+'" id="s_select'+value['id']+'2" />&nbsp;&nbsp;' + value['option2']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p2">$'+value['price2']+'</td></tr>'+
								   '<tr><td id="select'+value['id']+'3" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value    ['price3']+'" name="rad'+i+'" value="'+value['option3']+'" id="s_select'+value['id']+'3" />&nbsp;&nbsp;' + value['option3']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p3">$'+value['price3']+'</td>'+
								       '<td id="select'+value['id']+'4" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value['price4']+'" name="rad'+i+'" value="'+value['option4']+'" id="s_select'+value['id']+'4" />&nbsp;&nbsp;' + value['option4']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p4">$'+value['price4']+'</td></tr>'+
								   '<tr><td id="select'+value['id']+'5" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value    ['price5']+'" name="rad'+i+'" value="'+value['option5']+'" id="s_select'+value['id']+'5" />&nbsp;&nbsp;' + value['option5']+'</td>'+
								       '<td width=200px id="select'+value['id']+'_p5">$'+value['price5']+'</td>'+
								       '<td id="select'+value['id']+'6" heading_id="'+value['id']+'" width=100px><input type="radio" class="check_radiobutton section" price="'+value['price6']+'" name="rad'+i+'" value="'+value['option6']+'" id="s_select'+value['id']+'6" />&nbsp;&nbsp;' + value['option6']+'</td>'+
									   '<td width=200px id="select'+value['id']+'_p6">$'+value['price6']+'</td></tr>';
							
							
							 $('#section_chk').append(html);
							 
						}
						
						for(j=1;j<7;j++)
						{
							if(value['option'+j]=="" ||value['option'+j]==null)
							{
								document.getElementById('select'+value['id']+j).style.visibility='hidden';
								document.getElementById('select'+value['id']+'_p'+j).style.visibility='hidden';
								//console.log('select'+value['id']+j);
								//console.log('select'+value['id']+'_p'+j);
								
							}
						}
							
						for(k=1;k<7;k++)
						{
							if(value['price'+k]=="" ||value['price'+k]==null)
							{
								document.getElementById('select'+value['id']+'_p'+k).style.visibility='hidden';
							}
						}
							
							
						
				});
				var str = section_data;
						var myarray = str.split(',');
			for(var z = 0; z < myarray.length; z++)
			{
				//console.log(myarray[z]);
				
				var store_myrray = "s_"+ myarray[z];
				//console.log(store_myrray);
		
         var checkBox = document.getElementById(store_myrray);
		
		// console.log(checkBox);
		var price= $(checkBox).attr('price');
		 //console.log(price);
		 $(checkBox).attr("checked","checked");
		 console.log(z);
		 $('#hide_id').append('<tr id=section_'+myarray[z]+'><td>'+price+'</td></tr>');
				
			}		
      		},
      		error: function(passParams){
           			alert("inside error " + passParams);
      		}
		});
}	
	/*var username = $("#input_zipcode").val();

 $.ajax({
       url: "http://localhost:8080/delivery/rests/",
       type: "GET",
       data: { username: username },
       success: function() {
           alert('Successfully connected to the server');
		   setdate();
		   if(date=='Saturday')
		   {
			   alert("invalid");
		   }
       }, 
       error: function() {
           alert('Something went wrong');
       }
   });*/
   function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
  
   function footer()
   {
	   var cart = $('.cart').height();
	   var restName = $('.restName').height();
	   if(cart>restName)
	   {
		    $('#div_footer').css('margin-top', (cart)-50+  'px');
	   }
   else
   {
    $('#div_footer').css('margin-top', (restName)-50+  'px');
   }
  
   }
 

   function set_rest_time()
   {
	var d = new Date();
	var a=d.toLocaleTimeString();
	//alert("current time:"+a);

	var current_hr = (d.getHours());
	var current_min = (d.getMinutes());
	//var last2 = a.slice(-2);
	
	 
	  var last2="PM";
	  
	/*if(last2=="AM")
	{
		var am=last2;
	}
	else
	{
		var pm=last2;
	}*/
//alert(last2);



	var start_hr=11;
	var start_min= 0;
//	var start_min= Math.precision(2);
	var end_hr=03;
	var end_min=0;
	var incremental_min=15; 
	var step_duration_min=30; 
var start_hr1=11;

 
	
var am="AM";
var am1="AM";
	
	for(i=1;i<31;i++)
	{
			
		if(start_min==0)
		{
			var start_min="00";
		}
		if(step_duration_min==0)
		{
			var step_duration_min="00";
		}
		if(start_hr==1)					
		{
			var start_hr="01";
		}
		if(start_hr==2)
		{
			var start_hr="02";
		}
		if(start_hr==3)
		{
			var start_hr="03";
		}
		if(start_hr==4)
		{
			var start_hr="04";
		}
		if(start_hr==5)
		{
			var start_hr="05";
		}
		if(start_hr==6)
		{
			var start_hr="06";
		}
		if(start_hr==7)
		{
			var start_hr="07";
		}
		if(start_hr==8)
		{
			var start_hr="08";
		}
		if(start_hr==9)
		{
			var start_hr="09";
		}
		if(start_hr1==1)					
		{
			var start_hr1="01";
		}
		if(start_hr1==2)
		{
			var start_hr1="02";
		}
		if(start_hr1==3)
		{
			var start_hr1="03";
		}
		if(start_hr1==4)
		{
			var start_hr1="04";
		}
		if(start_hr1==5)
		{
			var start_hr1="05";
		}
		if(start_hr1==6)
		{
			var start_hr1="06";
		}
		if(start_hr1==7)
		{
			var start_hr1="07";
		}
		if(start_hr1==8)
		{
			var start_hr1="08";
		}
		if(start_hr1==9)
		{
			var start_hr1="09";
		}		
	
		if(start_hr==23)
		{
			var start_hr=11;
			am="PM";
			
		}
		if(start_hr1==23)
		{
			var start_hr1=11;
			
			 am1="PM";
		}
		
		if(start_hr==24)
		{
			var start_hr=12;
			am="PM";
			
		}
		if(start_hr1==24)
		{
			var start_hr1=12;
			
			 am1="PM";
		}
		//alert(am+" "+am1);
		
		
		//alert(start_min);
	document.getElementById("time0"+i).innerHTML = 	start_hr+":"+start_min+" "+am+" - "+start_hr1+":"+step_duration_min+" "+am1;
	
		if(start_hr=="01")
		{
			var start_hr=1;
		}
		if(start_hr=="02")
		{
			var start_hr=2;
		}
		if(start_hr=="03")
		{
			var start_hr=3;
		}
		if(start_hr=="04")
		{
			var start_hr=4;
		}
		if(start_hr=="05")
		{
			var start_hr=5;
		}
		if(start_hr=="06")
		{
			var start_hr=6;
		}
		if(start_hr=="07")
		{
			var start_hr=7;
		}
		if(start_hr=="08")
		{
			var start_hr=8;
		}
		if(start_hr=="09")
		{
			var start_hr=9;
		}
		
		if(start_hr1=="01")
		{
			var start_hr1=1;
		}
		if(start_hr1=="02")
		{
			var start_hr1=2;
		}
		if(start_hr1=="03")
		{
			var start_hr1=3;
		}
		if(start_hr1=="04")
		{
			var start_hr1=4;
		}
		if(start_hr1=="05")
		{
			var start_hr1=5;
		}
		if(start_hr1=="06")
		{
			var start_hr1=6;
		}
		if(start_hr1=="07")
		{
			var start_hr1=7;
		}
		if(start_hr1=="08")
		{
			var start_hr1=8;
		}
		if(start_hr1=="09")
		{
			var start_hr1=9;
		}
		
	if(start_min=="00")
		{
			var start_min=0;
		}
		if(step_duration_min=="00")
		{
			var step_duration_min=0;
		}
		var step_duration_min=step_duration_min+15;
	if(step_duration_min>45)
	{
		
		var step_duration_min=0000;	
		 start_hr1=start_hr1+1;
	}
		
	else
	{
		
	}
		var start_min=start_min+15;
	if(start_min>45)
	{
		
		var start_min=0000;	
		 start_hr=start_hr+1;
	}
		
	else
	{
		
	}
	
		if(start_hr==12)
		{
			 am="PM";
			
		}
		if(start_hr1==12)
		{
			
			 am1="PM";
		}
		
		if(start_hr==13)
		{
			var start_hr=01;
			 am="PM";
			
		}
		if(start_hr1==13)
		{
			var start_hr1=01;
			 
			 am1="PM";
		}

		if(start_hr==14)
		{
			var start_hr=02;
			 am="PM";
			
		}
		if(start_hr1==14)
		{
			var start_hr1=02;
			
			 am1="PM";
		}
		
		if(start_hr==15)
		{
			var start_hr=03;
			am="PM";
			 
		}
		if(start_hr1==15)
		{
			var start_hr1=03;
			
			 am1="PM";
		}
		
		if(start_hr==16)
		{
			var start_hr=04;
			am="PM";
			
		}
		if(start_hr1==16)
		{
			var start_hr1=04;
			
			 am1="PM";
		}
		
		if(start_hr==17)
		{
			var start_hr=05;
			am="PM";
			 
		}
		if(start_hr1==17)
		{
			var start_hr1=05;
			
			 am1="PM";
		}

		if(start_hr==18)
		{
			var start_hr=06;
			am="PM";
			 
		}
		if(start_hr1==18)
		{
			var start_hr1=06;
			
			 am1="PM";
		}
		
		if(start_hr==19)
		{
			var start_hr=07;
			am="PM";
			 
		}
		if(start_hr1==19)
		{
			var start_hr1=07;
			
			 am1="PM";
		}
		
		if(start_hr==20)
		{
			var start_hr=08;
			am="PM";
			 
		}
		if(start_hr1==20)
		{
			var start_hr1=08;
			
			 am1="PM";
		}

		if(start_hr==21)
		{
			var start_hr=09;
			am="PM";
			 
		}
		if(start_hr1==21)
		{
			var start_hr1=09;
			
			 am1="PM";
		}
		
		if(start_hr==22)
		{
			var start_hr=10;
			am="PM";
			
		}
		if(start_hr1==22)
		{
			var start_hr1=10;
			
			 am1="PM";
		}
		
		
}
 for(i=1;i<31;i++)
	{
		var time0=$("#time0"+i).text();
		var hr = time0.substring(0, 2);
		var min = time0.substring(3, 5);
		var am = time0.substring(6, 8);
		//alert(i+am);
	//alert(hr+ "    "+ min+"    "+am);
		//alert(end_hr);
	var hr_num=Number(hr);
	//alert(hr_num);
		if(am=="AM" && hr>2)  
		{
			document.getElementById("time0"+i).remove();
		}
		/*if(am="PM" && hr==12) 
		{
			document.getElementById("time0"+i).remove();
		}*/
		if(am=="PM" && hr_num>=end_hr && hr_num<12) 
		{
			document.getElementById("time0"+i).remove();
		}
	}
   }
   
 

  function printPdf()
{
    var iframe = document.frames ? window.frames.frames["frPDF"] : document.getElementById("frPDF");
    var ifWin = iframe.contentWindow || iframe;
    try {
       ifWin.focus();
       ifWin.print();
    }
    catch (e) {
       window.print(false);
       //or when you get Invalid calling object error for IE9 and above
       //set the browser into IE8 compatibility mode will work
	   
     }
    
     return false;
	  
	  
}

		function set_time(){
		var dd_btn2 = $("#dd_btn1").text();
			//if(dd_btn2 != "Select Time" && dd_btn2 != "Today")
			//{
				/*document.getElementById("time1").style.display = 'block';
				document.getElementById("time2").style.display = 'block';
				document.getElementById("time3").style.display = 'block';
				document.getElementById("time1").innerHTML = "11.30";
				document.getElementById("time2").innerHTML = "12.30";
				document.getElementById("time3").innerHTML = "01.30";
				*/
				if(dd_btn2 == "Today")
				{
				var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

    var start = h+ ":" + m;
    //var start = '11:40';
    for(i=11;i<14;i++)
    {
    var y=i;
    var z=30;
    
    var end = y+ ":"+ z;

    s = start.split(':');
    e = end.split(':');

    min = e[1]-s[1];
    hour_carry = 0;
    if(min < 0){
        min += 60;
        hour_carry += 1;
    }
    hour = e[0]-s[0]-hour_carry;
    diff = hour + ":" + min;

  //  alert(diff);
    if(hour<1){
    document.getElementById("time"+i).style.display="none";
    }
   }
			}
			else{
				document.getElementById("time11").style.display = 'block';
				document.getElementById("time12").style.display = 'block';
				document.getElementById("time13").style.display = 'block';
			}
			
		}
		
	
   
   function set_corp_time()
   {
/*		var d = new Date();
		var a=d.toLocaleTimeString();
console.log("current time:"+a);

		var h = (d.getHours());
		var m = (d.getMinutes());
		var last2 = a.slice(-2);
	if(last2=="AM")
	{
	var am=last2;
	}
	else{
	var pm=last2;
	}
console.log(last2);

	new_time_hr=(h+1);
	new_time_min=(m+30);
	if(new_time_min>60)
	{
		new_time_hr=new_time_hr+1;
		min=new_time_min-60;	
	}
	else{
		min=new_time_min;
	}
	if(new_time_hr<12)
	{
		console.log("New time:"+new_time_hr+":"+min+am);
		
		if(new_time_hr<11.30)
		{
		document.getElementById("time1").innerHTML = "11.30";
		document.getElementById("demo0").innerHTML = "Today";
		
		}
	else
		{
		//document.getElementById("time1").remove();
		document.getElementById("time1").style.display = 'none';
		}
		
		if(new_time_hr<12.30)
		{
	
		document.getElementById("time2").innerHTML = "12.30";
		document.getElementById("demo0").innerHTML = "Today";
		}
	else
		{
		//document.getElementById("time2").remove();
		document.getElementById("time2").style.display = 'none';
		}
		
		if(new_time_hr<1.30)
		{
	//	document.getElementById("time3").remove();
		document.getElementById("time3").style.display = 'none';
		}
	else
		{
			
		document.getElementById("time3").innerHTML = "1.30";
		document.getElementById("demo0").innerHTML = "Today";
		}
	}
else{
	console.log("New time:"+new_time_hr+":"+min+pm);
	
	if(new_time_hr<11.30)
	{
		document.getElementById("time1").innerHTML = "11.30";
		//document.getElementById("demo0").innerHTML = "Tomorrow";
	
	}
	else{
	//document.getElementById("time1").remove();
	document.getElementById("time1").style.display = 'none';
		}
		
		if(new_time_hr<12.30)
	{
	
	document.getElementById("time2").innerHTML = "12.30";
	//document.getElementById("demo0").innerHTML = "Tomorrow";
	}
	else{
	//document.getElementById("time2").remove();
	document.getElementById("time2").style.display = 'none';
		}
		
		if(new_time_hr<1.30)
{
	//document.getElementById("time3").remove();
	document.getElementById("time3").style.display = 'none';
	}
	else{
	document.getElementById("time3").innerHTML = "1.30";
	//document.getElementById("demo0").innerHTML = "Tomorrow";
		}
}
*/
	var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
console.log('h,m : '+h +' '+m);
if (h>=12 && m>=30)
	{
		document.getElementById("demo0").remove();
		document.getElementById("demo0").style.display = 'none';
		}
	
   }
   
   function ordertype_corp()
   {
	     if ($('#dd_btn1').text().trim() == "Select Date") 
		 {
           // return false;
			//alert("Plz select date");
			snack_error();
			s_time();
         }
		 else
		if ($('#dd_btn2').text().trim() == "Select Time") 
		{
         //return false;
			//alert("Plz select time");
			snack_error();
			s_time();
         }
		 else
		 
		if ($('#dd_btn3').text().trim() == "Select Corporate Center") 
			 {
           //return false;
			//alert("Plz select centre");
			snack_error();
			s_time();
         }
		 else
		 
		 if ($('#company_name').val() == "") 
			 {
            //iserror = true;
			//alert("Plz select company name");
			snack_error();
			s_time();
         } 
		 else
		 if ($('#suite_number').val() == "") 
			 {
           // iserror = true;
			//alert("Plz select suite number");
			snack_error();
			s_time();
         
		 }else
		 if ( $("#login").css('display') == 'block')
			{
			  
			  $('#myModal_review_login').modal('show');
			
			}
			else {
			
			 goto_corp_review_order();
		 }
		// return false
   }
   
    function ordertype_rest()
   {
	     if ($('#dd_btn11').text().trim() == "Select Date") 
		 {
           // return false;
			alert("Plz select date");
         }
		 else
		if ($('#dd_btn22').text().trim() == "Select Time") 
		{
         //return false;
			alert("Plz select time");
         }
		 
		 else{
			 goto_rest_review_order();
		 }
		
   }
   
   function goto_corp_review_order()
   {
	   $('#autocomplete').prop('disabled', true);
		$('#find_btn').css("display", "none");
		$("#address").css("display", "none");
		$("#date_time_corp").css("display", "none");
		$("#date_time_rest").css("display", "none");
			
		$("#restAndCartContainer").css("display", "none");
		$("#choose_menu").css("display", "none");
			
		$("#picture").css("display", "none");
		$("#showcart").css("display", "none");
		$(".when").css("display", "none");
		$("#backto_rest").css("display", "none");
			
		$('#back_corp_checkout_panel').css("display", "block");
		$('#back_rest_checkout_panel').css("display", "none");
			
		$('#review_details').css("display", "block");	
		$('#review_corp_delivery_details').css("display", "block");
		$("#login").css("display", "none");
		$("#register").css("display", "none");
		/*$('#review_paymentcard_details').css("display", "none");
	    $('#review_order_details').css("display", "none");
		$('#review_order_summary').css("display", "none");*/
		var date_delivery=$("#dd_btn1").text();
		var time_delivery=$("#dd_btn2").text();
		
		
		$("#date_delivery").text(date_delivery+' at '+time_delivery);
		
		var user_address=$("#autocomplete").val();
			
		var dd_btn3=$("#dd_btn3").text();
		var company_name=$("#company_name").val();
		var suite_number=$("#suite_number").val();
			
	        
		$("#address_delivery").text(user_address);
		$("#corp_address_delivery").text(suite_number+" "+company_name+" "+dd_btn3);
		$("#cart_item_details").empty();
		$("#cart_item_details").val('');
		
		/*
		var tbl_card = $("#card_details").parent().parent(); //tr
        var dcard = par.children("td:nth-child(1)");
        var ddate = par.children("td:nth-child(2)");
        alert(dcard+"  "+ddate);

		/*var par = $(this).parent().parent();
		var ID =$(this).closest('tr').attr('id');*/
				
		/*$("#disply_new_card").append('<input type="radio" id="radcc" class="radioBtnClass" name="rad_cc" value="'+dcard+'"/>'+
		 '<label style="font-weight:lighter;margin-left:5px;width:440px;margin-bottom: 10px;">Card ending in '+ dcard+
		 '</label><span style="width:100px;font-weight:lighter">'+ ddate+'</span><br/>');*/
		
	
		var table = $("#cartTable #tid");
		
	    things = new Object();
		things.rest_thing = new Array();

		table.find('tr').each(function (i,e) {
			
			zipid=$(this).closest('tr').attr('zipid');
			console.log('zipid '+zipid);
			var $tds = $(this).find('td'),
			i_restname = $tds.eq(8).text();
			i_restid = $tds.eq(9).text();
				 
			things.rest_thing.push({
									"id":i_restid ,
									"name":i_restname,
									"zipid":zipid
								});
				  
				things.rest_thing = things.rest_thing.filter((rest_thing, index, self) =>
					index === self.findIndex((t) => (
						t.id === rest_thing.id && t.name === rest_thing.name && t.zipid === rest_thing.zipid
					))
				)
		});
	
		for(var i=0; i < things.rest_thing.length; i++){
			$("#cart_item_details").append('<tr class="count_restaurant" zipid="'+things.rest_thing[i].zipid+'" restid='+ things.rest_thing[i].id+' name='+things.rest_thing[i].name+' style="display: block;margin-bottom:10px;"><td number="'+i+'" id='+things.rest_thing[i].name+' style="width:700px"><b>'+things.rest_thing[i].name+'</b></td></tr>');
		}
	 
	
		table.find('tr').each(function (i,e) {
			
			var i_option= $(this).closest('tr').attr('option');
			//	console.log(i_option);
			 var $tds = $(this).find('td'),
             i_quantity = $tds.eq(0).text(),
             i_product = $tds.eq(1).text(),
             i_price = $tds.eq(2).text();
			 
             i_cost = $tds.eq(4).text(),
             i_description = $tds.eq(5).text();
			 i_special_instruction = $tds.eq(7).text();
             i_restname = $tds.eq(8).text();
		     i_restid = $tds.eq(9).text();
			 i_ordertype = $tds.eq(10).text();
			 i_baseprice = $tds.eq(11).text();
		     i_restprice= $tds.eq(12).text();
			 i_menuid= $tds.eq(13).text();
			 i_section1 = $tds.eq(14).text();
		     i_section2 = $tds.eq(15).text();
			 i_section3 = $tds.eq(16).text();
			 i_section4 = $tds.eq(17).text();
		     i_section5 = $tds.eq(18).text();
			 i_section6 = $tds.eq(19).text();
			
			/*var str1 = i_section1;
			 var myarray = str1.split(',');

			for(var k = 0; k < myarray.length; k++)
			{
			  console.log(myarray[k]);
			}*/
			
			$("#"+i_restname).append('<tr class="count_menu menu_'+i_restname+'" style="display: block;margin-bottom:5px;margin-top:5px;"><td width=30px id="i_quantity'+i+'">'+i_quantity+
			'</td><td width=30px>X</td><td width=150px id="i_product'+i+'">'+ i_product+'</td><td width=100px id="i_price'+i+'">'+i_price+'</td>'+
			'<td width=150px id="i_option'+i+'">'+i_option+'</td><td style="display:none" id="i_cost'+i+'">'+
			i_cost+'</td><td style="display:none" id="i_description'+i+'">'+i_description+'</td><td style="display:none" id="i_special_instruction'+i+'">'+i_special_instruction+
			'</td><td style="display:none" id="i_restname'+i+'">'+i_restname+'</td><td style="display:none" id="i_restid'+i+'">'+i_restid+
			'</td><td style="display:none" id="i_ordertype'+i+'">'+i_ordertype+'</td><td style="display:none" id="i_baseprice'+i+'">'+i_baseprice+'</td>'+
			'</td><td style="display:none" id="i_restprice'+i+'">'+i_restprice+'</td><td style="display:none" id="i_menuid'+i+'">'+i_menuid+
			'</td><td style="display:none" id="i_section1'+i+'">'+i_section1+'</td>'+
			'<td style="display:none" id="i_section2'+i+'">'+i_section2+'</td><td style="display:none" id="i_section3'+i+'">'+i_section3+'</td>'+
			'<td style="display:none" id="i_section4'+i+'">'+i_section4+'</td><td style="display:none" id="i_section5'+i+'">'+i_section5+'</td>'+
			'<td style="display:none" id="i_section6'+i+'">'+i_section6+'</td></tr>');
			 });
			  
			
			final_calculate();
	 }
	 
	function goto_rest_review_order(){
		$('#autocomplete').prop('disabled', true);
		$('#find_btn').css("display", "none");
		$("#address").css("display", "none");
		$("#date_time_corp").css("display", "none");
		$("#date_time_rest").css("display", "none");
			
		$("#restAndCartContainer").css("display", "none");
		$("#choose_menu").css("display", "none");
			
		$("#picture").css("display", "none");
		$("#showcart").css("display", "none");
		$(".when").css("display", "none");
		$("#backto_rest").css("display", "none");
			
			
		$('#back_rest_checkout_panel').css("display", "block");
		$('#back_corp_checkout_panel').css("display", "none");
		$('#review_details').css("display", "block");
		$('#review_rest_delivery_details').css("display", "block");

			
		/*$('#review_paymentcard_details').css("display", "none");
	    $('#review_order_details').css("display", "none");
		$('#review_order_summary').css("display", "none");*/
		var rest_date_delivery=$("#dd_btn11").text();
		var rest_time_delivery=$("#dd_btn22").text();
		
		
		$("#rest_date_delivery").text(rest_date_delivery+' at '+rest_time_delivery);
		
		var user_address=$("#autocomplete").val();
			//alert(user_address);
	        
        $("#rest_address_delivery").text(user_address);
		  
		$("#cart_item_details").empty();
		$("#cart_item_details").val('');
		
		/*
		var tbl_card = $("#card_details").parent().parent(); //tr
        var dcard = par.children("td:nth-child(1)");
        var ddate = par.children("td:nth-child(2)");
        alert(dcard+"  "+ddate);

		/*var par = $(this).parent().parent();
		var ID =$(this).closest('tr').attr('id');*/
				
		/*$("#disply_new_card").append('<input type="radio" id="radcc" class="radioBtnClass" name="rad_cc" value="'+dcard+'"/>'+
		 '<label style="font-weight:lighter;margin-left:5px;width:440px;margin-bottom: 10px;">Card ending in '+ dcard+
		 '</label><span style="width:100px;font-weight:lighter">'+ ddate+'</span><br/>');*/
		
	
		var table = $("#cartTable #tid");

		var thelist = [];
		var zipbusid = table.find('tr').attr('zipbusid');
		console.log('zipbusid '+zipbusid);
		
		table.find('tr').each(function (i,e) {
			var $tds = $(this).find('td'),
            i_restname = $tds.eq(8).text();
		    i_restid = $tds.eq(9).text();
			  
			thelist.push({
					"id":i_restid ,
					"name":i_restname}
				); 
		});
		   
		for(var i=0; i < thelist.length; i++){
			$("#cart_item_details").append('<tr class="count_restaurant" restid='+ thelist[i].id+' name='+thelist[i].name+' style="display: block;margin-bottom:10px;"><td number="'+i+'" id='+thelist[i].name+'><b>'+thelist[i].name+'</b></td></tr>');
		}
			
		table.find('tr').each(function (i,e) {
			var $tds = $(this).find('td'),
            i_quantity = $tds.eq(0).text(),
            i_product = $tds.eq(1).text(),
            i_price = $tds.eq(2).text();
			 
            i_cost = $tds.eq(4).text(),
            i_description = $tds.eq(5).text();
			i_special_instruction = $tds.eq(7).text();
            i_restname = $tds.eq(8).text();
		    i_restid = $tds.eq(9).text();
			i_ordertype = $tds.eq(10).text();
			i_baseprice = $tds.eq(11).text();
		    i_restprice= $tds.eq(12).text();
			i_section1 = $tds.eq(13).text();
		    i_section2 = $tds.eq(14).text();
			i_section3 = $tds.eq(15).text();
			
			 
			$("#"+i_restname).append('<tr style="display: block;margin-bottom:5px;margin-top:5px;"><td width=30px id="i_quantity'+i+'">'+i_quantity+
			'</td><td width=30px>X</td><td width=150px id="i_product'+i+'">'+ i_product+'</td><td width=100px id="i_price'+i+'">'+i_price+'</td><td style="display:none" id="i_cost'+i+'">'+
			i_cost+'</td><td style="display:none" id="i_description'+i+'">'+i_description+'</td><td style="display:none" id="i_special_instruction'+i+'">'+i_special_instruction+
			'</td><td style="display:none" id="i_restname'+i+'">'+i_restname+'</td><td style="display:none" id="i_restid'+i+'">'+i_restid+
			'</td><td style="display:none" id="i_ordertype'+i+'">'+i_ordertype+'</td><td style="display:none" id="i_baseprice'+i+'">'+i_baseprice+'</td>'+
			'</td><td style="display:none" id="i_restprice'+i+'">'+i_restprice+'</td><td style="display:none" id="i_section1'+i+'">'+i_section1+'</td>'+
			'<td style="display:none" id="i_section2'+i+'">'+i_section2+'</td><td style="display:none" id="i_section3'+i+'">'+i_section3+'</td></tr>');
		});
			
		final_calculate();
	 }
	 
	 
	function load_corporate_center(){
		$("#dd3").empty();
		var corpZipCode= $("#input_zipcode").val();
		
		$.ajax({
			url: pageURL+"zipcorpcenter",
			type: "GET",
			data: {
					"corpZipCode": "19426"
			},
			success: function(data) {	   
				$.each(data, function(key, value) { 
					var tblRow2 = '<li><a style="cursor:pointer" id="'+value['id']+'" >'+value['name']+'</a></li>'
					$("#dd3").append(tblRow2);   
				});		
			}, 
			error: function() {
				alert('Something went wrong');
			}
		});
	}
	 
	/* function ValidateCreditCardNumber1(){
		 var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand1').text(cardType);

        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
		
		 if(($("#cc-number1").val()=="") || ($("#cc-number1").css("border-color") === "rgb(217,83,79)") ||
	  	($("#cc-exp1").val()=="") || ($("#cc-exp1").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-cvc1").val()=="") || ($("#cc-cvc1").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-name1").val()=="") || ($("#cc-name1").css("border-color") === "brown") ||
		($("#cc-address1").val()=="") || ($("#cc-address1").css("border-color") === "brown")||
		($("#cc-city1").val()=="") || ($("#cc-city1").css("border-color") === "brown") || 
		($("#cc-state1").val()=="") || ($("#cc-state1").css("border-color") === "brown") || 
		($("#cc-zip1").val()=="") || ($("#cc-zip1").css("border-color") === "brown"))
		{
			
			$('#myModal_payment1').modal('show');
		}
		
	 }*/
	 
	function ValidateCreditCardNumber(){
		var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);

        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
		
		if(($("#cc-number").val()=="") || ($("#cc-number").css("border-color") === "rgb(217,83,79)") ||
	  	($("#cc-exp").val()=="") || ($("#cc-exp").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-cvc").val()=="") || ($("#cc-cvc").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-name").val()=="") || ($("#cc-name").css("border-color") === "brown") ||
		($("#cc-address").val()=="") || ($("#cc-address").css("border-color") === "brown")||
		($("#cc-city").val()=="") || ($("#cc-city").css("border-color") === "brown") || 
		($("#cc-state").val()=="") || ($("#cc-state").css("border-color") === "brown") || 
		($("#cc-zip").val()=="") || ($("#cc-zip").css("border-color") === "brown"))
		{
			
			$('#myModal_payment').modal('show');
			
			/*$("#save_ccard").css("display", "block");
			$("#update_ccard").css("display", "none");
			$("#submit_card").css("display", "none");
			$("#update_card").css("display", "none");*/
		}
		
	}
	 	 /* function ValidateCreditCardNumber_updatecc(){
		 var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);

        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
		
		 if(($("#cc-number").val()=="") || ($("#cc-number").css("border-color") === "rgb(217,83,79)") ||
	  	($("#cc-exp").val()=="") || ($("#cc-exp").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-cvc").val()=="") || ($("#cc-cvc").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-name").val()=="") || ($("#cc-name").css("border-color") === "brown") ||
		($("#cc-address").val()=="") || ($("#cc-address").css("border-color") === "brown")||
		($("#cc-city").val()=="") || ($("#cc-city").css("border-color") === "brown") || 
		($("#cc-state").val()=="") || ($("#cc-state").css("border-color") === "brown") || 
		($("#cc-zip").val()=="") || ($("#cc-zip").css("border-color") === "brown"))
		{
			
			$('#myModal_payment').modal('show');
			
			$("#save_card").css("display", "none");
			$("#update_ccard").css("display", "block");
			$("#submit_card").css("display", "none");
			$("#update_card").css("display", "none");
			
		}
		
	 }
	  function ValidateCreditCardNumber_save(){
		 var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);

        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
		
		 if(($("#cc-number").val()=="") || ($("#cc-number").css("border-color") === "rgb(217,83,79)") ||
	  	($("#cc-exp").val()=="") || ($("#cc-exp").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-cvc").val()=="") || ($("#cc-cvc").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-name").val()=="") || ($("#cc-name").css("border-color") === "brown") ||
		($("#cc-address").val()=="") || ($("#cc-address").css("border-color") === "brown")||
		($("#cc-city").val()=="") || ($("#cc-city").css("border-color") === "brown") || 
		($("#cc-state").val()=="") || ($("#cc-state").css("border-color") === "brown") || 
		($("#cc-zip").val()=="") || ($("#cc-zip").css("border-color") === "brown"))
		{
			
			$('#myModal_payment').modal('show');
			
			$("#save_card").css("display", "none");
			$("#update_ccard").css("display", "block");
			$("#submit_card").css("display", "block");
			$("#update_card").css("display", "none");
			
		}
		
	 }
	  function ValidateCreditCardNumber_update(){
		 var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);

        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
		
		 if(($("#cc-number").val()=="") || ($("#cc-number").css("border-color") === "rgb(217,83,79)") ||
	  	($("#cc-exp").val()=="") || ($("#cc-exp").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-cvc").val()=="") || ($("#cc-cvc").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-name").val()=="") || ($("#cc-name").css("border-color") === "brown") ||
		($("#cc-address").val()=="") || ($("#cc-address").css("border-color") === "brown")||
		($("#cc-city").val()=="") || ($("#cc-city").css("border-color") === "brown") || 
		($("#cc-state").val()=="") || ($("#cc-state").css("border-color") === "brown") || 
		($("#cc-zip").val()=="") || ($("#cc-zip").css("border-color") === "brown"))
		{
			
			$('#myModal_payment').modal('show');
			
			$("#save_card").css("display", "none");
			$("#update_ccard").css("display", "none");
			$("#submit_card").css("display", "none");
			$("#update_card").css("display", "block");
			
		}
		
	 }*/
$(document).ready(function() {
		footer();
		calculate();
		
    $('#logged_in').click(function(e){
		$("#profile_details").modal();
	//	$("#card_details").empty();
	//	$("#disply_new_card").empty();
	//	var u_id=$('#hide_userid').text();
		//alert(u_id);
		
		
	  });
		
	$('#edit_user_details').click(function(e){
		
		$("#myModal_edit").modal();
		
		var u_fname=$('#hide_userfname').text();
		var u_lname=$('#hide_userlname').text();
		var u_email=$('#hide_useremail').text();
		var u_phone=$('#hide_userphone').text();
		
		$('#edit_firstname').val(u_fname);
		$('#edit_lastname').val(u_lname);
		$('#edit_email').val(u_email);
		$('#edit_phone').val(u_phone);
		
		$('#profile_details').modal('hide');
	 });
	 

	 
	  $('#modal_save_card').click(function(e){
		$("#myModal_payment").modal('show');
			$("#save_ccard").css("display", "block");
			$("#update_ccard").css("display", "none");
			$("#submit_card").css("display", "none");
			$("#update_card").css("display", "none");
		$('#profile_details').modal('hide');
	 });
	 
	  
	    $('#update_ccard').click(function(e){
		
		 $("#profile_details").modal();
		 $('#myModal_payment').modal('hide');
		
	  });
	  
	   $('#modal_add_card').click(function(e){
		$("#myModal_payment").modal('show');
			$("#save_ccard").css("display", "none");
			$("#update_ccard").css("display", "none");
			$("#submit_card").css("display", "block");
			$("#update_card").css("display", "none");
		
	 });
	 
	  $('#myModal1').on('hidden.bs.modal', function () {
		 
              $('#qty').val('1');
			  $('#hide_id').empty();
			 $('#section_chk').empty();
	});
	
	    
	$('#myModal_reset_password').on('hidden.bs.modal', function () {
            $('.modal-body').find('lable,input,textarea').val('');
	});
	
	$('#myModal_payment').on('hidden.bs.modal', function () {
            $('.modal-body').find('lable,input,textarea').val('');
	});
	
	$('#myModal_coupon').on('hidden.bs.modal', function () {
            $('.modal-body').find('lable,input,textarea').val('');
    });
	
	$('#myModal_login').on('hidden.bs.modal', function () {
            $('.modal-body').find('lable,input,textarea').val('');
            $('#login_user').css('border', '');
			$('#login_pass').css('border', '');
    });
	$('#myModal_register').on('hidden.bs.modal', function () {
            $('.modal-body').find('lable,input,textarea').val('');
            $('#firstname').css('border', '');
			$('#lastname').css('border', '');
			$('#email').css('border', '');
			$('#phone').css('border', '');
			$('#password').css('border', '');
			$('#confirm_password').css('border', '');
    });
	$('#myModal_forgot_password').on('hidden.bs.modal', function () {
            $('.modal-body').find('lable,input,textarea').val('');
            
    });
	  pageURL = $(location).attr("href");
	// alert(pageURL);
	  $("input[name$='creditcard']").click(function() {
        var test = $(this).val();
        //alert(test);
		if(test=='select_newcard')
			{ 
         $("#form_payment").css("display", "block");
			}
			else
      {
        $("#form_payment").css("display", "none");
      }
			});
//alert('hi');
	
$("#profile_details").css("display", "none");

$("#autocomplete").on('change', function(e) {
	load_corporate_center();
	  var ordertype ="CORP";
	 
			$("#div_address").css("backgroundImage", "url(/delivery/resources/images/corp_img.jpg)");
			$("#select_btn").css("display", "none");
			$("#div_carousel").css("display", "none");
			$("#date_time_corp").css("display", "block");
			$("#date_time_rest").css("display", "none");
			$("#when").css("display", "block");
			 $('#select_rest').css("display", "block");
			//$("#restAndCartContainer").css("display", "block");
		zipcode=$("#postal_code").val();
		var username= $("#input_zipcode").val();
		state=$("#administrative_area_level_1").val();
		city=$("#locality").val();
   
    $('#table_menus').empty();
	
   $.ajax({
       url: pageURL+"restaurantsInZip",
       type: "GET",
     //data: {"zipcode": zipcode, "state":state,"city":city},
	   data: {"zipcode": "19406","state":"PA","city":"KingOfPrussia"},
       success: function(data) {
	
	   var html = '';		
					
						$.each(data, function(key, value) {
							console.log(key[0]);
							var zipbusid=key[0];
							$("#hide_zipid").text(zipbusid);
								var len=value.length;				
								for(i=0; i < len; i++)
								{ 			
								html += '<tr id="tryme_rest" class="btn spaceUnder_rest" ordertype="'+ordertype+'" zipBustypeMerchantId="'+value[i]['zipBustypeMerchantId']+'" valuename="'+value[i]["name"]+'" valueid="'+value[i]['id']+
								'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
								'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value[i]['image']+'"/></label></td>'+
								'<td rest_code=' + value[i]['id']+'>'+ 
								'<h4><label style="margin-bottom:0px;">' + value[i]['name'] +
								'</label></td></tr><br/>';
								}
							});
							
							$('#select_rest').last().empty().append(html);
							$("#show_empty_cart").css("display", "block");
		}, 
       error: function() {
           alert('Something went wrong');
       }
   });
	
});
	
	$("#btn_dismiss_yes").on('click', function(e) {
		window.location.replace(pageURL);
	});
	
	$("#btn_dismiss_no").on('click', function(e) {
		e.preventDefault();
	});
	
	$("#logohome").on('click', function(e) {
		
		
		if(theTotal==0)
					{
						
					window.location.replace(pageURL);
					}
	
					else
					{
			$("#myModal_dismiss_cart").modal();
					}
	});
	
	$("#gohome").on('click', function(e) {
	
		if(theTotal==0)
					{
					window.location.replace(pageURL);
					}
	
					else
					{
			$("#myModal_dismiss_cart").modal();
					}
	});

	$('#find_btn').on('click', function(e) {
		
		$("#select_btn").empty();
		var addressbar = $("#autocomplete").val();
		if(addressbar==0)
		{
			alert("Please enter your address");
		}
		else
		{
			
		var zipcode = $("#postal_code").val();
		var city = $("#locality").val();
		var state = $("#administrative_area_level_1").val();
		var username= $("#input_zipcode").val();
    user_address=$("#autocomplete").val();
  $("#autocomplete1").val(user_address);
       
  load_corporate_center();
	  var ordertype ="CORP";
	 
	 $("#div_address").css("backgroundImage", "url(/delivery/resources/images/corp_img.jpg)");
		$("#select_btn").css("display", "none");
$("#div_carousel").css("display", "none");
			$("#date_time_corp").css("display", "block");
			$("#date_time_rest").css("display", "none");
			$("#when").css("display", "block");
			 $('#select_rest').css("display", "block");
			 $("#div_carousel").css("display", "none"); 
			//$("#restAndCartContainer").css("display", "block");
	 /*zipcode=$("#postal_code").val();
   var username= $("#input_zipcode").val();
   state=$("#administrative_area_level_1").val();
   city=$("#locality").val();*/
   
    $('#table_menus').empty();
	
   $.ajax({
       url: pageURL+"restaurantsInZip",
       type: "GET",
       //data: {"zipcode": zipcode, "state":state,"city":city},
	   data: {"zipcode": "19406","state":"PA","city":"KingOfPrussia"},
       success: function(data) {
	//$("#choose_restaurant").css("display", "block");
      // alert(data);
					var html = '';		
						
						$.each(data, function(key, value) { 
						var zipbusid=key[0];
							$("#hide_zipid").text(zipbusid);
							var len=value.length;				
								for(i=0; i < len; i++)
								{ 
			html += '<tr id="tryme_rest" class="btn spaceUnder_rest" ordertype="'+ordertype+'"  zipBustypeMerchantId="'+value[i]['zipBustypeMerchantId']+'" valuename="' +
			value[i]["name"]+'" valueid="'+value[i]['id']+
			'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
							'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value[i]['image']+'"/></label></td>'+
							'<td rest_code=' + value[i]['id']+'>'+ 
							'<h4><label style="margin-bottom:0px;">' +value[i]['name'] +
							'</label></td></tr><br/>';
								}
							});
							
	   
							$('#select_rest').last().empty().append(html);
							$("#show_empty_cart").css("display", "block");
		}, 
       error: function() {
           alert('Something went wrong');
       }
   });
   

	}
	});
	
	/*$("#select_btn").on('click', '#CORP', function () {
	load_corporate_center();
	
	   var ordertype = document.getElementById("CORP").getAttribute("ordertype");
	  // alert(ordertype);
		$("#div_address").css("backgroundImage", "url(/delivery/resources/images/corp_img.jpg)");
		$("#select_btn").css("display", "none");
//$("#restaurants").css("display", "block");
		$("#CORP").css("display", "none");
			$("#RD").css("display", "none");
			$("#RP").css("display", "none");
			$("#div_carousel").css("display", "none");
			$("#date_time_corp").css("display", "block");
			$("#date_time_rest").css("display", "none");
			$("#when").css("display", "block");
			 $('#select_rest').css("display", "block");
			//$("#restAndCartContainer").css("display", "block");
	 zipcode=$("#postal_code").val();
   var username= $("#input_zipcode").val();
   state=$("#administrative_area_level_1").val();
   city=$("#locality").val();
   
    $('#table_menus').empty();
	
   $.ajax({
       url: pageURL+"restaurants",
       type: "GET",
       data: {"id":"1"},
       success: function(data) {
	//$("#choose_restaurant").css("display", "block");
      // alert(data);
					var html = '';		
						
						$.each(data, function(key, value) { 
							
			html += '<tr id="tryme_rest" class="btn spaceUnder_rest" ordertype="'+ordertype+'" valuename="'+value['name']+'" valueid="'+value['id']+
			'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
							'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value['image']+'"/></label></td>'+
							'<td rest_code=' + value['rest_code']+'>'+ 
							'<h4><label style="margin-bottom:0px;">' + value['name'] +
							  
							'</label></td></tr><br/>';
							});
							$('#select_rest').last().empty().append(html);
							$("#show_empty_cart").css("display", "block");
		}, 
       error: function() {
           alert('Something went wrong');
       }
   });
	});
	
	$("#select_btn").on('click', '#RD', function () {
			  var ordertype = document.getElementById("RD").getAttribute("ordertype");
	 //  alert(ordertype);
	   
			$("#div_address").css("backgroundImage", "url(/delivery/resources/images/rest_img.jpg)");
			$("#select_btn").css("display", "none");
			$("#CORP").css("display", "none");
			$("#RD").css("display", "none");
			$("#RP").css("display", "none");
			$("#div_carousel").css("display", "none");
			$("#date_time_rest").css("display", "block");
			$("#date_time_corp").css("display", "none");
			 $('#select_rest').css("display", "block");
		 zipcode=$("#postal_code").val();
   var username= $("#input_zipcode").val();
     state=$("#administrative_area_level_1").val();
   city=$("#locality").val();
   
    $('#table_menus').empty();
	
   $.ajax({
       url: pageURL+"restaurants",
       type: "GET",
       data: {"id":4},
       success: function(data) {
	$("#choose_restaurant").css("display", "block");
	
					var html = '';		
						
						$.each(data, function(key, value) { 
							
						html +=  '<tr id="tryme_rest" class="btn spaceUnder_rest" ordertype="'+ordertype+'" valuename="'+value['name']+'" valueid="'+value['id']+
			'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
							'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value['image']+'"/></label></td>'+
							'<td id="tryme_rest" rest_code=' + value['rest_code']+'>'+ 
							'<h4><label style="margin-bottom:0px;margin-right:150px;">' + value['name'] +
							'</label></h4><label>' + value['tagLine']  + 
							'</label></td><td><label>'+value['opencloseTime']+
							'</label><br/><label>'+value['timeRange']+
							'</label><br/>'+value['pricelevel']+'</td></tr>';
							});
							$('#select_rest').last().append(html);
								$("#show_empty_cart").css("display", "block");
       }, 
       error: function() {
           alert('Something went wrong');
       }
   });
	});
		
	
	sum=0;*/
	
/*$("input#address").suggest();

	$('#menus').hide();*/
	
	$('#select_rest').on('click', '#tryme_rest',function(e) {
	
	var ordertype = document.getElementById("tryme_rest").getAttribute("ordertype");
		
				//var select_rest = $(this).text();
				var ID =$(this).closest('tr').attr('valueid');
		var select_rest =$(this).closest('tr').attr('valuename');
		var zipBustypeMerchantId = $(this).closest('tr').attr('zipBustypeMerchantId');
				$('#select_rest').css("display", "none");
				$("#table_menus").css("display", "block");
				
		$.ajax({
      		url: pageURL+"menus",
      		type: "GET",
      	    data: { "id" : ID},
      		success: function(data){
            	// var d = JSON.parse(data);
				//alert(data);
				//console.log(data);
            	var array =  data;
        		//$('#table_menus tr').not(':first').not(':last').remove();
				
				$("#choose_rest").css("display", "none");
				$("#backto_rest").css("display", "block");
				 
				$("#back_restname").html('<b style="padding-bottom:10px">'+select_rest+'</b>');
				
				//$("#backto_rest").html('<a href="http://localhost:8080/delivery/rests/restaurants?zipcode=19425&orderType=CORP">&nbsp;&nbsp;<i class="left"></i><b >'+select_rest+'</b></a>');
						var html = '';		
							for(i=0;i<1;i++)
						{
						$.each(data, function(key, value) { 
							if(value['groupNumber']==i)
							{
							html += '<tr class="'+value['groupNumber']+' btn spaceUnder_rest withHover" groupMenuNumber="'+value['groupMenuNumber']+'" onclick="enter_address()" data-toggle="modal" id="dataTable1"' +
							'ordertype="'+ordertype+'" zipBustypeMerchantId="'+zipBustypeMerchantId+'" value=' + value['id']+' restaurantBustypeId="'+value['restaurantBustypeId']+'" style="border:1px solid #c4c4c4;height:100px;width:900px;padding-left:5px;">'+
							'<td><label><img style="width:100px;height:90px;float:left;padding-left:10px" src= "/delivery/resources/images/'+value['menuImage']+'"/></label></td>'+
							'<td width=500px id="tryme" align="left" style="padding-left:30px;white-space: normal;" >'+ 
							'<h4><label>' + value['name'] + '</label></h4><label style="font-weight:lighter;">' + value['description']  + 
							'<label></td><td width=150px align="right"><h4 style="color:blue">'+
							'<label>$' + value['salesPrice']+ '</label></h4></td>'+
							'<td style="display:none"><label>'+value['basePrice']+'</label></td>'+
							'<td style="display:none"><label>'+value['restaurantPrice']+'</label></td>'+
							'<td style="display:none"><label>'+select_rest+'</label></td>'+
							'<td style="display:none"><label>'+value['active']+'</label></td>'+
							'<td style="display:none"><label>'+value['restaurantBustypeId']+'</label></td></tr>';
							}
							});
					$('#table_menus').last().append(html);
						}
							  
							for(i=1;i<5;i++)
						{
								var html_heading1='';
						var html1 = '';
						$.each(data, function(key, value) { 
							if(value['groupNumber']==i)
							{ 
						  
						 html_heading1='<tr class="withoutHover" style="height:30px;width:900px;padding-bottom:20px;margin-bottom: 1.1em;"><td><button type="button" class="btn btn-info collapsed" data-toggle="collapse" '+
						 'data-target=".'+value['groupNumber']+'" style="width:900px;margin-bottom:10px;"><h4 align="left">'+value['groupName']+'</h4>'+
						 '<span style="font-size:10px;float:right">Show</span></button></td></tr>';
						
						
							html1 += '<tr class="'+value['groupNumber']+' btn collapse spaceUnder_rest withHover" groupMenuNumber="'+value['groupMenuNumber']+'" onclick="enter_address()" data-toggle="modal" id="dataTable1"' +
							'ordertype="'+ordertype+'" zipBustypeMerchantId="'+zipBustypeMerchantId+'" value=' + value['id']+' restaurantBustypeId="'+value['restaurantBustypeId']+'" style="border:1px solid #c4c4c4;height:100px;width:900px;padding-left:5px;">'+
							'<td><label><img style="width:100px;height:90px;float:left;padding-left:10px" src= "/delivery/resources/images/'+value['menuImage']+'"/></label></td>'+
							'<td width=500px id="tryme" align="left" style="padding-left:30px;white-space: normal;">'+ 
							'<h4><label>' + value['name'] + '</label></h4><label style="font-weight:lighter;">' + value['description']  + 
							'<label></td><td width=150px align="right"><h4 style="color:blue">'+
							'<label>$' + value['salesPrice']+ '</label></h4></td>'+
							'<td style="display:none"><label>'+value['basePrice']+'</label></td>'+
							'<td style="display:none"><label>'+value['restaurantPrice']+'</label></td>'+
							'<td style="display:none"><label>'+select_rest+'</label></td>'+
							'<td style="display:none"><label>'+value['active']+'</label></td>'+
							'<td style="display:none"><label>'+value['restaurantBustypeId']+'</label></td></tr>';
							}
							});
							$('#table_menus').last().append(html_heading1+html1);
							
							
						}						
				
				$('#restaurants').hide();
            	//$('#menus').show();
            		// code here
      		},
      		error: function(passParams){
           			alert("inside error " + passParams);
      		}
			//clearfields();
		});
	
	

		
		theTotal= $("#sales_subtotal").text().replace("$", "");
		
if(theTotal==0)
{
	$("#show_empty_cart").css("display", "block");
	$("#showcart").css("display", "none");
}
    
	});
	
	
	
	$('#backto_rest').on('click', function(e) {
		backrest_corp();
	});
   
	
	$("#table_menus").on('click', '#dataTable1', function () {
		
			
			var ordertype = $(this).attr("ordertype");
			var zipbustypemerchantid = $(this).attr("zipbustypemerchantid");
			var ID =$(this).attr('value');
			
			dynamic_chkbox(ID);
			
				$("#addcart").css("display", "block");
				$("#updatecart").css("display", "none");
				
				var image=$(this).find('label:eq(0)').html();
				var dishname=$(this).find('label:eq(1)').text();
				var description=$(this).find('label:eq(2)').text();
				var salesprice=$(this).find('label:eq(4)').text();
				var baseprice=$(this).find('label:eq(5)').text();
				var restprice=$(this).find('label:eq(6)').text();
				var restname=$(this).find('label:eq(7)').text();
				var active=$(this).find('label:eq(8)').text();
				var restid=$(this).find('label:eq(9)').text();
				
			/*	console.log("0 "+image);
				console.log("1 "+dishname);
				console.log("2 "+description);
				console.log("3 "+salesprice);
				console.log("4 "+baseprice);
				console.log("5 "+restprice);
				console.log("6 "+restname);
				console.log("7 "+active);
				console.log("8 "+restid);*/
				
				var img=$(image).attr('src');
				$("#display1").text(dishname);
                $("#sales_price").text(salesprice);
			    $("#display3").text(description);
				$("#display4").empty().append('<img style="height:200px;width:300px" src='+img+'/>');
				var price = $("#sales_price").text().replace("$", "");
				
		$("#qtycart").text("Add to cart-$" + price);
		$("#zipid").text(zipbustypemerchantid);
		$("#display5").text(restname);
		$("#display6").text(restid);
		$("#display7").text(ordertype);
		$("#save_menuid").text(ID);
		$("#base_price").text(baseprice);
		$("#rest_price").text(restprice);
		
		
		});		
	
	$("#qtyplus").click(function (e) {
    
            e.preventDefault();

            fieldName = $(this).attr('field');
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal)) {
                $('input[name=' + fieldName + ']').val(currentVal + 1);
            } else {
                $('input[name=' + fieldName + ']').val(1);
            }
            fieldName = $(this).attr('field');
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var cost;
			var price = $("#sales_price").text().replace("$", "");
			
		
		var price_section=0;
		
			$('#hide_id tr').each(function(){  
				var row_text=$(this).find('td').text();
				price_section += (Number(quantity) * Number(row_text));
			});
			
			cost = (quantity * price)+price_section;
			$("#qtycart").text("Add to cart - $" + cost);

        });
	
	$("#qtyminus").click(function (e) {
            e.preventDefault();

            fieldName = $(this).attr('field');
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal) && currentVal > 1) {
                $('input[name=' + fieldName + ']').val(currentVal - 1);
            } else {
                $('input[name=' + fieldName + ']').val(1);
            }
            fieldName = $(this).attr('field');
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var cost;
			var price = $("#sales_price").text().replace("$", "");
			var price_section=0;
		
			$('#hide_id tr').each(function(){  
				var row_text=$(this).find('td').text();
				price_section += (Number(quantity) * Number(row_text));
			});
			
			cost = (quantity * price)+price_section;
            $("#qtycart").text("Add to cart - $" + cost);
        });
	
		
		
    $("#section_chk").on('click', '.check_checkbox', function () {
		 var row_price=$(this).closest('td').attr('price');
		  var row_id=$(this).closest('td').attr('id');
        if(this.checked)
		{
		setValue(row_price, row_id);
        }
        if(!this.checked)
		{
           removeValue(row_price, row_id);
        }
    });
	
	$("#section_chk").on('mousedown', '.check_radiobutton', function () {
		var name=$(this).attr("name");
		
   var  prevVal = $('input[name='+name+']:checked').val();
   var prev_price = $('input[name='+name+']:checked').attr("price");
   var prev_row_id=$('input[name='+name+']:checked').closest('td').attr('id');

   var val = $(this).val();
   var current_price =$(this).closest('input').attr('price');
   var current_row_id=$(this).closest('td').attr('id');
	
	
		if(prev_price == undefined && prev_row_id == undefined)
		{
			prev_price=0;
			prev_row_id=0;
		}
		else if(prev_price == "null" )
		{
			 prev_price=0;
		}
		 if(current_price == "null" )
		{
			 current_price=0;
		}
		
	setPrice(prev_price, current_price, prev_row_id, current_row_id);
    });
	

		
		var arr = new Array();
        var count = 1;
		
	 $("#qtycart").click(function () {
		 
			var section_edit=[];
			var section_option=[];
			$('#hide_section_id').empty();
			$('#hide_id').empty();
	
	  
			var data1 = ($("#display1").text());
            fieldName = $(this).attr('field');
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var price = $("#sales_price").text().replace("$", "");
			
			var sd=$("#qtycart").text();  
			var cost = Number(sd.replace(/[^0-9\.]+/g,""));
            var description= $("#display3").text();
			var image=$("#display4").html();
			var instructions=$("#textarea1").val();
			
			var restname=$("#display5").text();
			var restid=$("#display6").text();
			var ordertype=$("#display7").text();
			var save_menuid=$("#save_menuid").text();
			var base_price=$("#base_price").text();
			var rest_price=$("#rest_price").text();
			var zipid=$("#zipid").text();
			
			$("#showcart").css("display", "block");
            $("#show_empty_cart").css("display", "none");
			 
				 
			    var	tabledata=$("<tr style='border-bottom: 1px solid #dadada;padding-right:10px;' zipid='"+zipid+"' id=changerow"+count+">" + 
				"<td><label class='change btn', id='change'>" + quantity + "</label></td>" +
                "<td><label class='change btn',style='background-color:#ffffff' id='change'>" + data1 + "</label></td>" +
                "<td><label class='change btn', id='change'>$" + cost + "</label></td>" +
				"<td><label class='btn delete-item($index)', id='cancel'>"+
				"<div class='icon-trash' style='float:right'>"+
				"<div class='trash-lid' style='background-color: #C5BFB6'></div>"+
				"<div class='trash-container' style='background-color: #C5BFB6'></div>"+
				"<div class='trash-line-1'></div>"+
				"<div class='trash-line-2'></div>"+
				"<div class='trash-line-3'></div></div></label></td>"+
				"<td style='display: none' id='change'>" + price + "</td>" +
				"<td style='display: none' id='change'>" + description + "</td>" +
				"<td style='display: none' id='change'>" + image + "</td>" +
				"<td style='display: none' id='change'>" + instructions + "</td>" +
				"<td style='display: none' id='change'>" + restname + "</td>" +
				"<td style='display: none' id='change'>" + restid + "</td>" +
				"<td style='display: none' id='change'>" + ordertype + "</td>" +
				"<td style='display: none' id='change'>" + base_price + "</td>" +
				"<td style='display: none' id='change'>" + rest_price + "</td>" +
				"<td style='display: none' id='change'>" + save_menuid + "</td></tr>");
          
		    $('#cartTable tbody').append(tabledata);
			
	var section_chk_rowCount = $('#section_chk .heading').length;			//calculate section length
		
	 for(i=1;i<=section_chk_rowCount;i++)
	  {
		  var row_id = $("#section_chk .row"+i).attr('id');
		  var id_num=$("#section_chk .row"+i).attr('id_num');
		  
		  var row_name = $("#"+row_id).text();
		 $('#hide_section_id').append('<tr><td hide_id_num="'+id_num+'" id="hide'+i+'">'+id_num+","+row_name+'</td></tr>');
		 
		
		 table_rowData = $("<td style='display: none' id='cart_"+row_id+save_menuid+"'>"+id_num+","+row_name+"</td>");
         tabledata.append(table_rowData); 
	  }
	  
	  var hide_section_id_length = $('#hide_section_id tr').length;
		 
		 
		 
	 for(i=1;i<=hide_section_id_length;i++)
	  {
		 var row_id = $("#hide_section_id #hide"+i).attr('hide_id_num');
		
		for(j=1;j<7;j++)
		{
		var select_id="select"+row_id+j;
		var select_id2="select"+row_id+"_p"+j;
		
		for(z=1;z<=4;z++)
	  {
	if ($('input[name=rad'+z+']:checked','#'+select_id).is(':checked'))
    {  
	var chk1=$('input[name=rad'+z+']:checked','#'+select_id).val();
	var q=$("#"+select_id).closest('td').attr('heading_id');
	var row_price=$("#"+select_id).closest('td').attr('price');
	$('#cart_heading_name'+q+save_menuid).append(","+chk1);
	//alert('#cart_heading_name'+q+save_menuid);
	$('#hide_section_id').append(","+chk1);
	
	section_edit.push(select_id);
	section_option.push(chk1);
    } 
	
	else 
	{ 
	} 
	
	
	if ($('input[name=chk'+z+']:checked','#'+select_id).is(':checked'))
	{  
	var chk1=$('input[name=chk'+z+']:checked','#'+select_id).val();
	var q=$("#"+select_id).closest('td').attr('heading_id');
	var row_price=$("#"+select_id).closest('td').attr('price');
	$('#cart_heading_name'+q+save_menuid).append(","+chk1);
	$('#hide_section_id').append(","+chk1);
	//alert('#cart_heading_name'+q+save_menuid);
	
	section_edit.push(select_id);
	section_option.push(chk1);	 
	} 
	else 
	{ 
	}
	  }
	
	
 }
 }
		  $('#changerow'+count).attr('section_data', section_edit);
		   $('#changerow'+count).attr('option', section_option);
			var hide_id_length = $('#hide_id tr').length;
		
	 for(i=1;i<=hide_id_length;i++)
	    {
		 var rowid= $("#hide_id row_chk_price"+i).text();
		 var rowid1= $("#hide_id row_rad_price"+i).text();
		 }
	  
				calculate();
	
if(theTotal==0)
	{   
		$("#showcart").css("display", "none");
		$("#show_empty_cart").css("display", "block");
	}
           
			
            clearfields();
			footer();
			 count++;
        });
		
	
		amt="";
		
		
		$('#showcart').on('click', '#change', function () {
			ID="";
             clearfields();
			 //console.log(section_edit);
			//var section_list=[];
			var section_edit=[];
                $("#myModal1").modal('show');
			//	$('#section_chk').empty();
			
				$("#addcart").css("display", "none");
				$("#updatecart").css("display", "block");
				
				var par = $(this).parent().parent();
			var	ID = $(this).closest('tr').attr('id');
			//alert("ID "+ID);
			
		
				section_data = $(this).closest('tr').attr('section_data');
				console.log(section_data);
				
				var quantity = par.children("td:nth-child(1)");
				var ditem = par.children("td:nth-child(2)");
                var dcost = par.children("td:nth-child(3)");
				var price = par.children("td:nth-child(5)");
                var description = par.children("td:nth-child(6)");
                var image = par.children("td:nth-child(7)");
				var instructions = par.children("td:nth-child(8)");
				var restname= par.children("td:nth-child(9)");
                var restid = par.children("td:nth-child(10)");
                var ordertype = par.children("td:nth-child(11)");
				var baseprice = par.children("td:nth-child(12)");
				var restprice = par.children("td:nth-child(13)");
				var menuid = par.children("td:nth-child(14)");
			/*	par.children("td:nth-child(15)").remove();
				par.children("td:nth-child(16)").remove();
				par.children("td:nth-child(17)").remove();
				par.children("td:nth-child(18)").remove();
				par.children("td:nth-child(19)").remove();
				par.children("td:nth-child(20)").remove();*/
				
				// $('#'+ID).attr('section_data', section_edit);
				
				  
				  
                 var item_qty = $(quantity).text();
				 var item_name = $(ditem).text();
                 var amt = $(dcost).text();
				 var price = $(price).text();
                 var description = $(description).text();
                 var image = $(image).html();
				 var instructions = $(instructions).text();
				 var r_name = $(restname).text();
				 var r_id = $(restid).text();
				 var r_type = $(ordertype).text();
				 var r_baseprice = $(baseprice).text();
				 var r_restprice = $(restprice).text();
				 var r_menuid = $(menuid).text();
				 
				
				
				$("#display1").text(item_name);
                $("#qty2").val(item_qty);
                $("#display2").text('$'+price);
                $("#display3").text(description);
				$("#display4").empty().append(image);
				$("#display5").text(r_name);
				$("#display6").text(r_id);
				$("#display7").text(r_type);
				$("#textarea1").text(instructions);
				
				$("#save_menuid").text(r_menuid);
				$("#base_price").text(r_baseprice);
				$("#rest_price").text(r_restprice);
				
				$("#updaterowid").text(ID);
				
				dynamic_section(r_menuid,section_data);
			
				$("#update_qtycart").text("Update to cart - " + amt);
		});
	$("#update_qtycart").click(function () {
		var section_edit=[];
				    // section_edit.push(section_data);
				  // $('#hide_section_id').empty();
					$('#hide_id').empty();
		
		var data11 = ($("#display1").text());
            fieldName = $(this).attr('field');
            var quantity1 = parseInt($('input[name=' + fieldName + ']').val());
            var price1 = $("#sales_price").text().replace("$", "");
			
			var sd1=$("#update_qtycart").text();  
			var cost1 = Number(sd1.replace(/[^0-9\.]+/g,""));
            var description1= $("#display3").text();
			var image1=$("#display4").html();
			var instructions1=$("#textarea1").val();
			
			var restname1=$("#display5").text();
			var restid1=$("#display6").text();
			var ordertype1=$("#display7").text();
			var save_menuid1=$("#save_menuid").text();
			var base_price1=$("#base_price").text();
			var rest_price1=$("#rest_price").text();
			var ID= $("#updaterowid").text();
		//	alert(ID);
		console.log(ID);
		$("#"+ID).html("<td><label class='change btn', id='change'>" + quantity1 + "</label></td>" +
                "<td><label class='change btn',style='background-color:#ffffff' id='change'>" + data11 + "</label></td>" +
                "<td><label class='change btn', id='change'>$" + cost1 + "</label></td>" +
				"<td><label class='btn delete-item($index)', id='cancel'>"+
				"<div class='icon-trash' style='float:right'>"+
				"<div class='trash-lid' style='background-color: #C5BFB6'></div>"+
				"<div class='trash-container' style='background-color: #C5BFB6'></div>"+
				"<div class='trash-line-1'></div>"+
				"<div class='trash-line-2'></div>"+
				"<div class='trash-line-3'></div></div></label></td>"+
				"<td style='display: none' id='change'>" + price1 + "</td>" +
				"<td style='display: none' id='change'>" + description1 + "</td>" +
				"<td style='display: none' id='change'>" + image1 + "</td>" +
				"<td style='display: none' id='change'>" + instructions1 + "</td>" +
				"<td style='display: none' id='change'>" + restname1 + "</td>" +
				"<td style='display: none' id='change'>" + restid1 + "</td>" +
				"<td style='display: none' id='change'>" + ordertype1 + "</td>" +
				"<td style='display: none' id='change'>" + base_price1 + "</td>" +
				"<td style='display: none' id='change'>" + rest_price1 + "</td>" +
				"<td style='display: none' id='change'>" + save_menuid1 + "</td>");
			
		//$("#"+ID).replaceWith(tabledata);
		//   $('#cartTable tbody').append(tabledata);
			

		var section_chk_rowCount = $('#section_chk .heading').length;			//calculate section length
		
		for(i=1;i<=section_chk_rowCount;i++){
			var row_id = $("#section_chk .row"+i).attr('id');
			var id_num=$("#section_chk .row"+i).attr('id_num');
		  
			var row_name = $("#"+row_id).text();
			$('#hide_section_id').append('<tr><td hide_id_num="'+id_num+'" id="hide'+i+'">'+id_num+","+row_name+'</td></tr>');
		 
		
			table_rowData = $("<td style='display: none' id='cart_"+row_id+save_menuid1+"'>"+id_num+","+row_name+"</td>");
			$('#'+ID).append(table_rowData); 
		}
	  
		var hide_section_id_length = $('#hide_section_id tr').length;
		  
		for(i=1;i<=hide_section_id_length;i++){
			var row_id = $("#hide_section_id #hide"+i).attr('hide_id_num');
		
		for(j=1;j<7;j++){
			var select_id="select"+row_id+j;
			var select_id2="select"+row_id+"_p"+j;
			
			for(z=1;z<=4;z++){
				if ($('input[name=rad'+z+']:checked','#'+select_id).is(':checked')){  
					var chk1=$('input[name=rad'+z+']:checked','#'+select_id).val();
					var q=$("#"+select_id).closest('td').attr('heading_id');
					var row_price=$("#"+select_id).closest('td').attr('price');
					$('#cart_heading_name'+q+save_menuid1).append(","+chk1);
					//alert('#cart_heading_name'+q+save_menuid1);
					$('#hide_section_id').append(","+chk1);
					//$('#hide_id').append('<tr><td name="'+select_id+'">'+row_price+'</td></tr>');

					section_edit.push(select_id);
				} else { 
				
				} 
		
		
				if ($('input[name=chk'+z+']:checked','#'+select_id).is(':checked')){  
					var chk1=$('input[name=chk'+z+']:checked','#'+select_id).val();
					var q=$("#"+select_id).closest('td').attr('heading_id');
					var row_price=$("#"+select_id).closest('td').attr('price');
					$('#cart_heading_name'+q+save_menuid1).append(","+chk1);
					$('#hide_section_id').append(","+chk1);
					//alert('#cart_heading_name'+q+save_menuid1);
					//	$('#hide_id').append('<tr><td name="'+select_id+'">'+row_price+'</td></tr>');
					
					section_edit.push(select_id);
					 
				} else { 
				
				}
			}
		}
 }
// table_rowData1 = $("<td style='display: none'>"+section_edit+"</td>");
         // $('#cartTable tbody').append(table_rowData1); 
		  $('#'+ID).attr('section_data', section_edit);
		  
		//console.log("section_edit - "+section_edit);	
		
			var hide_id_length = $('#hide_id tr').length;
		 //alert(hide_id_length);
	 for(i=1;i<=hide_id_length;i++)
	  {
		  
		 var rowid= $("#hide_id row_chk_price"+i).text();
		//alert(rowid);
		var rowid1= $("#hide_id row_rad_price"+i).text();
		//alert(rowid1);
		 
	  }
			 calculate();
				 // });
		if(theTotal==0)
	{   
		$("#showcart").css("display", "none");
		$("#show_empty_cart").css("display", "block");
	}

	});
		
	$('#showcart').on('click', '#cancel', function (i,d) {

                var par = $(this).parent().parent(); //tr
                var ditem = par.children("td:nth-child(1)");
                var dquantity = par.children("td:nth-child(2)");
                var dprice =par.children("td:nth-child(3)");

				var par = $(this).parent().parent();
				var ID =$(this).closest('tr').attr('id');
		
                var amount=$(dprice).text();
				//alert(amount);
               
				$('#'+ID).remove();
		 calculate();
		if(theTotal==0){   
			$("#showcart").css("display", "none");
			$("#show_empty_cart").css("display", "block");
		}
    });
		 
	$("#qtyplus2").click(function (e) {
    
            e.preventDefault();

            fieldName = $(this).attr('field');
			console.log("fieldName "+fieldName);
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal)) {
                $('input[name=' + fieldName + ']').val(currentVal + 1);
            } else {
                $('input[name=' + fieldName + ']').val(0);
            }
           console.log("currentVal "+currentVal);
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
          var cost
			var price = $("#sales_price").text().replace("$", "");
           console.log("quantity "+quantity);
		  
		   console.log("price "+price);
			var price_section=0;
		
			$('#hide_id tr').each(function(){  
				var row_text=$(this).find('td').text();
				if(row_text == "undefined")
				{
					row_text=0;
				}
				else{
					
				}
				price_section += (Number(quantity) * Number(row_text));
				console.log("row_text "+row_text);
			});
			 
			 console.log("price_section "+price_section);
			 cost = (quantity * price)+price_section;
			 console.log("cost "+cost);
			$("#update_qtycart").text("Update to cart - $" + cost);

	});
		
		
	$("#qtyminus2").click(function (e) {
            e.preventDefault();

            fieldName = $(this).attr('field');
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal) && currentVal > 1) {
                $('input[name=' + fieldName + ']').val(currentVal - 1);
            } else {
                $('input[name=' + fieldName + ']').val(1);
            }
            
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var cost;
			var price = $("#sales_price").text().replace("$", "");
			var price_section=0;
		
			$('#hide_id tr').each(function(){  
				var row_text=$(this).find('td').text();
				var row_text=$(this).find('td').text();
				if(row_text == "undefined"){
					row_text=0;
				} else{
					
				}
				price_section += (Number(quantity) * Number(row_text));
				console.log("row_text "+row_text);
			});
			 
			cost = (quantity * price) + price_section;
			$("#update_qtycart").text("Update to cart - $" + cost);
	});
		
	$("#review_order").click(function (e){
			
		if ( $("#when").css('display') == 'none' ){
			ordertype_rest();
		} else {
			ordertype_corp();
		}
	});
	
	var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

	var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";


	for(i=1;i<=6;i++){
		var d = new Date();
		d.setDate(d.getDate() + i);
		var y= d.getFullYear();
		var n= month[d.getMonth()];
		var m = d.getDate();
		var l= weekday[d.getDay()];
	  
		if((l=='Sat')||(l=='Sun')){
			document.getElementById("demo"+i).remove();
		} else {
			document.getElementById("demo"+i).innerHTML = l+" "+m+" "+n+" "+y;
		}
	}
		
	for(i=1;i<=6;i++){
		var d = new Date();
		d.setDate(d.getDate() + i);
		var n= month[d.getMonth()];
		var m = d.getDate();
		var l= weekday[d.getDay()];
		console.log(y);
		
		document.getElementById("demo0"+i).innerHTML = l+" "+m+" "+n;
	}
	
		
	$("#dd_date_corp a").on('click', function(e) {
		//e.preventDefault(); 
		var selText = $(this).text();
		$("#dd_btn1").text(selText);
		date=selText;
		time=$("#dd_btn2").val();

		/*if(theTotal=='$0')
						{
							
					
						}
		
						else
						{
				$("#myModal_invalid_datetime").modal();
						}
		
		$("#btn_invalid_time_yes").on('click', function(e) {
			showrest_corp();
		});
		
		$("#btn_invalid_time_no").on('click', function(e) {
			e.preventDefault();
		});*/
	});

	$("#dd_time_corp a").click(function(e){
		//  e.preventDefault(); 
		var selText = $(this).text();
		
		$("#dd_btn2").text(selText);
		time=selText;
		date=$("#dd_btn1").val();
		
			/*if(theTotal=='$0')
						{
							
					
						}
		
						else
						{
				$("#myModal_invalid_datetime").modal();
						}
		
		$("#btn_invalid_time_yes").on('click', function(e) {
			showrest_corp();
		});
		
		$("#btn_invalid_time_no").on('click', function(e) {
			e.preventDefault();
		});*/
	});


	$("#dd3").on('click', 'li', function () {
		// e.preventDefault(); 
		var selText = $(this).text();
		$("#dd_btn3").text(selText);
	});

	$("#dd_date_rest a").click(function(e){
		e.preventDefault(); 
		var selText = $(this).text();
		$("#dd_btn11").text(selText);
		date=selText;
		time=$("#dd_btn22").val();
		/*if(theTotal=='$0')
						{
							
					
						}
		
						else
						{
				$("#myModal_invalid_datetime").modal();
						}
		$("#btn_invalid_time_yes").on('click', function(e) {
			showrest_rest();
		});
		
		$("#btn_invalid_time_no").on('click', function(e) {
			e.preventDefault();
		});*/
	});

	$("#dd_time_rest a").click(function(e){
		e.preventDefault(); 
		var selText = $(this).text();
		$("#dd_btn22").text(selText);
		time=selText;
		date=$("#dd_btn11").val();
		$("#time_delivery").text(time);
		/*alert(theTotal);
		if(theTotal=='$0')
						{
							
					
						}
		
						else
						{
				$("#myModal_invalid_datetime").modal();
						}
		
		
		$("#btn_invalid_time_yes").on('click', function(e) {
			showrest_rest();
		});
		
		$("#btn_invalid_time_no").on('click', function(e) {
			e.preventDefault();
		});*/
	});

      
	$("#btn_guestlogin").on('click', function(e) {
		goto_corp_review_order();
		$("#hide_userid").text('Guest');
	});

	$("#submit_forgotpass").on('click', function(e) {
		
		var forgotpass_email=$("#forgotpass_email").val();
		
		$.ajax({
				url: "/delivery/login/resetPassword",
				type: "GET",
				//contentType: "application/json",
				data: {
						//"username":login_user,
						//"password":login_pass,
						"email":forgotpass_email
				},
				//dataType: 'json',
				success: function(data) {
					//   alert(data);
					console.log(data);
				}, 
				error: function() {
					alert('Something went wrong');
				}
		});
	});
	
	/*$("#submit_forgotpass").on('click', function(e) {
		
		var forgotpass_email=$("#forgotpass_email").val();
		$.ajax({
				url: "/delivery/login/autheticate",
				type: "GET",
				data: {"username":login_user, "password":login_pass},
				success: function(data) {
					//   alert(data);
					console.log(data);
					}, 
				error: function() {
					alert('Something went wrong');
				}
		});
	});
	*/
	
	$("#submit_login").click(function(e){
		
		if(
			($("#login_user").val()=="" || $("#login_pass").val()=="") || 
			($("#login_user").css("border-color") === "rgb(255, 0, 0)") ||
			($("#login_pass").css("border-color") === "rgb(255, 0, 0)")
		){
			alert("Please enter your details");
			$('#myModal_login').modal('show');
		} else {
			login_user=$("#login_user").val();
			var login_pass=$("#login_pass").val();
			var firstname=$("#firstname").val();
	
			$.ajax({
				url: "/delivery/login/autheticate",
				type: "GET",
				data: {"username":login_user, "password":login_pass},
				success: function(data) {
					//   alert(data);
					console.log(data);
					if(data == "Password invalid"){
						// $('#myModal_login').modal('show');
						$('#login_pass').css('border', '1px solid red');
					} else if(data == "User Name invalid"){
						//$('#myModal_login').modal('show');
						$('#login_user').css('border', '1px solid red');
					} else {
						$('#login_pass').css('border', '');
						$('#login_user').css('border', '');
						var u_id;
						var u_fname;
						var u_lname;
						var u_email;
						var u_phone;
						var myarray = data.split(',');
					   
						for(var k = 0; k < myarray.length; k++){
							u_id = (myarray[0]);
							u_fname = (myarray[1]);
							u_lname = (myarray[2]);
							u_email = (myarray[3]);
							u_phone = (myarray[4]);				
						}
					   
						$('#myModal_login').modal('hide');
						$('#logged_in').css("display", "block");
						$('#login').css("display", "none");	
						$('#sign_out').css("display", "block");	
						$('#register').css("display", "none");	
						$('#hide_userid').text(u_id);
						$('#hide_userfname').text(u_fname);
						$('#hide_userlname').text(u_lname);
						$('#hide_useremail').text(u_email);
						$('#hide_userphone').text(u_phone);
						/*$('#profile_details').css("display", "block");
						$('#div_carousel').css("display", "none");	*/
						//$('#logged_in').html('<p class="fa fa-user-circle-o" style="font-size:24px"></p>'+' '+firstname);
						$('#logged_in').html('<label class="btn" style="font-size:16px"><p class="fa fa-user-circle-o" style="font-size:16px"></p>'+' '+u_fname+'</label>');
						$('#nameofuser').html('Welcome&nbsp;'+u_fname);
						
						$('#corp_email_delivery').val(u_email);
						$('#corp_phone_delivery').val(u_phone);
						$('#corp_name_delivery').val(u_fname+" "+u_lname);
					
						$('#back_corp_checkout_panel').css("display", "none");	
						$('#review_details').css("display", "none");	
					}
					
					$.ajax({
						url: "/delivery/login/getUserPayments",
						type: "GET",
						data: {"userid":u_id},
						success: function(data) {
		
							/* $("#card_details").append('<div style="padding-bottom: 10px;margin-left:20px;"><h4>'+
							 '<label style="width:210px;">Your Cards</label><label style="width:100px;">Expires</label></h4></div>');
							 console.log(data);*/
							$.each(data, function(key, value) { 
								$("#card_details").append('<tr id="'+value['id']+'"><td></td>'+
								 '<td><label style="font-weight:lighter;margin-left:5px;width:300px;margin-bottom: 10px;">Card ending in ************'+ value['lastFourDigits']+
								 '</label></td><td><span style="width:100px;font-weight:lighter">'+ value['expDate']+'</span></td><td><a id="update_creditcard"'+ 
								 'style="margin-left:30px;margin-bottom:5px;cursor: pointer;"><span class="glyphicon glyphicon-pencil"></span></a></td>'+
								 '<td><a id="remove_creditcard" style="margin-left:20px;"><span class="glyphicon glyphicon-remove" style="color:red;cursor:pointer;"></a></span></td>'+
								 '<td style="display:none">************'+value['lastFourDigits']+'</td>'+'<td style="display:none">'+value['expDate']+'</td>'+'<td style="display:none">344</td>'+
								 '<td style="display:none">Max</td>'+'<td style="display:none">'+value['billingAddress']+'</td>'+'<td style="display:none">'+value['city']+'</td>'+
								 '<td style="display:none">'+value['state']+'</td>'+'<td style="display:none">'+value['zip']+'</td></tr>');
								 
								 $("#disply_new_card").append('<tr id="'+value['id']+'"><td><input type="radio" id="radcc" class="radioBtnClass" name="rad_cc" exp="'+value['expDate']+
								 '" value="'+ value['lastFourDigits']+'"'+'cvc="344" cardholdername="Max" address="'+value['billingAddress']+'" city="'+value['city']+'" state="'+value['state']+'" zip="'+
								 value['zip']+'" lastdigits="'+value['lastFourDigits']+'" /></td>'+
								 '<td><label style="font-weight:lighter;margin-left:5px;width:300px;margin-bottom: 10px;">Card ending in ************'+ value['lastFourDigits']+
								 '</label></td><td><span style="width:100px;font-weight:lighter">'+ value['expDate']+'</span></td><td><a id="update_creditcard"'+ 
								 'style="margin-left:30px;margin-bottom:5px;cursor: pointer;"><span class="glyphicon glyphicon-pencil"></span></a></td>'+
								 '<td><a id="remove_creditcard" style="margin-left:20px;"><span class="glyphicon glyphicon-remove" style="color:red;cursor:pointer;"></a></span></td>'+
								 '<td style="display:none">************'+value['lastFourDigits']+'</td>'+'<td style="display:none">'+value['expDate']+'</td>'+'<td style="display:none">344</td>'+
								 '<td style="display:none">Max</td>'+'<td style="display:none">'+value['billingAddress']+'</td>'+'<td style="display:none">'+value['city']+'</td>'+
								 '<td style="display:none">'+value['state']+'</td>'+'<td style="display:none">'+value['zip']+'</td></tr>');
							});
						}, 
						error: function() {
						   //alert('Something went wrong');
						}
	   
					});
   
   $.ajax({
       url: "/delivery/rests/userOrders",
       type: "GET",
	   data: {"userid":u_id},
       success: function(data) {
		
		$.each(data, function(key, value) { 
	
		$("#account_orders").append('<tr><td style="width:50px; id="'+value['id']+'"></td>'+
		 '<td style="width:200px;">'+value['id']+'</td>'+'<td style="width:210px;">'+value['orderDate']+'</td></tr>');
		});
		 }, 
       error: function() {
		//alert('Something went wrong');
       }
	   
   });
				}, 
				error: function() {
					//alert('Something went wrong');
				}
			});	 
			
			
		}
	});		
		/*	$('#myModal_login').modal('hide');
			
			
		$('#logged_in').css("display", "block");
	    $('#login').css("display", "none");	
		$('#register').css("display", "none");	
		$('#sign_out').css("display", "block");	
		
          
		$('#profile_details').css("display", "block");
	   $('#div_carousel').css("display", "none");	*/
		//$('#logged_in').html('<label class="btn" style="font-size:20px"><p class="fa fa-user-circle-o" style="font-size:24px"></p>'+' '+firstname+'</label>');
		//$('#nameofuser').html(' '+firstname);
		
	$('#card_details').on('click', '#delete_cc_card', function (i,d) {

        var par = $(this).parent().parent(); //tr
        var dcard = par.children("td:nth-child(1)");
        var ddate = par.children("td:nth-child(2)");
		var par = $(this).parent().parent();
		var ID =$(this).closest('tr').attr('id');
		$('#'+ID).empty();
    });
	
	$("#submit_registration").click(function(e){
	
		if(
			($("#firstname").val()=="") || 
			($("#lastname").val()=="") || 
			($("#email").val()=="") || 
			($("#phone").val()=="") || 
			($("#password").val()=="") || 
			($("#confirm_password").val()=="") ||
			($("#firstname").css('border-color') == 'rgb(255, 0, 0)') || 
			($("#lastname").css('border-color') == 'rgb(255, 0, 0)') || 
			($("#email").css('border-color') == 'rgb(255, 0, 0)') || 
			($("#password").css('border-color') == 'rgb(255, 0, 0)') || 
			($("#confirm_password").css('border-color') == 'rgb(255, 0, 0)')
		){
			alert("Please fill all details");
			$('#myModal_register').modal('show');
		} else {
			var firstname=$("#firstname").val();
			var lastname=$("#lastname").val();
			var email=$("#email").val();
			var phone=$("#phone").val();
			var password=$("#password").val();
			var confirm_password=$("#confirm_password").val();
		
			var  jsonObj={ 
				"firstname":firstname,
				"lastname":lastname,
				"username":email,
				"phone":phone,
				"password":password 
			};
						   
			$.ajax({
				url: "/delivery/login/createuser",
				contentType: "application/json",
				type: "POST",
				data: JSON.stringify(jsonObj) ,
				dataType: 'json',
				success: function(data) {
					//  alert('Account created successfully');
					s_acc_created();
					$('#myModal_register').modal('hide');
					console.log(data);
					$("#hide_userid").text(data);
					/*	$('#when').css("display", "none");	
					$('#backto_rest').css("display", "none");	
					$('#select_rest').css("display", "none");	
					$('#table_menus').css("display", "none");	
					$('#showcart').css("display", "none");	
					$('#show_empty_cart').css("display", "none");	
					$('#review_details').css("display", "none");*/
				
					$('#logged_in').css("display", "block");
					$('#login').css("display", "none");	
					$('#sign_out').css("display", "block");	
					$('#register').css("display", "none");	
				 
					/*$('#profile_details').css("display", "block");
					$('#div_carousel').css("display", "none");	*/
					$('#logged_in').html('<p class="fa fa-user-circle-o" style="font-size:24px"></p>'+' '+firstname);
					$('#nameofuser').html('Welcome&nbsp;'+firstname);
				
					$('#corp_email_delivery').val(email);
					$('#corp_phone_delivery').val(phone);
					$('#corp_name_delivery').val(firstname+" "+lastname);
				}, 
				error: function(err) {
					// alert('Something went wrong');
				}
			});
		}
	});



	$('#myModal_edit').on('click', '#save_details', function () {
	
		if(
			($("#edit_firstname").val()=="") || 
			($("#edit_lastname").val()=="") || 
			($("#edit_email").val()=="") || 
			($("#edit_phone").val()=="") || 
			($("#edit_firstname").css('border-color') == 'red') || 
			($("#edit_lastname").css('border-color') == 'red') || 
			($("#edit_email").css('border-color') == 'red') || 
			($("#edit_phone").css('border-color') == 'red')
		){
			alert("Please fill all details");
			$('#myModal_edit').modal('show');
		} else {
			var firstname=$("#edit_firstname").val();
			var lastname=$("#edit_lastname").val();
			var email=$("#edit_email").val();
			var phone=$("#edit_phone").val();
			var u_id=$('#hide_userid').text();
			
			var  jsonObj={ 
				"id":u_id,
				"firstname":firstname,
				"lastname":lastname,
				"username":email,
				"phone":phone
			};
						   
			$.ajax({
				url: "/delivery/login/updateUser",
				contentType: "application/json",
				type: "POST",
				data: JSON.stringify(jsonObj) ,
				dataType: 'json',
				success: function(data) {
					alert('Account details updated successfully');
					//s_acc_created();
					//$('#myModal_edit').modal('hide');
		
					$('#hide_userfname').text(firstname);
					$('#hide_userlname').text(lastname);
					$('#hide_useremail').text(email);
					$('#hide_userphone').text(phone);
					
					$('#logged_in').html('<p class="fa fa-user-circle-o" style="font-size:24px"></p>'+' '+firstname);
					$('#nameofuser').html('Welcome&nbsp;'+firstname);
					
					$('#corp_email_delivery').val(email);
					$('#corp_phone_delivery').val(phone);
					$('#corp_name_delivery').val(firstname+" "+lastname);
					$('#myModal_edit').modal('hide');
					$("#profile_details").modal('show');
				}, 
				error: function(err) {
					// alert('Something went wrong');
				}
			});
		
		}
	});



	$("#sign_out").click(function(e){
		
		$('#profile_details').css("display", "none");
		$('#sign_out').css("display", "none");
		$('#logged_in').css("display", "none");
		$('#login').css("display", "block");
		$('#register').css("display", "block");
		$("#payment_details").empty();

		$('#back_corp_checkout_panel').css("display", "none");	
		$('#review_details').css("display", "none");	
		$('#div_carousel').css("display", "block");
		window.location.replace(pageURL);
	});
		
/*	dpUI.numberPicker("#np", {
            min: 0,
            max: 20,
            step: 1,
            format: "#.##",
			formatter: function (x) {
				return "$ " + x;
            }
    });
			
	$('.dpui-numberPicker-decrease').click(function(e){
			 final_calculate();
	});
		
	$('.dpui-numberPicker-increase').click(function(e){
	          final_calculate();
	});*/
			
	$("#corp_review_rest_back").click(function(e){
				
		$('#autocomplete').prop('disabled', false);
		$('#review_order_submit').prop('disabled', false);			
   		$('#find_btn').css("display", "block");
		$('#restaurants').css("display", "block");
		$("#select_rest").css("display", "block");
		$("#CORP").css("display", "none");
		$("#RD").css("display", "none");
		$("#div_carousel").css("display", "none");
		$("#date_time_corp").css("display", "block");
		$("#date_time_rest").css("display", "none");
		$("#when").css("display", "block");
		$("#showcart").css("display", "block");
		$("#restAndCartContainer").css("display", "block");
	    $('#review_details').css("display", "none");	
		$("#table_menus").css("display", "none");
			
		var hide_userid = $('#hide_userid').text();
		if(hide_userid == "Guest"){
			$("#login").css("display", "block");
			$("#register").css("display", "block");
		}
		
		$("#select_rest").empty();
		zipcode=$("#postal_code").val();
		var username= $("#input_zipcode").val();
		state=$("#administrative_area_level_1").val();
		city=$("#locality").val();
    
		$.ajax({
			url: pageURL+"restaurantsInZip",
			type: "GET",
			//data: {"zipcode": zipcode, "state":state,"city":city},
			data: {"zipcode": "19406","state":"PA","city":"KingOfPrussia"},
			success: function(data) {
				$("#select_rest").show();
				$("#back_restname").html('<b style="padding-bottom:10px">'+select_rest+'</b>');
				var html = '';		
						
				$.each(data, function(key, value) { 
				var zipbusid=key[0];
							$("#hide_zipid").text(zipbusid);
					var len=value.length;				
					for(i=0; i < len; i++){ 	
						html += '<tr id="tryme_rest" class="btn spaceUnder_rest" zipBustypeMerchantId="'+value[i]['zipBustypeMerchantId']+'" valuename="'+value[i]["name"]+
							'" valueid="'+value[i]['id']+
							'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
							'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value[i]['image']+'"/></label></td>'+
							'<td rest_code=' + value[i]['id']+'>'+ 
							'<h4><label style="margin-bottom:0px;">' + value[i]['name'] +
							'</label></td></tr><br/>';
					}
				});			
				$('#select_rest').last().append(html);			
			}, 
			error: function() {
				alert('Something went wrong');
			}
		});
	});
				
		
	$("#corp_review_menu_back").click(function(e){
		$('#autocomplete').prop('disabled', false);
		$('#review_order_submit').prop('disabled', false);
		$('#find_btn').css("display", "block");
	
			$('#restaurants').css("display", "block");
			$("#select_rest").css("display", "none");
			$("#CORP").css("display", "none");
			$("#RD").css("display", "none");
			$("#div_carousel").css("display", "none");
			$("#date_time_corp").css("display", "block");
			$("#date_time_rest").css("display", "none");
			$("#when").css("display", "block");
			$("#showcart").css("display", "block");
			$("#restAndCartContainer").css("display", "block");
			$("#backto_rest").css("display", "block");
			$('#review_details').css("display", "none");	
			$("#table_menus").css("display", "block");
		
		var hide_userid = $('#hide_userid').text();
		if(hide_userid == "Guest"){
			$("#login").css("display", "block");
			$("#register").css("display", "block");
		}
		$("#table_menus").empty();
		$.ajax({
			url: pageURL+"menus",
      		type: "GET",
      	    data: { "id" : i_restid},
      		success: function(data){
            	
            	var array =  data;
        		//$('#table_menus tr').not(':first').not(':last').remove();
				
				$("#choose_rest").css("display", "none");
				$("#backto_rest").css("display", "block");
				 
				$("#back_restname").html('<b style="padding-bottom:10px">&nbsp;'+i_restname+'</b>');
				
				//	$("#backto_rest").html('<a href="http://localhost:8080/delivery/rests/restaurants?zipcode=19425&orderType=CORP">&nbsp;<i class="left"></i>&nbsp;<b >'+select_rest+'</b></a>');
				var html = '';		
				for(i=0;i<1;i++){
					$.each(data, function(key, value) { 
						if(value['groupNumber']==i){
							html += '<tr class="'+value['groupNumber']+' btn spaceUnder_rest withHover" groupMenuNumber="'+value['groupMenuNumber']+'" onclick="enter_address()" data-toggle="modal" id="dataTable1"' +
								'" value=' + value['id']+' restaurantBustypeId="'+value['restaurantBustypeId']+'" style="border:1px solid #c4c4c4;height:100px;width:900px;padding-left:5px;">'+
								'<td><label><img style="width:100px;height:90px;float:left;padding-left:10px" src= "/delivery/resources/images/'+value['menuImage']+'"/></label></td>'+
								'<td width=500px id="tryme" align="left" style="padding-left:30px;white-space: normal;" >'+ 
								'<h4><label>' + value['name'] + '</label></h4><label style="font-weight:lighter;">' + value['description']  + 
								'</label></td><td width=150px align="right"><h4 style="color:blue">'+
								'<label>$' + value['salesPrice']+ '</label></h4></td>'+
								'<td style="display:none"><label>'+value['basePrice']+'</label></td>'+
								'<td style="display:none"><label>'+value['restaurantPrice']+'</label></td>'+
								'<td style="display:none"><label>'+i_restname+'</label></td>'+
								'<td style="display:none"><label>'+value['active']+'</label></td>'+
								'<td style="display:none"><label>'+value['restaurantBustypeId']+'</label></td></tr>';
						}
					});
					$('#table_menus').last().append(html);
				}
							  
				for(i=1;i<5;i++){
					var html_heading1='';
					var html1 = '';
					$.each(data, function(key, value) { 
						if(value['groupNumber']==i){ 
						  
							html_heading1='<tr class="withoutHover" style="height:30px;width:900px;padding-bottom:20px;margin-bottom: 1.1em;"><td><button type="button" class="btn btn-info collapsed" data-toggle="collapse" '+
							'data-target=".'+value['groupNumber']+'" style="width:900px;margin-bottom:10px;"><h4 align="left">'+value['groupName']+'</h4>'+
							'<span style="font-size:10px;float:right">Show</span></button></td></tr>';
						
							html1 += '<tr class="'+value['groupNumber']+' btn collapse spaceUnder_rest withHover" groupMenuNumber="'+value['groupMenuNumber']+'" onclick="enter_address()" data-toggle="modal" id="dataTable1"' +
							'" value=' + value['id']+' restaurantBustypeId="'+value['restaurantBustypeId']+'" style="border:1px solid #c4c4c4;height:100px;width:900px;padding-left:5px;">'+
							'<td><label><img style="width:100px;height:90px;float:left;padding-left:10px" src= "/delivery/resources/images/'+value['menuImage']+'"/></label></td>'+
							'<td width=500px id="tryme" align="left" style="padding-left:30px;white-space: normal;">'+ 
							'<h4><label>' + value['name'] + '</label></h4><label style="font-weight:lighter;">' + value['description']  + 
							'<label></td><td width=150px align="right"><h4 style="color:blue">'+
							'<label>$' + value['salesPrice']+ '</label></h4></td>'+
							'<td style="display:none"><label>'+value['basePrice']+'</label></td>'+
							'<td style="display:none"><label>'+value['restaurantPrice']+'</label></td>'+
							'<td style="display:none"><label>'+i_restname+'</label></td>'+
							'<td style="display:none"><label>'+value['active']+'</label></td>'+
							'<td style="display:none"><label>'+value['restaurantBustypeId']+'</label></td></tr>';
						}
					});
					$('#table_menus').last().append(html_heading1+html1);			
				}						
				
				$('#restaurants').hide();
					//$('#menus').show();
            		// code here
      		},
      		error: function(passParams){
           			alert("inside error " + passParams);
      		}
			//clearfields();
		});
	});
	
	
	$("#rest_review_rest_back").click(function(e){
		    
		$('#autocomplete').prop('disabled', false);	
		$('#review_order_submit').prop('disabled', false);
   		$('#find_btn').css("display", "block");
		$('#restaurants').css("display", "block");
		$("#select_rest").css("display", "block");
		$("#CORP").css("display", "none");
		$("#RD").css("display", "none");
		$("#div_carousel").css("display", "none");
		$("#date_time_corp").css("display", "none");
		$("#date_time_rest").css("display", "block");
		$("#when").css("display", "none");
		$("#showcart").css("display", "block");
		$("#restAndCartContainer").css("display", "block");
	    $('#review_details').css("display", "none");	
		$("#table_menus").css("display", "none");
		
		zipcode=$("#postal_code").val();
		var username= $("#input_zipcode").val();
		state=$("#administrative_area_level_1").val();
		city=$("#locality").val();
    
		$.ajax({
			url: pageURL+"restaurantsInZip",
			type: "GET",
			//data: {"zipcode": zipcode, "state":state,"city":city},
			data: {"zipcode": "19406","state":"PA","city":"KingOfPrussia"},
			success: function(data) {
				$("#choose_restaurant").css("display", "block");
	
					var html = '';		
						
						
							
						$.each(data, function(key, value) { 
						var zipbusid=key[0];
							$("#hide_zipid").text(zipbusid);
							var len=value.length;				
								for(i=0; i < len; i++)
								{ 
						html +=  '<tr id="tryme_rest" class="btn spaceUnder_rest" ordertype="'+ordertype+'" zipBustypeMerchantId="'+value[i]['zipBustypeMerchantId']+
						'" valuename="'+value[i]['name']+'" valueid="'+value[i]['id']+
				'" style="float:left;width:450px;white-space:pre-line;text-align:left;border: 1px solid #c4c4c4;margin-left:15px;">'+
							'<td><label><img style="width:70px;height:70px;margin-right:15px;" src= "/delivery/resources/images/'+value[i]['image']+'"/></label></td>'+
							'<td id="tryme_rest" rest_code=' + value[i]['rest_code']+'>'+ 
							'<h4><label style="margin-bottom:0px;margin-right:150px;" >' + value[i]['name'] +
							'</label></h4><label>' + value[i]['tagLine']  + 
							'</label></td><td><label>'+value[i]['opencloseTime']+
							'</label><br/><label>'+value[i]['timeRange']+
							'</label><br/>'+value[i]['pricelevel']+'</td></tr>';
								}
							});
							$('#select_rest').last().append(html);
								$("#show_empty_cart").css("display", "block");
			}, 
			error: function() {
				alert('Something went wrong');
			}
		});
	});
				
	$("#rest_review_menu_back").click(function(e){
		$('#autocomplete').prop('disabled', false);
	
		$('#review_order_submit').prop('disabled', false);
		$('#find_btn').css("display", "block");
	
		$('#restaurants').css("display", "block");
		$("#select_rest").css("display", "none");
		$("#CORP").css("display", "none");
		$("#RD").css("display", "none");
		$("#div_carousel").css("display", "none");
		$("#date_time_corp").css("display", "none");
		$("#date_time_rest").css("display", "block");
		$("#when").css("display", "none");
		$("#showcart").css("display", "block");
		$("#restAndCartContainer").css("display", "block");
		$("#backto_rest").css("display", "block");
	    $('#review_details').css("display", "none");	
		$("#table_menus").css("display", "block");
		$("#table_menus").empty();
		$.ajax({
      		url: pageURL+"menus",
      		type: "GET",
      	    data: { "id" : i_restid},
      		success: function(data){
            	
            	var array =  data;
        		//$('#table_menus tr').not(':first').not(':last').remove();
				
				$("#choose_rest").css("display", "none");
				$("#backto_rest").css("display", "block");
				 
				$("#back_restname").html('<b style="padding-bottom:10px">&nbsp;'+i_restname+'</b>');
				
				//	$("#backto_rest").html('<a href="http://localhost:8080/delivery/rests/restaurants?zipcode=19425&orderType=CORP">&nbsp;<i class="left"></i>&nbsp;<b >'+select_rest+'</b></a>');
				var html = '';		
				for(i=0;i<1;i++){
					$.each(data, function(key, value) { 
						if(value['groupNumber']==i){
								html += '<tr class="'+value['groupNumber']+' btn spaceUnder_rest withHover" groupMenuNumber="'+value['groupMenuNumber']+'" onclick="enter_address()" data-toggle="modal" id="dataTable1"' +
								'"value=' + value['id']+' restaurantBustypeId="'+value['restaurantBustypeId']+'" style="border:1px solid #c4c4c4;height:100px;width:900px;padding-left:5px;">'+
								'<td><label><img style="width:100px;height:90px;float:left;padding-left:10px" src= "/delivery/resources/images/'+value['menuImage']+'"/></label></td>'+
								'<td width=500px id="tryme" align="left" style="padding-left:30px;white-space: normal;" >'+ 
								'<h4><label>' + value['name'] + '</label></h4><label style="font-weight:lighter;">' + value['description']  + 
								'<label></td><td width=150px align="right"><h4 style="color:blue">'+
								'<label>$' + value['salesPrice']+ '</label></h4></td>'+
								'<td style="display:none"><label>'+value['basePrice']+'</label></td>'+
								'<td style="display:none"><label>'+value['restaurantPrice']+'</label></td>'+
								'<td style="display:none"><label>'+i_restname+'</label></td>'+
								'<td style="display:none"><label>'+value['active']+'</label></td>'+
								'<td style="display:none"><label>'+value['restaurantBustypeId']+'</label></td></tr>';
						}
					});
					$('#table_menus').last().append(html);
				}
							  
				for(i=1;i<5;i++){
					var html_heading1='';
					var html1 = '';
					$.each(data, function(key, value) { 
						if(value['groupNumber']==i){ 
							html_heading1='<tr class="withoutHover" style="height:30px;width:900px;padding-bottom:20px;margin-bottom: 1.1em;"><td><button type="button" class="btn btn-info collapsed" data-toggle="collapse" '+
							 'data-target=".'+value['groupNumber']+'" style="width:900px;margin-bottom:10px;"><h4 align="left">'+value['groupName']+'</h4>'+
							 '<span style="font-size:10px;float:right">Show</span></button></td></tr>';
							
							
								html1 += '<tr class="'+value['groupNumber']+' btn collapse spaceUnder_rest withHover" groupMenuNumber="'+value['groupMenuNumber']+'" onclick="enter_address()" data-toggle="modal" id="dataTable1"' +
								'"value=' + value['id']+' restaurantBustypeId="'+value['restaurantBustypeId']+'" style="border:1px solid #c4c4c4;height:100px;width:900px;padding-left:5px;">'+
								'<td><label><img style="width:100px;height:90px;float:left;padding-left:10px" src= "/delivery/resources/images/'+value['menuImage']+'"/></label></td>'+
								'<td width=500px id="tryme" align="left" style="padding-left:30px;white-space: normal;" >'+ 
								'<h4><label>' + value['name'] + '</label></h4><label style="font-weight:lighter;">' + value['description']  + 
								'<label></td><td width=150px align="right"><h4 style="color:blue">'+
								'<label>$' + value['salesPrice']+ '</label></h4></td>'+
								'<td style="display:none"><label>'+value['basePrice']+'</label></td>'+
								'<td style="display:none"><label>'+value['restaurantPrice']+'</label></td>'+
								'<td style="display:none"><label>'+i_restname+'</label></td>'+
								'<td style="display:none"><label>'+value['active']+'</label></td>'+
								'<td style="display:none"><label>'+value['restaurantBustypeId']+'</label></td></tr>';
						}
					});
					$('#table_menus').last().append(html_heading1+html1);			
				}						
				
				$('#restaurants').hide();
            	//$('#menus').show();
				// code here
      		},
      		error: function(passParams){
           			alert("inside error " + passParams);
      		}
			//clearfields();
		});
	});
	
	$('.cc-number').payment('formatCardNumber');
      $('.cc-exp').payment('formatCardExpiry');
      $('.cc-cvc').payment('formatCardCVC');

      $.fn.toggleInputError = function(erred) {
        this.parent('.form-group').toggleClass('has-error', erred);
        return this;
      };

     /* $("form[name='form_payment']").onchange(function(e) {
        e.preventDefault();

		ValidateCreditCardNumber();
		
       
		
      });*/
	  	/*$("#save_card").click(function(e){
		if($('#cc-name1').val()== "")
		{$('#cc-name1').css('border-color', 'brown');
		}
		else
		{$('#cc-name1').css('border-color', '');
		}
		
		if($('#cc-address1').val()== "")
		{$('#cc-address1').css('border-color', 'brown');
		}
		else
		{$('#cc-address1').css('border-color', '');
		}
		
		if($('#cc-city1').val()== "")
		{$('#cc-city1').css('border-color', 'brown');
		}
		else
		{$('#cc-city1').css('border-color', '');
		}
		
		if($('#cc-state1').val()== "")
		{$('#cc-state1').css('border-color', 'brown');
		}
		else
		{$('#cc-state1').css('border-color', '');
		}
		
		if($('#cc-zip1').val()== "")
		{$('#cc-zip1').css('border-color', 'brown');
		}
		else
		{$('#cc-zip1').css('border-color', '');
		}
			 if(($("#cc-number1").val()=="") || ($("#cc-number1").css("border-color") === "rgb(217,83,79)") ||
	  	($("#cc-exp1").val()=="") || ($("#cc-exp1").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-cvc1").val()=="") || ($("#cc-cvc1").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-name1").val()=="") || ($("#cc-name1").css("border-color") === "brown") ||
		($("#cc-address1").val()=="") || ($("#cc-address1").css("border-color") === "brown")||
		($("#cc-city1").val()=="") || ($("#cc-city1").css("border-color") === "brown") || 
		($("#cc-state1").val()=="") || ($("#cc-state1").css("border-color") === "brown") || 
		($("#cc-zip1").val()=="") || ($("#cc-zip1").css("border-color") === "brown"))
		{
			$('#myModal_payment1').modal('show');
		}
		else{
			$('#myModal_payment1').modal('hide');
			var number= $("#cc-number1").val();
			var exp= $("#cc-exp1").val();
			var cvc= $("#cc-cvc1").val();
			var name= $("#cc-name1").val();
			var address= $("#cc-address1").val();
			var city= $("#cc-city1").val();
			var state= $("#cc-state1").val();
			var zip= $("#cc-zip1").val();
			var Count = 4;
var lastdigits=number.slice( -Count);
		number1= new Array(number.length - Count + 1).join('*') + number.slice( -Count);

		$("#card_details").append('<tr id="'+lastdigits+'"><td><input type="radio" id="radcc1" class="radioBtnClass" name="rad_cc1" exp="'+exp+'" value="'+number+'"'+
		 'cvc="'+cvc+'" cardholdername="'+name+'" address="'+address+'" city="'+city+'" state="'+state+'" zip="'+zip+'" lastdigits="'+lastdigits+'" /></td>'+
		 '<td><label style="font-weight:lighter;margin-left:5px;width:440px;margin-bottom: 10px;">Card ending in '+ number1+
		 '</label></td><td><span style="width:100px;font-weight:lighter">'+ exp+'</span></td><td><a id="update_creditcard1"'+ 
		 'style="margin-left:30px;margin-bottom:5px;cursor: pointer;">'+
		 '<span class="glyphicon glyphicon-pencil"></span></a></td>'+
		 '<td><a id="remove_creditcard1" style="margin-left:20px;"><span class="glyphicon glyphicon-remove" style="color:red;cursor:pointer;"></a></span></td>'+
		 '<td style="display:none">'+number+'</td>'+'<td style="display:none">'+exp+'</td>'+'<td style="display:none">'+cvc+'</td>'+
		 '<td style="display:none">'+name+'</td>'+'<td style="display:none">'+address+'</td>'+'<td style="display:none">'+city+'</td>'+
		 '<td style="display:none">'+state+'</td>'+'<td style="display:none">'+zip+'</td></tr>');
		   }
		});*/
	  
      $("form[name='form_payment1']").submit(function(e) {
        e.preventDefault();

        var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);

        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
      });
	  
	  
	  $("#save_ccard").click(function(e){
		//  ValidateCreditCardNumber();
		  
		if($('#cc-name').val()== "")
		{$('#cc-name').css('border-color', 'brown');
		}
		else
		{$('#cc-name').css('border-color', '');
		}
		
		if($('#cc-address').val()== "")
		{$('#cc-address').css('border-color', 'brown');
		}
		else
		{$('#cc-address').css('border-color', '');
		}
		
		if($('#cc-city').val()== "")
		{$('#cc-city').css('border-color', 'brown');
		}
		else
		{$('#cc-city').css('border-color', '');
		}
		
		if($('#cc-state').val()== "")
		{$('#cc-state').css('border-color', 'brown');
		}
		else
		{$('#cc-state').css('border-color', '');
		}
		
		if($('#cc-zip').val()== "")
		{$('#cc-zip').css('border-color', 'brown');
		}
		else
		{$('#cc-zip').css('border-color', '');
		}
			 if(($("#cc-number").val()=="") || ($("#cc-number").css("border-color") === "rgb(217,83,79)") ||
	  	($("#cc-exp").val()=="") || ($("#cc-exp").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-cvc").val()=="") || ($("#cc-cvc").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-name").val()=="") || ($("#cc-name").css("border-color") === "brown") ||
		($("#cc-address").val()=="") || ($("#cc-address").css("border-color") === "brown")||
		($("#cc-city").val()=="") || ($("#cc-city").css("border-color") === "brown") || 
		($("#cc-state").val()=="") || ($("#cc-state").css("border-color") === "brown") || 
		($("#cc-zip").val()=="") || ($("#cc-zip").css("border-color") === "brown"))
		{
			$('#myModal_payment').modal('show');
		}
		else{
				
			var number= $("#cc-number").val();
			var exp= $("#cc-exp").val();
			var cvc= $("#cc-cvc").val();
			var name= $("#cc-name").val();
			var address= $("#cc-address").val();
			var city= $("#cc-city").val();
			var state= $("#cc-state").val();
			var zip= $("#cc-zip").val();
			var userid= $("#hide_userid").text();
			var Count = 4;
			var lastdigits=number.slice( -Count);
			
		number1= new Array(number.length - Count + 1).join('*') + number.slice( -Count);
		
		
			
			    var  jsonObj={ 
							"userId":userid,
							"expDate":exp,
							//"cvc":cvc,
							//"name":name,
							"billingAddress":address,
							"city":city,
							"state":state,
							"zip":zip,
							"cardType": "VISA",
							"lastFourDigits":lastdigits
	  
						};
						console.log(jsonObj);
						
		$.ajax({
       url: "/delivery/login/createCreditCard",
	   contentType: "application/json",
       type: "POST",
       data: JSON.stringify(jsonObj) ,
	   dataType: 'json',
       success: function(data) {
		 console.log(data);
		 var id=data;
		 $('#myModal_payment').modal('hide');
		 
		 $("#profile_details").modal('show');
		
		 $("#card_details").append('<tr id="'+id+'"><td></td>'+
		 '<td><label style="font-weight:lighter;margin-left:5px;width:300px;margin-bottom: 10px;">Card ending in '+ number1+
		 '</label></td><td><span style="width:100px;font-weight:lighter">'+ exp+'</span></td><td><a id="update_creditcard"'+ 
		 'style="margin-left:30px;margin-bottom:5px;cursor: pointer;"><span class="glyphicon glyphicon-pencil"></span></a></td>'+
		 '<td><a id="remove_creditcard" style="margin-left:20px;"><span class="glyphicon glyphicon-remove" style="color:red;cursor:pointer;"></a></span></td>'+
		 '<td style="display:none">'+number+'</td>'+'<td style="display:none">'+exp+'</td>'+'<td style="display:none">'+cvc+'</td>'+
		 '<td style="display:none">'+name+'</td>'+'<td style="display:none">'+address+'</td>'+'<td style="display:none">'+city+'</td>'+
		 '<td style="display:none">'+state+'</td>'+'<td style="display:none">'+zip+'</td></tr>');
		 
		 $("#disply_new_card").append('<tr id="'+id+'"><td><input type="radio" id="radcc" class="radioBtnClass" name="rad_cc" exp="'+exp+'" value="'+number+'"'+
		 'cvc="'+cvc+'" cardholdername="'+name+'" address="'+address+'" city="'+city+'" state="'+state+'" zip="'+zip+'" lastdigits="'+lastdigits+'" /></td>'+
		 '<td><label style="font-weight:lighter;margin-left:5px;width:440px;margin-bottom: 10px;">Card ending in '+ number1+
		 '</label></td><td><span style="width:100px;font-weight:lighter">'+ exp+'</span></td><td><a id="update_creditcard"'+ 
		 'style="margin-left:30px;margin-bottom:5px;cursor: pointer;"><span class="glyphicon glyphicon-pencil"></span></a></td>'+
		 '<td><a id="remove_creditcard" style="margin-left:20px;"><span class="glyphicon glyphicon-remove" style="color:red;cursor:pointer;"></a></span></td>'+
		 '<td style="display:none">'+number+'</td>'+'<td style="display:none">'+exp+'</td>'+'<td style="display:none">'+cvc+'</td>'+
		 '<td style="display:none">'+name+'</td>'+'<td style="display:none">'+address+'</td>'+'<td style="display:none">'+city+'</td>'+
		 '<td style="display:none">'+state+'</td>'+'<td style="display:none">'+zip+'</td></tr>');
	   }, 
       error: function(err) {
          // alert('Something went wrong');
			}
		});
	 }
});
	  
	  $('#myModal_payment').on('click', '#submit_card', function () {
	
		if($('#cc-name').val()== "")
		{$('#cc-name').css('border-color', 'brown');
		}
		else
		{$('#cc-name').css('border-color', '');
		}
		
		if($('#cc-address').val()== "")
		{$('#cc-address').css('border-color', 'brown');
		}
		else
		{$('#cc-address').css('border-color', '');
		}
		
		if($('#cc-city').val()== "")
		{$('#cc-city').css('border-color', 'brown');
		}
		else
		{$('#cc-city').css('border-color', '');
		}
		
		if($('#cc-state').val()== "")
		{$('#cc-state').css('border-color', 'brown');
		}
		else
		{$('#cc-state').css('border-color', '');
		}
		
		if($('#cc-zip').val()== "")
		{$('#cc-zip').css('border-color', 'brown');
		}
		else
		{$('#cc-zip').css('border-color', '');
		}
			 if(($("#cc-number").val()=="") || ($("#cc-number").css("border-color") === "rgb(217,83,79)") ||
	  	($("#cc-exp").val()=="") || ($("#cc-exp").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-cvc").val()=="") || ($("#cc-cvc").css("border-color") === "rgb(217,83,79)") ||
		($("#cc-name").val()=="") || ($("#cc-name").css("border-color") === "brown") ||
		($("#cc-address").val()=="") || ($("#cc-address").css("border-color") === "brown")||
		($("#cc-city").val()=="") || ($("#cc-city").css("border-color") === "brown") || 
		($("#cc-state").val()=="") || ($("#cc-state").css("border-color") === "brown") || 
		($("#cc-zip").val()=="") || ($("#cc-zip").css("border-color") === "brown"))
		{
			$('#myModal_payment').modal('show');
		}
		else{
				
			var number= $("#cc-number").val();
			var exp= $("#cc-exp").val();
			var cvc= $("#cc-cvc").val();
			var name= $("#cc-name").val();
			var address= $("#cc-address").val();
			var city= $("#cc-city").val();
			var state= $("#cc-state").val();
			var zip= $("#cc-zip").val();
			var userid= $("#hide_userid").text();
			var Count = 4;
			var lastdigits=number.slice( -Count);
			
		number1= new Array(number.length - Count + 1).join('*') + number.slice( -Count);
		//console.log(data);
		 //var id=data;
		 
		$('#myModal_payment').modal('hide');
			

		$("#disply_new_card").append('<tr id="'+userid+'"><td><input type="radio" id="radcc" class="radioBtnClass" name="rad_cc" exp="'+exp+'" value="'+number+'"'+
		 'cvc="'+cvc+'" cardholdername="'+name+'" address="'+address+'" city="'+city+'" state="'+state+'" zip="'+zip+'" lastdigits="'+lastdigits+'" /></td>'+
		 '<td><label style="font-weight:lighter;margin-left:5px;width:440px;margin-bottom: 10px;">Card ending in '+ number1+
		 '</label></td><td><span style="width:100px;font-weight:lighter">'+ exp+'</span></td><td><a id="update_creditcard"'+ 
		 'style="margin-left:30px;margin-bottom:5px;cursor: pointer;"><span class="glyphicon glyphicon-pencil"></span></a></td>'+
		 '<td><a id="remove_creditcard" style="margin-left:20px;"><span class="glyphicon glyphicon-remove" style="color:red;cursor:pointer;"></a></span></td>'+
		 '<td style="display:none">'+number+'</td>'+'<td style="display:none">'+exp+'</td>'+'<td style="display:none">'+cvc+'</td>'+
		 '<td style="display:none">'+name+'</td>'+'<td style="display:none">'+address+'</td>'+'<td style="display:none">'+city+'</td>'+
		 '<td style="display:none">'+state+'</td>'+'<td style="display:none">'+zip+'</td></tr>');
		 
		   }
		});
 
 $('#card_details').on('click', '#update_creditcard', function () {
            
                $("#myModal_payment").modal('show');
				
				$("#save_ccard").css("display", "none");
				$("#update_ccard").css("display", "block");
				$("#submit_card").css("display", "none");
				$("#update_card").css("display", "none");
		
				
				var par = $(this).parent().parent();
				ID =$(this).closest('tr').attr('id');
				//alert(ID);
				var quantity = par.children("td:nth-child(5)");
				var quantity2 = par.children("td:nth-child(6)");
                var ditem = par.children("td:nth-child(7)");
                var dcost = par.children("td:nth-child(8)");
				var price = par.children("td:nth-child(9)");
                var description = par.children("td:nth-child(10)");
				var dcost2 = par.children("td:nth-child(11)");
				var price2 = par.children("td:nth-child(12)");
                var description2 = par.children("td:nth-child(13)");
				
				var item_name = $(quantity).text();
                 var item_qty = $(quantity2).text();
                 var amt = $(ditem).text();
				 var item_name1 = $(dcost).text();
                 var item_qty1 = $(price).text();
                 var amt1 = $(description).text();
				 var item_name2 = $(dcost2).text();
                 var item_qty2 = $(price2).text();
                 var amt2 = $(description2).text();
				
			$("#cc-number").val(item_qty);
			 $("#cc-exp").val(amt);
			 $("#cc-cvc").val(item_name1);
			 $("#cc-name").val(item_qty1);
			 $("#cc-address").val(amt1);
			 $("#cc-city").val(item_name2);
			 $("#cc-state").val(item_qty2);
			 $("#cc-zip").val(amt2);
			
			  
$('#myModal_payment').on('click', '#update_ccard', function () {
						 
			var number= $("#cc-number").val();
			var exp= $("#cc-exp").val();
			var cvc= $("#cc-cvc").val();
			var name= $("#cc-name").val();
			var address= $("#cc-address").val();
			var city= $("#cc-city").val();
			var state= $("#cc-state").val();
			var zip= $("#cc-zip").val();
			var Count = 4;
			var lastdigits=number.slice( -Count);
			var userid= $("#hide_userid").text();
		number1= new Array(number.length - Count + 1).join('*') + number.slice( -Count);
		   var  jsonObj={ 
							"id":ID,
							"userId":userid,
							"expDate":exp,
							//"cvc":cvc,
							//"name":name,
							"billingAddress":address,
							"city":city,
							"state":state,
							"zip":zip,
							"cardType": "VISA",
							"lastFourDigits":lastdigits
	  
						};
						
		$.ajax({
       url: "/delivery/login/updateCreditCard",
	   contentType: "application/json",
       type: "POST",
       data: JSON.stringify(jsonObj) ,
	   dataType: 'json',
       success: function(data) {
		 alert('success');
		 $('#myModal_payment').modal('hide');
		 
		 $("#profile_details").modal('show');
		
		
		 $('#'+ID).html('<td></td>'+
		 '<td><label style="font-weight:lighter;margin-left:5px;width:300px;margin-bottom: 10px;">Card ending in '+ number1+
		 '</label></td><td><span style="width:100px;font-weight:lighter">'+ exp+'</span></td><td><a id="update_creditcard"'+ 
		 'style="margin-left:30px;margin-bottom:5px;cursor: pointer;">'+
		 '<span class="glyphicon glyphicon-pencil"></span></a></td>'+
		 '<td><a id="remove_creditcard" style="margin-left:20px;"><span class="glyphicon glyphicon-remove" style="color:red;cursor:pointer;"></a></span></td>'+
		 '<td style="display:none">'+number+'</td>'+'<td style="display:none">'+exp+'</td>'+'<td style="display:none">'+cvc+'</td>'+
		 '<td style="display:none">'+name+'</td>'+'<td style="display:none">'+address+'</td>'+'<td style="display:none">'+city+'</td>'+
		 '<td style="display:none">'+state+'</td>'+'<td style="display:none">'+zip+'</td>');
			
			
	   }, 
       error: function(err) {
          // alert('Something went wrong');
			}
		});
		
				  });
	});
	
  $('#disply_new_card').on('click', '#update_creditcard', function () {
            
                $("#myModal_payment").modal('show');
				
				$("#save_ccard").css("display", "none");
				$("#update_ccard").css("display", "none");
				$("#submit_card").css("display", "none");
				$("#update_card").css("display", "block");
				
				var par = $(this).parent().parent();
				ID =$(this).closest('tr').attr('id');
				//alert(ID);
				var quantity = par.children("td:nth-child(5)");
				var quantity2 = par.children("td:nth-child(6)");
                var ditem = par.children("td:nth-child(7)");
                var dcost = par.children("td:nth-child(8)");
				var price = par.children("td:nth-child(9)");
                var description = par.children("td:nth-child(10)");
				var dcost2 = par.children("td:nth-child(11)");
				var price2 = par.children("td:nth-child(12)");
                var description2 = par.children("td:nth-child(13)");
				
				var item_name = $(quantity).text();
                 var item_qty = $(quantity2).text();
                 var amt = $(ditem).text();
				 var item_name1 = $(dcost).text();
                 var item_qty1 = $(price).text();
                 var amt1 = $(description).text();
				 var item_name2 = $(dcost2).text();
                 var item_qty2 = $(price2).text();
                 var amt2 = $(description2).text();
				
			 $("#cc-number").val(item_qty);
			 $("#cc-exp").val(amt);
			 $("#cc-cvc").val(item_name1);
			 $("#cc-name").val(item_qty1);
			 $("#cc-address").val(amt1);
			 $("#cc-city").val(item_name2);
			 $("#cc-state").val(item_qty2);
			 $("#cc-zip").val(amt2);
			
				
  $('#myModal_payment').on('click', '#update_card', function () {
						
			var number= $("#cc-number").val();
			var exp= $("#cc-exp").val();
			var cvc= $("#cc-cvc").val();
			var name= $("#cc-name").val();
			var address= $("#cc-address").val();
			var city= $("#cc-city").val();
			var state= $("#cc-state").val();
			var zip= $("#cc-zip").val();
			var Count = 4;
			var lastdigits=number.slice( -Count);
			
		number1= new Array(number.length - Count + 1).join('*') + number.slice( -Count);
		
		$("#myModal_payment").modal('hide');
		
		 $('#'+ID).html('<td><input type="radio" id="radcc" class="radioBtnClass" name="rad_cc" exp="'+exp+'" value="'+number+'"'+
		 'cvc="'+cvc+'" cardholdername="'+name+'" address="'+address+'" city="'+city+'" state="'+state+'" zip="'+zip+'" lastdigits="'+lastdigits+'" /></td>'+
		 '<td><label style="font-weight:lighter;margin-left:5px;width:440px;margin-bottom: 10px;">Card ending in '+ number1+
		 '</label></td><td><span style="width:100px;font-weight:lighter">'+ exp+'</span></td><td><a id="update_creditcard"'+ 
		 'style="margin-left:30px;margin-bottom:5px;cursor: pointer;">'+
		 '<span class="glyphicon glyphicon-pencil"></span></a></td>'+
		 '<td><a id="remove_creditcard" style="margin-left:20px;"><span class="glyphicon glyphicon-remove" style="color:red;cursor:pointer;"></a></span></td>'+
		 '<td style="display:none">'+number+'</td>'+'<td style="display:none">'+exp+'</td>'+'<td style="display:none">'+cvc+'</td>'+
		 '<td style="display:none">'+name+'</td>'+'<td style="display:none">'+address+'</td>'+'<td style="display:none">'+city+'</td>'+
		 '<td style="display:none">'+state+'</td>'+'<td style="display:none">'+zip+'</td>');
			
			
				  });
	});
	
	$('#disply_new_card').on('click', '#remove_creditcard', function (i,d) {
		var par = $(this).parent().parent();
				var ID =$(this).closest('tr').attr('id');
		$("#myModal_delete_cc").modal('show');
		
		$("#btn_delete_cc_yes").on('click', function(e) {
					$('#'+ID).empty();
					$("#myModal_delete_cc").modal('hide');	
						//var par = $('#remove_creditcard').parent().parent();
			//var ID =$('#remove_creditcard').closest('tr').attr('id');
			
		/*	$.ajax({
					type: "POST",
		            contentType: "application/json",
					url: "/delivery/login/deleteCreditCard",
		            data: {"id":ID},
		            dataType: 'json',
		            //timeout: 600000,
		            success: function (data) {
						('#'+ID).empty();
						$("#myModal_delete_cc").modal('hide');		
					},
		            error: function (err) {
						
		            }
			});	*/
		});
            
		$("#btn_delete_cc_no").on('click', function(e) {
			$("#myModal_delete_cc").modal('hide');
		});				
    });
			
			 $('#card_details').on('click', '#remove_creditcard', function (i,d) {
				 var par = $(this).parent().parent();
				var ID =$(this).closest('tr').attr('id');
		$("#myModal_delete_cc").modal('show');
		
		$("#btn_delete_cc_yes").on('click', function(e) {
		 // var par = $('#remove_creditcard').parent().parent();
				//var ID =$('#remove_creditcard').closest('tr').attr('id');
				
		
				//$('#'+ID).empty();
				//$("#myModal_delete_cc").modal('hide');
				 $.ajax({
    	            url: "/delivery/login/deleteCreditCard",
    	            data: {"id":ID},
    	            type:'GET',
    	            cache:false,
    	            success:function(data){
    	              console.log(data); 
					  $('#'+ID).empty();
					  $("#myModal_delete_cc").modal('hide');	
    	            },
    	            error:function(){
    	              //alert('error');
    	            }
    	         });
		});
            
		$("#btn_delete_cc_no").on('click', function(e) {
		$("#myModal_delete_cc").modal('hide');
		});			
		
            });
	$("#disply_new_card").on('mousedown', '.radioBtnClass', function () {
		
		var Val = $(this).val();
		var exp = $(this).closest('input').attr("exp");
		var cvc = $(this).closest('input').attr("cvc");
		var cardholdername = $(this).closest('input').attr("cardholdername");
		var address = $(this).closest('input').attr("address");
		var city = $(this).closest('input').attr("city");
		var state = $(this).closest('input').attr("state");
		var zip = $(this).closest('input').attr("zip");
		var lastdigits = $(this).closest('input').attr("lastdigits");
	
		the_creditcard=[];
   
		the_creditcard.push({Val:Val,
						exp:exp,
						cvc:cvc,
						cardholdername:cardholdername,
						address:address,
						city:city,
						state:state,
						zip:zip,
						lastdigits:lastdigits
		});
						
	});
		
		
	$("#review_coupon").on('click', function(e) {
	
	if ( $("#logged_in").css('display') == 'none'){
    alert('Please Login to use coupon');
	} 
	else {
	$("#review_coupon").css('display','none');
	$("#coupon_code").val('');
	$("#hide_applycoupon").css('display','block');
	$("#hide_removecoupon").css('display','none');
	}
	});
	
	
	$('#coupon_code').keyup(function(){
		$('#submit_coupon').prop('disabled', false);
	});
	
	$('#othertip_value').keyup(function(){
		console.log($('#othertip_value').val());
		if ($('#othertip_value').val() == '') 
		{
			$('#submit_othertip').prop('disabled', true);
		}
		else{
		$('#submit_othertip').prop('disabled', false);
		}
		});
	
	$("#submit_coupon").on('click', function(e) {

		var couponcode= $("#coupon_code").val();
		//$("#hide_removecoupon").css('display','block');
		//$('#myModal_coupon').modal('hide');
		var zipcode=$("#postal_code").val();
		var userId=$("#hide_userid").text();
		var subtotal=$("#sales_review_subtotal").text().replace("$", "");
		
		console.log("zipcode "+zipcode);
		console.log("userId "+userId);
		console.log("subtotal "+subtotal);
		console.log("couponcode "+couponcode);
		
		$.ajax({
		    type: "GET",
		    contentType: "application/json",
			url: pageURL+"applyCoupon",
		    data: { 
					"zipcode" :zipcode,
					"userId" :userId,
					"subtotal" :subtotal,
					"couponcode" :couponcode
			},
		    dataType: 'json',
		    //timeout: 600000,
		    success: function (data) {
				console.log(data);
				$("#review_coupon").css('display','none');
				$("#hide_applycoupon").css('display','none');
				$("#hide_removecoupon").css('display','block');
				var obj = JSON.stringify(data.result);
					
				var result = obj.slice(1, -1);
				$('#display_code').text(result);	
				$("#hide_coupon").text(result);
				final_calculate();	
				$("coupon_code").val('');				
			},
		    error: function (err) {
				// console.log(err);
		        //  alert(err);
		    }
		}); 
	}); 
	
	$("#remove_coupon").on('click', function(e) {
		$("#review_coupon").css('display','block');
		$("#hide_removecoupon").css('display','none');
		$('#submit_coupon').prop('disabled', true);
	});
	
	$("#tip_btn1").on('click', function(e) {
		$("#tip_value").css('display','block');  
		$("#remove_tip").css('display','block');
		$("#tip_buttons").css('display','none');
		$("#tip_value").html('$1');
		final_calculate();
	});
	
	$("#tip_btn2").on('click', function(e) {
		$("#tip_value").css('display','block');  
		$("#remove_tip").css('display','block');
		$("#tip_buttons").css('display','none');
		$("#tip_value").html('$2');
		final_calculate();
	});
	
	$("#tip_btn3").on('click', function(e) {
		$("#tip_value").css('display','block');  
		$("#remove_tip").css('display','block');
		$("#tip_buttons").css('display','none');
		$("#tip_value").html('$3');
		final_calculate();
	});
	
	$("#tip_btn4").on('click', function(e) {
		$("#tip_value").css('display','block');  
		$("#remove_tip").css('display','block');
		$("#tip_buttons").css('display','none');
		$("#tip_value").html('$4');
		final_calculate();
	});
	
	$("#tip_btn5").on('click', function(e) {
		$("#hide_othertip").css('display','block'); 
		//$("#othertip_value").css('display','block');
		$("#tip_value").css('display','none');		
		$("#remove_tip").css('display','none');
		$("#tip_buttons").css('display','none');
		$('#othertip_value').val('');
		$("#tip_value").html('$0');
		final_calculate();
	});
	
	$("#submit_othertip").on('click', function(e) {
		
		if ($('#othertip_value').val() == '') 
		{
			
		} else {
			$("#hide_othertip").css('display','none'); 
			//$("#othertip_value").css('display','none');
			$("#tip_value").css('display','block');			
			$("#remove_tip").css('display','block');
			$("#tip_buttons").css('display','none');
			var othertip_value = $("#othertip_value").val();
			$("#tip_value").html('$ '+ othertip_value);
			final_calculate();
		}
	});
	
	$("#remove_tip").on('click', function(e) {
		$("#tip_buttons").css('display','block');
		$("#tip_value").css('display','none');  
		$("#remove_tip").css('display','none');
		$("#tip_value").html('$0');
		$('#submit_othertip').prop('disabled', true);
		final_calculate();
	});
	
	$("#review_order_submit").click(function(e){
	
		if ($('#corp_name_delivery').val() == '') {
			$('#corp_name_delivery').css('border', '1px solid red');
			alert("Name cannot be blank");
		} else if ($('#corp_phone_delivery').val() == '') {
			$('#corp_phone_delivery').css('border', '1px solid red');
			alert("Phone cannot be blank");
		} else if( $('#disply_new_card').is(':empty') ) {
			alert("Please select card to proceed");
		} else {
			
			//alert("... test Trying 123...");
			var name=$('#corp_name_delivery').val();
			var phone=$('#corp_phone_delivery').val();
			var email=$('#corp_email_delivery').val();
			
			var textarea_delivery=$('#textarea_delivery').val();
			 
			 	var d = new Date();
			var order_date=  new Date().toLocaleDateString();
			var order_h= d.getHours(); 
			var order_m=d.getMinutes();
			var order_s=d.getSeconds();
			
			var date_delivery=$("#dd_btn1").text();
			if(date_delivery == "Today")
			{
				date_delivery = order_date;
			}
			else{
			}
		    var time_delivery=$("#dd_btn2").text();
			
			
			var corp_center=$("#dd_btn3").text();
			var company_name=$("#company_name").val();
			var suite_number=$("#suite_number").val();
			//
		
			var deliveryAddress= $("#street_number").val();
			var deliveryAddress1= $("#route").val();
			var deliveryCity = $("#locality").val();
			var deliveryState = $("#administrative_area_level_1").val();
			var deliveryZip = $("#postal_code").val();
			var sales_review_subtotal = $("#sales_review_subtotal").text().replace("$", "");
			var review_tax = $("#review_tax").text().replace("$", "");
			//var review_delivery_charges = $("#review_delivery_charges").text().replace("$", "");
			var driver_tip = $("#tip_value").text().replace("$", "");
			//var driver_tip = $(".dpui-numberPicker-input").val();
			var review_place_order_total = $("#review_place_order_total").text().replace("$", "");
			var base_review_place_order_total = $("#base_review_place_order_total").text().replace("$", "");
			var sales_review_place_order_total = $("#sales_review_place_order_total").text().replace("$", "");
		
			var tbl_length = $("#cart_item_details .tr").length;
			var rest_table = $("#cart_item_details .count_restaurant").length;
			
			console.log("rest_table" + rest_table);	
			console.log("the_rest " + the_rest);
			
			var salesRestaurantPrice;
			var listOfObjects = [];
			var the_rest = [];
			
			$('#cart_item_details .count_restaurant').each(function(){  
			
				var restid=$(this).closest('tr').attr('restid');
				var restname=$(this).closest('tr').attr('name');
				var restzipid=$(this).closest('tr').attr('zipid');
				
				the_rest.push({
								restaurantId:restid,
								name:restname,
								zipbusid:zipid 
							});
			});
			
			for(j=0;j<the_rest.length;j++){
				
				//alert("restaurantId"  + the_rest[j].restaurantId + "name"  + the_rest[j].name);
				var menu_table = $("#cart_item_details .menu_"+the_rest[j].name).length;
				var table=$("#cart_item_details .menu_"+the_rest[j].name);
				
				var the_menu = [];
				var salesRestaurantPrice2 = 0;
			 	var restaurantPrice = 0;
				var baseRestaurantPrice = 0;
				var salesRestaurantTax = 0;
				// table.find('tr').each(function (i,e) {
				
				$(table).each(function(){  
					//alert('hi');
					var $tds = $(this).find('td'),
					i_quantity = $tds.eq(0).text(),
					i_product = $tds.eq(2).text(),
					i_price = $tds.eq(3).text().replace("$", "");
					//console.log('i_price '+i_price);
					i_option = $tds.eq(4).text();
					i_cost = $tds.eq(5).text();
					i_description = $tds.eq(6).text();
					i_special_instruction = $tds.eq(7).text();
					i_restname = $tds.eq(8).text();
					i_restid = $tds.eq(9).text();
					i_ordertype = $tds.eq(10).text();
					i_baseprice = $tds.eq(11).text();
					i_restprice= $tds.eq(12).text();
					i_menuid= $tds.eq(13).text();
					i_section1 = $tds.eq(14).text();
					i_section2 = $tds.eq(15).text();
					i_section3 = $tds.eq(16).text();
					i_section4 = $tds.eq(17).text();
					i_section5 = $tds.eq(18).text();
					i_section6 = $tds.eq(19).text();
				 
					i_salestax = (i_price*(6/100));
				 
					//var val2 = (i_price);
					salesRestaurantPrice2 = salesRestaurantPrice2 + Number(i_price);
					salesRestaurantTax = (salesRestaurantPrice2*(6/100));
					restaurantPrice = restaurantPrice + Number(i_restprice);
					baseRestaurantPrice = baseRestaurantPrice + Number(i_baseprice);
					//console.log(salesRestaurantTax);
					//console.log(restaurantPrice);
					//console.log(baseRestaurantPrice);
				
					var the_section = [];
					
					//section one
					if(i_section1==""){
					
					} else {
						var str1 = i_section1;
						var myarray1 = str1.split(',');

						for(var k = 0; k < myarray1.length; k++){
							
							var i_section_id1 = (myarray1[0]);
							var i_section_heading1 = (myarray1[1]);
							
							var i_value1 = "";
							for(var l = 2; l <= k; l++){
								i_value1 += (myarray1[l]) + ",";	
							}
							var lastChar = i_value1.slice(-1);
							if (lastChar == ',') {
								i_value1 = i_value1.slice(0, -1);
							}
						}
						the_section.push({
								id : i_section_id1,
								name :i_section_heading1,
								value : i_value1
						});
					}
				
					//section two
					if(i_section2==""){
					
					} else {
						var str2 = i_section2;
						var myarray2 = str2.split(',');

						for(var k = 0; k < myarray2.length; k++){
							
							var i_section_id2 = (myarray2[0]);
							var i_section_heading2 = (myarray2[1]);
							var i_value2 = "";
							
							for(var l = 2; l <= k; l++){	
								i_value2 += (myarray2[l]) + ",";
							}
							var lastChar = i_value2.slice(-1);
							if (lastChar == ',') {
								i_value2 = i_value2.slice(0, -1);
							}
						}
						
						the_section.push({
									id : i_section_id2,
									name :i_section_heading2,
									value : i_value2
						});
					}
			 
					//section three
					if(i_section3==""){
						
					} else {
						var str3 = i_section3;
						var myarray3 = str3.split(',');

						for(var k = 0; k < myarray3.length; k++){
							
							var i_section_id3 = (myarray3[0]);
							var i_section_heading3 = (myarray3[1]);
							var i_value3 = "";
							for(var l = 2; l <= k; l++){
								i_value3 += (myarray3[l]) + ",";
							}
							
							var lastChar = i_value3.slice(-1);
							if (lastChar == ',') {
								i_value3 = i_value3.slice(0, -1);
							}
						}
						the_section.push({
									id : i_section_id3,
									name :i_section_heading3,
									value : i_value3
								});
					}
					
					//section four
					if(i_section4==""){
						
					} else {
						var str4 = i_section4;
						var myarray4 = str4.split(',');

						for(var k = 0; k < myarray4.length; k++){
							
							var i_section_id4 = (myarray4[0]);
							var i_section_heading4 = (myarray4[1]);
							
							var i_value4 = "";
							for(var l = 2; l <= k; l++){
								i_value4 += (myarray4[l]) + ",";
							}
							var lastChar = i_value4.slice(-1);
							if (lastChar == ',') {
								i_value4 = i_value4.slice(0, -1);
							}
						}
						the_section.push({
									id : i_section_id4,
									name :i_section_heading4,
									value : i_value4
								});
					}
				
					//section five
					if(i_section5==""){
						
					} else {
						var str5 = i_section5;
						var myarray5 = str5.split(',');

						for(var k = 0; k < myarray5.length; k++){
							var i_section_id5 = (myarray5[0]);
							var i_section_heading5 = (myarray5[1]);
							
							var i_value5 = "";
							for(var l = 2; l <= k; l++){
								i_value5 += (myarray5[l]) + ",";
							}
							var lastChar = i_value5.slice(-1);
							if (lastChar == ',') {
								i_value5 = i_value5.slice(0, -1);
							}
						}
						the_section.push({
									id : i_section_id5,
									name :i_section_heading5,
									value : i_value5
								});
					}
				
					//section six
					if(i_section6==""){
						
					} else {
						var str6 = i_section6;
						var myarray6 = str6.split(',');

						for(var k = 0; k < myarray6.length; k++){
							var i_section_id6 = (myarray6[0]);
							var i_section_heading6 = (myarray6[1]);
							
							var i_value6 = "";
							for(var l = 2; l <= k; l++){
								i_value6 += (myarray6[l]) + ",";
							}
							var lastChar = i_value6.slice(-1);
							if (lastChar == ',') {
								i_value6 = i_value6.slice(0, -1);
							}
						}
						the_section.push({
									id : i_section_id6,
									name :i_section_heading6,
									value : i_value6
								});
					}
					
					console.log("the_section " + the_section);
					
					the_menu.push({
									id:i_menuid,
									name:i_product,
									//orderDate:date_delivery,
									basePrice:i_baseprice , 
									salesPrice:i_price ,
									restaurantPrice:i_restprice, 
									salesTax:i_salestax,
									description :i_description, 
									specialInstuctions:i_special_instruction,
									quantity:i_quantity,
									sections:the_section
									
								});
						
				});
				
				console.log("zipBustypeMerchantId:-" + the_rest[j].zipbusid );
				
				listOfObjects.push({
										"name": the_rest[j].name,
										"id": the_rest[j].restaurantId,
										"zipBustypeMerchantId":the_rest[j].zipbusid,
										"menus": the_menu,
										"salesRestaurantPrice":salesRestaurantPrice2,
										"salesRestaurantTax":salesRestaurantTax,
										"restaurantPrice":restaurantPrice,
										"baseRestaurantPrice":baseRestaurantPrice
									})
									
				console.log("listOfObjects- "+JSON.stringify(listOfObjects));
			}//end of outer for loop
	
			//var restlist=JSON.stringify(listOfObjects);
			//console.log(the_creditcard);
		
		
			var hide_userid= $("#hide_userid").text();
			var corp_name_delivery= $("#corp_name_delivery").val();
			var corp_phone_delivery= $("#corp_phone_delivery").val();
			var corp_email_delivery= $("#corp_email_delivery").val();
			var zipbusid = $("#hide_zipid").text();
			var orderForm = 
			{
				"userId": hide_userid,
				"name": corp_name_delivery,
				"age":"29",							//remove
			    "phone":corp_phone_delivery,
				//"currentDate": "08/08/2018",
				//"time":"10.00", 
				
				"currentDate": order_date,
				"time":order_h+":"+order_m+":"+order_s,
				
				"restEmail":corp_email_delivery,   
				"deliveryAddress": deliveryAddress+ deliveryAddress1,						
				"deliveryCity": deliveryCity,
				"deliveryState": deliveryState,
			//	"deliveryCharge": review_delivery_charges,
				"deliveryZip": deliveryZip,
		
				// pending
				"corpCenter":corp_center,
				"companyName":company_name,
				"suiteNumber":suite_number,
				
				//"restaurantId":"1", 
				
				"restaurantForms": listOfObjects,
				
				"description": "NA",                //No need of this
				"instructions": textarea_delivery,
				
				"orderType": 'CORP',
				"orderDate": date_delivery,
				//"orderTime": time_delivery,
				//"orderDate": "2018-07-28",
				"orderTime": "11.00",
				//"orderId": "273",					  //No need of this
				"zipBusTypeMerchantId": zipbusid,       
				
				
				"cardType": "VISA",
				"lastFourDigits": the_creditcard[0].lastdigits,
				"expDate":the_creditcard[0].exp,
				"token": "2234",
				"cardNumber":  the_creditcard[0].Val,
				"cardHolderName":  the_creditcard[0].cardholdername,
				"cvc":  the_creditcard[0].cvc,
				
				"billingAddress": the_creditcard[0].address,
				"billingCity":  the_creditcard[0].city,
				"billingState": the_creditcard[0].state,
				"billingZip": the_creditcard[0].zip,
				
				
				"subTotalSales" : sales_review_subtotal,
				"taxSales" : review_tax,
				"totalSales" : review_place_order_total,
				"totalBase" : base_review_place_order_total,
				"totalRestaurant" : sales_review_place_order_total,
				"tip" : driver_tip,
				
				// order status
				"newStatus": "ready for delivery",
				"newDate":"11/05/2018",
				"newTime":"10:20AM",
				
			    "openStatus":"Still in progress",
				"openDate":"11/05/2018",
				"openTime":"2:10PM",
				
				"ackStatus":"Deliver soon",
				"ackDate":"12/05/2018",
				"ackTime":"2:10PM",
				
				"ready":"Out for delivery",
				"readyDate":"12/05/2018",
			    "readyTime":"2:15PM",
				
				"handover":"reached on destination",
				"handoverDate":"12/05/2018",
				"handoverTime":"2:20PM",
				
				"delivered":"Delivered",
				"deliveredDate":"12/05/2018",
				"deliveredTime":"2:15PM",
				
				// pay_method need to add this - Value is WEB
				 
				//coupon user
				"businessType":"CORP",
				"zip":"32234",
				
				"couponType":"GRAP 46",
				"couponCode":"3444",
				"couponAmount":"22.2",
				
				"maxValidDate":"12/05/2018",
				"maxNumberOfUsages":"2",
				"numberOfUsagesComplete":"1",
				"amountOffPerUsage":"234",
				"maxPercentageOffPerUsage":"22",
				"minOrderAmount":"3",
				"maxAmountOffPerUsage":"234" 
			};
			//console.log("subTotalSales-"+sales_review_subtotal,"taxSales-" +review_tax,"totalSales-"+ review_place_order_total,
			//"totalBase-" +base_review_place_order_total,"totalRestaurant-"+sales_review_place_order_total,"tip-"+ driver_tip);
			
			console.log(JSON.stringify(orderForm));
			
			$.ajax({
				//url: "/delivery/rests/order",
				url: pageURL+"order",
		        contentType: "application/json",
				type: "POST",
		        data: JSON.stringify(orderForm),
		        dataType: 'json',
		        success: function (data) {
				
				console.log(data);
					var obj = JSON.stringify(data.result);
					
					$('#remove_coupon').css("display", "none");
					$('#corp_review_orderno').text('Your Order number is '+ obj);
					
					$('#review_order_submit').prop('disabled', true);
					$('#print_pdf').css("display", "block");
				},
		        error: function () {
					
		        }
			});	
		}
	});
	
	$('#print_pdf').click(function(){
		//alert("pdfprint");
		var print_review;
	   
		$("#review_paymentcard_details").css("display", "none");
		$("#div_address").css("display", "none");	
		$("#div_footer").css("display", "none");	
		$("#back_checkout_panel").css("display", "none");	
		$("#login").css("display", "none");	
		$("#logged_in").css("display", "none");	
		$("#sign_out").css("display", "none");	
		$("#register").css("display", "none");	
		$("#review_order_submit").css("display", "none");
	   
		//$("#review_delivery_details").css("display", "none");
	   
		if ( $("#review_corp_delivery_details").css('display') == 'block' ){
			  print_review="CORP";
		} else {
			print_review="RD";
		}
			
		if(print_review=="CORP"){
			$("#review_corp_delivery_details").css("display", "none");
			$("#back_corp_checkout_panel").css("display", "none");
		   
		    var print_date_delivery=$("#date_delivery").text();
			$("#print_date_delivery").text(print_date_delivery);
	   
			var print_address_delivery=$("#address_delivery").text();
			$("#print_address_delivery").text(print_address_delivery);
	   
			var print_corp_address_delivery=$("#corp_address_delivery").text();
			$("#print_corp_address_delivery").text(print_corp_address_delivery);
		} else {
			$("#review_rest_delivery_details").css("display", "none");
		    $("#back_rest_checkout_panel").css("display", "none");
		   
			var print_date_delivery=$("#rest_date_delivery").text();
			$("#print_date_delivery").text(print_date_delivery);
	   
			var print_address_delivery=$("#rest_address_delivery").text();
			$("#print_address_delivery").text(print_address_delivery);
		}
	   
	   
		$("#print_delivery_details").css("display", "block");
	   
	    $("#review_order_details").css("width", 850);
	   
		$("#print_driver_tip").css("display", "block");
		$("#driver_tip").css("display", "none");
		$("#review_order_summary").css("width", 850);
	   
		var print_name_delivery=$("#name_delivery").val();
		$("#print_name_delivery").text(print_name_delivery);
	   
	   var print_phone_delivery=$("#phone_delivery").val();
	   $("#print_phone_delivery").text(print_phone_delivery);
	   
	   var print_email_delivery=$("#email_delivery").val();
	   $("#print_email_delivery").text(print_email_delivery);
	   
	   var print_textarea_delivery=$("#textarea_delivery").val();
	   $("#print_textarea_delivery").text(print_textarea_delivery);
	   
	   var print_np=$(".dpui-numberPicker-input").val();
	    $("#print_np").text(print_np);
		
		 var print_review_place_order_total=$("#review_place_order_total").text();
	   $("#print_review_place_order_total").text(print_review_place_order_total);
	   
        printPdf();
		
	   //$("#review_delivery_details").css("display", "block");
	   $("#print_delivery_details").css("display", "none");
	   
	   if(print_review=="CORP")
	   {
		   $("#review_corp_delivery_details").css("display", "block");
		   $("#back_corp_checkout_panel").css("display", "block");
	   }
	   else
	   {
		   $("#review_rest_delivery_details").css("display", "block");
		   $("#back_rest_checkout_panel").css("display", "block");
	   }
	  // $("#review_corp_delivery_details").css("display", "block");
	  // $("#review_rest_delivery_details").css("display", "block");
	   $("#review_order_details").css("width", 630.5);
	   
	    $("#print_driver_tip").css("display", "none");
	   $("#driver_tip").css("display", "block");
	   $("#review_order_summary").css("width", 630.5);
	   $("#review_paymentcard_details").css("display", "block");
	   $("#div_address").css("display", "block");	
	   $("#div_footer").css("display", "block");	
	   
	   $("#login").css("display", "block");	
	   $("#logged_in").css("display", "block");	
	   $("#sign_out").css("display", "block");	
	   	
	   $("#review_order_submit").css("display", "block");
    });	
	
	$('#firstname').keyup(function()
{
	if ($('#firstname').val() == '') {
    $('#firstname').css('border', '1px solid red');
}
else {
    $('#firstname').css('border', '');
}
  
	});
	
	$('#lastname').keyup(function(){
		
	if ($('#lastname').val() == '') {
    $('#lastname').css('border', '1px solid red');
}
else {
    $('#lastname').css('border', '');
}
  
	});
	
$('#email').keyup(function(){
	var input=$('#email').val();
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input);
	if(is_email){
		$('#email').css('border', '');
	}
	else{
		
		$('#email').css('border', '1px solid red');
		}
	});
	
	$('#phone').keyup(function(){
	var input=$('#phone').val();
	var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	var is_email=re.test(input);
	if(is_email){
		$('#phone').css('border', '');
	}
	else{
		
		$('#phone').css('border', '1px solid red');
		}
	});
	
	$('#password').keyup(function(){
	var input=$('#password').val();
	var re = /^(?=.*[a-z])[A-Za-z0-9\d=!\-@._*]+$/;
	var is_email=re.test(input);
	if(is_email){
		$('#password').css('border', '');
	}
	else{
		
		$('#password').css('border', '1px solid red');
		}
	});
	
	$('#confirm_password').keyup(function(){
	var input=$('#password').val();
	var input2=$('#confirm_password').val();
	
	if($('#password').val()==$('#confirm_password').val()){
		$('#confirm_password').css('border', '');
	}
	else{
		
		$('#confirm_password').css('border', '1px solid red');
		}
	});
	
	
	$('#login_user').keyup(function(){
	var input=$('#login_user').val();
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input);
	if(is_email){
		$('#login_user').css('border', '');
	}
	else{
		
		$('#login_user').css('border', '1px solid red');
		}
	});
	
	$('#login_pass').keyup(function(){
	var input=$('#login_pass').val();
	var re = /^(?=.*[a-z])[A-Za-z0-9\d=!\-@._*]+$/;
	var is_email=re.test(input);
	if(is_email){
		$('#login_pass').css('border', '');
	}
	else{
		
		$('#login_pass').css('border', '1px solid red');
		}
	});
	
	$('#user_email').keyup(function(){
	var input=$('#user_email').val();
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input);
	if(is_email){
		$('#user_email').css('border', '');
	}
	else{
		
		$('#user_email').css('border', '1px solid red');
		$('#myModal_forgot_password').modal('show');
		}
	
	
	});
		 
  
  
	$("#submit_forgotpass").keyup(function(e){
		if(($("#user_email").val()=="") || ($("#user_email").css("border-color") === "rgb(255, 0, 0)"))
		{
			alert("Please enter valid email id");
			$('#myModal_forgot_password').modal('show');
		}else{
			$('#myModal_forgot_password').modal('hide');
		}
	});
	
	
	$('#pass_current').keyup(function(){
	var input=$('#pass_current').val();
	var re = /^(?=.*[a-z])[A-Za-z0-9\d=!\-@._*]+$/;
	var is_email=re.test(input);
	if(is_email){
		$('#pass_current').css('border', '');
	}
	else{
		
		$('#pass_current').css('border', '1px solid red');
		}
	});
	
	$('#pass_new').keyup(function(){
	var input=$('#pass_new').val();
	var re = /^(?=.*[a-z])[A-Za-z0-9\d=!\-@._*]+$/;
	var is_email=re.test(input);
	if(is_email){
		$('#pass_new').css('border', '');
	}
	else{
		
		$('#pass_new').css('border', '1px solid red');
		}
	});
	
	$('#pass_confirm').keyup(function(){
	var input=$('#pass_new').val();
	var input2=$('#pass_confirm').val();
	
	if($('#pass_new').val()==$('#pass_confirm').val()){
		$('#pass_confirm').css('border', '');
		
	}
	else{
		
		$('#pass_confirm').css('border', '1px solid red');
		}
	});
	
	$("#pass_modal_save").click(function(e){
		if(($("#pass_current").val()=="") || ($("#pass_current").css("border-color") === "rgb(255, 0, 0)") ||
		($("#pass_new").val()=="") || ($("#pass_new").css("border-color") === "rgb(255, 0, 0)") ||
		($("#pass_confirm").val()=="") || ($("#pass_confirm").css("border-color") === "rgb(255, 0, 0)"))
		{
			alert("Please enter valid details");
			$('#myModal_reset_password').modal('show');
		} else {
		var pass_current=$('#pass_current').val();
		var pass_new=$('#pass_new').val();
		var pass_confirm=$('#pass_confirm').val();
		var u_id=$('#hide_userid').text();
		
		var  jsonObj={
				"id":u_id,
				"oldPassword":pass_current,
				"newPassword":pass_new
				
			};
			console.log(jsonObj);
			$.ajax({
      		url: "/delivery/login/updateUserPassword",
			contentType: "application/json",
      		type: "POST",
      	    data: JSON.stringify(jsonObj) ,
			dataType: 'json',
      		success: function(data){
				console.log(data);
				alert("Password changed successfully");
				$('#myModal_reset_password').modal('hide');
				$('#profile_details').modal('show');
			},
      		error: function(){
           			//alert("inside error " + passParams);
      		}
		});
			
	
		}
	});
	
	
		
	
	/*$('#cc-number').click(function(){

	var input=$('#cc-number').val();
	
	var re = /^4[0-9]{12}(?:[0-9]{3})?$/;
	var is_email=re.test(input);
	//alert(re);
	//alert(is_email);
	if(is_email){
		$('#cc-number').css('border', '');
	}
	else{
		
		$('#cc-number').css('border', '1px solid red');
		}
	});*/
	$("#cc-name").keyup(function(e){
		if($('#cc-name').val()== "")
		{$('#cc-name').css('border-color', 'brown');
		}
		else
		{$('#cc-name').css('border-color', '');
		}
	});
	
	$("#cc-address").keyup(function(e){
		if($('#cc-address').val()== "")
		{$('#cc-address').css('border-color', 'brown');
		}
		else
		{$('#cc-address').css('border-color', '');
		}
	});	
	
	$("#cc-city").keyup(function(e){
		if($('#cc-city').val()== "")
		{$('#cc-city').css('border-color', 'brown');
		}
		else
		{$('#cc-city').css('border-color', '');
		}
	});	
	
	$("#cc-state").keyup(function(e){
		if($('#cc-state').val()== "")
		{$('#cc-state').css('border-color', 'brown');
		}
		else
		{$('#cc-state').css('border-color', '');
		}
	});	
	
	$("#cc-zip").keyup(function(e){
		if($('#cc-zip').val()== "")
		{$('#cc-zip').css('border-color', 'brown');
		}
		else
		{$('#cc-zip').css('border-color', '');
		}
	});	
	
	/*$("#cc-name1").keyup(function(e){
		if($('#cc-name1').val()== "")
		{$('#cc-name1').css('border-color', 'brown');
		}
		else
		{$('#cc-name1').css('border-color', '');
		}
	});
	
	$("#cc-address1").keyup(function(e){
		if($('#cc-address1').val()== "")
		{$('#cc-address1').css('border-color', 'brown');
		}
		else
		{$('#cc-address1').css('border-color', '');
		}
	});	
	
	$("#cc-city1").keyup(function(e){
		if($('#cc-city1').val()== "")
		{$('#cc-city1').css('border-color', 'brown');
		}
		else
		{$('#cc-city1').css('border-color', '');
		}
	});	
	
	$("#cc-state1").keyup(function(e){
		if($('#cc-state1').val()== "")
		{$('#cc-state1').css('border-color', 'brown');
		}
		else
		{$('#cc-state1').css('border-color', '');
		}
	});	
	
	$("#cc-zip1").keyup(function(e){
		if($('#cc-zip1').val()== "")
		{$('#cc-zip1').css('border-color', 'brown');
		}
		else
		{$('#cc-zip1').css('border-color', '');
		}
	});	*/
	
	$('#corp_name_delivery').keyup(function()
{
	if ($('#corp_name_delivery').val() == '') {
    $('#corp_name_delivery').css('border', '1px solid red');
}
else {
    $('#corp_name_delivery').css('border', '');
}
  });
  
  
  $('#corp_email_delivery').keyup(function(){
	var input=$('#corp_email_delivery').val();
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input);
	if(is_email){
		$('#corp_email_delivery').css('border', '');
	}
	else{
		
		$('#corp_email_delivery').css('border', '1px solid red');
		}
	});
  
  $('#corp_phone_delivery').keyup(function(){
	var input=$('#corp_phone_delivery').val();
	var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	var is_email=re.test(input);
	if(is_email){
		$('#corp_phone_delivery').css('border', '');
	}
	else{
		
		$('#corp_phone_delivery').css('border', '1px solid red');
		}
	});
	
	$('#edit_firstname').keyup(function()
{
	if ($('#edit_firstname').val() == '') {
    $('#edit_firstname').css('border', '1px solid red');
}
else {
    $('#edit_firstname').css('border', '');
}
  
	});
	
	$('#edit_lastname').keyup(function(){
		
	if ($('#edit_lastname').val() == '') {
    $('#edit_lastname').css('border', '1px solid red');
}
else {
    $('#edit_lastname').css('border', '');
}
  
	});
	
$('#edit_email').keyup(function(){
	var input=$('#edit_email').val();
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input);
	if(is_email){
		$('#edit_email').css('border', '');
	}
	else{
		
		$('#edit_email').css('border', '1px solid red');
		}
	});
	
	$('#edit_phone').keyup(function(){
	var input=$('#edit_phone').val();
	var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	var is_email=re.test(input);
	if(is_email){
		$('#edit_phone').css('border', '');
	}
	else{
		
		$('#edit_phone').css('border', '1px solid red');
		}
	});
}); 
	