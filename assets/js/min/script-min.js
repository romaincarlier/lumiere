(function(){var e;e=window.jQuery||window.Zepto||window.$,e.fn.fancySelect=function(t){var o,s;return null==t&&(t={}),s=e.extend({forceiOS:!1,includeBlank:!1,optionTemplate:function(e){return e.text()},triggerTemplate:function(e){return e.text()}},t),o=!!navigator.userAgent.match(/iP(hone|od|ad)/i),this.each(function(){var t,i,n,r,l,a,c;return r=e(this),r.hasClass("fancified")||"SELECT"!==r[0].tagName?void 0:(r.addClass("fancified"),r.css({width:1,height:1,display:"block",position:"absolute",top:0,left:0,opacity:0}),r.wrap('<div class="fancy-select">'),c=r.parent(),r.data("class")&&c.addClass(r.data("class")),c.append('<div class="trigger">'),(!o||s.forceiOS)&&c.append('<ul class="options">'),l=c.find(".trigger"),n=c.find(".options"),i=r.prop("disabled"),i&&c.addClass("disabled"),a=function(){var e;return e=s.triggerTemplate(r.find(":selected")),l.html(e)},r.on("blur.fs",function(){return l.hasClass("open")?setTimeout(function(){return l.trigger("close.fs")},120):void 0}),l.on("close.fs",function(){return l.removeClass("open"),n.removeClass("open")}),l.on("click.fs",function(){var t,a;if(!i)if(l.toggleClass("open"),o&&!s.forceiOS){if(l.hasClass("open"))return r.focus()}else if(l.hasClass("open")&&(a=l.parent(),t=a.offsetParent(),a.offset().top+a.outerHeight()+n.outerHeight()+20>e(window).height()+e(window).scrollTop()?n.addClass("overflowing"):n.removeClass("overflowing")),n.toggleClass("open"),!o)return r.focus()}),r.on("enable",function(){return r.prop("disabled",!1),c.removeClass("disabled"),i=!1,t()}),r.on("disable",function(){return r.prop("disabled",!0),c.addClass("disabled"),i=!0}),r.on("change.fs",function(e){return e.originalEvent&&e.originalEvent.isTrusted?e.stopPropagation():a()}),r.on("keydown",function(e){var t,o,s;if(s=e.which,t=n.find(".hover"),t.removeClass("hover"),n.hasClass("open")){if(38===s?(e.preventDefault(),t.length&&t.index()>0?t.prev().addClass("hover"):n.find("li:last-child").addClass("hover")):40===s?(e.preventDefault(),t.length&&t.index()<n.find("li").length-1?t.next().addClass("hover"):n.find("li:first-child").addClass("hover")):27===s?(e.preventDefault(),l.trigger("click.fs")):13===s||32===s?(e.preventDefault(),t.trigger("click.fs")):9===s&&l.hasClass("open")&&l.trigger("close.fs"),o=n.find(".hover"),o.length)return n.scrollTop(0),n.scrollTop(o.position().top-12)}else if(13===s||32===s||38===s||40===s)return e.preventDefault(),l.trigger("click.fs")}),n.on("click.fs","li",function(t){var s;return s=e(this),r.val(s.data("raw-value")),o||r.trigger("blur.fs").trigger("focus.fs"),n.find(".selected").removeClass("selected"),s.addClass("selected"),l.addClass("selected"),r.val(s.data("raw-value")).trigger("change.fs").trigger("blur.fs").trigger("focus.fs")}),n.on("mouseenter.fs","li",function(){var t,o;return o=e(this),t=n.find(".hover"),t.removeClass("hover"),o.addClass("hover")}),n.on("mouseleave.fs","li",function(){return n.find(".hover").removeClass("hover")}),t=function(){var t;return a(),!o||s.forceiOS?(t=r.find("option"),r.find("option").each(function(t,o){var i;return o=e(o),o.prop("disabled")||!o.val()&&!s.includeBlank?void 0:(i=s.optionTemplate(o),n.append(o.prop("selected")?'<li data-raw-value="'+o.val()+'" class="selected">'+i+"</li>":'<li data-raw-value="'+o.val()+'">'+i+"</li>"))})):void 0},r.on("update.fs",function(){return c.find(".options").empty(),t()}),t())})}}).call(this),jQuery(document).ready(function($){console.log("========================"),console.log("Document ready");var e=$(window),t=$(document).scrollTop(),o=$("body");$(".custom-select").fancySelect(),function(){function e(){var e=new google.maps.LatLng(0,0),t=overlay.getProjection(),s=t.fromLatLngToDivPixel(e),i=t.fromLatLngToContainerPixel(e),n=s.x-i.x-left,r=s.y-i.y-top,a=overlay.getSvg().cloneNode(!0),c=document.implementation.createDocument(),d=document.createElement("div"),f=c.createElement("svg"),u=o.getDiv(),p=u.clientWidth,v=u.clientHeight,h=[n,r,p,v].join(" "),m=self.URL||self.webkitURL||self,w,y;f.setAttribute("xmlns","http://www.w3.org/2000/svg"),f.setAttribute("width",p),f.setAttribute("height",v),f.setAttribute("viewBox",h),f.appendChild(a),d.appendChild(f);var b=l.getIcon(),C=c.createElement("path"),k=t.fromLatLngToDivPixel(l.getPosition());k.x-=b.scale*b.anchor.x+left,k.y-=b.scale*b.anchor.y+top,C.setAttribute("d",b.path),C.setAttribute("transform","translate("+k.x+","+k.y+") scale("+b.scale+")"),C.setAttribute("fill",b.fillColor),C.setAttribute("stroke",b.strokeColor),C.setAttribute("fill-opacity",b.fillOpacity),C.setAttribute("stroke-opacity",b.strokeOpacity),C.setAttribute("stroke-width",b.strokeWeight),C.setAttribute("vector-effect","non-scaling-stroke"),f.appendChild(C),w=new Blob([d.innerHTML],{type:"image/svg+xml;charset=utf-8"}),y=m.createObjectURL(w),console.log(y),g.src=y}if($("#map")[0]){for(var t=[{stylers:[{visibility:"simplified"}]},{stylers:[{color:"#121212"}]},{featureType:"water",stylers:[{color:"#121212"},{lightness:0}]},{featureType:"landscape",stylers:[{color:"#121212"},{lightness:35}]},{elementType:"labels.text.fill",stylers:[{visibility:"on"},{lightness:100}]}],o=new google.maps.Map(document.getElementById("map"),{zoom:3,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:t}),s=[],i=0;100>i;i++){var n=data.photos[i],r=new google.maps.LatLng(n.latitude,n.longitude),l=new google.maps.Marker({position:r,icon:"assets/img/zoom-0.png"});s.push(l)}var a={styles:[{height:40,url:"assets/img/zoom-1.png",width:40},{height:56,url:"assets/img/zoom-2.png",width:56},{height:66,url:"http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m3.png",width:66},{height:78,url:"http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m4.png",width:78},{height:90,url:"http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m5.png",width:90}]},c=new MarkerClusterer(o,s,a),d=$("#info_content");$(document).on("click",d,function(){$("#map-sidebar").toggleClass("off-canvas")}),google.maps.event.addListenerOnce(o,"tilesloaded",function(){infoWindow.open(o,l)}),infoWindow.open(o,l);var g=document.getElementById("canvas")}}();var s=$("#map-sidebar-slider");s.unslider({speed:500,delay:4e3,keys:!0,dots:!0}),function(){var e=$("#search-trigger"),t=$("#search-bar"),o=$("#navigation"),s=$("#content"),i=$("#search-field");e.click(function(){console.log("========================"),console.log("Search trigger clicked"),e.toggleClass("triggered"),o.add(s).toggleClass("make-room"),t.toggleClass("visible"),t.hasClass("visible")?i.focus():i.blur()})}();var i=$(".overview__slide").length,n=$(".overview__slide-container"),r=$(".overview__slide"),l,a=0;console.log(i,"slides"),$(".overview__controls .next").click(function(t){t.preventDefault();var o,s,r=a+1,l=a+2;switch(e.width()<480?(o=100,s="one"):e.width()<=1024?(o=50,s="two"):(o=33.33,s="three"),s){case"one":r==i?a=0:a++;break;case"two":r==i-1?a=0:a++;break;case"three":r==i-2?a=0:a++}console.log("$target_slide_index is",r),n.css({marginLeft:a*-o+"%"})})});