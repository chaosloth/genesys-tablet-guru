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

(function(){function e(e){return e.COOKIE||(e.COOKIE={},e.COOKIE.set=function(e,t,n){throw"Abstract"},e.COOKIE.get=function(e){throw"Abstract"}),e.ReloadExtension=function(t){function f(t){if(i&&i.handshakeResponse!==null){c(t),i.cookiePath=o;var n=e.JSON.toJSON(i);r("Reload extension saving cookie value",n),e.COOKIE.set(s,n,{"max-age":u,path:o,expires:new Date((new Date).getTime()+u*1e3)})}}function l(e){return i.url==e.url}function c(e){e&&(typeof e.cookieMaxAge=="number"&&(u=e.cookieMaxAge),typeof e.cookieName=="string"&&(s=e.cookieName),typeof e.cookiePath=="string"&&(o=e.cookiePath))}var n,r,i=null,s="org.cometd.reload",o="/",u=5,a=!1;this.configure=c,this.registered=function(e,t){n=t,n.reload=f,r=n._debug},this.unregistered=function(){delete n.reload,n=null},this.outgoing=function(t){var o=t.channel;if(o=="/meta/handshake"){i={},i.url=n.getURL();var u=e.COOKIE.get(s);r("Reload extension found cookie value",u);if(u)try{var f=e.JSON.fromJSON(u);e.COOKIE.set(s,"",{"max-age":-1,path:f.cookiePath,expires:-1});if(f.handshakeResponse&&l(f))return r("Reload extension restoring state",f),setTimeout(function(){r("Reload extension replaying handshake response",f.handshakeResponse),i.handshakeResponse=f.handshakeResponse,i.transportType=f.transportType,i.reloading=!0;var e=n._mixin(!0,{},i.handshakeResponse,{ext:{reload:!0}});e.supportedConnectionTypes=[i.transportType],n.receive(e),r("Reload extension replayed handshake response",e)},0),a||(a=!0,n.startBatch()),null;r("Reload extension could not restore state",f)}catch(c){r("Reload extension error while trying to restore cookie",c)}}else o=="/meta/connect"&&(i.transportType||(i.transportType=t.connectionType,r("Reload extension tracked transport type",i.transportType)));return t},this.incoming=function(e){if(e.successful)switch(e.channel){case"/meta/handshake":i.handshakeResponse||(i.handshakeResponse=e,r("Reload extension tracked handshake response",e));break;case"/meta/disconnect":i=null;break;case"/meta/connect":a&&(n.endBatch(),a=!1);break;default:}return e},c(t)}}typeof define=="function"&&define.amd?define(["org/cometd"],e):e(org.cometd)})();