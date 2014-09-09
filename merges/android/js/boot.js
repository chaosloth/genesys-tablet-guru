require.config({
	baseUrl: 'js',
	paths : {
		'domReady' : 'lib/domReady',
		'jquery' : 'lib/jquery-2.1.0.min',
		'jquery.mobile.config' : 'lib/jqm/jquery.mobile.config',
		'jquery.mobile' : 'lib/jqm/jquery.mobile-1.4.2.min',
		'fastclick' : 'lib/fastclick',
		'eventemitter' : 'lib/EventEmitter',
		'handlebar' : 'lib/handlebars-v1.3.0',
		'underscore' : 'lib/underscore-min',
		'grtc' : 'lib/grtc'
	},
	shim : {
		'jquery' : {
			exports: '$'
        },
        'jquery.mobile.config' : ['jquery'],
		'jquery.mobile' : ['jquery','jquery.mobile.config'],
		'jquery.cometd' : ['jquery'],
		'handlebar' : { 
			exports : 'Handlebars'
		},
		'underscore' : {
			deps:["jquery"],
			exports : '_'
		},
		'grtc' : ['jquery']
	},
	packages : ['app','gws','store','genesys'],
});

require( [ 'domReady', "infrastructure" ], 
function (domReady) { 
	domReady(function () {
		console.log("The DOM is ready - waiting for the device");
    	document.addEventListener("deviceready", startWhenReady, false);
    });	
});

function startWhenReady() {
	require( [ "app" ], 
	function ( app ) { 
		app.initialize();
		
		setTimeout(function() {
			navigator.splashscreen.hide();
		}, 2000);
		
	}); 
}