var NioApp=function(a,e,s){"use strict";var t={AppInfo:{name:"GENOX",package:"1.3.0",version:"1.3.0",author:"Softnio"}},i={docReady:[],docReadyDefer:[],winLoad:[],winLoadDefer:[]};function o(e){e=void 0===e?a:e,i.docReady.concat(i.docReadyDefer).forEach(function(a){a(e)})}function n(e){e="object"==typeof e?a:e,i.winLoad.concat(i.winLoadDefer).forEach(function(a){a(e)})}return a(s).ready(o),a(e).on("load",n),t.components=i,t.docReady=o,t.winLoad=n,t}(jQuery,window,document);NioApp=function(f,b,d,n){"use strict";var c=b(d),p=b(n),l=b("body"),h=b(".header-main"),a=b(".header-navbar-creative"),u=992,m="menu-mobile",s="has-fixed",t="is-shrink",e=d.location.href,i=h.innerHeight()-2;e.split("#");b.fn.exists=function(){return 0<this.length},a.exists()&&(u=576),f.Win={},f.Win.height=b(d).height(),f.Win.width=b(d).width(),f.getStatus={},f.getStatus.isRTL=!(!l.hasClass("has-rtl")&&"rtl"!==l.attr("dir")),f.getStatus.isTouch="ontouchstart"in n.documentElement,f.getStatus.isMobile=!!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i),f.getStatus.asMobile=f.Win.width<768,c.on("resize",function(){f.Win.height=b(d).height(),f.Win.width=b(d).width(),f.getStatus.asMobile=f.Win.width<768}),f.Util={},f.Util.classInit=function(){function a(){!0===f.getStatus.asMobile?l.addClass("as-mobile"):l.removeClass("as-mobile")}!0===f.getStatus.isTouch?l.addClass("has-touch"):l.addClass("no-touch"),a(),"rtl"===l.attr("dir")&&(l.addClass("has-rtl"),f.getStatus.isRTL=!0),b(d).on("resize",a)},f.components.docReady.push(f.Util.classInit),f.Util.preLoader=function(){var a=b(".preloader"),e=b(".spinner");a.exists()&&(l.addClass("page-loaded"),e.addClass("load-done"),a.delay(600).fadeOut(300))},f.components.winLoad.push(f.Util.preLoader),f.Util.backTop=function(){var a=b(".backtop");if(a.exists()){800<c.scrollTop()?a.fadeIn("slow"):a.fadeOut("slow"),a.on("click",function(a){b("body,html").stop().animate({scrollTop:0},1500,"easeInOutExpo"),a.preventDefault()})}},f.components.docReady.push(f.Util.backTop),f.Util.headerSearch=function(){var a=b(".header-search"),e=b(".search-trigger"),s=b("body");e.on("click",function(a){a.preventDefault(),s.addClass("search-show")}),a.on("click",function(a){b(a.target).is(".input-search")||s.hasClass("search-show")&&s.removeClass("search-show")})},f.components.docReady.push(f.Util.headerSearch),f.Util.browser=function(){var a=-1!==navigator.userAgent.indexOf("Chrome")?1:0,e=-1!==navigator.userAgent.indexOf("Firefox")?1:0,s=-1!==navigator.userAgent.indexOf("Safari"),t=-1!==navigator.userAgent.indexOf("MSIE")||n.documentMode?1:0,i=!t&&!!d.StyleMedia,o=navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR")?1:0;a?l.addClass("chrome"):e?l.addClass("firefox"):t?l.addClass("ie"):i?l.addClass("edge"):o?l.addClass("opera"):s&&l.addClass("safari")},f.components.winLoad.push(f.Util.browser),f.Util.headerSticky=function(){var e=b(".is-sticky"),a={hasFixed:function(){if(e.exists()){var a=e.offset();c.on("scroll",function(){c.scrollTop()>a.top?e.hasClass(s)||e.addClass(s):e.hasClass(s)&&e.removeClass(s)})}},hasShrink:function(){e.hasClass(t)&&(i=h.height()+16-2)}};a.hasFixed(),a.hasShrink(),c.on("resize",function(){i=e.hasClass(t)?h.height()+16-2:h.innerHeight()-2})},f.components.docReady.push(f.Util.headerSticky),f.Util.imageBG=function(){var a=b(".bg-image");a.exists()&&a.each(function(){var a=b(this),e=a.parent(),s=a.data("overlay"),t=a.data("opacity"),i=a.children("img").attr("src"),o=!(void 0===s||!s)&&s,n=!(void 0===t||!t)&&t;void 0!==i&&""!==i&&(e.hasClass("has-bg-image")||e.addClass("has-bg-image"),o?a.hasClass("overlay-"+o)||(a.addClass("overlay"),a.addClass("overlay-"+o)):a.hasClass("overlay-fall")||a.addClass("overlay-fall"),n&&a.addClass("overlay-opacity-"+n),a.css("background-image",'url("'+i+'")').addClass("bg-image-loaded"))})},f.components.docReady.push(f.Util.imageBG),f.Util.Ovm=function(){var a=b(".nk-ovm"),e=b(".nk-ovm[class*=mask]");a.exists()&&a.each(function(){b(this).parent().hasClass("has-ovm")||b(this).parent().addClass("has-ovm")}),e.exists()&&e.each(function(){b(this).parent().hasClass("has-mask")||b(this).parent().addClass("has-mask")})},f.components.docReady.push(f.Util.Ovm),f.Util.toggler=function(){var t=".toggle-tigger",i=".toggle-class";b(t).exists()&&p.on("click",t,function(a){var e=b(this);b(t).not(e).removeClass("active"),b(i).not(e.parent().children()).removeClass("active"),e.toggleClass("active").parent().find(i).toggleClass("active"),a.preventDefault()}),p.on("click","body",function(a){var e=b(t),s=b(i);s.is(a.target)||0!==s.has(a.target).length||e.is(a.target)||0!==e.has(a.target).length||(s.removeClass("active"),e.removeClass("active"))})},f.components.docReady.push(f.Util.toggler),f.Util.accordionActive=function(){var a=b(".accordion-item"),e=b(".accordion-title");a.exists()&&a.each(function(){var a=b(this);a.find(".accordion-title").hasClass("collapsed")?a.removeClass("current"):a.addClass("current")}),e.exists()&&e.on("click",function(){var a=b(this);a.parent().siblings().removeClass("current"),a.parent().addClass("current")})},f.components.docReady.push(f.Util.accordionActive),f.Util.scrollAnimation=function(){var a=b(".animated");b().waypoint&&a.exists()&&a.each(function(){var a=b(this),e=a.data("animate"),s=a.data("duration"),t=a.data("delay");a.waypoint(function(){a.addClass("animated "+e).css("visibility","visible"),s&&a.css("animation-duration",s+"s"),t&&a.css("animation-delay",t+"s")},{offset:"93%"})})},f.components.winLoad.push(f.Util.scrollAnimation),f.Util.Counter=function(){var a=b(".count"),e=b(".count").attr("data-count");b().waypoint&&a.exists()&&a.each(function(){a.waypoint(function(){a.counter({duration:2e3,countFrom:0,countTo:e})},{offset:"93%"})})},f.components.winLoad.push(f.Util.Counter),f.Util.sliderAnimation=function(){var a=b(".animate");a.exists()&&a.each(function(){var a=b(this),e=a.data("animate"),s=a.data("duration"),t=a.data("delay");a.addClass(e),a.css({visibility:"visible","transition-duration":s+"s","transition-delay":t+"s"})})},f.components.winLoad.push(f.Util.sliderAnimation),f.MainMenu=function(){var e=b(".navbar-toggle"),s=b(".header-navbar"),t=b(".header-navbar-classic"),i=b(".menu-toggle"),o=b(".menu-link"),n=".menu-drop",l="open-nav",r="menu-shown",a={Overlay:function(){s.exists()&&s.append('<div class="header-navbar-overlay"></div>')},navToggle:function(){e.exists()&&e.on("click",function(a){var e=b(this),s=e.data("menu-toggle");e.toggleClass("active"),t.exists()?b("#"+s).slideToggle().toggleClass(r):b("#"+s).parent().toggleClass(r),a.preventDefault()})},navClose:function(){b(".header-navbar-overlay").on("click",function(){e.removeClass(""),s.removeClass(r)}),p.on("click","body",function(a){!i.is(a.target)&&0===i.has(a.target).length&&!h.is(a.target)&&0===h.has(a.target).length&&c.width()<u&&(e.removeClass("active"),t.find(".header-menu").slideUp(),s.removeClass(r))})},menuToggle:function(){i.exists()&&i.on("click",function(a){var e=b(this),s=e.parent();(c.width()<u||e.hasClass("menu-toggle-alt"))&&(s.children(n).slideToggle(400),s.siblings().children(n).slideUp(400),s.toggleClass(l),s.siblings().removeClass(l)),a.preventDefault()})},mobileNav:function(){c.width()<u?s.delay(500).addClass(m):(s.delay(500).removeClass(m),e.removeClass("active"),s.removeClass(r))},currentPage:function(){var a=d.location.href;o.exists()&&o.each(function(){a===this.href&&b(this).closest("li").addClass("active").parent().closest("li").addClass("active")})}};a.Overlay(),a.navToggle(),a.navClose(),a.menuToggle(),a.mobileNav(),a.currentPage(),c.on("resize",function(){a.mobileNav()})},f.components.docReady.push(f.MainMenu),f.OnePageScroll=function(){b('a.menu-link[href*="#"]:not([href="#"])').on("click",function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=this.hash,e=!!this.hash.slice(1)&&b("[name="+this.hash.slice(1)+"]"),s=a.length?b(a):e;if(s.length)return b(".navbar-toggle").removeClass("active"),b(".header-navbar").removeClass("menu-shown"),b("html, body").delay(150).animate({scrollTop:s.offset().top-i},1e3,"easeInOutExpo"),!1}})},f.components.docReady.push(f.OnePageScroll),f.scrollAct=function(){l.scrollspy({target:"#header-menu",offset:i+2})},f.components.docReady.push(f.scrollAct),f.Plugins={},f.Plugins.carousel=function(){var a=b(".has-carousel");a.exists()&&a.each(function(){var a=b(this),e=a.data("items")?a.data("items"):4,s=a.data("items-tab-l")?a.data("items-tab-l"):e-1,t=(a.data("items-tab-p")&&a.data("items-tab-p"),a.data("items-mobile")?a.data("items-mobile"):1),i=a.data("scroll")?a.data("scroll"):1,o=a.data("delay")?a.data("delay"):6e3,n=a.data("speed")?a.data("speed"):500,l=a.data("ease")?a.data("ease"):"linear",r=!!a.data("auto")&&a.data("auto"),d=!!a.data("loop")&&a.data("loop"),c=!!a.data("dots")&&a.data("dots"),p=!!a.data("navs")&&a.data("navs"),h=!!a.data("center")&&a.data("center"),u=!!a.data("effect")&&a.data("effect"),m=!!a.data("varwidth")&&a.data("varwidth"),g=b(".slick-next"),v=b(".slick-prev");1===e&&(s=t=1),!0===p&&b(".tes-arrow").addClass("active"),a.slick({autoplay:r,autoplaySpeed:o,speed:n,centerMode:h,infinite:d,dots:c,swipeToSlide:!0,arrows:p,slidesToScroll:i,cssEase:l,variableWidth:m,touchThreshold:30,mobileFirst:!0,fade:u,nextArrow:g,prevArrow:v,rtl:f.getStatus.isRTL,responsive:[{breakpoint:1200,settings:{slidesToShow:e}},{breakpoint:992,settings:{slidesToShow:s}},{breakpoint:767,settings:{slidesToShow:s}},{breakpoint:575,settings:{slidesToShow:t}}]})})},f.components.winLoad.push(f.Plugins.carousel),f.Plugins.select2=function(){var a=b(".select");a.exists()&&a.each(function(){var a=b(this),e=a.data("select2-theme")?a.data("select2-theme"):"bordered",s=a.data("select2-placehold")?a.data("select2-placehold"):"Select an option";a.select2({placeholder:s,theme:"default select-"+e})})},f.components.docReady.push(f.Plugins.select2),f.Plugins.validform=function(){var a=b(".form-validate");if(!b().validate)return console.log("jQuery Form Validate not Defined."),!0;a.exists()&&a.each(function(){var a=b(this);a.validate(),a.find(".select").on("change",function(){b(this).valid()})})},f.components.docReady.push(f.Plugins.validform),f.Plugins.submitform=function(){var a=b(".genox-form");if(!b().validate&&!b().ajaxSubmit)return console.log("jQuery Form and Form Validate not Defined."),!0;a.exists()&&a.each(function(){var a=b(this),t=a.find(".form-results");a.validate({ignore:[],invalidHandler:function(){t.slideUp(400)},submitHandler:function(s){t.slideUp(400),b(s).ajaxSubmit({target:t,dataType:"json",success:function(a){var e="error"===a.result?"alert-danger":"alert-success";t.removeClass("alert-danger alert-success").addClass("alert "+e).html(a.message).slideDown(400),"error"!==a.result&&b(s).clearForm().find("input").removeClass("input-focused")}})}}),a.find(".select").on("change",function(){b(this).valid()})})},f.components.docReady.push(f.Plugins.submitform),f.Plugins.popup=function(){var a=b(".content-popup"),e=b(".video-popup"),s=b(".image-popup"),t={content_popup:function(){a.exists()&&a.each(function(){b(this).magnificPopup({type:"inline",preloader:!0,removalDelay:400,mainClass:"mfp-fade content-popup"})})},video_popup:function(){e.exists()&&e.each(function(){b(this).magnificPopup({type:"iframe",removalDelay:160,preloader:!0,fixedContentPos:!1,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}}})})},image_popup:function(){s.exists()&&s.each(function(){b(this).magnificPopup({type:"image",mainClass:"mfp-fade image-popup"})})}};t.content_popup(),t.video_popup(),t.image_popup()},f.components.docReady.push(f.Plugins.popup),f.Plugins.twitterfeed=function(){var a="tweets_feed";if(b("#"+a).exists()){var e={profile:{screenName:"envato"},domId:a,maxTweets:3,enableLinks:!0,showUser:!1,showRetweet:!0,showInteraction:!1,showTime:!0};twitterFetcher.fetch(e)}},f.components.winLoad.push(f.Plugins.twitterfeed),f.Plugins.datepicker=function(){b(".datepicker").datepicker()},f.components.winLoad.push(f.Plugins.datepicker),f.Plugins.lineanimate=function(){b(".line-animate").addClass("active")},f.components.winLoad.push(f.Plugins.lineanimate),f.Plugins.filterz=function(){var a=b(".project"),e=b(".project-filter li");a.each(function(){var a=b(this),e=a.data("layout")?a.data("layout"):"packed";b(this).filterizr({layout:e})}),e.on("click",function(){e.removeClass("active"),b(this).addClass("active")})},f.components.winLoad.push(f.Plugins.filterz),f.Plugins.videoBG=function(){var a=b(".bg-video");a.exists()&&a.each(function(){var a=b(this),e=a.parent(),s=a.data("overlay"),t=a.data("opacity"),i=a.data("video"),o=a.data("cover"),n=!(void 0===s||!s)&&s,l=!(void 0===t||!t)&&t,r=!(void 0===o||!o)&&o;e.hasClass("has-bg-video")||e.addClass("has-bg-video"),n?a.hasClass("overlay-"+n)||(a.addClass("overlay"),a.addClass("overlay-"+n)):a.hasClass("overlay-fall")||a.addClass("overlay-fall"),l&&a.addClass("overlay-opacity-"+l),r&&f.getStatus.isTouch&&f.getStatus.isMobile&&(a.addClass("cover-enabled"),a.append('<div class="bg-video-cover" style="background-image:url('+r+')"></div>')),a.hasClass("bg-video-youtube")&&!a.hasClass("cover-enabled")&&a.YTPlayer({fitToBackground:!0,videoId:i,callback:function(){console.clear()}})})},f.components.docReady.push(f.Plugins.videoBG),c.on("resize",function(){f.components.docReady.push(f.Plugins.videoBG)}),f.promoPanel=function(){var a=f.getStatus.isRTL?"../images":"./images";b(".promo-sidebar-trigger").on("click",function(a){a.preventDefault(),b(".promo-sidebar").toggleClass("active")});var e=b(".promo-btn"),s=e.innerHeight();e.next().css("margin-top",s)},f.components.winLoad.push(f.promoPanel),f.colorPanel=function(){var i=b(".color-trigger");function o(a,i){a.each(function(){var a=b(this),e=a.children("img").attr("src").split("/"),s=e[e.length-1].split("."),t="old"==i?s[0]:"alt-"+s[0];a.css("background-image",'url("images/'+t+'.jpg")')})}0<i.length&&i.on("click",function(a){var e=b(this),s=e.attr("title"),t=b(".change-bg");if(e.hasClass("current"))return!1;i.removeClass("current"),e.addClass("current"),b("body").fadeOut(function(){e.hasClass("style-blue")||e.hasClass("style-purple")?o(t,"new"):o(t,"old"),b("#color-sheet").attr("href","assets/css/"+s+".css"),b(this).delay(300).fadeIn()}),a.preventDefault()})},f.components.winLoad.push(f.colorPanel)}(NioApp,jQuery,window,document);