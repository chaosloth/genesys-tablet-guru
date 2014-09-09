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

(function(){function e(e){return e.AckExtension=function(){function r(t,n){e._debug(t,n)}var e,t=!1,n=-1;this.registered=function(t,n){e=n,r("AckExtension: executing registration callback")},this.unregistered=function(){r("AckExtension: executing unregistration callback"),e=null},this.incoming=function(e){var i=e.channel;if(i=="/meta/handshake")t=e.ext&&e.ext.ack,r("AckExtension: server supports acks",t);else if(t&&i=="/meta/connect"&&e.successful){var s=e.ext;s&&typeof s.ack=="number"&&(n=s.ack,r("AckExtension: server sent ack id",n))}return e},this.outgoing=function(i){var s=i.channel;return s=="/meta/handshake"?(i.ext||(i.ext={}),i.ext.ack=e&&e.ackEnabled!==!1,n=-1):t&&s=="/meta/connect"&&(i.ext||(i.ext={}),i.ext.ack=n,r("AckExtension: client sending ack id",n)),i}}}typeof define=="function"&&define.amd?define(["org/cometd"],e):e(org.cometd)})();