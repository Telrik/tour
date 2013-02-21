/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(f,b,g){var a=/\+/g;function e(h){return h}function c(h){return decodeURIComponent(h.replace(a," "))}var d=f.cookie=function(p,o,u){if(o!==g){u=f.extend({},d.defaults,u);if(o===null){u.expires=-1}if(typeof u.expires==="number"){var q=u.expires,s=u.expires=new Date();s.setDate(s.getDate()+q)}o=d.json?JSON.stringify(o):String(o);return(b.cookie=[encodeURIComponent(p),"=",d.raw?o:encodeURIComponent(o),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join(""))}var h=d.raw?e:c;var r=b.cookie.split("; ");for(var n=0,k=r.length;n<k;n++){var m=r[n].split("=");if(h(m.shift())===p){var j=h(m.join("="));return d.json?JSON.parse(j):j}}return null};d.defaults={};f.removeCookie=function(i,h){if(f.cookie(i)!==null){f.cookie(i,null,h);return true}return false}})(jQuery,document);
/* ===========================================================
 * Tweet Feed Plugin 
 * Bootstrap Date Picker Plugin
 * =========================================================== */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(a){a.fn.tweet=function(d){var r=a.extend({username:null,list:null,favorites:false,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:true,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:" I said, ",auto_join_text_ed:" I ",auto_join_text_ing:" I am ",auto_join_text_reply:" I replied to ",auto_join_text_url:" I was looking at ",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"search.twitter.com",template:"{avatar}{time}{join} {text}",comparator:function(s,o){return o.tweet_time-s.tweet_time},filter:function(o){return true}},d);var b=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;function n(t,u){if(typeof t==="string"){var o=t;for(var s in u){var v=u[s];o=o.split("{"+s+"}").join(v===null?"":v)}return o}else{return t(u)}}a.extend({tweet:{t:n}});function g(s,o){return function(){var t=[];this.each(function(){t.push(this.replace(s,o))});return a(t)}}function m(o){return o.replace(/</g,"&lt;").replace(/>/g,"^&gt;")}a.fn.extend({linkUser:g(/(^|[\W])@(\w+)/gi,'$1<span class="at">@</span><a href="http://'+r.twitter_url+'/$2">$2</a>'),linkHash:g(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+r.twitter_search_url+"/search?q=&tag=$1&lang=all"+((r.username&&r.username.length==1&&!r.list)?"&from="+r.username.join("%2BOR%2B"):"")+'" class="tweet_hashtag">#$1</a>'),makeHeart:g(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")});function f(s,o){return s.replace(b,function(v){var u=(/^[a-z]+:/i).test(v)?v:"http://"+v;var x=v;for(var w=0;w<o.length;++w){var t=o[w];if(t.url==u&&t.expanded_url){u=t.expanded_url;x=t.display_url;break}}return'<a href="'+m(u)+'">'+m(x)+"</a>"})}function l(o){return Date.parse(o.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))}function q(o){var t=function(v){return parseInt(v,10)};var s=new Date();var u=t((s.getTime()-o)/1000);if(u<1){u=0}return{days:t(u/86400),hours:t(u/3600),minutes:t(u/60),seconds:t(u)}}function c(o){if(o.days>2){return"about "+o.days+" days ago"}if(o.hours>24){return"about a day ago"}if(o.hours>2){return"about "+o.hours+" hours ago"}if(o.minutes>45){return"about an hour ago"}if(o.minutes>2){return"about "+o.minutes+" minutes ago"}if(o.seconds>1){return"about "+o.seconds+" seconds ago"}return"just now"}function i(o){if(o.match(/^(@([A-Za-z0-9-_]+)) .*/i)){return r.auto_join_text_reply}else{if(o.match(b)){return r.auto_join_text_url}else{if(o.match(/^((\w+ed)|just) .*/im)){return r.auto_join_text_ed}else{if(o.match(/^(\w*ing) .*/i)){return r.auto_join_text_ing}else{return r.auto_join_text_default}}}}}function e(){var s=("https:"==document.location.protocol?"https:":"http:");var o=(r.fetch===null)?r.count:r.fetch;var u="&callback=?";if(r.list){return s+"//"+r.twitter_api_url+"/1/"+r.username[0]+"/lists/"+r.list+"/statuses.json?page="+r.page+"&per_page="+o+u}else{if(r.favorites){return s+"//"+r.twitter_api_url+"/1/favorites.json?screen_name="+r.username[0]+"&page="+r.page+"&count="+o+u}else{if(r.query===null&&r.username.length==1){return s+"//"+r.twitter_api_url+"/1/statuses/user_timeline.json?screen_name="+r.username[0]+"&count="+o+(r.retweets?"&include_rts=1":"")+"&page="+r.page+u}else{var t=(r.query||"from:"+r.username.join(" OR from:"));return s+"//"+r.twitter_search_url+"/search.json?&q="+encodeURIComponent(t)+"&rpp="+o+"&page="+r.page+u}}}}function p(o,s){if(s){return("user" in o)?o.user.profile_image_url_https:p(o,false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/")}else{return o.profile_image_url||o.user.profile_image_url}}function k(s){var t={};t.item=s;t.source=s.source;t.screen_name=s.from_user||s.user.screen_name;t.name=s.from_user_name||s.user.name;t.retweet=typeof(s.retweeted_status)!="undefined";t.tweet_time=l(s.created_at);t.join_text=r.join_text=="auto"?i(s.text):r.join_text;t.tweet_id=s.id_str;t.twitter_base="http://"+r.twitter_url+"/";t.user_url=t.twitter_base+t.screen_name;t.tweet_url=t.user_url+"/status/"+t.tweet_id;t.reply_url=t.twitter_base+"intent/tweet?in_reply_to="+t.tweet_id;t.retweet_url=t.twitter_base+"intent/retweet?tweet_id="+t.tweet_id;t.favorite_url=t.twitter_base+"intent/favorite?tweet_id="+t.tweet_id;t.retweeted_screen_name=t.retweet&&s.retweeted_status.user.screen_name;t.tweet_relative_time=c(q(t.tweet_time));t.entities=s.entities?(s.entities.urls||[]).concat(s.entities.media||[]):[];t.tweet_raw_text=t.retweet?("RT @"+t.retweeted_screen_name+" "+s.retweeted_status.text):s.text;t.tweet_text=a([f(t.tweet_raw_text,t.entities)]).linkUser().linkHash()[0];t.retweeted_tweet_text=a([f(s.text,t.entities)]).linkUser().linkHash()[0];t.tweet_text_fancy=a([t.tweet_text]).makeHeart()[0];t.avatar_size=r.avatar_size;t.avatar_url=p(t.retweet?s.retweeted_status:s,(document.location.protocol==="https:"));t.avatar_screen_name=t.retweet?t.retweeted_screen_name:t.screen_name;t.avatar_profile_url=t.twitter_base+t.avatar_screen_name;t.user=n('<a class="tweet_user" href="{user_url}">{screen_name}</a>',t);t.join=r.join_text?n('<span class="tweet_join">{join_text}</span>',t):"";t.avatar=t.avatar_size?n('<a class="tweet_avatar" href="{avatar_profile_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{avatar_screen_name}\'s avatar" title="{avatar_screen_name}\'s avatar" border="0"/></a>',t):"";t.time=n('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',t);t.text=n('<span class="tweet_text">{tweet_text_fancy}</span>',t);t.retweeted_text=n('<span class="tweet_text">{retweeted_tweet_text}</span>',t);t.reply_action=n('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',t);t.retweet_action=n('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',t);t.favorite_action=n('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',t);return t}function h(s,t){var o=a('<ul class="tweet_list">');o.append(a.map(t,function(u){return"<li>"+n(r.template,u)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");a(s).empty().append(o);if(r.intro_text){o.before('<p class="tweet_intro">'+r.intro_text+"</p>")}if(r.outro_text){o.after('<p class="tweet_outro">'+r.outro_text+"</p>")}a(s).trigger("loaded").trigger((t.length===0?"empty":"full"));if(r.refresh_interval){window.setTimeout(function(){a(s).trigger("tweet:load")},1000*r.refresh_interval)}}function j(o){var s=a('<p class="loading">'+r.loading_text+"</p>");if(r.loading_text){a(o).not(":has(.tweet_list)").empty().append(s)}a.getJSON(e(),function(t){var u=a.map(t.results||t,k);u=a.grep(u,r.filter).sort(r.comparator).slice(0,r.count);a(o).trigger("tweet:retrieved",[u])})}return this.each(function(o,s){if(r.username&&typeof(r.username)=="string"){r.username=[r.username]}a(s).unbind("tweet:render").unbind("tweet:retrieved").unbind("tweet:load").bind({"tweet:load":function(){j(s)},"tweet:retrieved":function(t,u){a(s).trigger("tweet:render",[u])},"tweet:render":function(t,u){h(a(s),u)}}).trigger("tweet:load")})}}));(function(a){a.fn.quicksand=function(e,b){var d={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",adjustWidth:"auto",useScaling:false,enhancement:function(f){},selector:"> *",atomic:false,dx:0,dy:0,maxWidth:0,retainExisting:true};a.extend(d,b);if(a.browser.msie||(typeof(a.fn.scale)=="undefined")){d.useScaling=false}var c;if(typeof(arguments[1])=="function"){c=arguments[1]}else{if(typeof(arguments[2]=="function")){c=arguments[2]}}return this.each(function(y){var E;var B=[];var k;if(typeof(d.attribute)=="function"){k=a(e)}else{k=a(e).filter("["+d.attribute+"]").clone()}var C=a(this);var j=a(this).css("height");var t=a(this).css("width");var q,o;var l=false;var D=false;var m=a(C).offset();var n=[];var A=a(this).find(d.selector);var x=a(A).innerWidth();if(a.browser.msie&&parseInt(a.browser.version,10)<7){C.html("").append(k);return}var p=0;var u=function(){a(this).css("margin","").css("position","").css("top","").css("left","").css("opacity","");if(!p){p=1;if(!d.atomic){var F=C.find(d.selector);if(!d.retainExisting){C.prepend(v.find(d.selector));F.remove()}else{var i=a([]);v.find(d.selector).each(function(G){var H=a([]);if(typeof(d.attribute)=="function"){var I=d.attribute(a(this));F.each(function(){if(d.attribute(this)==I){H=a(this);return false}})}else{H=F.filter("["+d.attribute+'="'+a(this).attr(d.attribute)+'"]')}if(H.length>0){i=i.add(H);if(G===0){C.prepend(H)}else{H.insertAfter(C.find(d.selector).get(G-1))}}});F.not(i).remove()}if(l){C.css("height",q)}if(D){C.css("width",t)}}d.enhancement(C);if(typeof c=="function"){c.call(this)}}if(false===d.adjustHeight){C.css("height","auto")}if(false===d.adjustWidth){C.css("width","auto")}};var z=C.offsetParent();var w=z.offset();if(z.css("position")=="relative"){if(z.get(0).nodeName.toLowerCase()!="body"){w.top+=(parseFloat(z.css("border-top-width"))||0);w.left+=(parseFloat(z.css("border-left-width"))||0)}}else{w.top-=(parseFloat(z.css("border-top-width"))||0);w.left-=(parseFloat(z.css("border-left-width"))||0);w.top-=(parseFloat(z.css("margin-top"))||0);w.left-=(parseFloat(z.css("margin-left"))||0)}if(isNaN(w.left)){w.left=0}if(isNaN(w.top)){w.top=0}w.left-=d.dx;w.top-=d.dy;C.css("height",a(this).height());C.css("width",a(this).width());A.each(function(F){n[F]=a(this).offset()});a(this).stop();var s=0;var r=0;A.each(function(F){a(this).stop();var G=a(this).get(0);if(G.style.position=="absolute"){s=-d.dx;r=-d.dy}else{s=d.dx;r=d.dy}G.style.position="absolute";G.style.margin="0";if(!d.adjustWidth){G.style.width=(x+"px")}G.style.top=(n[F].top-parseFloat(G.style.marginTop)-w.top+r)+"px";G.style.left=(n[F].left-parseFloat(G.style.marginLeft)-w.left+s)+"px";if(d.maxWidth>0&&n[F].left>d.maxWidth){G.style.display="none"}});var v=a(C).clone();var g=v.get(0);g.innerHTML="";g.setAttribute("id","");g.style.height="auto";g.style.width=C.width()+"px";v.append(k);v.insertBefore(C);v.css("opacity",0);g.style.zIndex=-1;g.style.margin="0";g.style.position="absolute";g.style.top=m.top-w.top+"px";g.style.left=m.left-w.left+"px";if(d.adjustHeight==="dynamic"){C.animate({height:v.height()},d.duration,d.easing)}else{if(d.adjustHeight==="auto"){q=v.height();if(parseFloat(j)<parseFloat(q)){C.css("height",q)}else{l=true}}}if(d.adjustWidth==="dynamic"){C.animate({width:v.width()},d.duration,d.easing)}else{if(d.adjustWidth==="auto"){o=v.width();if(parseFloat(t)<parseFloat(o)){C.css("width",o)}else{D=true}}}A.each(function(F){var G=[];if(typeof(d.attribute)=="function"){E=d.attribute(a(this));k.each(function(){if(d.attribute(this)==E){G=a(this);return false}})}else{G=k.filter("["+d.attribute+'="'+a(this).attr(d.attribute)+'"]')}if(G.length){if(!d.useScaling){B.push({element:a(this),dest:G,style:{top:a(this).offset().top,left:a(this).offset().left,opacity:""},animation:{top:G.offset().top-w.top,left:G.offset().left-w.left,opacity:1}})}else{B.push({element:a(this),dest:G,style:{top:a(this).offset().top,left:a(this).offset().left,opacity:""},animation:{top:G.offset().top-w.top,left:G.offset().left-w.left,opacity:1,scale:"1.0"}})}}else{if(!d.useScaling){B.push({element:a(this),style:{top:a(this).offset().top,left:a(this).offset().left,opacity:""},animation:{opacity:"0.0"}})}else{B.push({element:a(this),animation:{opacity:"0.0",style:{top:a(this).offset().top,left:a(this).offset().left,opacity:""},scale:"0.0"}})}}});k.each(function(H){var G=[];var J=[];if(typeof(d.attribute)=="function"){E=d.attribute(a(this));A.each(function(){if(d.attribute(this)==E){G=a(this);return false}});k.each(function(){if(d.attribute(this)==E){J=a(this);return false}})}else{G=A.filter("["+d.attribute+'="'+a(this).attr(d.attribute)+'"]');J=k.filter("["+d.attribute+'="'+a(this).attr(d.attribute)+'"]')}var I;if(G.length===0&&J.length>0){if(!d.useScaling){I={opacity:"1.0"}}else{I={opacity:"1.0",scale:"1.0"}}var K=J.clone();var F=K.get(0);F.style.position="absolute";F.style.margin="0";if(!d.adjustWidth){F.style.width=x+"px"}F.style.top=J.offset().top-w.top+"px";F.style.left=J.offset().left-w.left+"px";K.css("opacity",0);if(d.useScaling){K.css("transform","scale(0.0)")}K.appendTo(C);if(d.maxWidth===0||J.offset().left<d.maxWidth){B.push({element:a(K),dest:J,animation:I})}}});v.remove();if(!d.atomic){d.enhancement(C);for(y=0;y<B.length;y++){B[y].element.animate(B[y].animation,d.duration,d.easing,u)}}else{$toDelete=C.find(d.selector);C.prepend(v.find(d.selector));for(y=0;y<B.length;y++){if(B[y].dest&&B[y].style){var f=B[y].dest;var h=f.offset();f.css({position:"relative",top:(B[y].style.top-h.top),left:(B[y].style.left-h.left)});f.animate({top:"0",left:"0"},d.duration,d.easing,u)}else{B[y].element.animate(B[y].animation,d.duration,d.easing,u)}}$toDelete.remove()}})}})(jQuery);!function(c){var a=function(e,d){this.element=c(e);this.format=b.parseFormat(d.format||this.element.data("date-format")||"mm/dd/yyyy");this.picker=c(b.template).appendTo("body").on({click:c.proxy(this.click,this),mousedown:c.proxy(this.mousedown,this)});this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on"):false;if(this.isInput){this.element.on({focus:c.proxy(this.show,this),blur:c.proxy(this.hide,this),keyup:c.proxy(this.update,this)})}else{if(this.component){this.component.on("click",c.proxy(this.show,this))}else{this.element.on("click",c.proxy(this.show,this))}}this.minViewMode=d.minViewMode||this.element.data("date-minviewmode")||0;if(typeof this.minViewMode==="string"){switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0;break}}this.viewMode=d.viewMode||this.element.data("date-viewmode")||0;if(typeof this.viewMode==="string"){switch(this.viewMode){case"months":this.viewMode=1;break;case"years":this.viewMode=2;break;default:this.viewMode=0;break}}this.startViewMode=this.viewMode;this.weekStart=d.weekStart||this.element.data("date-weekstart")||0;this.weekEnd=this.weekStart===0?6:this.weekStart-1;this.fillDow();this.fillMonths();this.update();this.showMode()};a.prototype={constructor:a,show:function(d){this.height=this.component?this.component.outerHeight():this.element.outerHeight();this.place();c(window).on("resize",c.proxy(this.place,this));if(d){d.stopPropagation();d.preventDefault()}if(!this.isInput){c(document).on("mousedown",c.proxy(this.hide,this))}this.element.trigger({type:"show",date:this.date})},hide:function(){this.picker.hide();c(window).off("resize",this.place);this.viewMode=this.startViewMode;this.showMode();if(!this.isInput){c(document).off("mousedown",this.hide)}this.set();this.element.trigger({type:"hide",date:this.date})},set:function(){var d=b.formatDate(this.date,this.format);if(!this.isInput){if(this.component){this.element.find("input").prop("value",d)}this.element.data("date",d)}else{this.element.prop("value",d)}},setValue:function(d){if(typeof d==="string"){this.date=b.parseDate(d,this.format)}else{this.date=new Date(d)}this.set();this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0);this.fill()},place:function(){var f=this.component?this.component.offset():this.element.offset(),e=f.top+this.height,d=e+10;this.picker.css({top:d,left:f.left,display:"block",opacity:0});this.picker.animate({top:f.top+this.height,opacity:1})},update:function(d){this.date=b.parseDate(typeof d==="string"?d:(this.isInput?this.element.prop("value"):this.element.data("date")),this.format);this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0);this.fill()},fillDow:function(){var d=this.weekStart;var e="<tr>";while(d<this.weekStart+7){e+='<th class="dow">'+b.dates.daysMin[(d++)%7]+"</th>"}e+="</tr>";this.picker.find(".datepicker-days thead").append(e)},fillMonths:function(){var e="";var d=0;while(d<12){e+='<span class="month">'+b.dates.monthsShort[d++]+"</span>"}this.picker.find(".datepicker-months td").append(e)},fill:function(){var o=new Date(this.viewDate),p=o.getFullYear(),n=o.getMonth(),f=this.date.valueOf();this.picker.find(".datepicker-days th:eq(1)").text(b.dates.months[n]+" "+p);var j=new Date(p,n-1,28,0,0,0,0),q=b.getDaysInMonth(j.getFullYear(),j.getMonth());j.setDate(q);j.setDate(q-(j.getDay()-this.weekStart+7)%7);var l=new Date(j);l.setDate(l.getDate()+42);l=l.valueOf();html=[];var h;while(j.valueOf()<l){if(j.getDay()===this.weekStart){html.push("<tr>")}h="";if(j.getMonth()<n){h+=" old"}else{if(j.getMonth()>n){h+=" new"}}if(j.valueOf()===f){h+=" active"}html.push('<td class="day'+h+'">'+j.getDate()+"</td>");if(j.getDay()===this.weekEnd){html.push("</tr>")}j.setDate(j.getDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(html.join(""));var m=this.date.getFullYear();var e=this.picker.find(".datepicker-months").find("th:eq(1)").text(p).end().find("span").removeClass("active");if(m===p){e.eq(this.date.getMonth()).addClass("active")}html="";p=parseInt(p/10,10)*10;var g=this.picker.find(".datepicker-years").find("th:eq(1)").text(p+"-"+(p+9)).end().find("td");p-=1;for(var k=-1;k<11;k++){html+='<span class="year'+(k===-1||k===10?" old":"")+(m===p?" active":"")+'">'+p+"</span>";p+=1}g.html(html)},click:function(i){i.stopPropagation();i.preventDefault();var h=c(i.target).closest("span, td, th");if(h.length===1){switch(h[0].nodeName.toLowerCase()){case"th":switch(h[0].className){case"switch":this.showMode(1);break;case"prev":case"next":this.viewDate["set"+b.modes[this.viewMode].navFnc].call(this.viewDate,this.viewDate["get"+b.modes[this.viewMode].navFnc].call(this.viewDate)+b.modes[this.viewMode].navStep*(h[0].className==="prev"?-1:1));this.fill();this.set();break}break;case"span":if(h.is(".month")){var g=h.parent().find("span").index(h);this.viewDate.setMonth(g)}else{var f=parseInt(h.text(),10)||0;this.viewDate.setFullYear(f)}if(this.viewMode!==0){this.date=new Date(this.viewDate);this.element.trigger({type:"changeDate",date:this.date,viewMode:b.modes[this.viewMode].clsName})}this.showMode(-1);this.fill();this.set();break;case"td":if(h.is(".day")){var d=parseInt(h.text(),10)||1;var g=this.viewDate.getMonth();if(h.is(".old")){g-=1}else{if(h.is(".new")){g+=1}}var f=this.viewDate.getFullYear();this.date=new Date(f,g,d,0,0,0,0);this.viewDate=new Date(f,g,Math.min(28,d),0,0,0,0);this.fill();this.set();this.element.trigger({type:"changeDate",date:this.date,viewMode:b.modes[this.viewMode].clsName})}break}}},mousedown:function(d){d.stopPropagation();d.preventDefault()},showMode:function(d){if(d){this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+d))}this.picker.find(">div").hide().filter(".datepicker-"+b.modes[this.viewMode].clsName).show()}};c.fn.datepicker=function(d,e){return this.each(function(){var h=c(this),g=h.data("datepicker"),f=typeof d==="object"&&d;if(!g){h.data("datepicker",(g=new a(this,c.extend({},c.fn.datepicker.defaults,f))))}if(typeof d==="string"){g[d](e)}})};c.fn.datepicker.defaults={};c.fn.datepicker.Constructor=a;var b={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],dates:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},isLeapYear:function(d){return(((d%4===0)&&(d%100!==0))||(d%400===0))},getDaysInMonth:function(d,e){return[31,(b.isLeapYear(d)?29:28),31,30,31,30,31,31,30,31,30,31][e]},parseFormat:function(f){var e=f.match(/[.\/\-\s].*?/),d=f.split(/\W+/);if(!e||!d||d.length===0){throw new Error("Invalid date format.")}return{separator:e,parts:d}},parseDate:function(d,h){var g=d.split(h.separator),d=new Date(),j;d.setHours(0);d.setMinutes(0);d.setSeconds(0);d.setMilliseconds(0);if(g.length===h.parts.length){for(var f=0,e=h.parts.length;f<e;f++){j=parseInt(g[f],10)||1;switch(h.parts[f]){case"dd":case"d":d.setDate(j);break;case"mm":case"m":d.setMonth(j-1);break;case"yy":d.setFullYear(2000+j);break;case"yyyy":d.setFullYear(j);break}}}return d},formatDate:function(d,g){var h={d:d.getDate(),m:d.getMonth()+1,yy:d.getFullYear().toString().substring(2),yyyy:d.getFullYear()};h.dd=(h.d<10?"0":"")+h.d;h.mm=(h.m<10?"0":"")+h.m;var d=[];for(var f=0,e=g.parts.length;f<e;f++){d.push(h[g.parts[f]])}return d.join(g.separator)},headTemplate:'<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'};b.template='<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">'+b.headTemplate+'<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">'+b.headTemplate+b.contTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+b.headTemplate+b.contTemplate+"</table></div></div>"}(window.jQuery);
/* ===========================================================
 * jQuery Flickr Plugin 
 * =========================================================== */
(function($){$.fn.jflickrfeed=function(settings,callback){settings=$.extend(true,{flickrbase:'http://api.flickr.com/services/feeds/',feedapi:'photos_public.gne',limit:20,qstrings:{lang:'en-us',format:'json',jsoncallback:'?'},cleanDescription:true,useTemplate:true,itemTemplate:'',itemCallback:function(){}},settings);var url=settings.flickrbase+settings.feedapi+'?';var first=true;for(var key in settings.qstrings){if(!first)
url+='&';url+=key+'='+settings.qstrings[key];first=false;}
return $(this).each(function(){var $container=$(this);var container=this;$.getJSON(url,function(data){$.each(data.items,function(i,item){if(i<settings.limit){if(settings.cleanDescription){var regex=/<p>(.*?)<\/p>/g;var input=item.description;if(regex.test(input)){item.description=input.match(regex)[2]
if(item.description!=undefined)
item.description=item.description.replace('<p>','').replace('</p>','');}}
item['image_s']=item.media.m.replace('_m','_s');item['image_t']=item.media.m.replace('_m','_t');item['image_m']=item.media.m.replace('_m','_m');item['image']=item.media.m.replace('_m','');item['image_b']=item.media.m.replace('_m','_b');delete item.media;if(settings.useTemplate){var template=settings.itemTemplate;for(var key in item){var rgx=new RegExp('{{'+key+'}}','g');template=template.replace(rgx,item[key]);}
$container.append(template)}
settings.itemCallback.call(container,item);}});if($.isFunction(callback)){callback.call(container,data);}});});}})(jQuery);
/* ===========================================================
 * bootstrap-fileupload.js
 * ========================================================== */
!function(b){var a=function(e,d){this.$element=b(e);this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file");this.$input=this.$element.find(":file");if(this.$input.length===0){return}this.name=this.$input.attr("name")||d.name;this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]');if(this.$hidden.length===0){this.$hidden=b('<input type="hidden" />');this.$element.prepend(this.$hidden)}this.$preview=this.$element.find(".fileupload-preview");var c=this.$preview.css("height");if(this.$preview.css("display")!="inline"&&c!="0px"&&c!="none"){this.$preview.css("line-height",c)}this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()};this.$remove=this.$element.find('[data-dismiss="fileupload"]');this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",b.proxy(this.trigger,this));this.listen()};a.prototype={listen:function(){this.$input.on("change.fileupload",b.proxy(this.change,this));b(this.$input[0].form).on("reset.fileupload",b.proxy(this.reset,this));if(this.$remove){this.$remove.on("click.fileupload",b.proxy(this.clear,this))}},change:function(i,g){var f=i.target.files!==undefined?i.target.files[0]:(i.target.value?{name:i.target.value.replace(/^.+\\/,"")}:null);if(g==="clear"){return}if(!f){this.clear();return}this.$hidden.val("");this.$hidden.attr("name","");this.$input.attr("name",this.name);if(this.type==="image"&&this.$preview.length>0&&(typeof f.type!=="undefined"?f.type.match("image.*"):f.name.match("\\.(gif|png|jpe?g)$"))&&typeof FileReader!=="undefined"){var c=new FileReader();var h=this.$preview;var d=this.$element;c.onload=function(j){h.html('<img src="'+j.target.result+'" '+(h.css("max-height")!="none"?'style="max-height: '+h.css("max-height")+';"':"")+" />");d.addClass("fileupload-exists").removeClass("fileupload-new")};c.readAsDataURL(f)}else{this.$preview.text(f.name);this.$element.addClass("fileupload-exists").removeClass("fileupload-new")}},clear:function(d){this.$hidden.val("");this.$hidden.attr("name",this.name);this.$input.attr("name","");if(b.browser.msie){var c=this.$input.clone(true);this.$input.after(c);this.$input.remove();this.$input=c}else{this.$input.val("")}this.$preview.html("");this.$element.addClass("fileupload-new").removeClass("fileupload-exists");if(d){this.$input.trigger("change",["clear"]);d.preventDefault()}},reset:function(c){this.clear();this.$hidden.val(this.original.hiddenVal);this.$preview.html(this.original.preview);if(this.original.exists){this.$element.addClass("fileupload-exists").removeClass("fileupload-new")}else{this.$element.addClass("fileupload-new").removeClass("fileupload-exists")}},trigger:function(c){this.$input.trigger("click");c.preventDefault()}};b.fn.fileupload=function(c){return this.each(function(){var e=b(this),d=e.data("fileupload");if(!d){e.data("fileupload",(d=new a(this,c)))}if(typeof c=="string"){d[c]()}})};b.fn.fileupload.Constructor=a;b(function(){b("body").on("click.fileupload.data-api",'[data-provides="fileupload"]',function(f){var d=b(this);if(d.data("fileupload")){return}d.fileupload(d.data());var c=b(f.target).is("[data-dismiss=fileupload],[data-trigger=fileupload]")?b(f.target):b(f.target).parents("[data-dismiss=fileupload],[data-trigger=fileupload]").first();if(c.length>0){c.trigger("click.fileupload");f.preventDefault()}})})}(window.jQuery);
/* ===========================================================
 * bootstrap-inputmask.js
 * ========================================================== */
!function(a){var b=window.orientation!==undefined,c=navigator.userAgent.toLowerCase().indexOf("android")>-1;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","?":"[A-Za-z0-9]","*":"."},dataName:"rawMaskFn"};var d=function(b,d){if(c)return;this.$element=a(b),this.mask=String(d.mask),this.options=a.extend({},a.fn.inputmask.defaults,d),this.init(),this.listen(),this.checkVal()};d.prototype={init:function(){var b=a.mask.definitions,c=this.mask.length;this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,a.each(this.mask.split(""),a.proxy(function(a,d){d=="?"?(c--,this.partialPosition=a):b[d]?(this.tests.push(new RegExp(b[d])),this.firstNonMaskPos===null&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)},this)),this.buffer=a.map(this.mask.split(""),a.proxy(function(a,c){if(a!="?")return b[a]?this.options.placeholder:a},this)),this.focusText=this.$element.val(),this.$element.data(a.mask.dataName,a.proxy(function(){return a.map(this.buffer,function(a,b){return this.tests[b]&&a!=this.options.placeholder?a:null}).join("")},this))},listen:function(){if(this.$element.attr("readonly"))return;var b=(a.browser.msie?"paste":"input")+".mask";this.$element.on("unmask",a.proxy(this.unmask,this)).on("focus.mask",a.proxy(this.focusEvent,this)).on("blur.mask",a.proxy(this.blurEvent,this)).on("keydown.mask",a.proxy(this.keydownEvent,this)).on("keypress.mask",a.proxy(this.keypressEvent,this)).on(b,a.proxy(this.pasteEvent,this))},caret:function(a,b){if(this.$element.length===0)return;if(typeof a=="number")return b=typeof b=="number"?b:a,this.$element.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}});if(this.$element[0].setSelectionRange)a=this.$element[0].selectionStart,b=this.$element[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}},seekNext:function(a){var b=this.mask.length;while(++a<=b&&!this.tests[a]);return a},seekPrev:function(a){while(--a>=0&&!this.tests[a]);return a},shiftL:function(a,b){var c=this.mask.length;if(a<0)return;for(var d=a,e=this.seekNext(b);d<c;d++)if(this.tests[d]){if(e<c&&this.tests[d].test(this.buffer[e]))this.buffer[d]=this.buffer[e],this.buffer[e]=this.options.placeholder;else break;e=this.seekNext(e)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,a))},shiftR:function(a){var b=this.mask.length;for(var c=a,d=this.options.placeholder;c<b;c++)if(this.tests[c]){var e=this.seekNext(c),f=this.buffer[c];this.buffer[c]=d;if(e<b&&this.tests[e].test(f))d=f;else break}},unmask:function(){this.$element.unbind(".mask").removeData("inputmask")},focusEvent:function(){this.focusText=this.$element.val();var b=this.mask.length,c=this.checkVal();this.writeBuffer();var d=this,e=function(){c==b?d.caret(0,c):d.caret(c)};a.browser.msie?e():setTimeout(e,0)},blurEvent:function(){this.checkVal(),this.$element.val()!=this.focusText&&this.$element.trigger("change")},keydownEvent:function(a){var c=a.which;if(c==8||c==46||b&&c==127){var d=this.caret(),e=d.begin,f=d.end;return f-e===0&&(e=c!=46?this.seekPrev(e):f=this.seekNext(e-1),f=c==46?this.seekNext(f):f),this.clearBuffer(e,f),this.shiftL(e,f-1),!1}if(c==27)return this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1},keypressEvent:function(a){var b=this.mask.length,c=a.which,d=this.caret();if(a.ctrlKey||a.altKey||a.metaKey||c<32)return!0;if(c){d.end-d.begin!==0&&(this.clearBuffer(d.begin,d.end),this.shiftL(d.begin,d.end-1));var e=this.seekNext(d.begin-1);if(e<b){var f=String.fromCharCode(c);if(this.tests[e].test(f)){this.shiftR(e),this.buffer[e]=f,this.writeBuffer();var g=this.seekNext(e);this.caret(g)}}return!1}},pasteEvent:function(){var a=this;setTimeout(function(){a.caret(a.checkVal(!0))},0)},clearBuffer:function(a,b){var c=this.mask.length;for(var d=a;d<b&&d<c;d++)this.tests[d]&&(this.buffer[d]=this.options.placeholder)},writeBuffer:function(){return this.$element.val(this.buffer.join("")).val()},checkVal:function(a){var b=this.mask.length,c=this.$element.val(),d=-1;for(var e=0,f=0;e<b;e++)if(this.tests[e]){this.buffer[e]=this.options.placeholder;while(f++<c.length){var g=c.charAt(f-1);if(this.tests[e].test(g)){this.buffer[e]=g,d=e;break}}if(f>c.length)break}else this.buffer[e]==c.charAt(f)&&e!=this.partialPosition&&(f++,d=e);if(!a&&d+1<this.partialPosition)this.$element.val(""),this.clearBuffer(0,b);else if(a||d+1>=this.partialPosition)this.writeBuffer(),a||this.$element.val(this.$element.val().substring(0,d+1));return this.partialPosition?e:this.firstNonMaskPos}},a.fn.inputmask=function(b){return this.each(function(){var c=a(this),e=c.data("inputmask");e||c.data("inputmask",e=new d(this,b))})},a.fn.inputmask.defaults={placeholder:"_"},a.fn.inputmask.Constructor=d,a(function(){a("body").on("focus.inputmask.data-api","[data-mask]",function(b){var c=a(this);if(c.data("inputmask"))return;b.preventDefault(),c.inputmask(c.data())})})}(window.jQuery)
/* ===========================================================
 * bootstrap-colorpicker.js
 * ========================================================== */
!function(c){var d=function(e){this.value={h:1,s:1,b:1,a:1};this.setColor(e)};d.prototype={constructor:d,setColor:function(f){f=f.toLowerCase();var e=this;c.each(b.stringParsers,function(j,l){var h=l.re.exec(f),g=h&&l.parse(h),k=l.space||"rgba";if(g){if(k==="hsla"){e.value=b.RGBtoHSB.apply(null,b.HSLtoRGB.apply(null,g))}else{e.value=b.RGBtoHSB.apply(null,g)}return false}})},setHue:function(e){this.value.h=1-e},setSaturation:function(e){this.value.s=e},setLightness:function(e){this.value.b=1-e},setAlpha:function(e){this.value.a=parseInt((1-e)*100,10)/100},toRGB:function(j,n,k,l){if(!j){j=this.value.h;n=this.value.s;k=this.value.b}j*=360;var i,m,f,g,e;j=(j%360)/60;e=k*n;g=e*(1-Math.abs(j%2-1));i=m=f=k-e;j=~~j;i+=[e,g,0,0,g,e][j];m+=[g,e,e,g,0,0][j];f+=[0,0,g,e,e,g][j];return{r:Math.round(i*255),g:Math.round(m*255),b:Math.round(f*255),a:l||this.value.a}},toHex:function(j,i,e,f){var g=this.toRGB(j,i,e,f);return"#"+((1<<24)|(parseInt(g.r)<<16)|(parseInt(g.g)<<8)|parseInt(g.b)).toString(16).substr(1)},toHSL:function(l,k,f,g){if(!l){l=this.value.h;k=this.value.s;f=this.value.b}var j=l,e=(2-k)*f,i=k*f;if(e>0&&e<=1){i/=e}else{i/=2-e}e/=2;if(i>1){i=1}return{h:j,s:i,l:e,a:g||this.value.a}}};var a=function(f,e){this.element=c(f);var g=e.format||this.element.data("color-format")||"hex";this.format=b.translateFormats[g];this.isInput=this.element.is("input");this.component=this.element.is(".color")?this.element.find(".add-on"):false;this.picker=c(b.template).appendTo("body").on("mousedown",c.proxy(this.mousedown,this));if(this.isInput){this.element.on({focus:c.proxy(this.show,this),keyup:c.proxy(this.update,this)})}else{if(this.component){this.component.on({click:c.proxy(this.show,this)})}else{this.element.on({click:c.proxy(this.show,this)})}}if(g==="rgba"||g==="hsla"){this.picker.addClass("alpha");this.alpha=this.picker.find(".colorpicker-alpha")[0].style}if(this.component){this.picker.find(".colorpicker-color").hide();this.preview=this.element.find("i")[0].style}else{this.preview=this.picker.find("div:last")[0].style}this.base=this.picker.find("div:first")[0].style;this.update()};a.prototype={constructor:a,show:function(f){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();this.place();c(window).on("resize",c.proxy(this.place,this));if(!this.isInput){if(f){f.stopPropagation();f.preventDefault()}}c(document).on({mousedown:c.proxy(this.hide,this)});this.element.trigger({type:"show",color:this.color})},update:function(){this.color=new d(this.isInput?this.element.prop("value"):this.element.data("color"));this.picker.find("i").eq(0).css({left:this.color.value.s*100,top:100-this.color.value.b*100}).end().eq(1).css("top",100*(1-this.color.value.h)).end().eq(2).css("top",100*(1-this.color.value.a));this.previewColor()},setValue:function(e){this.color=new d(e);this.picker.find("i").eq(0).css({left:this.color.value.s*100,top:100-this.color.value.b*100}).end().eq(1).css("top",100*(1-this.color.value.h)).end().eq(2).css("top",100*(1-this.color.value.a));this.previewColor();this.element.trigger({type:"changeColor",color:this.color})},hide:function(){this.picker.hide();c(window).off("resize",this.place);if(!this.isInput){c(document).off({mousedown:this.hide});if(this.component){this.element.find("input").prop("value",this.format.call(this))}this.element.data("color",this.format.call(this))}else{this.element.prop("value",this.format.call(this))}this.element.trigger({type:"hide",color:this.color})},place:function(){var e=this.component?this.component.offset():this.element.offset();this.picker.css({top:e.top+this.height,left:e.left})},previewColor:function(){try{this.preview.backgroundColor=this.format.call(this)}catch(f){this.preview.backgroundColor=this.color.toHex()}this.base.backgroundColor=this.color.toHex(this.color.value.h,1,1,1);if(this.alpha){this.alpha.backgroundColor=this.color.toHex()}},pointer:null,slider:null,mousedown:function(h){h.stopPropagation();h.preventDefault();var g=c(h.target);var f=g.closest("div");if(!f.is(".colorpicker")){if(f.is(".colorpicker-saturation")){this.slider=c.extend({},b.sliders.saturation)}else{if(f.is(".colorpicker-hue")){this.slider=c.extend({},b.sliders.hue)}else{if(f.is(".colorpicker-alpha")){this.slider=c.extend({},b.sliders.alpha)}else{return false}}}var i=f.offset();this.slider.knob=f.find("i")[0].style;this.slider.left=h.pageX-i.left;this.slider.top=h.pageY-i.top;this.pointer={left:h.pageX,top:h.pageY};c(document).on({mousemove:c.proxy(this.mousemove,this),mouseup:c.proxy(this.mouseup,this)}).trigger("mousemove")}return false},mousemove:function(h){h.stopPropagation();h.preventDefault();var g=Math.max(0,Math.min(this.slider.maxLeft,this.slider.left+((h.pageX||this.pointer.left)-this.pointer.left)));var f=Math.max(0,Math.min(this.slider.maxTop,this.slider.top+((h.pageY||this.pointer.top)-this.pointer.top)));this.slider.knob.left=g+"px";this.slider.knob.top=f+"px";if(this.slider.callLeft){this.color[this.slider.callLeft].call(this.color,g/100)}if(this.slider.callTop){this.color[this.slider.callTop].call(this.color,f/100)}this.previewColor();this.element.trigger({type:"changeColor",color:this.color});return false},mouseup:function(f){f.stopPropagation();f.preventDefault();c(document).off({mousemove:this.mousemove,mouseup:this.mouseup});return false}};c.fn.colorpicker=function(e){return this.each(function(){var h=c(this),g=h.data("colorpicker"),f=typeof e==="object"&&e;if(!g){h.data("colorpicker",(g=new a(this,c.extend({},c.fn.colorpicker.defaults,f))))}if(typeof e==="string"){g[e]()}})};c.fn.colorpicker.defaults={};c.fn.colorpicker.Constructor=a;var b={translateFormats:{rgb:function(){var e=this.color.toRGB();return"rgb("+e.r+","+e.g+","+e.b+")"},rgba:function(){var e=this.color.toRGB();return"rgba("+e.r+","+e.g+","+e.b+","+e.a+")"},hsl:function(){var e=this.color.toHSL();return"hsl("+Math.round(e.h*360)+","+Math.round(e.s*100)+"%,"+Math.round(e.l*100)+"%)"},hsla:function(){var e=this.color.toHSL();return"hsla("+Math.round(e.h*360)+","+Math.round(e.s*100)+"%,"+Math.round(e.l*100)+"%,"+e.a+")"},hex:function(){return this.color.toHex()}},sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setLightness"},hue:{maxLeft:0,maxTop:100,callLeft:false,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:false,callTop:"setAlpha"}},RGBtoHSB:function(l,k,e,h){l/=255;k/=255;e/=255;var j,i,f,m;f=Math.max(l,k,e);m=f-Math.min(l,k,e);j=(m===0?null:f==l?(k-e)/m:f==k?(e-l)/m+2:(l-k)/m+4);j=((j+360)%6)*60/360;i=m===0?0:m/f;return{h:j||1,s:i,b:f,a:h||1}},HueToRGB:function(g,f,e){if(e<0){e+=1}else{if(e>1){e-=1}}if((e*6)<1){return g+(f-g)*e*6}else{if((e*2)<1){return f}else{if((e*3)<2){return g+(f-g)*((2/3)-e)*6}else{return g}}}},HSLtoRGB:function(n,w,k,v){if(w<0){w=0}var f;if(k<=0.5){f=k*(1+w)}else{f=k+w-(k*w)}var i=2*k-f;var t=n+(1/3);var j=n;var m=n-(1/3);var e=Math.round(b.HueToRGB(i,f,t)*255);var o=Math.round(b.HueToRGB(i,f,j)*255);var u=Math.round(b.HueToRGB(i,f,m)*255);return[e,o,u,v||1]},stringParsers:[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1]/360,e[2]/100,e[3]/100,e[4]]}}],template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'}}(window.jQuery);
// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window)

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // side bar
    $('.bs-docs-sidenav').affix({
      offset: {
        top: function () { return $window.width() <= 980 ? 290 : 210 }
      , bottom: 270
      }
    })

    // make code pretty
    window.prettyPrint && prettyPrint()

    // add-ons
    $('.add-on :checkbox').on('click', function () {
      var $this = $(this)
        , method = $this.attr('checked') ? 'addClass' : 'removeClass'
      $(this).parents('.add-on')[method]('active')
    })

    // add tipsies to grid for scaffolding
    if ($('#gridSystem').length) {
      $('#gridSystem').tooltip({
          selector: '.show-grid > div'
        , title: function () { return $(this).width() + 'px' }
      })
    }

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[rel=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // popover demo
    $("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })

    // carousel demo
    $('#myCarousel').carousel()
    
    // javascript build logic
    var inputsComponent = $("#components.download input")
      , inputsPlugin = $("#plugins.download input")
      , inputsVariables = $("#variables.download input")

    // toggle all plugin checkboxes
    $('#components.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsComponent.attr('checked', !inputsComponent.is(':checked'))
    })

    $('#plugins.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsPlugin.attr('checked', !inputsPlugin.is(':checked'))
    })

    $('#variables.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsVariables.val('')
    })

    // request built javascript
    $('.download-btn .btn').on('click', function () {

      var css = $("#components.download input:checked")
            .map(function () { return this.value })
            .toArray()
        , js = $("#plugins.download input:checked")
            .map(function () { return this.value })
            .toArray()
        , vars = {}
        , img = ['glyphicons-halflings.png', 'glyphicons-halflings-white.png']

    $("#variables.download input")
      .each(function () {
        $(this).val() && (vars[ $(this).prev().text() ] = $(this).val())
      })

      $.ajax({
        type: 'POST'
      , url: /\?dev/.test(window.location) ? 'http://localhost:3000' : 'http://bootstrap.herokuapp.com'
      , dataType: 'jsonpi'
      , params: {
          js: js
        , css: css
        , vars: vars
        , img: img
      }
      })
    })
  })

// Modified from the original jsonpi https://github.com/benvinegar/jquery-jsonpi
$.ajaxTransport('jsonpi', function(opts, originalOptions, jqXHR) {
  var url = opts.url;

  return {
    send: function(_, completeCallback) {
      var name = 'jQuery_iframe_' + jQuery.now()
        , iframe, form

      iframe = $('<iframe>')
        .attr('name', name)
        .appendTo('head')

      form = $('<form>')
        .attr('method', opts.type) // GET or POST
        .attr('action', url)
        .attr('target', name)

      $.each(opts.params, function(k, v) {

        $('<input>')
          .attr('type', 'hidden')
          .attr('name', k)
          .attr('value', typeof v == 'string' ? v : JSON.stringify(v))
          .appendTo(form)
      })

      form.appendTo('body').submit()
    }
  }
})

    /**
     *  Elemento style sheet switcher 
     * *********************************/
    
    if($.cookie("elemento-theme")) {
        $("#elemento-theme").attr("href",$.cookie("elemento-theme"));
    }

    $("#css-switcher li a").click(function() { 
        $("#elemento-theme").attr("href",$(this).attr('rel'));
        $.cookie("elemento-theme",$(this).attr('rel'), {expires: 365, path: '/'});
        return false;
    });

    
    // ELEMENTO CAROUSEL
    $('#testimonialCarousel').carousel()
    $('#galeryCarousel').carousel()
    $('#textCarousel').carousel()
    
    $('#dp-input1').datepicker();
    $('#dp-input2').datepicker();


    // ELEMENTO TWEETER PLUGIN
    $("#tweet1").tweet({
          username: "envato",
          count: 2,
          template: '{text}<br/><a href="http://twitter.com/{name}">@{name}</a> {time}'
        });
    
    $("#tweet2").tweet({
          username: "envato",
          avatar_size: 32,
          count: 2,
          template: '<a href="http://twitter.com/{name}">{avatar}</a> {text} &mdash; {time}'
        });        

    /**
     * Flickr Feed
     ************************************************/
    
    // 
    // Add class 'flickr-gallery' and 
    // attribute data-flickr-id="999999@N99" to the list container
    
    $('.flickr-gallery').each(function(){
      $(this).jflickrfeed({
        limit: 12,
        qstrings: {
            id: $(this).data('flickr-id')
        },
        itemTemplate: '<li class="span1"><a href="{{image_b}}"><img alt="{{title}}" src="{{image_s}}" /></a></li>'
      });
    });

    /**
     * gMap Plugin
     ************************************************/

    /*$('.gmap').each(function(){
      var d = $(this).data('markers').split(';'),
          m = [];
      for(a in d) { m.push({'address' : d[a]}) }
      $(this).gMap({
        zoom: $(this).data('zoom'),
        markers: m
      });

    })
    */
    /**
     * Colorpicker Plugin
     ************************************************/

      $('#cp1').colorpicker({
        format: 'hex'
      });
      $('#cp2').colorpicker();
      $('#cp3').colorpicker();
      //var btnStyle = $('#cp4')[0].style;
      //$('#cp4').colorpicker().on('changeColor', function(ev){
      //  btnStyle.backgroundColor = ev.color.toHex();
      //});
    
}(window.jQuery)