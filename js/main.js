const PROPS={CONTAINER:"cascading-text",LETTER:"cascading-text__letter",ANIMATED:"data-animated",REPLAY:"cascading-text__replay"},texts=document.querySelectorAll(`.${PROPS.CONTAINER}`),replays=document.querySelectorAll(`.${PROPS.REPLAY}`);for(const e of replays)e.addEventListener("click",()=>{const t=e.parentElement,o=t.querySelectorAll(`.${PROPS.LETTER}`),n=[];for(const e of o){const t=new Promise((t,o)=>{e.addEventListener("animationend",()=>t())});n.push(t)}Promise.all(n).then(()=>{t.removeAttribute(PROPS.ANIMATED)}),t.setAttribute(PROPS.ANIMATED,!0)});const textListeners=[];for(const e of texts){const t=e.querySelectorAll(`.${PROPS.LETTER}`),o=[];for(const e of t){const t=new Promise((t,o)=>{e.addEventListener("animationend",()=>{t()})});o.push(t)}const n=Promise.all(o).then(()=>{Promise.resolve()});textListeners.push(n)}Promise.all(textListeners).then(()=>{for(const e of texts)e.removeAttribute(PROPS.ANIMATED)}),$(document).ready(function(){"use strict";function e(e){if($(".home").length){$(document).scrollTop();$("nav ul li a").each(function(){var e=$(this);$(e.attr("href"))})}}$(document).on("scroll",e),$('a[href^="#"]').on("click",function(t){t.preventDefault(),$(document).off("scroll"),$("a").each(function(){$(this).removeClass("active"),$(window).width()<768&&$(".nav-menu").slideUp()}),$(this).addClass("active");var o=this.hash;o=$(o),$("html, body").stop().animate({scrollTop:o.offset().top-80},500,"swing",function(){window.location.hash=o.selector,$(document).on("scroll",e)})}),$(window).scroll(function(){$(window).scrollTop()>200?($("#main-nav, #main-nav-subpage").slideDown(700),$("#main-nav-subpage").removeClass("subpage-nav")):($("#main-nav").slideUp(700),$("#main-nav-subpage").hide(),$("#main-nav-subpage").addClass("subpage-nav"))}),$(".responsive").on("click",function(e){$(".nav-menu").slideToggle()});var t=$(".typed");$(function(){t.typed({strings:["Ryan Farruggia.","A Developer.","A Software Engineer.","A Programmer.","A Student."],typeSpeed:70,loop:!0})}),$(".services-carousel").owlCarousel({autoplay:!0,loop:!0,margin:20,dots:!0,nav:!1,responsiveClass:!0,responsive:{0:{items:1},768:{items:2},900:{items:4}}});var o=$(".portfolio-container").isotope({itemSelector:".portfolio-thumbnail",layoutMode:"fitRows"});$("#portfolio-flters li").on("click",function(){$("#portfolio-flters li").removeClass("filter-active"),$(this).addClass("filter-active"),o.isotope({filter:$(this).data("filter")})});$(".popup-img").magnificPopup({type:"image",removalDelay:300,mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}}})});