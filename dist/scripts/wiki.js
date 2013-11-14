define("utils/developer-notes-logger",[],function(){function e(){return console&&console.group?(console.group($($("h1").get(0)).text()),$(".wiki-section").each(function(){var e=$(this);e.find("> h2").text()&&console.groupCollapsed(e.find("> h2").text()),t(e),e.find(".sub-section").each(function(){var e=$(this);e.find("> h3").text()&&console.groupCollapsed(e.find("> h3").text()),t(e),e.find(".example").each(function(){var e=$(this);e.find("> h4").text()&&console.groupCollapsed(e.find("> h4").text()),t(e),e.find("> h4").text()&&console.groupEnd()}),e.find("> h3").text()&&console.groupEnd()}),e.find("> h2").text()&&console.groupEnd()}),console.groupEnd(),void 0):(console.log("Please use a real browser for developer notes"),void 0)}function t(e){var t=e.find("> .developer-notes"),i=e.find("> .dependencies").html(),s=e.find("> .init").html();t.each(function(){o($(this).html())}),o(i,"Dependencies"),o(s,"Initialisation"),n(e)}function n(e){var t=e.find("> .demo").attr("data-selector"),n=e.find("> .demo > "+t).not(".developer-notes");n.each(function(){o(this.outerHTML,"'"+this.tagName+"' html")})}function o(e,t){e&&e.trim().length&&(t&&console.groupCollapsed(t),console.log.apply(console,i(e.trim().replace(/&lt;/g,"<").replace(/&gt;/g,">"))),t&&console.groupEnd())}function i(e){var t=null===e.match(/<code>/gi)?0:e.match(/<code>/gi).length,n=e.replace(/<code>/gi,"%c").replace(/<\/code>/gi,"%c"),o=[n];if(n.indexOf("%c")>-1)for(var i=0;t>i;i++)o.push("background: #FDF6E3; color: #777;"),o.push("background:white; color:black;");return o}return e}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function e(){var e,t=document,n=(t.documentElement,t.body),o=!1,i=t.createElement("p"),s=t.createElement("style"),a='#testbefore:before { content: "before"; }';return s.type="text/css",i.id="testbefore",s.styleSheet?s.styleSheet.cssText=a:s.appendChild(t.createTextNode(a)),n.appendChild(s),n.appendChild(i),e=t.getElementById("testbefore").offsetHeight,e>=1&&(o=!0),n.removeChild(s),n.removeChild(i),o}function t(e,t){var n=e.innerHTML,i=o[t];e.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+i+"</span>"+n}function n(){if(!e()){var n,o,i,s=document.getElementsByTagName("*");for(n=0;i=s[n],i;n+=1)o=i.className,o=o.match(/skycon-[^\s'"]+/),o&&t(i,o[0])}}var o={"skycon-sky":"&#xf100;","skycon-chevron-down":"&#xf101;","skycon-sky-plus":"&#xf102;","skycon-tv":"&#xf103;","skycon-twitter-reply":"&#xf104;","skycon-chevron-up":"&#xf105;","skycon-chevron":"&#xf106;","skycon-facebook":"&#xf107;","skycon-remote-record":"&#xf108;","skycon-warning":"&#xf109;","skycon-carousel-play":"&#xf10a;","skycon-arrow-left":"&#xf10b;","skycon-on-demand":"&#xf10c;","skycon-user-profile":"&#xf10d;","skycon-search":"&#xf10e;","skycon-twitter-retweet":"&#xf10f;","skycon-volume":"&#xf110;","skycon-twitter-favourite":"&#xf111;","skycon-expand":"&#xf112;","skycon-carousel-pause":"&#xf113;","skycon-mouse":"&#xf114;","skycon-share":"&#xf115;","skycon-never-miss":"&#xf116;","skycon-mail":"&#xf117;","skycon-sky-go":"&#xf118;","skycon-twitter-follow":"&#xf119;","skycon-minify":"&#xf11a;","skycon-twitter":"&#xf11b;","skycon-close":"&#xf11c;","skycon-menu":"&#xf11d;","skycon-phone":"&#xf11e;","skycon-cloud":"&#xf11f;","skycon-google-plus":"&#xf120;"};return{add:t,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function e(){$(window).on("hashchange",t);var e=document.documentMode,n="onhashchange"in window&&(void 0===e||e>7);n||(a.hash=document.location.hash,setInterval(function(){document.location.hash!==a.hash&&$(window).trigger("hashchange")},200)),a.windowLoaded=!0}function t(e){var t,n;e=s("string"==typeof e?e:location.hash),e?(t=a.globalHashList[e],n="callback",a.lastExecutor=e):a.lastExecutor&&(t=a.globalHashList[a.lastExecutor],n="undo"),t&&"function"==typeof t[n]&&t[n](e)}function n(){var e=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,e.pathname+e.search)):location.hash="!"}function o(e){location.hash="!"+e}function i(e,n,o){var i=a.globalHashList;$(e).each(function(e,r){if(r=s(r),i[r]){var c="hashManager: hash ("+r+") already exists";throw new Error(c)}i[r]={callback:n,undo:o},a.windowLoaded&&r===s(location.hash)&&t(r)})}function s(e){return e.replace(/[#!]/g,"")}var a={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return e(),{register:i,change:o,remove:n,onHashChange:t,cleanHash:s}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function e(e){var t=e.url,n=e.width||400,o=e.height||n,i=e.top||screen.height/2-o/2,s=e.left||screen.width/2-n/2,a=e.title||"Sky";return window.open(t,a,"top="+i+",left="+s+",width="+n+",height="+o)}function t(){$("body").on("click","[data-popup]",function(t){t.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});e(n)})}return{init:t,open:e}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.diff=function(){function e(e){var n=e.oldRoute,o=e.newRoute;s(),$("a[data-diff]").each(function(){t(n,o,$(this).attr("data-diff"))})}function t(e,t,n){var i,s,a=n.split("/")[n.split("/").length-1],r=t+"/"+n+".html",c=e+"/"+n+".html";i=$.ajax({crossDomain:!0,url:r,cache:!1}),s=$.ajax({crossDomain:!0,url:c,cache:!1}),$.when(i,s).done(function(e,t){var n=$('<div class="togglee" data-toggle="'+a+'"><table id="'+a+'-table"></table></div>');n.append($('<textarea id="'+a+'" class="hidden latest"></textarea>').val(e)).append($('<textarea id="old-'+a+'" class=hidden></textarea>').val(t)),$("[data-diff-container]").append('<h3 class="has-toggle wiki-h3 smaller" id="'+a+'-header"><span class="toggler" for="'+a+'"></span>'+a+"</h3>").append(n),o(a,t[0].split("\n"),e[0].split("\n"))})}function n(e,t,o,s,a,r){if(a>0&&r>0&&o[r-1]===s[a-1])n(e,t,o,s,a-1,r-1),i(e,a,r," ",o[r-1]);else if(a>0&&(0===r||t[r][a-1]>=t[r-1][a]))n(e,t,o,s,a-1,r),i(e,a,"","+",s[a-1]);else{if(!(r>0&&(0===a||t[r][a-1]<t[r-1][a])))return;n(e,t,o,s,a,r-1),i(e,"",r,"-",o[r-1],"")}}function o(e,t,o){var i,s,a=new Array(t.length+1);for(s=0;s<a.length;s++)for(a[s]=new Array(o.length+1),i=0;i<a[s].length;i++)a[s][i]=0;for(s=1;s<a.length;s++)for(i=1;i<a[s].length;i++)a[s][i]=t[s-1]===o[i-1]?1+a[s-1][i-1]:Math.max(a[s-1][i],a[s][i-1]);try{n(e,a,t,o,i-1,s-1)}catch(r){alert(r)}}function i(e,t,n,o,i){var s=document.getElementById(e+"-table"),a=document.getElementById(e+"-header"),r=document.createElement("tr"),c=document.createElement("td"),d=document.createElement("td"),l=document.createElement("td"),u=document.createTextNode(n),h=document.createTextNode(t),f=document.createTextNode(o+" "+i);"+"===o?(r.className="add",$(a).addClass("add")):"-"===o&&(r.className="del",$(a).addClass("del")),c.className="codekolom",d.className="codekolom",l.className="bredecode",c.appendChild(u),d.appendChild(h),l.appendChild(f),r.appendChild(c),r.appendChild(d),r.appendChild(l),s.appendChild(r)}function s(){$(".sky-form .error").text(""),$(".togglee").remove(),$(".has-toggle").remove()}return e}(),"function"==typeof window.define&&window.define.amd&&define("utils/diff",[],function(){return toolkit.diff}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.tabs=function(e){function t(){s.rememberState?e.register(n(),o):i.tabs.on("click",function(e){e.preventDefault(),o($(this).find("a").attr("href"))})}function n(){var e=[];return i.tabs.each(function(){e.push($(this).attr("aria-controls"))}),e}function o(e){i.tabTargets.add(i.tabs).removeClass("selected"),$("#"+e+"-tab").add($("#"+e)).addClass("selected")}var i={tabContainer:$("section[data-function=tabs]"),tabs:$("section[data-function=tabs] li[role=tab]"),tabTargets:$("section[data-function=tabs] div[role=tabpanel]")},s={rememberState:"true"===i.tabContainer.attr("data-remember-state")};return t(),{getHashList:n,changeTab:o}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/tabs",["utils/hashmanager"],function(){return toolkit.tabs}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function e(){o.shareCount.on("click keypress",t)}function t(e){e.preventDefault();var t=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===e.type||"touchend"===e.type||"keypress"===e.type&&13===e.which)&&(t.toggleClass("active"),o.document.on(n,function i(e){$.contains(t[0],e.target)||(t.removeClass("active"),o.document.off(n,i))}))}function n(){e()}var o={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(e,t){function n(e,t){this.options=t,this.$viewport=e,this.$slideContainer=e.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents()}function o(e,t){this.carousel=e,this.wrapper=e.$viewport.find(".video-wrapper"),this.wrapper.attr("id","video-"+t.videoId),this.videocontrolcontainer=e.$viewport.find(".videocontrolcontainer"),this.player=e.$viewport.find("video"),this.videocontrolcontainer.find("img").on("error",function(){this.src=t.placeHolderImage}),this.options=t,this.bindEvents()}var i=function(){return"WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix}(),s=function(){var e=document.body.style;return void 0!==e.transform||void 0!==e.WebkitTransform||void 0!==e.MozTransform||void 0!==e.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(e,t){var n=this.$slideContainer.removeClass("animate");return t&&n.addClass("animate"),i?n.css("transform","translate3d("+e+"%,0,0) scale3d(1,1,1)"):s?n.css("transform","translate("+e+"%,0)"):t?n.animate({left:2*e+"%"},600):n.css({left:2*e+"%"}),this},toggleTermsContent:function(){this.pause();var e=0===this.$viewport.next(".terms-content").find(".terms").length;this[e?"showTermsContent":"hideTermsContent"]()},showTermsContent:function(){this.hideTermsContent();var e=t(this.$slides[this.currentIndex]).find(".terms");e.length&&this.$viewport.next(".terms-content").append(e.clone(!0).removeClass("speak").attr("aria-hidden","true")).fadeIn(200)},hideTermsContent:function(){this.$viewport.next(".terms-content").fadeOut(200,function(){t(this).find(".terms").remove()})},showTermsLink:function(e){this.hideTermsLink();var n=t(this.$slides[e]).find(".terms");n.length&&this.$viewport.find(".terms-link").removeClass("hidden").fadeIn(200)},hideTermsLink:function(){this.$viewport.find(".terms-link").fadeOut(200),this.hideTermsContent()},moveSlide:function(e){var t,n,o=this,i=this.$slides;return n=e.index>=this.slideCount?0:e.index<0?this.slideCount-1:e.index,t=e.index>this.currentIndex&&!e.reverse?"left":"right",i.filter(":not(:eq("+this.currentIndex+"))").hide(),i.eq(this.currentIndex).css("float",t),i.eq(n).show().css("float","left"==t?"right":"left"),this.setOffset(e.start,!1),"undefined"!=typeof e.end&&(setTimeout(function(){o.setOffset(e.end,!0),o.showTermsLink(n),o.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof e.callback&&e.callback(n)),n},"goto":function(e,t,n){return t!==!1&&this.pause(),e!==this.currentIndex?(e>this.currentIndex?this.moveSlide({index:e,start:0,end:-50,callback:n}):this.moveSlide({index:e,start:-50,end:0,callback:n}),this):void 0},next:function(e,t){return this.goto(this.currentIndex+1,e,t),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(e,t){var n=this,o=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function e(){n.next(!1,function(){n.timerId=setTimeout(e,o)})},o)},t||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof e&&e(),this},pause:function(e){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof e&&e(),this},touchstart:function(e){var t=e.originalEvent.touches[0];this.pause(),this.swipe.start={x:t.pageX,y:t.pageY}},touchmove:function(e){var t,n=this.swipe,o=e.originalEvent.touches[0],i=o.pageX-n.start.x,s=o.pageY-n.start.y,a=Math.abs(i)>Math.abs(s),r=0>i?this.currentIndex+1:this.currentIndex-1;n.start&&a!==!1&&(e.preventDefault(),t=100*(i/this.$slideContainer.outerWidth(!0)),i>0&&(t-=50),this.swipe.positionAsPercentage=t,this.moveSlide({index:r,start:t}))},touchend:function(e){if(this.swipe.start){var t=this.swipe,n=t.positionAsPercentage,o=e.originalEvent.changedTouches[0],i=o.pageX-t.start.x,s=null,a=75;if(Math.abs(i)>a&&(s=0>i?"left":"right"),"left"===s)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===s)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,c=i>0?n+50:n,d=this.currentIndex,l=0;0>c?this.currentIndex=d+1>=this.slideCount?0:d+1:(this.currentIndex-=1,l=-50,c-=50),r=0===this.currentIndex&&d===this.slideCount-1,this.moveSlide({index:d,start:c,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},o.prototype={bindEvents:function(){var e=this,t=function(e){e.preventDefault()},n=function(){return e.stop(),o.off("click",t),!1},o=this.wrapper;o.on("click",t).find(".close").one("click touchstart",n),this.player.on("ended webkitendfullscreen",n)},play:function(){var e=this,t=this.carousel.$viewport.find(".actions, .indicators");this.originalHtml=this.videocontrolcontainer.html(),this.carousel.pause(),this.showCanvas(function(){t.hide(),e.carousel.unbindTouchEvents(),e.player.sky_html5player(e.options),setTimeout(function(){sky.html5player.play()},1333)})},stop:function(){var n=this,o=this.carousel.$viewport.find(".actions, .indicators");t(e).off("skycom.resizeend",n.resizeCarousel),sky.html5player.close(this.wrapper),n.videocontrolcontainer.html(n.originalHtml),this.hideCanvas(function(){n.carousel.bindTouchEvents(),o.show()})},showCanvas:function(n){var o,i=this.carousel.$viewport,s=i.find(".video-overlay"),a=i.find(".video-wrapper"),r=i.find(".play-video"),c=i.find(".video-wrapper .close"),d=500,l=this;this.originalHeight=i.height(),a.addClass("playing-video"),s.fadeIn(function(){r.fadeOut(),o=l.calculateHeightForVideo(),i.animate({height:o},d,function(){t(e).on("skycom.resizeend",t.proxy(l.resizeCarousel,l)),a.show(),s.fadeOut(d,function(){c.addClass("active")}),n()})})},calculateHeightForVideo:function(){return Math.round(9*(this.carousel.$viewport.width()/16))},resizeCarousel:function(){this.carousel.$viewport.animate({height:this.calculateHeightForVideo()},250)},hideCanvas:function(e){var t=this.carousel.$viewport,n=t.find(".video-overlay"),o=t.find(".video-wrapper"),i=t.find(".play-video"),s=t.find(".video-wrapper .close"),a=500,r=this.originalHeight;n.fadeIn(a,function(){s.removeClass("active"),t.animate({height:r},a,function(){t.css({height:"auto"}),e(),i.fadeIn(),n.hide(),o.fadeOut(),o.removeClass("playing-video")})})}},t.fn.skycom_carousel=function(e){var i=t.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel"},{id:"pause",label:"Pause Carousel"},{id:"previous",label:"Previous"},{id:"next",label:"Next"}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3},video:{token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",autoplay:!1,videoId:null,freewheel:!1,placeHolderImage:"//static.video.sky.com/posterframes/skychasky.jpg"}},e),s={actions:function(e,n){var o,i,s,a,r="",c=n.actions,d=n.onclick;if(n.count<=1)return this;for(s in c)a="",o=c[s].id,i=c[s].label,("next"==o||"previous"==o)&&(a=" hidden-touch "),r+='<a href="#" class="skycom-internal supportive '+a+o+'" >',r+='<span class="icon-carousel-'+o+'"></span>'+i,("next"==o||"previous"==o)&&(r+='<span class="icon-carousel-'+o+'-over over"></span>'),r+="</a>";return e.find(".skycom-carousel-container").before('<div class="actions">'+r+"</div>"),e.find("> .actions > *").each(function(e){t(this).attr("data-action",c[e].id).on("click",function(t){d(c[e].id),t.preventDefault()})}),this},indicators:function(e,n){var o,i,s=n.count,a=n.onclick,r='<div class="indicators"><div class="container">',c=' class="active"';if(1>=s)return this;for(i=s;i--;)r+="<span"+c+' data-tracking data-tracking-label="indicator"></span>',c="";return o=t(r+"</div></div>").on("click","span",function(e){a(t(e.currentTarget).index())}),e.append(o),this},terms:function(e){var n=t('<a href="#!" class="terms-link carousel-content cushioned hidden black internal-link supportive" aria-hidden="true">Terms and Conditions</a>'),o=t('<div class="terms-content carousel-content  cushioned hidden"></div>');return e.find(".terms").length&&(e.append(n),e.after(o),e.addClass("has-terms")),this},video:function(e){return e.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var e=t(this),a=new n(e,i.carousel),r=function(t){s.indicators(e,{count:t.slideCount,onclick:function(e){t.goto(e)}}).terms(e).actions(e,{count:t.slideCount,actions:i.carousel.actions,onclick:function(e){t[e]()}}).video(e)};r(a),e.on("click",".play-video",function(e){e.preventDefault(),i.video.videoId=t(this).attr("data-video-id"),i.carousel.videoAds&&(i.video.freewheel=!0);var n=new o(a,i.video);n.play()}).on("click",".terms-link",function(){a.toggleTermsContent()}).on("change",function(t,n){n=n||0,e.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),a.$slides.removeClass("active").find("a").attr("tabindex",-1),a.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){e.removeClass("paused").addClass("playing")}).on("paused",function(){e.removeClass("playing").addClass("paused")}).on("pause",function(){a.pause()}).on("play",function(){a.play()}).on("refresh",function(t,n){a.$slides=a.$slideContainer.find(">"),a.slideCount=a.$slides.length,e.find(".indicators").remove(),e.find(".actions").remove(),e.find(".video-overlay").remove(),r(a),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>a.slideCount-1&&(n=a.slideCount-1),n>a.currentIndex?a.moveSlide({index:n,start:0,end:-50}):a.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(e){switch(e.keyCode){case 9:a.pause();break;case 37:a.previous();break;case 39:a.next()}}).find(".toggle-terms").on("click",function(){a.$viewport.toggleClass("showing-tandcs")}),a.slideCount>1?(a[i.carousel.autoplay===!0?"play":"pause"](!1,i.carousel.interval),a.goto(i.carousel.startSlideIndex,!1),a.showTermsLink(0),e.trigger("change")):a.unbindTouchEvents()})}}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",[],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function e(){var e=function(){$(document.body).addClass("window-loaded")},t=setTimeout(e,5e3);$(window).load(function(){clearTimeout(t),e()})}e()}(),toolkit.modules=function(){var e=function(e){var t,n=$.extend({skycons:!1,share:!1,popup:!1},e);for(t in n)(n[t]||!e)&&toolkit[t]&&toolkit[t].init&&toolkit[t].init()};return{init:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","utils/diff","modules","modules/tabs","modules/share","modules/carousel"],function(e,t,n,o,i,s,a,r){return{modules:i,skycons:e,hashmanager:t,popup:n,diff:o,tabs:s,share:a,carousel:r}}),define("wiki",["utils/developer-notes-logger","toolkit"],function(e,t){function n(){$(document).on("click",".toggler",s),$("#check").on("click",o)}function o(e){e.preventDefault();var n=$("#version").val(),o=$(".wiki-header small").text().replace("v",""),i="http://web-toolkit.global.sky.com";(n.split(".").length<3||n.split(".")[0]<1)&&$(".sky-form .error").text("The version number is required, and must be '1.0.0' or higher"),(1===parseFloat(n,10)||"0"===n.split(".")[0])&&(n="0.6.9"),t.diff({oldRoute:i+"/"+n+"/_site/_includes/",newRoute:i+"/"+o+"/_site/_includes/"})}function i(){$("#hero").skycom_carousel({carousel:{autoplay:!0,videoAds:!1}}),$("#hero-16-9").skycom_carousel({carousel:{autoplay:!0,videoAds:!1}}),t.modules.init()}function s(){var e=$(this),t=$("div[data-toggle="+e.attr("for")+"]");t.hasClass("open")?(e.removeClass("open"),t.removeClass("open")):(e.addClass("open"),t.addClass("open"))}e(),i(),n()});