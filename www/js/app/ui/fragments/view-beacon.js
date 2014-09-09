define(
	['underscore','jquery','gws','app/config','jquery.mobile'],
	function(_,$,gws,config){
		$( document ).on('pageshow','#main-page',function(){
			
			// $('#walkin-tab-1').click();
		
			// gws.ixn.on("interaction.submitted.success", function(data) {
			// 	$.mobile.loading('hide');
			// 	$("#formMessage").val("Interaction submitted");
			// });
			
			// gws.ixn.on("interaction.submitted.error", function(data) {
			// 	$.mobile.loading('hide');
			// 	$("#formMessage").val("Error occurred");
	
			// });
	
			// $('#btnWalkinReset').click(function() {
			// 	$('#formWalkin')[0].reset();
			// 	$("#btnWalkinCreate").button('enable');
			// 	$("#formMessage").val('Not Submitted');
			// });
	
			// $('#btnWalkinCreate').click(function() {
			// 	$.mobile.loading('show');
			// 	$("#btnWalkinCreate").button('disable');
			// 	var formData = $('#formWalkin').serializeArray();
			// 	var data = {};
			// 	_.each(formData, function(obj) { data[obj.name] = obj.value });
			// 	gws.ixn.createWorkitemInteraction("Inbound", "InboundNew", config.IXN_INBOUND_QUEUE, data);
			});
		
		});
});