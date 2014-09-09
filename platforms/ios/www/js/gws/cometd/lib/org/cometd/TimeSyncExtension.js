/*
 * Copyright (c) 2010 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(){function e(e){return e.TimeSyncExtension=function(t){function a(e,t){n._debug(e,t)}var n,r=t&&t.maxSamples||10,i=[],s=[],o=0,u=0;this.registered=function(e,t){n=t,a("TimeSyncExtension: executing registration callback")},this.unregistered=function(){a("TimeSyncExtension: executing unregistration callback"),n=null,i=[],s=[]},this.incoming=function(e){var t=e.channel;if(t&&t.indexOf("/meta/")===0&&e.ext&&e.ext.timesync){var n=e.ext.timesync;a("TimeSyncExtension: server sent timesync",n);var f=(new Date).getTime(),l=(f-n.tc-n.p)/2,c=n.ts-n.tc-l;i.push(l),s.push(c),s.length>r&&(s.shift(),i.shift());var h=s.length,p=0,d=0;for(var v=0;v<h;++v)p+=i[v],d+=s[v];o=parseInt((p/h).toFixed()),u=parseInt((d/h).toFixed()),a("TimeSyncExtension: network lag",o,"ms, time offset with server",u,"ms",o,u)}return e},this.outgoing=function(t){var n=t.channel;return n&&n.indexOf("/meta/")===0&&(t.ext||(t.ext={}),t.ext.timesync={tc:(new Date).getTime(),l:o,o:u},a("TimeSyncExtension: client sending timesync",e.JSON.toJSON(t.ext.timesync))),t},this.getTimeOffset=function(){return u},this.getTimeOffsetSamples=function(){return s},this.getNetworkLag=function(){return o},this.getServerTime=function(){return(new Date).getTime()+u},this.getServerDate=function(){return new Date(this.getServerTime())},this.setTimeout=function(t,r){var i=r instanceof Date?r.getTime():0+r,s=i-u,o=s-(new Date).getTime();return o<=0&&(o=1),e.Utils.setTimeout(n,t,o)}}}typeof define=="function"&&define.amd?define(["org/cometd"],e):e(org.cometd)})();