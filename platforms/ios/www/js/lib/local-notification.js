/*
    Copyright 2013-2014 appPlant UG

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

var LocalNotification=function(){this._defaults={message:"",title:"",autoCancel:!1,badge:0,id:"0",json:"",repeat:""}};LocalNotification.prototype={getDefaults:function(){return this._defaults},setDefaults:function(e){var t=this.getDefaults();for(var n in t)e[n]!==undefined&&(t[n]=e[n])},mergeWithDefaults:function(e){var t=this.getDefaults();for(var n in t)e[n]===undefined&&(e[n]=t[n]);return e},applyPlatformSpecificOptions:function(){var e=this._defaults;switch(device.platform){case"Android":e.icon="icon",e.smallIcon=null,e.ongoing=!1,e.led="FFFFFF",e.sound="TYPE_NOTIFICATION";break;case"iOS":e.sound="";break;case"WinCE":case"Win32NT":e.smallImage=null,e.image=null,e.wideImage=null}return e},createCallbackFn:function(e,t){return function(){typeof e=="function"&&e.apply(t||this,arguments)}},add:function(options){var options=this.mergeWithDefaults(options),callbackFn=null;return options.id&&(options.id=options.id.toString()),options.date===undefined&&(options.date=new Date),typeof options.date=="object"&&(options.date=Math.round(options.date.getTime()/1e3)),["WinCE","Win32NT"].indexOf(device.platform)&&(callbackFn=function(cmd){eval(cmd)}),cordova.exec(callbackFn,null,"LocalNotification","add",[options]),options.id},cancel:function(e,t,n){var e=e.toString(),r=this.createCallbackFn(t,n);cordova.exec(r,null,"LocalNotification","cancel",[e])},cancelAll:function(e,t){var n=this.createCallbackFn(e,t);cordova.exec(n,null,"LocalNotification","cancelAll",[])},getScheduledIds:function(e,t){var n=this.createCallbackFn(e,t);cordova.exec(n,null,"LocalNotification","getScheduledIds",[])},isScheduled:function(e,t,n){var e=e.toString(),r=this.createCallbackFn(t,n);cordova.exec(r,null,"LocalNotification","isScheduled",[e])},onadd:function(e,t,n){},ontrigger:function(e,t,n){},onclick:function(e,t,n){},oncancel:function(e,t,n){}};var plugin=new LocalNotification,channel=require("cordova/channel");channel.deviceready.subscribe(function(){cordova.exec(null,null,"LocalNotification","deviceready",[])}),channel.onCordovaReady.subscribe(function(){channel.onCordovaInfoReady.subscribe(function(){device.platform=="Android"&&(channel.onPause.subscribe(function(){cordova.exec(null,null,"LocalNotification","pause",[])}),channel.onResume.subscribe(function(){cordova.exec(null,null,"LocalNotification","resume",[])}),cordova.exec(null,null,"LocalNotification","resume",[])),plugin.applyPlatformSpecificOptions()})}),module.exports=plugin;