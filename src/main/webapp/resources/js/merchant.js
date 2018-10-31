	function isNumber(evt) {
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}
	
	function updateStatus(id){
		alert(id);
		var updateid=$('#'+id).attr("tdid");
		alert(updateid);
		var tdvalue=$('#'+updateid).attr("value");
		alert(tdvalue);
		if(tdvalue==1){
			$('#'+updateid).attr('value','2');
			$('#'+updateid).text('Paid');
		}
		
		var id=$('#'+id).attr("orderid");
		$.ajax({
			url: "/delivery/rests/updateOrderStatus",
			contentType: "application/json",
			type: "GET",
			data: {"id":id,
					"orderStatus":"2"} ,
			dataType: 'json',
			success: function(data) {
				 $("#"+id).attr("disabled", true);
				//$('#'+id).prop('disabled', true);
							}, 
					error: function() {
						//alert('Something went wrong');
						}
					});
	}

	function footer(){
	   var cart = $('#welcome_portal').height();
	 /*  var restName = $('.restName').height();
	   if(cart>restName)
	   {
		    $('#div_footer').css('margin-top', (cart)-50+  'px');
	   }
   else
   {*/
    $('#div_footer').css('margin-top', (cart)-50+  'px');
  // }
  
   }

	function fill_rest() {
		
		if ($('#restaurantname').val() == ''){
			$('#restaurantname').css('border', '1px solid red');
		}else{
			 $('#restaurantname').css('border', '');
		}
		
		if ($('#managername').val() == ''){
			$('#managername').css('border', '1px solid red');
		}else{
			 $('#managername').css('border', '');
		}
		
		if ($('#rest_email').val() == ''){
			$('#rest_email').css('border', '1px solid red');
		}else{
			 $('#rest_email').css('border', '');
		}
		
		if ($('#rest_phone').val() == ''){
			$('#rest_phone').css('border', '1px solid red');
		}else{
			 $('#rest_phone').css('border', '');
		}
		
		if ($('#rest_tagline').val() == ''){
			$('#rest_tagline').css('border', '1px solid red');
		}else{
			 $('#rest_tagline').css('border', '');
		}
		
		if ($('#rest_openclosetime').val() == ''){
			$('#rest_openclosetime').css('border', '1px solid red');
		}else{
			 $('#rest_openclosetime').css('border', '');
		}
		
		if ($('#rest_timerange').val() == ''){
			$('#rest_timerange').css('border', '1px solid red');
		}else{
			 $('#rest_timerange').css('border', '');
		}
		
		if ($('#rest_pricelevel').val() == ''){
			$('#rest_pricelevel').css('border', '1px solid red');
		}else{
			 $('#rest_pricelevel').css('border', '');
		}
		
		if ($('#rest_address').val() == ''){
			$('#rest_address').css('border', '1px solid red');
		}else{
			 $('#rest_address').css('border', '');
		}
		
		if ($('#rest_city').val() == ''){
			$('#rest_city').css('border', '1px solid red');
		}else{
			 $('#rest_city').css('border', '');
		}
		
		if ($('#rest_state').val() == ''){
			$('#rest_state').css('border', '1px solid red');
		}else{
			 $('#rest_state').css('border', '');
		}
		
		if ($('#rest_zip').val() == ''){
			$('#rest_zip').css('border', '1px solid red');
		}else{
			 $('#rest_zip').css('border', '');
		}
		
		if ($('#rest_image').val() == ''){
			$('#rest_image').css('border', '1px solid red');
		}else{
			 $('#rest_image').css('border', '');
		}	
	}
		
	function edit_fill_rest() {
		
		if ($('#edit_restaurantname').val() == ''){
		$('#edit_restaurantname').css('border', '1px solid red');
		}else{
			 $('#edit_restaurantname').css('border', '');
		}
		
		if ($('#edit_managername').val() == ''){
		$('#edit_managername').css('border', '1px solid red');
		}else{
			 $('#edit_managername').css('border', '');
		}
		
		if ($('#edit_rest_email').val() == ''){
		$('#edit_rest_email').css('border', '1px solid red');
		}else{
			 $('#edit_rest_email').css('border', '');
		}
		
		if ($('#edit_rest_phone').val() == ''){
		$('#edit_rest_phone').css('border', '1px solid red');
		}else{
			 $('#edit_rest_phone').css('border', '');
		}
		
		if ($('#edit_rest_tagline').val() == ''){
		$('#edit_rest_tagline').css('border', '1px solid red');
		}else{
			 $('#edit_rest_tagline').css('border', '');
		}
		
		if ($('#edit_rest_openclosetime').val() == ''){
		$('#edit_rest_openclosetime').css('border', '1px solid red');
		}else{
			 $('#edit_rest_openclosetime').css('border', '');
		}
		
		if ($('#edit_rest_timerange').val() == ''){
		$('#edit_rest_timerange').css('border', '1px solid red');
		}else{
			 $('#edit_rest_timerange').css('border', '');
		}
		
		if ($('#edit_rest_pricelevel').val() == ''){
		$('#edit_rest_pricelevel').css('border', '1px solid red');
		}else{
			 $('#edit_rest_pricelevel').css('border', '');
		}
		
		if ($('#edit_rest_address').val() == ''){
		$('#edit_rest_address').css('border', '1px solid red');
		}else{
			 $('#edit_rest_address').css('border', '');
		}
		
		if ($('#edit_rest_city').val() == ''){
		$('#edit_rest_city').css('border', '1px solid red');
		}else{
			 $('#edit_rest_city').css('border', '');
		}
		
		if ($('#edit_rest_state').val() == ''){
		$('#edit_rest_state').css('border', '1px solid red');
		}else{
			 $('#edit_rest_state').css('border', '');
		}
		
		if ($('#edit_rest_zip').val() == ''){
		$('#edit_rest_zip').css('border', '1px solid red');
		}else{
			 $('#edit_rest_zip').css('border', '');
		}
		
		if ($('#edit_rest_image').val() == ''){
		$('#edit_rest_image').css('border', '1px solid red');
		}else{
			 $('#edit_rest_image').css('border', '');
		}
		
	}
		
	function fill_menu(){
		if ($('#menu_name').val() == ''){
			$('#menu_name').css('border', '1px solid red');
		}else{
			 $('#menu_name').css('border', '');
		}
		
		/*if ($('#restaurantBustypeId').val() == ''){
		$('#restaurantBustypeId').css('border', '1px solid red');
		}
		else{
			 $('#restaurantBustypeId').css('border', '');
		}*/
		
		if ($('#groupNumber').val() == ''){
			$('#groupNumber').css('border', '1px solid red');
		}else{
			 $('#groupNumber').css('border', '');
		}
		
		if ($('#groupName').val() == ''){
			$('#groupName').css('border', '1px solid red');
		}else{
			 $('#groupName').css('border', '');
		}
		
		if ($('#groupMenuNumber').val() == ''){
			$('#groupMenuNumber').css('border', '1px solid red');
		}else{
			 $('#groupMenuNumber').css('border', '');
		}
		
		if ($('#salesprice').val() == ''){
			$('#salesprice').css('border', '1px solid red');
		}else{
			 $('#salesprice').css('border', '');
		}
		
		if ($('#description').val() == ''){
			$('#description').css('border', '1px solid red');
		}else{
			 $('#description').css('border', '');
		}
		
		if ($('#menuImage').val() == ''){
			$('#menuImage').css('border', '1px solid red');
		}else{
			 $('#menuImage').css('border', '');
		}
	}
	
	function edit_fill_menu(){
		if ($('#edit_menu_name').val() == ''){
			$('#edit_menu_name').css('border', '1px solid red');
		}else{
			 $('#edit_menu_name').css('border', '');
		}
		
		/*if ($('#edit_restaurantBustypeId').val() == ''){
		$('#edit_restaurantBustypeId').css('border', '1px solid red');
		}
		else{
			 $('#edit_restaurantBustypeId').css('border', '');
		}*/
		
		if ($('#edit_groupNumber').val() == ''){
			$('#edit_groupNumber').css('border', '1px solid red');
		}else{
			 $('#edit_groupNumber').css('border', '');
		}
		
		if ($('#edit_groupName').val() == ''){
			$('#edit_groupName').css('border', '1px solid red');
		}else{
			 $('#edit_groupName').css('border', '');
		}
		
		if ($('#edit_groupMenuNumber').val() == ''){
			$('#edit_groupMenuNumber').css('border', '1px solid red');
		}else{
			 $('#edit_groupMenuNumber').css('border', '');
		}
		
		if ($('#edit_price').val() == ''){
			$('#edit_price').css('border', '1px solid red');
		}else{
			 $('#edit_price').css('border', '');
		}
		
		if ($('#edit_description').val() == ''){
			$('#edit_description').css('border', '1px solid red');
		}else{
			 $('#edit_description').css('border', '');
		}
		
		if ($('#edit_menuImage').val() == ''){
			$('#edit_menuImage').css('border', '1px solid red');
		}else{
			 $('#edit_menuImage').css('border', '');
		}
	}
	
	
	$(document).ready(function() {
		footer();
		
$('[data-toggle="tooltip"]').tooltip();

		
		pageURL = $(location).attr("href");
		
		$('#date_start').daterangepicker({
            autoUpdateInput: false,
			locale: {
				cancelLabel: 'Clear'
			}
        }); 
		
		$('#date_start').on('apply.daterangepicker', function(ev, picker) {
			$(this).val(picker.startDate.format('YYYY-MM-DD') + ' to ' + picker.endDate.format('YYYY-MM-DD'));
		});

		$('#date_start').on('cancel.daterangepicker', function(ev, picker) {
			$(this).val('');
		});
		
		
		$('#date_start2').daterangepicker({
            autoUpdateInput: false,
			locale: {
				cancelLabel: 'Clear'
			}
        }); 
		
		$('#date_start2').on('apply.daterangepicker', function(ev, picker) {
			$(this).val(picker.startDate.format('YYYY-MM-DD') + ' to ' + picker.endDate.format('YYYY-MM-DD'));
		});

		$('#date_start2').on('cancel.daterangepicker', function(ev, picker) {
			$(this).val('');
		});
		
		$("#btnExport").click(function () {
			
			if($('#table_summary').text()=='')
				{
				$('#noData').css("display","block");
				$('#table_summary').empty();
				}
			else{
				
				$("#table_summary").table2excel({
					exclude: "#btncolumn",
					filename: "Summary-Report.xls",
					
				});
			}
			
	    });
		$("#btnExport2").click(function () {
			if($("#table_report").text()=='')
			{
				$('#noData').css("display","block");
				$('#table_report').empty();
			}
			else{
				
				$("#table_report").table2excel({
					filename: "Order-Report.xls"
				});
				
			}
	    });
	/*	
		$("#btnExport").click(function () {


			$("#table_summary").table2excel({
			exclude: "#btncolumn",
			filename: "Table.xls",

		});
	});
		$("#btnExport2").click(function () {
			$("#table_report").table2excel({
			filename: "Table.xls",

		});
	});*/
			
		
		/*	  
		$('#date_start, #date_end').calendricalDateRange({
			usa: true
		}); 
		*/
		
		/*$('#myModal_login').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});*/
		
	/*	$("#filter1").click(function(e){
			var fromDate;
			var toDate;
			var userType;
			var orderType;
			
			if($('#userType').val()==null || $('#userType').val()=="" ){
				userType="null";
			}else{
				userType=$('#userType').val();
			}
			
			if($('#orderType').val()==null || $('#orderType').val()==""){
				orderType="null";
			}else{
				orderType=$('#orderType').val();
			}
			
			if($("#date_start").val()==""){
				fromDate="null";
				toDate="null";
			}else{
				var date = $("#date_start").val();
				var myarray = date.split('to');
				for(var z = 0; z < myarray.length; z++){
					fromDate = myarray[0];
					toDate = myarray[1];
				}
			}
			if(userType=="null" && orderType=="null" && fromDate=="null" && toDate=="null"){
				alert("Please select atleast one filter option to search!");
			}
			else{
			$.ajax({
				url: pageURL+"getFilterOrder",
				type: "GET",
				data: {
					"userType":userType,
					"orderType":orderType,
					"fromDate":fromDate,
					"toDate":toDate
				},
				dataType: 'json',
				success: function(data) { 
					console.log("data"+data);
					alert(data);
					$('#table_summary').empty().append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;background-color:#dadada">'+
							'<td style="width:100px;height:50px;padding-left: 10px;"><label>Order Number</label></td>'+
							'<td style="width:100px;height:50px;padding-left: 10px;"><label>Order Date</label></td>'+
							'<td style="width:150px;height:50px;padding-left: 10px;"><label>Name</label></td>'+
							'<td style="width:150px;height:50px;padding-left: 10px;"><label>Address</label></td>'+
							'<td style="width:150px;height:50px;padding-left: 10px;"><label>Delivery Charges</label></td>'+
							'<td style="width:150px;height:50px;padding-left: 10px;"><label>Subtotal Sales</label></td>'+
							'<td style="width:100px;height:50px;padding-left: 10px;"><label>Tax</label></td>'+
							'<td style="width:100px;height:50px;padding-left: 10px;"><label>Total Sales</label></td>'+
							'<td style="width:100px;height:50px;padding-left: 10px;"><label>Tip</label></td>'+
							'<td style="width:100px;height:50px;padding-left: 10px;"><label>Schedule</label></td>'+
							'<td style="width:100px;height:50px;padding-left: 10px;"><label>Order Status</label></td></tr>');
						   
							$.each(data, function(key, value) {
								
								html='<tr id="'+value['id']+'" zipBustypeMerchantId="'+value['zipBustypeMerchantId']+
								'" style="border:1px solid #dadada;margin-bottom: 1.1em;padding-left: 10px;">'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['id']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['orderDate']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['name']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['deliveryAddress']+','+value['deliveryCity']+','+value['deliveryState']+','+value['deliveryZip']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['deliveryCharge']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['subTotalSales']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['taxSales']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['totalSales']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['tip']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['schedule']+'</td>'+
								'<td style="width:150px;height:50px;padding-left: 10px;">'+value['orderStatus']+'</td></tr>';
								
								$('#table_summary').append(html);
							});
	
				}, 
				error: function() {
					//   alert('Something went wrong');
				}   
			});
			}
			
		});*/
		
		
		$("#filter").click(function(e){
			var fromDate;
			var toDate;
			var userType;
			var orderType;
			var order_status;
			var disable="";
			var schedule_status="";
			
			if($('#userType').val()==null || $('#userType').val()=="" ){
				userType="null";
			}else{
				userType=$('#userType').val();
			}
			
			if($('#orderType').val()==null || $('#orderType').val()==""){
				orderType="null";
			}else{
				orderType=$('#orderType').val();
			}
			
			if($("#date_start").val()==""){
				fromDate="null";
				toDate="null";
			}else{
				var date = $("#date_start").val();
				var myarray = date.split('to');
				for(var z = 0; z < myarray.length; z++){
					fromDate = myarray[0];
					toDate = myarray[1];
				}
			}
			if(userType=="null" && orderType=="null" && fromDate=="null" && toDate=="null"){
				alert("Please select atleast one filter option to search!");
			}
			else{
			$.ajax({
				url: pageURL+"getFilterOrder",
				type: "GET",
				data: {
					"userType":userType,
					"orderType":orderType,
					"fromDate":fromDate,
					"toDate":toDate
				},
				dataType: 'json',
			success: function(data) { 
				if(data==""){
					$('#noData').css("display","block");
					$('#table_summary').empty();
				
				}else{
					$('#noData').css("display","none");
					//console.log("success"+data)
			$('#table_summary').empty().append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;background-color:#dadada">'+
					'<td style="width:100px;height:50px;padding-left: 10px;"><label>Date</label></td>'+
					'<td style="width:100px;height:50px;padding-left: 10px;"><label>Order Number</label></td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;"><label>No of items in order</label></td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;"><label>Subtotal Sales</label></td>'+
					//'<td style="width:150px;height:50px;padding-left: 10px;"><label>Base total Price</label></td>'+
					//'<td style="width:150px;height:50px;padding-left: 10px;"><label>Restaurant total Price</label></td>'+
					'<td style="width:100px;height:50px;padding-left: 10px;"><label>Tax</label></td>'+
					'<td style="width:100px;height:50px;padding-left: 10px;"><label>Tip</label></td>'+
					'<td style="width:100px;height:50px;padding-left: 10px;"><label>Delivery Charge</label></td>'+
					'<td style="width:100px;height:50px;padding-left: 10px;"><label>Total sales</label></td>'+
					'<td style="width:100px;height:50px;padding-left: 10px;"><label>Schedule</label></td>'+
					'<td style="width:100px;height:50px;padding-left: 10px;"><label>Order Status</label></td>'+
					'<td id="btncolumn" style="width:100px;height:50px;text-align: center;"><label>Update Status</label></td>'+
					'</tr>');
			
			$.each(data, function(key, value) {
				var schedule_status="";
				var len=data.length;
				console.log("OrderHeaderLength"+len);
				
				var len2=value["orderRestaurantMenus"].length;	
				console.log("orderRestaurantMenusLength"+len2);
				
				var len3=["orderRestaurant"].length;	
				console.log("orderRestaurant"+len3);

				for(y=0;y<len2; y++){
					if(value.orderHeader.schedule==true){
						 schedule_status="Scheduled";
					}
					if(value.orderHeader.schedule==false){
						 schedule_status="Non-scheduled";
					}
					if(value.orderHeader.orderStatus==1){
						order_status="Open";
						disable="";
					}
					if(value.orderHeader.orderStatus==2){
						order_status="Paid";
						disable="disabled";
					}
					
					if(value.orderHeader.orderStatus==0){
						order_status="Cancelled";
						disable="disabled";
					}
				html='<tr class="orderhid'+value.orderHeader.id+'" zipBustypeMerchantId="'+value.orderHeader.zipBustypeMerchantId+
				'" style="border:1px solid #dadada;margin-bottom: 1.1em;padding-left: 10px;">'+
				'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.orderDate+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.id+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurantMenus[y].quantity+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.subTotalSales+'</td>'+
				//'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.totalBase+'</td>'+
				//'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.totalRestaurant+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.taxSales+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.tip+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.deliveryCharge+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.totalSales+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;" value="'+value.orderHeader.schedule+'">'+schedule_status+'</td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;" id="status'+value.orderHeader.id+'" value="'+value.orderHeader.orderStatus+'">'+order_status+'</td>'+
				'<td id="btncolumn" style="width:100px;height:50px;text-align: center;"><button type="button" '+disable+' class="btn btn-primary" orderid="'+value.orderHeader.id+'"onclick="updateStatus(this.id)" tdid="status'+value.orderHeader.id+'" id="updatestatus'+value.orderHeader.id+'" '+
		    	'><span class="glyphicon glyphicon-edit"></span>Update Status</button></td></tr>';
				}
				
				$('#table_summary').append(html);
			});
			}
				$('#table_summary tr td').each(function (k, cellObj) {
                    this.setAttribute('title', cellObj.innerText);
                    this.setAttribute('data-toggle', "tooltip");
					this.setAttribute('data-placement', "top");
        });
			}, 
			error: function() {
			alert('Something went wrong');
			} 
			});
			}
			});
		
		
		$("#filter2").click(function(e){
			var fromDate;
			var toDate;
			var userType;
			var orderType;
			
			if($('#userType2').val()==null || $('#userType2').val()=="" ){
				userType="null";
			}else{
				userType=$('#userType2').val();
			}
			
			if($('#orderType2').val()==null || $('#orderType2').val()==""){
				orderType="null";
			}else{
				orderType=$('#orderType2').val();
			}
			
			if($("#date_start2").val()==""){
				fromDate="null";
				toDate="null";
			}else{
				var date = $("#date_start2").val();
				var myarray = date.split('to');
				for(var z = 0; z < myarray.length; z++){
					fromDate = myarray[0];
					toDate = myarray[1];
				}
			}
			if(userType=="null" && orderType=="null" && fromDate=="null" && toDate=="null"){
				alert("Please select atleast one filter option to search!");
			}
			else{
			$.ajax({
				url: pageURL+"getFilterOrder",
				type: "GET",
				data: {
					"userType":userType,
					"orderType":orderType,
					"fromDate":fromDate,
					"toDate":toDate
				},
				dataType: 'json',
			success: function(data) { 
					//console.log("success"+data)
			var html = '';	
			$('#table_report').empty().append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;background-color:#dadada">'+
			'<td style="width:150px;height:50px;padding-left: 10px;"><label>Date</label></td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;"><label>Order ID</label></td>'+
			//'<td style="width:150px;height:50px;padding-left: 10px;"><label>Restaurant ID</label></td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;"><label>Restaurant name</label></td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;"><label>Menu name</label></td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;"><label>Custom Price</label></td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;"><label>Base Price</label></td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;"><label>Restaurant Price</label></td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;"><label>Tax</label></td></tr>');

			
			$.each(data, function(index, value) {
				var len=data.length;
				console.log("OrderHeaderLength"+len);
				
				var len2=value["orderRestaurantMenus"].length;	
				console.log("orderRestaurantMenusLength"+len2);
				
				var len3=["orderRestaurant"].length;	
				console.log("orderRestaurant"+len3);

				for(y=0;y<len2; y++){

					var href = value.orderRestaurantMenus[y].menuName;
					console.log('menuName '+href);

					var salePriceMenu = value.orderRestaurantMenus[y].salePriceMenu;
					console.log('salePriceMenu '+salePriceMenu);

					var basePriceMenu = value.orderRestaurantMenus[y].basePriceMenu;
					console.log('basePriceMenu '+basePriceMenu);

					var restaurantPriceMenu = value.orderRestaurantMenus[y].restaurantPriceMenu;
					console.log('restaurantPriceMenu '+restaurantPriceMenu);

					var restaurantName = value.orderRestaurant.restaurantName;
					console.log('restaurantName '+restaurantName);

					var restaurantId = value.orderRestaurant.restaurantId;
					console.log('restaurantId '+restaurantId);

					var orderId = value.orderRestaurant.orderId;
					//console.log('orderId '+orderId);

					var deliveryCharge = value.orderHeader.deliveryCharge;
					//console.log(deliveryCharge);

					var orderDate = value.orderHeader.orderDate;
					//console.log('orderDate '+orderDate);

						html += '<tr id="'+value.orderRestaurant.orderId+'" '+
			'" style="border:1px solid #dadada;margin-bottom: 1.1em;padding-left: 10px;">'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.orderDate+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurant.orderId+'</td>'+
			//'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurant.restaurantId+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurant.restaurantName+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurantMenus[y].menuName+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurantMenus[y].salePriceMenu+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurantMenus[y].basePriceMenu+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurantMenus[y].restaurantPriceMenu+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurantMenus[y].salePriceTax+'</td></tr>';

				}
			});
			$('#table_report tr td').each(function (k, cellObj) {
                this.setAttribute('title', cellObj.innerText);
                this.setAttribute('data-toggle', "tooltip");
				this.setAttribute('data-placement', "top");
    });
			}, 
			error: function() {
			alert('Something went wrong');
			} 
			});
			}
			});
		
		$('#myModal_contactus').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});
		
		$('#myModal_createaccount').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});
		
		$('#myModal_add_restaurant').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});
		
		$('#myModal_edit_restaurant').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});
		
		$('#myModal_add_menu').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});
		
		$('#myModal_edit_menu').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});
		
		$('#myModal_add_section').on('hidden.bs.modal', function () {
				$('.modal-body').find('lable,input,textarea').val('');
		});

	$("#submit_login").click(function(e){
		var login_user=$("#login_user").val();
		var login_pass=$("#login_pass").val();
		//alert("zzz");
		$.ajax({
			url: "/delivery/login/autheticateMR",
			type: "GET",
			data: {"username":login_user, "password":login_pass},
			success: function(data) {
				console.log(data);
				//alert(data);
				if(data == "Password invalid"){
							$('#login_pass').css('border', '1px solid red');
						} else if(data == "User Name invalid"){
							$('#login_user').css('border', '1px solid red');
						} else {
							$('#login_pass').css('border', '');
							$('#login_user').css('border', '');
							var u_id;
							var u_fname;
							//var u_lname;
							//var u_email;
							//var u_phone;
							var myarray = data.split(',');
						   
							for(var k = 0; k < myarray.length; k++){
								u_id = (myarray[0]);
								u_fname = (myarray[1]);
								//u_lname = (myarray[2]);
								//u_email = (myarray[3]);
								//u_phone = (myarray[4]);				
							}
							$("#login").css("display","none");
							$("#register").css("display","none");
							$("#logged_in").css("display","block");
							$("#sign_out").css("display","block");
							$('#logged_in').html('<label class="btn" style="font-size:16px"><p class="fa fa-user-circle-o" style="font-size:16px"></p>'+' '+u_fname+'</label>');
							$('#hide_merchantid').text(u_id);
							$('#hide_merchantfname').text(u_fname);
							$("#portal").css("display","none");
							$("#welcome_portal").css("display","block");
							$("#myModal_login").modal('hide');
						}
						   
			}, 
			error: function() {
		//	   alert('Something went wrong');
			}
		});
	});
		
	
	$("#submit_registration").click(function(e){
			var firstname=$("#firstname").val();
			var lastname=$("#lastname").val();
			var email=$("#email").val();
			var phone=$("#phone").val();
			var password=$("#password").val();
			var confirm_password=$("#confirm_password").val();
			var address=$("#address").val();
			var city=$("#city").val();
			var state=$("#state").val();
			var zipcode=$("#zipcode").val();
	
			var jsonObj={ 
							"firstname":firstname,
							"lastname":lastname,
							"username":email,
							"phone":phone,
							"password":password,
							"address":address,
							"city":city,
							"state":state,
							"zip":zipcode
			};
			
			console.log(firstname);console.log(lastname);
			console.log(email);console.log(phone);
			console.log(password);console.log(address);
			console.log(city);console.log(state);console.log(zipcode);
		//	alert("testing");
						
			$.ajax({
				url: "/delivery/login/createmerchant",
				contentType: "application/json",
				type: "POST",
				data: JSON.stringify(jsonObj) ,
				dataType: 'json',
				success: function(data) {
					alert('Account created successfully');
		
					$('#logged_in').css("display", "block");
					$('#login').css("display", "none");	
					$('#register').css("display", "none");	
					$('#sign_out').css("display", "block");	 
					$('#profile_details').css("display", "block");
					$('#div_carousel').css("display", "none");	
					$('#logged_in').html('<p class="fa fa-user-circle-o" style="font-size:24px"></p>'+' '+firstname);
					$('#nameofuser').html(' '+email);
					$("#portal").css("display","none");
					$("#welcome_portal").css("display","block");
					$('#phone_delivery').val(phone);
					$('#name_delivery').val(firstname+" "+lastname);
					
				}, 
				error: function() {
			//		alert('Something went wrong create merchanat');
				}
			});
	});

$("#sign_out").click(function(e){
		
		;
		window.location.replace(pageURL);
	});

	$("#btn_restaurant").click(function(e){
	
	//$("#portal").css("display","none");
	$("#welcome_portal").css("display","none");
		$("#rest_page").css("display","block");
	var hide_merchantid=$("#hide_merchantid").text();
		   
		
	$.ajax({
       url: pageURL+"restaurants",
       type: "GET",
	   data: {"id":hide_merchantid},
       success: function(data) {
		   
		  $('#table_rest').empty().append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;background-color:#dadada">'+
		   '<td style="width:150px;height:40px;padding-top: 5px; padding-left: 10px;"><label>Name</label></td>'+
		   '<td style="width:150px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Manager name</label></td>'+
		   '<td style="width:200px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Email ID</label></td>'+
		   '<td style="width:150px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Phone no</label></td>'+
		   '<td style="width:150px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Address</label></td>'+
		   '<td style="width:150px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Menu</label></td>'+
		   '<td style="width:150px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Edit</label></td>'+
		   '<td style="width:150px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Delete</label></td></tr>');
		   
			$.each(data, function(key, value) {
			
				html='<tr id="'+value['id']+'" zipBustypeMerchantId="'+value['zipBustypeMerchantId']+'" style="border:1px solid #dadada;margin-bottom:1.1em">'+
				'<td style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+value['name']+'</td>'+
				'<td  style="width:100px;padding-left: 10px;">'+value['managerName']+'</td>'+
				'<td style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+ value['email']+'</td>'+
				'<td style="width:100px;padding-left: 10px;">'+ value['phone']+'</td>'+
				'<td style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+value['address']+'</td>'+
				'<td style="display:none">'+value['city']+'</td>'+
				'<td style="display:none">'+value['state']+'</td>'+
				'<td style="display:none">'+value['zip']+'</td>'+
				'<td style="display:none">'+value['tagLine']+'</td>'+
				'<td style="display:none">'+value['opencloseTime']+'</td>'+
				'<td style="display:none">'+value['timeRange']+'</td>'+
				'<td style="display:none">'+value['pricelevel']+'</td>'+
				'<td style="display:none">'+value['image']+'</td>'+
				'<td style="display:none">'+value['contractPercent']+'</td>'+
				'<td style="display:none">'+value['active']+
				'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn showhover" id="show_menu"'+
					'style="border-color:blue;background-color:white;color:blue;width:80px;">Menu</button></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn showhover" id="edit_details" '+
					'style="border-color:blue;background-color:white;color:blue;width:80px;">Edit</button></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn showhover" id="delete_restaurant"'+
					'style="border-color:red;background-color:white;color:red;width:80px;">Delete</button></td>'+
				'</tr>';
		
				
				$('#table_rest').append(html);
			});
            $('#table_rest tr td').each(function (k, cellObj) {
                        this.setAttribute('title', cellObj.innerText);
                        this.setAttribute('data-toggle', "tooltip");
						this.setAttribute('data-placement', "top");
            });
               			
		}, 
       error: function() {
    //       alert('Something went wrong');
       }
	   
   });
});


$('#table_rest').on('click', '#edit_details', function () {
	//alert('hi');	
				 var row = $(this).closest("tr");  
				 //alert(row);				 
				 var text1 = row.find("td:nth-child(1)").text(); 
				 var text2 = row.find("td:nth-child(2)").text(); 
				 var text3 = row.find("td:nth-child(3)").text();
				 var text4 = row.find("td:nth-child(4)").text(); 
				 var text5 = row.find("td:nth-child(5)").text();
				 var text6 = row.find("td:nth-child(6)").text(); 
				 var text7 = row.find("td:nth-child(7)").text();
				 var text8 = row.find("td:nth-child(8)").text(); 
				 var text9 = row.find("td:nth-child(9)").text();
				 var text10 = row.find("td:nth-child(10)").text(); 
				 var text11 = row.find("td:nth-child(11)").text();				 
				 var text12 = row.find("td:nth-child(12)").text();	
				 var text13 = row.find("td:nth-child(13)").text();				 
				 var text14 = row.find("td:nth-child(14)").text();	 
				 var text15 = row.find("td:nth-child(15)").text();				 
				 var text16 = row.find("td:nth-child(16)").text();	
				  console.log("text1 "+text1);
				  console.log("text2 "+text2);
				  console.log("text3 "+text3);
				  console.log("text4 "+text4);
				  console.log("text5 "+text5);
				  console.log("text6 "+text6);
				  console.log("text7 "+text7);
				  console.log("text8 "+text8);
				  console.log("text9 "+text9);
				  console.log("text10 "+text10);
				  console.log("text11 "+text11);
				  console.log("text12 "+text12);
				  console.log("text13 "+text13);
				  console.log("text14 "+text14);
				  console.log("text15 "+text15);
				  console.log("text16 "+text16);
				var	ID =$(this).closest('tr').attr('id');
				var	zip_ID =$(this).closest('tr').attr('zipBustypeMerchantId');	
				//alert(zip_ID);
				// alert(text2+" "+text3+" "+text4+" "+text5+" "+text6+" "+text7);
		
			$("#myModal_edit_restaurant").modal();	

				$("#rest_row").text(ID);
				$("#zipcode_row").text(zip_ID);
				$("#edit_restaurantname").val(text1);
				$("#edit_managername").val(text2);
				$("#edit_rest_email").val(text3);
				$("#edit_rest_phone").val(text4);
				
				$("#edit_rest_address").val(text5);
				$("#edit_rest_city").val(text6);
				$("#edit_rest_state").val(text7);
				$("#edit_rest_zip").val(text8);
				$("#edit_rest_tagline").val(text9);
				$("#edit_rest_openclosetime").val(text10);
				$("#edit_rest_timerange").val(text11);
				$("#edit_rest_pricelevel").val(text12);
				
				$("#edit_rest_image").val(text13);
				$("#edit_contractpercent").val(text14);
});

	$("#submit_edit_changes").click(function(e){
	
		edit_fill_rest();
	
		if(($("#edit_restaurantname").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_managername").css("border-color") === "rgb(255, 0, 0)") ||
		   ($("#edit_rest_email").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_rest_phone").css("border-color") === "rgb(255, 0, 0)") ||
		   ($("#edit_rest_tagline").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_rest_openclosetime").css("border-color") === "rgb(255, 0, 0)") || 
		   ($("#edit_rest_timerange").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_rest_pricelevel").css("border-color") === "rgb(255, 0, 0)") ||
		   ($("#edit_rest_address").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_rest_city").css("border-color") === "rgb(255, 0, 0)") || 
		   ($("#edit_rest_state").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_rest_zip").css("border-color") === "rgb(255, 0, 0)") || 
		   ($("#edit_rest_image").css("border-color") === "rgb(255, 0, 0)"))
			{
				edit_fill_rest();
			} else {
				var ID = $("#rest_row").text();
				var zip_ID = $("#hide_merchantid").text();
				var edit_restaurantname = $("#edit_restaurantname").val();
				var edit_managername = $("#edit_managername").val();
				var edit_rest_email = $("#edit_rest_email").val();
				var edit_rest_phone = $("#edit_rest_phone").val();
				var edit_rest_tagline =	$("#edit_rest_tagline").val();
				var	edit_rest_openclosetime = $("#edit_rest_openclosetime").val();
				var edit_rest_timerange = $("#edit_rest_timerange").val();
				var edit_rest_pricelevel = $("#edit_rest_pricelevel").val();
				var edit_rest_address =	$("#edit_rest_address").val();
				var edit_rest_city = $("#edit_rest_city").val();
				var edit_rest_state = $("#edit_rest_state").val();
				var edit_rest_zip =	$("#edit_rest_zip").val();
				var edit_rest_image = $("#edit_rest_image").val();
				var edit_contractpercent=$("#edit_contractpercent").val();
				
	            var  jsonObj={ 
					"id":ID,
					"name": edit_restaurantname,
					"managerName":edit_managername,
					"restEmail":edit_rest_email,
					"restPhone":edit_rest_phone,
					"address":edit_rest_address,
					"city":edit_rest_city,
					"state":edit_rest_state,
					"zip":edit_rest_zip,
					"image":edit_rest_image,
					"zipBustypeMerchantId":zip_ID,
					"tagLine":edit_rest_tagline,
					"opencloseTime":edit_rest_openclosetime,
					"timeRange":edit_rest_timerange,
					"pricelevel":edit_rest_pricelevel,
					"contractPercent":edit_contractpercent
										
				};
	                   
	//			alert("..Test me..");
						 
				$.ajax(
				{
	                    url: "/delivery/merchants/updateRestaurant",
						contentType: "application/json",
	                    type: "POST",
	                    data: JSON.stringify(jsonObj) ,
						dataType: 'json',
	                    success: function (data)
	                    {
	                 //       alert('success'+data);
							console.log(data);
					//		alert(ID);
						
		
					$('#'+ID).html('<td style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+edit_restaurantname+'</td>'+
						'<td style="width:100px;padding-left: 10px;">'+edit_managername+'</td>'+
						'<td style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+ edit_rest_email+'</td>'+
						'<td style="width:100px;padding-left: 10px;">'+ edit_rest_phone+'</td>'+
						'<td style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+edit_rest_address+'</td>'+
						'<td style="display:none">'+edit_rest_city+'</td>'+
						'<td style="display:none">'+edit_rest_state+'</td>'+
						'<td style="display:none">'+edit_rest_zip+'</td>'+
						'<td style="display:none">'+edit_rest_tagline+'</td>'+
						'<td style="display:none">'+edit_rest_openclosetime+'</td>'+
						'<td style="display:none">'+edit_rest_timerange+'</td>'+
						'<td style="display:none">'+edit_rest_pricelevel+'</td>'+
						'<td style="display:none">'+edit_rest_image+'</td>'+
						'<td style="display:none">'+edit_contractpercent+'</td>'+
						'<td style="display:none"></td>'+
						'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="show_menu"'+
							'style="border-color:blue;background-color:white;color:blue;width:80px;">Menu</button></td>'+
						'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="edit_details" '+
							'style="border-color:blue;background-color:white;color:blue;width:80px;">Edit</button></td>'+
						'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="delete_restaurant"'+
							'style="border-color:red;background-color:white;color:red;width:80px;">Delete</button></td></tr>');
				
				
							$("#myModal_edit_restaurant").modal('hide');	
	                    },
	                    error: function (err) {
	                        //alertify.error(err.statusText);
	                    }
				});						
			}		
	});
	
	
    $('#submit_add_rest').on('click', function () {
	   
		fill_rest();
		
		if(
			($("#restaurantname").css("border-color") === "rgb(255, 0, 0)") || ($("#managername").css("border-color") === "rgb(255, 0, 0)") ||
			($("#rest_email").css("border-color") === "rgb(255, 0, 0)") || ($("#rest_phone").css("border-color") === "rgb(255, 0, 0)") ||
			($("#rest_tagline").css("border-color") === "rgb(255, 0, 0)") || ($("#rest_openclosetime").css("border-color") === "rgb(255, 0, 0)") || 
			($("#rest_timerange").css("border-color") === "rgb(255, 0, 0)") || ($("#rest_pricelevel").css("border-color") === "rgb(255, 0, 0)") ||
			($("#rest_address").css("border-color") === "rgb(255, 0, 0)") || ($("#rest_city").css("border-color") === "rgb(255, 0, 0)") || 
			($("#rest_state").css("border-color") === "rgb(255, 0, 0)") || ($("#rest_zip").css("border-color") === "rgb(255, 0, 0)") || 
			($("#rest_image").css("border-color") === "rgb(255, 0, 0)")
		){
				fill_rest();
		} else {
				var count = $('#table_rest tr').length;
				var name= $("#restaurantname").val();
				var managername= $("#managername").val();
				var rest_email=$("#rest_email").val();
				var rest_phone=$("#rest_phone").val();
				var address=$("#rest_address").val();
				var city=$("#rest_city").val();
				var state=$("#rest_state").val();
				var zip=$("#rest_zip").val();
				var image=$("#rest_image").val();
				var tagLine=$("#rest_tagline").val();
				var opencloseTime=$("#rest_openclosetime").val();
				var timeRange=$("#rest_timerange").val();
				var pricelevel=$("#rest_pricelevel").val();
				var rest_contractpercent=$("#rest_contractpercent").val();
				
				var zip_ID=$("#hide_merchantid").text();
							
				var jsonObj = {
								"name": name,
								"managerName":managername,
								"restEmail":rest_email,
								"restPhone":rest_phone,
								
								"address":address,
								"city":city,
								"state":state,
								"zip":zip,
								
								"image":image,
								"tagLine":tagLine,
								"opencloseTime":opencloseTime,
								"timeRange":timeRange,
								"pricelevel":pricelevel,
						
								"zipBustypeMerchantId":zip_ID,
								"contractPercent":rest_contractpercent
				};				
									
				//var jsonObj = { "name": name};
					
			//	alert('hello123');
				$.ajax({	
					url:  "/delivery/merchants/addRestaurant",
					contentType: "application/json",
					type: "POST",
					data: JSON.stringify(jsonObj),
					dataType: 'json',
					success: function (data){
					//	alert('success'+data);
						console.log(data);
							
						$('#table_rest').last().append('<tr id="'+data+'" zipBustypeMerchantId="'+zip_ID+'" style="border:1px solid #dadada;margin-bottom:1.1em;">'+
						'<td style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+name+'</td>'+
						'<td style="width:100px;padding-left: 10px;">'+managername+'</td>'+
						'<td style="max-width: 150px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+ rest_email+'</td>'+
						'<td style="width:100px;padding-left: 10px;">'+ rest_phone+'</td>'+
						'<td style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+address+'</td>'+
						'<td style="display:none">'+city+'</td><td style="display:none">'+state+'</td><td style="display:none">'+zip+'</td>'+
						'<td style="display:none">'+tagLine+'</td>'+
						'<td style="display:none">'+opencloseTime+'</td>'+
						'<td style="display:none">'+timeRange+'</td>'+
						'<td style="display:none">'+pricelevel+'</td>'+
						'<td style="display:none">'+image+'</td>'+
						'<td style="display:none">'+rest_contractpercent+'</td>'+
						'<td style="display:none"></td>'+
						'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="show_menu"'+
							'style="border-color:blue;background-color:white;color:blue;width:80px;">Menu</button></td>'+
						'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="edit_details" '+
							'style="border-color:blue;background-color:white;color:blue;width:80px;">Edit</button></td>'+
						'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="delete_restaurant"'+
							'style="border-color:red;background-color:white;color:red;width:80px;">Delete</button></td></tr>');
			
						$("#myModal_add_restaurant").modal('hide');	
					},
					error: function (err) {
						//alert("Error");
						//alertify.error(err.statusText);
					}
				});	 
		}
    });
    
    $('#table_rest').on('click', '#delete_restaurant', function (){
		//$("#delete_restaurant").on('click', function(e) {
		var par = $(this).parent().parent();
		var ID =$(this).closest('tr').attr('id');
		$.ajax({
    	        url: "/delivery/merchants/deleteRestaurant",
    	        data: {"id":ID},
    	        type:'GET',
    	        cache:false,
    	        success:function(data){
					alert("Deleted successfully");
    	            console.log(data); 
    	            $('#'+ID).empty();
				},
    	        error:function(){
    	              //alert('error');
    	        }
		});
    });
		
	$('#table_menu').on('click', '#delete_menu', function (){
		//$("#delete_restaurant").on('click', function(e) {
		var par = $(this).parent().parent();
		var ID =$(this).closest('tr').attr('menuid');
		
		console.log('ID:'+ID);
		
		$.ajax({
			url: "/delivery/merchants/deleteMenu",
			data: {"id":ID},
			type:'GET',
			cache:false,
			success:function(data){
				alert("Deleted successfully");
				console.log(data); 
				$('#menuid'+ID).empty();
			},
			error:function(){
				//alert('error');
			}
		});
	});
	
	
	
	/*$('#table_menu').on('click', '#delete_menu', function (){
		   //$("#delete_restaurant").on('click', function(e) {
			    var par = $(this).parent().parent();
				var ID =$(this).closest('tr').attr('menuid');
		  $.ajax({
 	            url: "/delivery/merchants/deleteMenu",
 	            data: {"id":ID},
 	            type:'GET',
 	            cache:false,
 	            success:function(data){
						alert("Deleted successfully");
 	              console.log(data); 
					  $('#'+ID).empty();
					},
 	            error:function(){
 	              //alert('error');
 	            }
 	         });
		});*/
		
	$('#table_section').on('click', '#delete_section', function (){
		var par = $(this).parent().parent();
		var ID =$(this).closest('tr').attr('id');
		$.ajax({
    	     url: "/delivery/merchants/deleteMenuSection",
    	     data: {"id":ID},
    	     type:'GET',
    	     cache:false,
    	     success:function(data){
				alert("Deleted successfully");
    	        console.log(data); 
    	        $('#'+ID).empty();
			},
    	    error:function(){
    	         //alert('error');
    	    }
		});
	});
		
	
	$('#myModal_add_menu').on('change', 'input[type=checkbox]', function() {
		if($(this).attr("value")=="true"){
			$(this).attr("value","false");
		}else 
			if($(this).attr("value")=="false"){
			$(this).attr("value","true");
		}
		
		
		//alert("checked");
    });
	
	$('#myModal_edit_menu').on('change', 'input[type=checkbox]', function() {
		if($(this).attr("value")=="true"){
			$(this).attr("value","false");
		}else 
			if($(this).attr("value")=="false"){
			$(this).attr("value","true");
		}
		
		
		//alert("checked");
    });
	
	
	$("#go_to_welcome_pg").click(function(e){
		
		$("#rest_page").css("display","none");
	    $("#summary_page").css("display","none");
		$("#welcome_portal").css("display","block");
	});	

	$(".go_back").click(function(e){
		$("#report_page").css("display","none");
		$("#summary_page").css("display","none");
		$("#welcome_portal").css("display","block");
	});		

	$("#go_to_rest_pg").click(function(e){
		
		$("#menu_page").css("display","none");
		$("#rest_page").css("display","block");
	});		
	
	$('#table_rest').on('click', '#show_menu', function (){
		var	ID =$(this).closest('tr').attr('id');	
		$("#rest_page").css("display","none");
		$("#menu_page").css("display","block");
		$('#table_menu').empty();
		$('#rest_id').text(ID);
		var schedule_status,active_status,mon_s,tue_s,wed_s,thu_s,fri_s,sat_s,sun_s;
		$.ajax({
			url: "/delivery/merchants/menus",
			type: "GET",
			data: {"id":ID},
			success: function(data) {
				
				console.log('success:'+data);
				
				$('#table_menu').empty().append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;background-color:#dadada">'+
						'<td style="width:200px;height:40px;padding-top: 5px;text-align: center;"><label>Name</label></td>'+
						'<td style="width:290px;height:40px;padding-top: 5px;text-align: center;"><label>Description</label></td>'+
						'<td style="width:200px;height:40px;padding-top: 5px;text-align: center;text-align: center;"><label>Sales Price</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Mon</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Tue</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Wed</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Thu</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Fri</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Sat</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Sun</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Active</label></td>'+
						'<td style="width:50px;height:40px;padding-top: 5px;text-align: center;"><label>Schedule</label></td>'+
						'<td style="width:150px;height:40px;text-align: center;"><label>Edit</label></td>'+
						'<td style="width:150px;height:40px;text-align: center;"><label>Delete</label></td></tr>');
		   
				$.each(data, function(key, value) {
					
					console.log(key,value);
					console.log("active:"+value.active);
					
					if(value['schedule']==true){
						schedule_status='<span class="glyphicon glyphicon-ok"></span>';
					}
					else{
						schedule_status='<span class="glyphicon glyphicon-remove"></span>';
					}
					if(value['active']==true){
						active_status='<span class="glyphicon glyphicon-ok"></span>';
					}else{
						active_status='<span class="glyphicon glyphicon-remove"></span>';
					}
					if(value['mon']==true){
						mon_s='<span class="glyphicon glyphicon-ok"></span>';
					}else{
						mon_s='<span class="glyphicon glyphicon-remove"></span>';
					}
					if(value['tue']==true){
						tue_s='<span class="glyphicon glyphicon-ok"></span>';
					}else{
						tue_s='<span class="glyphicon glyphicon-remove"></span>';
					}
					if(value['wed']==true){
						wed_s='<span class="glyphicon glyphicon-ok"></span>';
					}else{
						wed_s='<span class="glyphicon glyphicon-remove"></span>';
					}
					if(value['thu']==true){
						thu_s='<span class="glyphicon glyphicon-ok"></span>';
					}else{
						thu_s='<span class="glyphicon glyphicon-remove"></span>';
					}
					if(value['fri']==true){
						fri_s='<span class="glyphicon glyphicon-ok"></span>';
					}else{
						fri_s='<span class="glyphicon glyphicon-remove"></span>';
					}
					if(value['sat']==true){
						sat_s='<span class="glyphicon glyphicon-ok"></span>';
					}else{
						sat_s='<span class="glyphicon glyphicon-remove"></span>';
					}
					if(value['sun']==true){
						sun_s='<span class="glyphicon glyphicon-ok"></span>';
					}else{
						sun_s='<span class="glyphicon glyphicon-remove"></span>';
					}
					
					
					html='<tr id="menuid'+value['id']+'"restid="'+ID+'" menuid="'+value['id']+'" restaurantBustypeId="'+ value['restaurantBustypeId']+
					'" style="border:1px solid #dadada;margin-bottom:1.1em">'+
				'<td style="width:100px;height:50px;display:none">'+value['groupMenuNumber']+'</td>'+
				'<td style="width:100px;display:none">'+ value['groupNumber']+'</td>'+
				'<td style="width:100px;display:none">'+ value['groupName']+'</td>'+
				'<td style="width:100px;padding-left: 10px;">'+value['name']+'</td>'+
				'<td style="max-width: 150px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+value['description']+'</td>'+
				'<td style="width:100px;padding-left: 10px;display:none">'+value['basePrice']+'</td>'+
				'<td style="width:100px;text-align: center;">'+value['salesPrice']+'</td>'+
				'<td style="width:100px;text-align: center;" mon="'+value['mon']+'">'+mon_s+'</td>'+
				'<td style="width:100px;text-align: center;" tue="'+value['tue']+'">'+tue_s+'</td>'+
				'<td style="width:100px;text-align: center;" wed="'+value['wed']+'">'+wed_s+'</td>'+
				'<td style="width:100px;text-align: center;" thu="'+value['thu']+'">'+thu_s+'</td>'+
				'<td style="width:100px;text-align: center;" fri="'+value['fri']+'">'+fri_s+'</td>'+
				'<td style="width:100px;text-align: center;" sat="'+value['sat']+'">'+sat_s+'</td>'+
				'<td style="width:100px;text-align: center;" sun="'+value['sun']+'">'+sun_s+'</td>'+
				'<td style="width:100px;padding-left: 10px;display:none">'+value['restaurantPrice']+'</td>'+
				'<td style="display:none">'+value['menuImage']+'</td>'+
				'<td style="width:100px;text-align: center;" active="'+value['active']+'">'+active_status+'</td>'+
				'<td style="width:100px;text-align: center;" schedule="'+value['schedule']+'">'+schedule_status+'</td>'+
				
				'<td style="width:100px;height:50px;text-align: center;"><button type="button" class="btn btn-primary" id="edit_menu" '+
			    	'><span class="glyphicon glyphicon-edit"></span> Edit</button></td>'+
				'<td style="width:100px;height:50px;text-align: center;"><button type="button" class="btn btn-primary" id="delete_menu"'+
					'><span class="glyphicon glyphicon-trash"></span> Delete</button></td></tr>';
					
						$('#table_menu').append(html);
					
					});
					$('#table_menu tr td').each(function (k, cellObj) {
                        this.setAttribute('title', cellObj.innerText);
                        this.setAttribute('data-toggle', "tooltip");
						this.setAttribute('data-placement', "top");
                    });		
			}, 
			error: function() {
			//   alert('Something went wrong');
			}
		});
	});
		

	$('#submit_add_menu').on('click', function () {
		var ID=$('#rest_id').text();
		//alert("rest_id"+ID);
		fill_menu();
		
		if(
			($("#groupNumber").css("border-color") === "rgb(255, 0, 0)") || ($("#groupName").css("border-color") === "rgb(255, 0, 0)") ||
			($("#groupMenuNumber").css("border-color") === "rgb(255, 0, 0)") || ($("#menu_name").css("border-color") === "rgb(255, 0, 0)") ||
			($("#description").css("border-color") === "rgb(255, 0, 0)") || ($("#menuImage").css("border-color") === "rgb(255, 0, 0)") || 
			($("#salesprice").css("border-color") === "rgb(255, 0, 0)")
		){
			fill_menu();
		} else {
			var name = $("#menu_name").val();
			var mon = $("#day1").val();
			var tue = $("#day2").val();
			var wed = $("#day3").val();
			var thu = $("#day4").val();
			var fri = $("#day5").val();
			var sat = $("#day6").val();
			var sun = $("#day7").val();
			
			var active=	$("#active").val();	
			var schedule=$("#schedule").val();	
			
			var salesprice	= $("#salesprice").val();
			alert(salesprice);
			var description = $("#description").val();
			var menuImage = $("#menuImage").val();
			
			var count = $('#table_menu tr').length;				
			var groupNumber = $("#groupNumber").val();
			var groupName = $("#groupName").val();
			var groupMenuNumber = $("#groupMenuNumber").val();
			var baseprice	= $("#baseprice").val();
			var restaurantprice	= $("#restaurantprice").val();
			var restaurantBustypeId;
			//var active;
				  		
			var jsonObj ={ 
					//"id":ID,
					"restaurantBustypeId":ID,
					"groupNumber": groupNumber,
					"groupName":groupName,
					"groupMenuNumber":groupMenuNumber,
					"name":name,
					"description":description,
					"menuImage":menuImage,
					"basePrice":baseprice,
					"salesPrice":salesprice,
					"restaurantPrice":restaurantprice,
					"active":active,
					"mon":mon,
					"tue":tue,
					"wed":wed,
					"thu":thu,
					"fri":fri,
					"sat":sat,
					"sun":sun,
					"schedule":schedule
			}; 
			var schedule_status,active_status,mon_s,tue_s,wed_s,thu_s,fri_s,sat_s,sun_s;
			console.log(JSON.stringify(jsonObj));						
			//alert("menu add test");			
			$.ajax({
	                    url:  "/delivery/merchants/addMenu",
						contentType: "application/json",
	                    type: "POST",
	                    data: JSON.stringify(jsonObj) ,
						dataType: 'json',
	                    success: function (data) {
	                      alert('success'+data);
							console.log("success:"+data);
			

							if(schedule=="true"){
								schedule_status='<span class="glyphicon glyphicon-ok"></span>';
							}
							else{
								schedule_status='<span class="glyphicon glyphicon-remove"></span>';
							}
							if(active=="true"){
								active_status='<span class="glyphicon glyphicon-ok"></span>';
							}else{
								active_status='<span class="glyphicon glyphicon-remove"></span>';
							}
							if(mon=="true"){
								mon_s='<span class="glyphicon glyphicon-ok"></span>';
							}else{
								mon_s='<span class="glyphicon glyphicon-remove"></span>';
							}
							if(tue=="true"){
								tue_s='<span class="glyphicon glyphicon-ok"></span>';
							}else{
								tue_s='<span class="glyphicon glyphicon-remove"></span>';
							}
							if(wed=="true"){
								wed_s='<span class="glyphicon glyphicon-ok"></span>';
							}else{
								wed_s='<span class="glyphicon glyphicon-remove"></span>';
							}
							if(thu=="true"){
								thu_s='<span class="glyphicon glyphicon-ok"></span>';
							}else{
								thu_s='<span class="glyphicon glyphicon-remove"></span>';
							}
							if(fri=="true"){
								fri_s='<span class="glyphicon glyphicon-ok"></span>';
							}else{
								fri_s='<span class="glyphicon glyphicon-remove"></span>';
							}
							if(sat="true"){
								sat_s='<span class="glyphicon glyphicon-ok"></span>';
							}else{
								sat_s='<span class="glyphicon glyphicon-remove"></span>';
							}
							if(sun=="true"){
								sun_s='<span class="glyphicon glyphicon-ok"></span>';
							}else{
								sun_s='<span class="glyphicon glyphicon-remove"></span>';
							}
							
							
							html='<tr id="menuid'+data+'"restid="'+ID+'" menuid="'+data+'" restaurantBustypeId="'+ ID+
							'" style="border:1px solid #dadada;margin-bottom:1.1em">'+
						'<td style="width:100px;height:50px;display:none">'+groupMenuNumber+'</td>'+
						'<td style="width:100px;display:none">'+groupNumber+'</td>'+
						'<td style="width:100px;display:none">'+groupName+'</td>'+
						'<td style="width:100px;padding-left: 10px;">'+name+'</td>'+
						'<td style="max-width: 150px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+description+'</td>'+
						'<td style="width:100px;padding-left: 10px;display:none">'+baseprice+'</td>'+
						'<td style="width:100px;text-align: center;">'+salesprice+'</td>'+
						'<td style="width:100px;text-align: center;" mon="'+mon+'">'+mon_s+'</td>'+
						'<td style="width:100px;text-align: center;" tue="'+tue+'">'+tue_s+'</td>'+
						'<td style="width:100px;text-align: center;" wed="'+wed+'">'+wed_s+'</td>'+
						'<td style="width:100px;text-align: center;" thu="'+thu+'">'+thu_s+'</td>'+
						'<td style="width:100px;text-align: center;" fri="'+fri+'">'+fri_s+'</td>'+
						'<td style="width:100px;text-align: center;" sat="'+sat+'">'+sat_s+'</td>'+
						'<td style="width:100px;text-align: center;" sun="'+sun+'">'+sun_s+'</td>'+
						'<td style="width:100px;padding-left: 10px;display:none">'+restaurantprice+'</td>'+
						'<td style="display:none">'+menuImage+'</td>'+
						'<td style="width:100px;text-align: center;" active="'+active+'">'+active_status+'</td>'+
						'<td style="width:100px;text-align: center;" schedule="'+schedule+'">'+schedule_status+'</td>'+
						
						'<td style="width:100px;height:50px;text-align: center;"><button type="button" class="btn btn-primary" id="edit_menu" '+
					    	'><span class="glyphicon glyphicon-edit"></span> Edit</button></td>'+
						'<td style="width:100px;height:50px;text-align: center;"><button type="button" class="btn btn-primary" id="delete_menu"'+
							'><span class="glyphicon glyphicon-trash"></span> Delete</button></td></tr>';
							
						$('#table_menu').append(html);
						$("#myModal_add_menu").modal('hide');
	                    },
	                    error: function (err){
	                        //alertify.error(err.statusText);
	                    }
			});		
		}		
	});
	
	$('#myModal_add_menu').on('hidden.bs.modal', function () {
		$('#myModal_add_menu .modal-body').find('input[type=checkbox]').attr('checked', false);
		$('#myModal_add_menu .modal-body').find('input[type=checkbox]').attr('value', false);
		/*$('#myModal_add_menu').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});*/
		//alert("fduydsf");
	});
	$('#myModal_edit_menu').on('hidden.bs.modal', function () {
		$('#myModal_edit_menu .modal-body').find('input[type=checkbox]').attr('checked', false);
		$('#myModal_edit_menu .modal-body').find('input[type=checkbox]').attr('value', false);
		/*$('#myModal_add_menu').on('hidden.bs.modal', function () {
			$('.modal-body').find('lable,input,textarea').val('');
		});*/
		//alert("fduydsf");
	});
	
	$("#dd_active_inactive").on('click', 'li', function () {
		var selText = $(this).text();
		$("#select_active_inactive").text(selText);
	});
	    
	$("#dd_active_inactive_edit").on('click', 'li', function () {
		var selText = $(this).text();
		$("#select_active_inactive_edit").text(selText);
	});
	           
	$('#table_menu').on('click', '#edit_menu', function () {
		
		var row = $(this).closest("tr"); 
		var	ID =$(this).closest('tr').attr('menuid');
		console.log("menuid "+ID);		
		//alert(row);				 
		var text1 = row.find("td:nth-child(1)").text(); 
		var text2 = row.find("td:nth-child(2)").text(); 
		var text3 = row.find("td:nth-child(3)").text();
		var text4 = row.find("td:nth-child(4)").text(); 
		var text5 = row.find("td:nth-child(5)").text();
		var text6 = row.find("td:nth-child(6)").text(); 
		var text7 = row.find("td:nth-child(7)").text();
		
		var text8 = row.find("td:nth-child(8)").attr("mon"); 
		var text9 = row.find("td:nth-child(9)").attr("tue"); 
		var text10 = row.find("td:nth-child(10)").attr("wed"); 
		var text11 = row.find("td:nth-child(11)").attr("thu"); 				 
		var text12 = row.find("td:nth-child(12)").attr("fri"); 
		var text13 = row.find("td:nth-child(13)").attr("sat"); 
		var text14 = row.find("td:nth-child(14)").attr("sun"); 
		var text15 = row.find("td:nth-child(15)").text();
		var text16 = row.find("td:nth-child(16)").text();
		var text17 = row.find("td:nth-child(17)").attr("active");
		var text18 = row.find("td:nth-child(18)").attr("schedule");
		
		console.log("text1 "+text1);
		console.log("text2 "+text2);
		console.log("text3 "+text3);
		console.log("text4 "+text4);
		console.log("text5 "+text5);
		console.log("text6 "+text6);
		console.log("text7 "+text7);
		console.log("text8 "+text8);
		console.log("text9 "+text9);
		console.log("text10 "+text10);
		console.log("text11 "+text11);
		console.log("text12 "+text12);
		console.log("text13 "+text13);
		console.log("text14 "+text14);
		console.log("text15 "+text15);
		console.log("text16 "+text16);
		console.log("text17 "+text17);
		console.log("text18 "+text18);
		
		$("#myModal_edit_menu").modal();	
		$("#hidemenuid").text(ID);
		$("#edit_menu_name").val(text4);
		if(text8=="true"){
			$("#edit_day1").prop("checked", true );
		}
		if(text9=="true"){
			$("#edit_day2").prop("checked", true );
		}
		if(text10=="true"){
			$("#edit_day3").prop("checked", true );
		}
		if(text11=="true"){
			$("#edit_day4").prop("checked", true );
		}
		if(text12=="true"){
			$("#edit_day5").prop("checked", true );
		}
		if(text13=="true"){
			$("#edit_day6").prop("checked", true );
		}
		if(text14=="true"){
			$("#edit_day7").prop("checked", true );
		}
		if(text17=="true"){
			$("#edit_active").prop("checked", true );
		}
		if(text18=="true"){
			$("#edit_schedule").prop("checked", true );
		}
		
		$("#edit_day1").val(text8);
		$("#edit_day2").val(text9);
		$("#edit_day3").val(text10);
		$("#edit_day4").val(text11);
		$("#edit_day5").val(text12);
		$("#edit_day6").val(text13);
		$("#edit_day7").val(text14);
		$("#edit_active").val(text17);
		$("#edit_schedule").val(text18);
		$("#edit_description").val(text5);
		$("#edit_menuImage").val(text16);
		$("#edit_baseprice").val(text6);
		$("#edit_salesprice").val(text7);
		console.log("SSS="+text10);

		var select=	$("#select_active_inactive_edit").text();
		console.log("select ="+select);
		if(text10=="Active"){
			$("#select_active_inactive_edit").text('Active');
		}else if(text10=="InActive"){
			$("#select_active_inactive_edit").text('InActive');
		}
		
		$("#active").val(text10);	
	});
	   
	  
	$("#submit_edit_menu").click(function(e){
		var id=$('#rest_id').text();
		//edit_fill_menu();
	
		if(
			($("#edit_groupNumber").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_groupName").css("border-color") === "rgb(255, 0, 0)") ||
	   		($("#edit_groupMenuNumber").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_menu_name").css("border-color") === "rgb(255, 0, 0)") ||
	   		($("#edit_description").css("border-color") === "rgb(255, 0, 0)") || ($("#edit_menuImage").css("border-color") === "rgb(255, 0, 0)") || 
	   		($("#edit_price").css("border-color") === "rgb(255, 0, 0)")
		){
			edit_fill_menu();
		} else {
			var	ID =$("#hidemenuid").text();
			var count = $('#table_menu tr').length;				
			var name = $("#edit_menu_name").val();
			var description = $("#edit_description").val();
			var menuImage = $("#edit_menuImage").val();
			var salesprice	= $("#edit_salesprice").val();
			var restaurantBustypeId;
			var active = $("#edit_active").val();
			var schedule = $("#edit_schedule").val();
			var mon=$("#edit_day1").val();
			var tue=$("#edit_day2").val();
			var wed=$("#edit_day3").val();
			var thu=$("#edit_day4").val();
			var fri=$("#edit_day5").val();
			var sat=$("#edit_day6").val();
			var sun=$("#edit_day7").val();
			var schedule_status,active_status,mon_s,tue_s,wed_s,thu_s,fri_s,sat_s,sun_s;
			if(schedule=="true"){
				schedule_status='<span class="glyphicon glyphicon-ok"></span>';
			}
			else{
				schedule_status='<span class="glyphicon glyphicon-remove"></span>';
			}
			if(active=="true"){
				active_status='<span class="glyphicon glyphicon-ok"></span>';
			}else{
				active_status='<span class="glyphicon glyphicon-remove"></span>';
			}
			if(mon=="true"){
				mon_s='<span class="glyphicon glyphicon-ok"></span>';
			}else{
				mon_s='<span class="glyphicon glyphicon-remove"></span>';
			}
			if(tue=="true"){
				tue_s='<span class="glyphicon glyphicon-ok"></span>';
			}else{
				tue_s='<span class="glyphicon glyphicon-remove"></span>';
			}
			if(wed=="true"){
				wed_s='<span class="glyphicon glyphicon-ok"></span>';
			}else{
				wed_s='<span class="glyphicon glyphicon-remove"></span>';
			}
			if(thu=="true"){
				thu_s='<span class="glyphicon glyphicon-ok"></span>';
			}else{
				thu_s='<span class="glyphicon glyphicon-remove"></span>';
			}
			if(fri=="true"){
				fri_s='<span class="glyphicon glyphicon-ok"></span>';
			}else{
				fri_s='<span class="glyphicon glyphicon-remove"></span>';
			}
			if(sat="true"){
				sat_s='<span class="glyphicon glyphicon-ok"></span>';
			}else{
				sat_s='<span class="glyphicon glyphicon-remove"></span>';
			}
			if(sun=="true"){
				sun_s='<span class="glyphicon glyphicon-ok"></span>';
			}else{
				sun_s='<span class="glyphicon glyphicon-remove"></span>';
			}
			var jsonObj = { 
				"id":ID,
				"restaurantBustypeId":id,
				//"groupNumber": groupNumber,
				//"groupName":groupName,
				//"groupMenuNumber":groupMenuNumber,
				"name":name,
				"description":description,
				"menuImage":menuImage,
				"salesPrice":salesprice,
				"active":active,
				"schedule":schedule,
				"mon":mon,
				"tue":tue,
				"wed":wed,
				"thu":thu,
				"fri":fri,
				"sat":sat,
				"sun":sun
			};
			//alert(price);
			console.log(jsonObj);
			$.ajax({
                url:"/delivery/merchants/updateMenu",
				contentType: "application/json",
                type: "POST",
                data: JSON.stringify(jsonObj) ,
				dataType: 'json',
                success: function (data) {
                //	alert('success'+data);
					console.log(data);
	
					
					$('#menuid'+ID).html(
					//		'<td style="width:100px;height:50px;display:none">'+groupMenuNumber+'</td>'+
					//'<td style="width:100px;display:none">'+groupNumber+'</td>'+
					//'<td style="width:100px;display:none">'+groupName+'</td>'+
					'<td style="width:100px;padding-left: 10px;">'+name+'</td>'+
					'<td style="max-width: 150px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+description+'</td>'+
					//'<td style="width:100px;padding-left: 10px;display:none">'+baseprice+'</td>'+
					'<td style="width:100px;text-align: center;">'+salesprice+'</td>'+
					'<td style="width:100px;text-align: center;" mon="'+mon+'">'+mon_s+'</td>'+
					'<td style="width:100px;text-align: center;" tue="'+tue+'">'+tue_s+'</td>'+
					'<td style="width:100px;text-align: center;" wed="'+wed+'">'+wed_s+'</td>'+
					'<td style="width:100px;text-align: center;" thu="'+thu+'">'+thu_s+'</td>'+
					'<td style="width:100px;text-align: center;" fri="'+fri+'">'+fri_s+'</td>'+
					'<td style="width:100px;text-align: center;" sat="'+sat+'">'+sat_s+'</td>'+
					'<td style="width:100px;text-align: center;" sun="'+sun+'">'+sun_s+'</td>'+
					//'<td style="width:100px;padding-left: 10px;display:none">'+restaurantprice+'</td>'+
					'<td style="display:none">'+menuImage+'</td>'+
					'<td style="width:100px;text-align: center;" active="'+active+'">'+active_status+'</td>'+
					'<td style="width:100px;text-align: center;" schedule="'+schedule+'">'+schedule_status+'</td>'+
					
					'<td style="width:100px;height:50px;text-align: center;"><button type="button" class="btn btn-primary" id="edit_menu" '+
				    	'><span class="glyphicon glyphicon-edit"></span> Edit</button></td>'+
					'<td style="width:100px;height:50px;text-align: center;"><button type="button" class="btn btn-primary" id="delete_menu"'+
						'><span class="glyphicon glyphicon-trash"></span> Delete</button></td>');
				
					$("#myModal_edit_menu").modal('hide');	
				},
                error: function () {
                        //alertify.error(err.statusText);
                }
			});					
	   }
	});
	
	$('#table_menu').on('click', '#go_to_section_pg', function () {
		var	ID =$(this).closest('tr').attr('menuid');
	//alert(ID);
		$("#section_page").css("display","block");
		$("#menu_page").css("display","none");
		$("#rest_page").css("display","none");
		$('#table_section').empty();
		$('#menu_id').text(ID);
	//alert("...Try ing..");
		$.ajax({
			url: "/delivery/merchants/sections",
	       	type: "GET",
		   	data: {"id":ID},
		   	dataType: "json",
	       	success: function(data) {
				//alert("hi");
				//console.log(data);
			/*	$('#table_section').append('<tr style="border:1px solid #dadada;height:35px"><td style="width:70px"></td><td style="width:200px"><label>Heading</label></td>'+
				'<td style="width:100px"><label>Option 1</label></td><td style="width:70px"><label>Price 1</label></td><br/>'+
				'<td style="width:100px"><label>Option 2</label></td><td style="width:70px"><label>Price 2</label></td><br/>'+
				'<td style="width:100px"><label>Option 3</label></td><td style="width:70px"><label>Price 3</label></td><br/>'+
				'<td style="width:100px"><label>Option 4</label></td><td style="width:70px"><label>Price 4</label></td><br/>'+
				'<td style="width:100px"><label>Option 5</label></td><td style="width:70px"><label>Price 5</label></td><br/>'+
				'<td style="width:100px"><label>Option 6</label></td><td style="width:70px"><label>Price 6</label></td></tr><br/>');
			*/
					
			    $('#table_section').empty().append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;background-color:#dadada">'+
				'<td style="width:150px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Heading</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Option 1</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Price 1</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Option 2</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Price 2</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Option 3</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Price 3</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Option 4</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Price 4</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Option 5</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Price 5</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Option 6</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Price 6</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Edit</label></td>'+
				'<td style="width:100px;height:40px;padding-top: 5px;padding-left: 10px;"><label>Delete</label></td></tr>');
		   
			   
				$.each(data, function(key, value) {
			/*		html='<tr style="border:1px solid #dadada" id="'+value['id']+'"><td><button type="button" id="edit_section" class="btn">Edit</button></td>'+
				'<td style="width:200px">'+value['sectionText']+'</td><td style="display:none">'+value['selectSection']+'</td>'+
				'<td style="width:100px">'+value['option1']+'</td><td style="width:70px">'+value['price1']+'</td><br/>'+
				'<td style="width:100px">'+value['option2']+'</td><td style="width:70px">'+value['price2']+'</td><br/>'+
				'<td style="width:100px">'+value['option3']+'</td><td style="width:70px">'+value['price3']+'</td><br/>'+
				'<td style="width:100px">'+value['option4']+'</td><td style="width:70px">'+value['price4']+'</td><br/>'+
				'<td style="width:100px">'+value['option5']+'</td><td style="width:70px">'+value['price5']+'</td><br/>'+
				'<td style="width:100px">'+value['option6']+'</td><td style="width:70px">'+value['price6']+'</td></tr>';
			*/	
						
					/*if(value['price6'] == "null" )
						{
						value['price6']
						}
						if(value['price6'] == "null" )
						{
						value['price6']
						}*/
					
			    html='<tr id="'+value['id']+'" style="border:1px solid #dadada;margin-bottom: 1.1em;">'+
				'<td style="max-width: 150px;height:50px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+value['sectionText']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['option1']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['price1']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['option2']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['price2']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['option3']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['price3']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['option4']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['price4']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['option5']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['price5']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['option6']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+value['price6']+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="edit_section" '+
					'style="border-color:blue;background-color:white;color:blue;width:80px;">Edit</button></td>'+
		        '<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="delete_section"'+
					'style="border-color:red;background-color:white;color:red;width:80px;">Delete</button></td></tr>';
					
					$('#table_section').append(html);
				});
				
                    $('#table_section tr td').each(function (k, cellObj) {
                        this.setAttribute('title', cellObj.innerText);
                        this.setAttribute('data-toggle', "tooltip");
						this.setAttribute('data-placement', "top");
                    });
			}, 
			error: function() {
	         //  alert('Something went wrong');
	       	}   
		});
	});
		
	$('#submit_add_section').on('click', function () {
		$("#section_page").css("display","block");
		$("#menu_page").css("display","none");
		$("#rest_page").css("display","none");
		
		var ID=$('#menu_id').text();
		var count = $('#table_section tr').length;	
			
		var select_section=	$("#select_section").text();	
		if(select_section=="Radio Button"){
			var type="R";
		} else if(select_section=="Checkbox"){
			var type="C";
		}
		
		var section_text1 = $("#section_text1").val();
		
		var type1 = $("#type1").val();
		var section_price1 = $("#section_price1").val();
		var type2 = $("#type2").val();
		var section_price2 = $("#section_price2").val();
		var type3 = $("#type3").val();
		var section_price3 = $("#section_price3").val();
		var type4 = $("#type4").val();
		var section_price4 = $("#section_price4").val();
		var type5 = $("#type5").val();
		var section_price5 = $("#section_price5").val();
		var type6 = $("#type6").val();
		var section_price6 = $("#section_price6").val();
		
		//alert(ID);
			  								
		var jsonObj ={
			//"id":"1",
		 	"menuId":ID,
			"selectSection": type,
			"sectionText": section_text1,
			"option1":type1,
			"option2":type2,
			"option3":type3,
			"option4":type4,
			"option5":type5,
			"option6":type6,
			"price1":section_price1,
			"price2":section_price2,
			"price3":section_price3,
			"price4":section_price4,
			"price5":section_price5,
			"price6":section_price6					
		};
		
	//	alert("section add test");			
		$.ajax({
	        url:  "/delivery/merchants/addMenuSection",
			contentType: "application/json",
	        type: "POST",
	        data: JSON.stringify(jsonObj) ,
			dataType: 'json',
	        success: function (data) {
	       //     alert('success'+data);
				
				
		/*		$('#table_section').append('<tr style="border:1px solid #dadada;height:35px" menuid="'+ID+'" id="'+data+'"><td><button type="button" id="edit_section" class="btn">Edit</button></td><td style="width:200px">'+section_text1+'</td>'+
				'<td style="width:100px">'+type1+'</td><td style="width:70px">'+section_price1+'</td><br/>'+
				'<td style="width:100px">'+type2+'</td><td style="width:70px">'+section_price2+'</td><br/>'+
				'<td style="width:100px">'+type3+'</td><td style="width:70px">'+section_price3+'</td><br/>'+
				'<td style="width:100px">'+type4+'</td><td style="width:70px">'+section_price4+'</td><br/>'+
				'<td style="width:100px">'+type5+'</td><td style="width:70px">'+section_price5+'</td><br/>'+
				'<td style="width:100px">'+type6+'</td><td style="width:70px">'+section_price6+'</td></tr><br/>');
			*/	
							
				$('#table_section').append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;"  menuid="'+ID+'" id="'+data+'">'+
				'<td style="max-width: 150px;height:50px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+section_text1+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+type1+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+section_price1+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+type2+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+section_price2+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+type3+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+section_price3+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+type4+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+section_price4+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+type5+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+section_price5+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+type6+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+section_price6+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="edit_section" '+
					'style="border-color:blue;background-color:white;color:blue;width:80px;">Edit</button></td>'+
		        '<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btn_hover" id="delete_section"'+
					'style="border-color:red;background-color:white;color:red;width:80px;">Delete</button></td></tr>');
		
				$("#myModal_add_section").modal('hide');
	        },
	        error: function (err){
				//alertify.error(err.statusText);
	        }
		});
	});			
				
	$("#go_to_menu_pg").click(function(e){
		
		$("#menu_page").css("display","block");
		$("#section_page").css("display","none");
	});		
	
		
	$("#dd_section").on('click', 'li', function () {
		// e.preventDefault(); 
		var selText = $(this).text();
		$("#select_section").text(selText);
	});
		
	$("#dd_section_edit").on('click', 'li', function () {
		 e.preventDefault(); 
		var selText = $(this).text();
		$("#select_section_edit").text(selText);
	});
	
	$('#table_section').on('click', '#edit_section', function () {
	 
		var ID =$(this).closest('tr').attr('id');
		var menu_ID =$("#menu_id").text();
		var par = $(this).parent().parent();

		var heading = par.children("td:nth-child(1)").text();
		
        var option1 = par.children("td:nth-child(2)").text();
        var price1  = par.children("td:nth-child(3)").text();
        var option2 = par.children("td:nth-child(4)").text();
		var price2  = par.children("td:nth-child(5)").text();
        var option3 = par.children("td:nth-child(6)").text();
        var price3  = par.children("td:nth-child(7)").text();
		var option4 = par.children("td:nth-child(8)").text();
        var price4  = par.children("td:nth-child(9)").text();
        var option5 = par.children("td:nth-child(10)").text();
		var price5  = par.children("td:nth-child(11)").text();
        var option6 = par.children("td:nth-child(12)").text();
        var price6  = par.children("td:nth-child(13)").text();

				  /*console.log("text1 "+text1);
				  console.log("text2 "+text2);
				  console.log("text3 "+text3);
				  console.log("text4 "+text4);
				  console.log("text5 "+text5);
				  console.log("text6 "+text6);
				  console.log("text7 "+text7);
				  console.log("text8 "+text8);
				  console.log("text9 "+text9);
				  console.log("text10 "+text10);
				  console.log("text11 "+text11);
				  console.log("text12 "+text12);*/
				  
		$("#myModal_edit_section").modal('show');
		 
		$("#section_row").text(ID);
		$("#edit_section_text1").val(heading);
		$("#edit_type1").val(option1);
		$("#edit_section_price1").val(price1);
		$("#edit_type2").val(option2);
		$("#edit_section_price2").val(price2);
		$("#edit_type3").val(option3);
		$("#edit_section_price3").val(price3);
		$("#edit_type4").val(option4);
		$("#edit_section_price4").val(price4);
		$("#edit_type5").val(option5);
		$("#edit_section_price5").val(price5);
		$("#edit_type6").val(option6);
		$("#edit_section_price6").val(price6);
	});
	
	 
	$("#submit_edit_section").click(function(e){
		
		var menu_ID =$("#menu_id").text();
		var ID= $("#section_row").text();
		var heading=$("#edit_section_text1").val();
		var select_section=$("#select_section").text();
		var option1= $("#edit_type1").val();
	 	var price1= $("#edit_section_price1").val();
		var option2= $("#edit_type2").val();
	 	var price2= $("#edit_section_price2").val();
	 	var option3= $("#edit_type3").val();
	 	var price3= $("#edit_section_price3").val();
	 	var option4= $("#edit_type4").val();
	 	var price4= $("#edit_section_price4").val();
	 	var option5= $("#edit_type5").val();
	 	var price5= $("#edit_section_price5").val();
	 	var option6= $("#edit_type6").val();
	 	var price6= $("#edit_section_price6").val();
	 	
		if(select_section=="Radio Button"){
			var type="R";
		} else if(select_section=="Checkbox"){
			var type="C";
		}
	 	
		var jsonObj ={ 
			"id":ID,
			"menuId":menu_ID,
			"selectSection": type,
			"sectionText": heading,
			"option1":option1,
			"option2":option2,
			"option3":option3,
			"option4":option4,
			"option5":option5,
			"option6":option6,
			"price1":price1,
			"price2":price2,
			"price3":price3,
			"price4":price4,
			"price5":price5,
			"price6":price6					
		};
		console.log(jsonObj);
		//	alert("Hello");
		$.ajax({		
            url:"/delivery/merchants/updateMenuSection",
			contentType: "application/json",
            type: "POST",
            data: JSON.stringify(jsonObj) ,
			dataType: 'json',
			success: function (data) {
			//	alert('success'+data);
				console.log(data);
						
			/*$('#'+ID).html('<td><button type="button" id="edit_section" class="btn">Edit</button></td><td>'+heading+'</td><br/>'+
				'<td>'+option1+'</td><td>'+price1+'</td><br/>'+
				'<td>'+option2+'</td><td>'+price2+'</td><br/>'+
				'<td>'+option3+'</td><td>'+price3+'</td><br/>'+
				'<td>'+option4+'</td><td>'+price4+'</td><br/>'+
				'<td>'+option5+'</td><td>'+price5+'</td><br/>'+
				'<td>'+option6+'</td><td>'+price6+'</td>');
			*/	
				
				$('#'+ID).html('<td style="max-width: 150px;height:50px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 10px;">'+heading+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+option1+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+price1+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+option2+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+price2+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+option3+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+price3+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+option4+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+price4+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+option5+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+price5+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+option6+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;">'+price6+'</td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btnhover" id="edit_section" '+
				'style="border-color:blue;background-color:white;color:blue;width:80px;">Edit</button></td>'+
		        '<td style="width:100px;height:50px;padding-left: 10px;"><button type="button" class="btn btnhover" id="delete_section"'+
				'style="border-color:red;background-color:white;color:red;width:80px;">Delete</button></td>');
		
				$("#myModal_edit_section").modal('hide');
			},
            error: function (err) {
                //alertify.error(err.statusText);
            }
		});		
	});
	
	$("#go_dates99").click(function(e){
		
		//$("#date_start1").on('change', function(e) {
		var date = $("#date_start").val();
		var myarray = date.split('to');
		var store_myrray1;
		var store_myrray2;
		for(var z = 0; z < myarray.length; z++){
			store_myrray1 = myarray[0];
			store_myrray2 = myarray[1];
		}
		console.log('dates: '+store_myrray1+' '+store_myrray2);
	
	
		var id=$("#hide_merchantid").text();
		$.ajax({
			url: pageURL+"orderHeaderBetweenDates",
			type: "GET",
			//data: {"id":id, "fromDate":store_myrray1, "toDate":store_myrray2},
			data: {"id":4, "fromDate":'2018-05-15', "toDate":'2018-08-28'},
			success: function(data) {   
			     
				
				$('#table_summary').empty().append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;background-color:#dadada">'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Date</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Order ID</label></td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;"><label>No of items in order</label></td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;"><label>Subtotal Sales</label></td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;"><label>Base total Price</label></td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;"><label>Restaurant total Price</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Tax</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Tip</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Delivery Charge</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Total sales</label></td></tr>');
			   
				$.each(data, function(key, value) {
					
					html='<tr id="'+value['id']+'" zipBustypeMerchantId="'+value['zipBustypeMerchantId']+
					'" style="border:1px solid #dadada;margin-bottom: 1.1em;padding-left: 10px;">'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['orderDate']+'</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['id']+'</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">No of items in order</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['subTotalSales']+'</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['totalBase']+'</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['totalRestaurant']+'</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['taxSales']+'</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['tip']+'</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['deliveryCharge']+'</td>'+
					'<td style="width:150px;height:50px;padding-left: 10px;">'+value['totalSales']+'</td></tr>';
					
					$('#table_summary').append(html);
				});
			}, 
			error: function() {
			//   alert('Something went wrong');
			}   
		});
	});
	
	$("#btn_summary_report").click(function(e){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10) {
		    dd = '0'+dd
		} 
		if(mm<10) {
		    mm = '0'+mm
		} 
		today = yyyy + '-' + mm + '-' + dd;
		//alert(today);
	
		$.ajax({
			url: pageURL+"getFilterOrder",
			type: "GET",
			data: {
				"userType":"null",
				"orderType":"null",
				"fromDate":today,
				"toDate":today
			},
			dataType: 'json',
		success: function(data) { 
			$("#welcome_portal").css("display","none");
			$("#summary_page").css("display","block");
			if(data==""){
				$('#noData').css("display","block");
				$('#table_summary').empty();
			
			}else{
				$('#noData').css("display","none");
				//console.log("success"+data)
		$('#table_summary').empty().append('<tr style="border:1px solid #dadada;margin-bottom: 1.1em;background-color:#dadada">'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Date</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Order Number</label></td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;"><label>No of items in order</label></td>'+
				'<td style="width:150px;height:50px;padding-left: 10px;"><label>Subtotal Sales</label></td>'+
				//'<td style="width:150px;height:50px;padding-left: 10px;"><label>Base total Price</label></td>'+
				//'<td style="width:150px;height:50px;padding-left: 10px;"><label>Restaurant total Price</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Tax</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Tip</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Delivery Charge</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Total sales</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Schedule</label></td>'+
				'<td style="width:100px;height:50px;padding-left: 10px;"><label>Order Status</label></td>'+
				'<td style="width:100px;height:50px;text-align: center;"><label>Update Status</label></td>'+
				'</tr>');
		
		
		
		$.each(data, function(key, value) {
			var schedule_status="";
			var len=data.length;
			console.log("OrderHeaderLength"+len);
			
			var len2=value["orderRestaurantMenus"].length;	
			console.log("orderRestaurantMenusLength"+len2);
			
			var len3=["orderRestaurant"].length;	
			console.log("orderRestaurant"+len3);

			for(y=0;y<len2; y++){
				if(value.orderHeader.schedule==true){
					 schedule_status="Scheduled";
				}
				if(value.orderHeader.schedule==false){
					 schedule_status="Non-scheduled";
				}
				if(value.orderHeader.orderStatus==1){
					order_status="Open";
					disable="";
				}
				if(value.orderHeader.orderStatus==2){
					order_status="Paid";
					disable="disabled";
				}
				
				if(value.orderHeader.orderStatus==0){
					order_status="Cancelled";
					disable="disabled";
				}
			html='<tr class="orderhid'+value.orderHeader.id+'" zipBustypeMerchantId="'+value.orderHeader.zipBustypeMerchantId+
			'" style="border:1px solid #dadada;margin-bottom: 1.1em;padding-left: 10px;">'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.orderDate+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.id+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderRestaurantMenus[y].quantity+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.subTotalSales+'</td>'+
			//'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.totalBase+'</td>'+
			//'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.totalRestaurant+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.taxSales+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.tip+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.deliveryCharge+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;">'+value.orderHeader.totalSales+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;" value="'+value.orderHeader.schedule+'">'+schedule_status+'</td>'+
			'<td style="width:150px;height:50px;padding-left: 10px;" id="status'+value.orderHeader.id+'" value="'+value.orderHeader.orderStatus+'">'+order_status+'</td>'+
			'<td style="width:100px;height:50px;text-align: center;"><button type="button" '+disable+' class="btn btn-primary" orderid="'+value.orderHeader.id+'"onclick="updateStatus(this.id)" tdid="status'+value.orderHeader.id+'" id="updatestatus'+value.orderHeader.id+'" '+
	    	'><span class="glyphicon glyphicon-edit"></span>Paid</button></td></tr>';
			}
			
			$('#table_summary').append(html);
		});
		}
		}, 
		error: function() {
		alert('Something went wrong');
		} 
		});
	});
	
	$("#btn_detailed_report").click(function(e){
		
		$("#welcome_portal").css("display","none");
		$("#report_page").css("display","block");
		});
	});
