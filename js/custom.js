	/*Custom j-query Code for custom design. design by Abu Bin Oalid(http://www.oalid-cse.cf)*/
	$(document).ready(function(){
			/*left side menu color change on hover*/
			$(".left_menu ul li a").hover(function(){
					$(this).parent().css({"background-color" : "#0C74D2", "border-left" : "5px solid #FF9809"});
					}, function(){
					$(".left_menu ul li").css({"background-color" : "transparent", "border-left" : "5px solid #0B579A"});
			});
			
			/*right side menu color change on hover*/
			$(".right_menu ul li a").hover(function(){
					$(this).parent().css({"background-color" : "#0C74D2", "border-left" : "5px solid #FF9809"});
					}, function(){
					$(".right_menu ul li").css({"background-color" : "transparent", "border-left" : "5px solid #0B579A"});
			});
			
			/*main content background color select with border*/
			$(".main_content").parent().parent().css({"background-color": "#7ad1af33" , "border": "2px solid #47d49d80"});
			
			/*desable logo row margin*/
			$(".logo").parent().css({"margin-left": "0" , "margin-right": "0"});
			
			/*stop marquee on hover */
			$(".latest_news marquee").hover(function () { 
					this.stop();
			}, function () {
					this.start();
			});
			
			/*dropdown menu dynamic top select*/
			var menu_ul_height = $(".menu>ul").height();
			var top_height = menu_ul_height-2;
			$(".menu ul li ul").css({
							top: top_height + 'px'
				});
			
			/*mobile menu*/
			$(".mob_menu_btn").click(function(){
				$("#res_menu").slideToggle();
				$("#res_menu").css({"visibility":"visible"});
			})
			$(".submenu").click(function(){
				$("#res_menu ul li ul").slideToggle();
				$("#res_menu ul li ul").css({"visibility":"visible"});
				
			})
			
			var wsize = $(window).width();
			if(wsize > 800){
			$(".mob_menu_btn").hide();
			$("div#res_menu").removeClass("mob_menu");			
			$("div#res_menu").addClass("menu");
			$("div.menu").css({"display":"block"});			
			}
			if(wsize < 800){
			$(".mob_menu_btn").show();
			$("div#res_menu").removeClass("menu");			
			$("div#res_menu").addClass("mob_menu");	
			$("div.mob_menu").css({"display":"none"});		
			}
			$(window).on('resize', function(){
				if($(this).width() > 800){
				$(".mob_menu_btn").hide();
				$("div#res_menu").removeClass("mob_menu");			
				$("div#res_menu").addClass("menu");		
				$("div.menu").css({"display":"block"});
				}
				if($(this).width() < 800){
				$(".mob_menu_btn").show();
				$("div#res_menu").removeClass("menu");			
				$("div#res_menu").addClass("mob_menu");		
				$("div.mob_menu").css({"display":"none"});	
				}
			});
			
	});
