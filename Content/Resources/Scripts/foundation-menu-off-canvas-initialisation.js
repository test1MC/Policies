

$(document).ready(function(){
	//$("#nav-drilldown, #nav-accordion").css("visibility", "hidden");
	$(".revdoc-title").remove();
	$("body").addClass('no-js');
					
//	$("body.full-width").on("loaded", function () { 
			
		$("ul._Skins_Bucket1").on("loaded", function () { 	 
				$("ul._Skins_Bucket1").addClass("bucket1").addClass("accordion");
				$(".mc-component.accordion").removeClass("_Skins_Bucket1");
				$(".bucket.accordion").addClass("menu vertical");
				$(".mc-component.accordion li ul.submenu").addClass("nested");
				$(".mc-component.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true").attr("data-accordion='one' ");
				replaceClass();
				$('ul.bucket1').foundation();
			});
		

			$("ul._Skins_Bucket2").on("loaded", function () { 	 
				$("ul._Skins_Bucket2").addClass("bucket2").addClass("accordion");
				$(".mc-component.accordion").removeClass("_Skins_Bucket2");
				$(".bucket.accordion").addClass("menu vertical");
				$(".mc-component.accordion li ul.submenu").addClass("nested");
				$(".mc-component.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true").attr("data-accordion='two' ");
				replaceClass();
				$("ul.bucket2").foundation();
			}); 

			$("ul._Skins_Bucket3").on("loaded", function () { 	 
				$("ul._Skins_Bucket3").addClass("bucket3").addClass("accordion");
				$(".mc-component.accordion").removeClass("_Skins_Bucket3");
				$(".bucket.accordion").addClass("menu vertical");
				$(".mc-component.accordion li ul.submenu").addClass("nested");
				$(".mc-component.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true").attr("data-accordion='two' ");
				replaceClass();
				$('ul.bucket3').foundation();
			}); 
		/*	replaceClass();
			$(document).foundation();
		});*/
		Foundation.reInit($('.accordion'));	
	
	
	$("ul._Skins_IndexMenu").on("loaded", function () {
		
		$("ul._Skins_IndexMenu").each(function(index){
					
			$(this).attr('id', index+1 );
		}); 
		
		$("ul._Skins_IndexMenu ").addClass("cats").addClass("accordion");
		//$(".mc-component.accordion.cats > .submenu").parents("ul").addClass("is-active");
		//$(".mc-component.accordion.cats").addClass("nested").addClass("menu vertical").attr("data-drilldown", "");;
		$(".mc-component.accordion.cats").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");
		$(".mc-component.accordion.cats ul.submenu").addClass("nested");
		
		replaceClass();
		//$(".accordion").foundation('_destroy');
		
	
	//	$(".accordion").foundation();
		/*$('ul#1').foundation('_destroy');
		$('ul#2').foundation('_destroy');
		$('ul#3').foundation('_destroy');
		$('ul#4').foundation('_destroy');
		$('ul#5').foundation('_destroy');
		$('ul#6').foundation('_destroy');
		$('ul#7').foundation('_destroy');
		$('ul#8').foundation('_destroy');*/
		/*var ul1 = new Foundation.Accordion($("ul#1"));
		var ul2 = new Foundation.Accordion($("ul#2"));
		var ul3 = new Foundation.Accordion($("ul#3"));
		var ul4 = new Foundation.Accordion($("ul#4"));
		var ul5 = new Foundation.Accordion($("ul#5"));
		var ul6 = new Foundation.Accordion($("ul#6"));
		var ul7 = new Foundation.Accordion($("ul#7"));
		var ul8 = new Foundation.Accordion($("ul#8"));*/
	

		$('ul#1._Skins_IndexMenu').foundation();
		$('ul#2._Skins_IndexMenu').foundation();
		$('ul#3._Skins_IndexMenu').foundation();
		$('ul#4._Skins_IndexMenu').foundation();
		$('ul#5._Skins_IndexMenu').foundation();
		$('ul#6._Skins_IndexMenu').foundation();
		$('ul#7._Skins_IndexMenu').foundation();
		$('ul#8._Skins_IndexMenu').foundation();
		$('ul#9._Skins_IndexMenu').foundation();
		$('ul#10._Skins_IndexMenu').foundation();
		$('ul#11._Skins_IndexMenu').foundation();
		$('ul#12._Skins_IndexMenu').foundation();
		$('ul#13._Skins_IndexMenu').foundation();
		$('ul#14._Skins_IndexMenu').foundation();
		$('ul#15._Skins_IndexMenu').foundation();
		$('ul#16._Skins_IndexMenu').foundation();
		$('ul#17._Skins_IndexMenu').foundation();
		$('ul#18._Skins_IndexMenu').foundation();
		$('ul#19._Skins_IndexMenu').foundation();
		$('ul#20._Skins_IndexMenu').foundation();
		$('ul#21._Skins_IndexMenu').foundation();
		$('ul#22._Skins_IndexMenu').foundation();
		$('ul#23._Skins_IndexMenu').foundation();
		$('ul#24._Skins_IndexMenu').foundation();
		$('ul#25._Skins_IndexMenu').foundation();
		$('ul#26._Skins_IndexMenu').foundation();
		
		//Foundation.reInit($('.accordion'));
	/*	$('ul#1._Skins_IndexMenu').fadeIn(600);
		$('ul#2._Skins_IndexMenu').fadeIn(800);
		$('ul#3._Skins_IndexMenu').fadeIn(1000);
		$('ul#4._Skins_IndexMenu').fadeIn(800);
		$('ul#5._Skins_IndexMenu').fadeIn(1000);
		$('ul#6._Skins_IndexMenu').fadeIn(600);
		$('ul#7._Skins_IndexMenu').fadeIn(800);
		$('ul#8._Skins_IndexMenu').fadeIn(1000);*/
	
	});

	$("ul._Skins_SidebarMenu").on("loaded", function () { 
		
		$("ul._Skins_SidebarMenu").addClass("sidebar").addClass("accordion");
		$(".mc-component.accordion").removeClass("_Skins_SidebarMenu");
		//$("#nav-accordion ul.sub-menu").addClass("menu vertical");
		$(".mc-component.accordion").addClass("menu vertical");
		$("#sidebar-nav .selected").parents("ul").addClass("is-active");
		$(".mc-component.accordion ul.sub-menu").addClass("nested");
		
		$(".mc-component.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");
		replaceClass();
		$(".mc-component.accordion.sidebar").foundation();
	});

	//$(document).foundation();
	function replaceClass(){
		/* written for Sherwin, not just for the menu, has to run before Foundation initializes!*/

		$('li.tree-node-leaf a:contains("Procedure")').addClass('procedure');
		$('li.tree-node-leaf a:contains("Overview")').addClass('overview');
		$('li.tree-node-leaf a:contains("Policy")').addClass('policy');
		$('li.tree-node-leaf a:contains("Help")').addClass('help');
		$('h1:contains("Procedure")').addClass('procedure');
		$('h1:contains("Procedure")').closest('body').addClass('print');
		$('h1:contains("Overview")').addClass('overview');
		$('h1:contains("Policy")').addClass('policy');
		$('h1:contains("Help")').addClass('help');

	/*menu alteration has to be called before .foundation()*/
	$('li.tree-node-leaf a').each(function() {
		var text = $(this).text();
		//$(this).html($(this).html().replace('Procedure', 'Policy', 'Overview', 'Help').replace('', '', '', ''));
		$(this).text(text.replace('Procedure', '')); 
		/*$(this).text(text.replace('Policy', '')); 
		$(this).text(text.replace('Overview', ''));
		$(this).text(text.replace('Help', '')); */
	});
	$('li.tree-node-leaf a').each(function() {
		var text = $(this).text();
		//$(this).html($(this).html().replace('Procedure', 'Policy', 'Overview', 'Help').replace('', '', '', ''));
		//$(this).text(text.replace('Procedure', '')); 
		$(this).text(text.replace('Policy', '')); 
		/*$(this).text(text.replace('Overview', ''));
		$(this).text(text.replace('Help', '')); */
	});
	$('li.tree-node-leaf a').each(function() {
		var text = $(this).text();
		//$(this).html($(this).html().replace('Procedure', 'Policy', 'Overview', 'Help').replace('', '', '', ''));
		/*$(this).text(text.replace('Procedure', '')); 
		/*$(this).text(text.replace('Policy', ''));*/ 
		$(this).text(text.replace('Overview', ''));
		//$(this).text(text.replace('Help', '')); 
	});
	$('li.tree-node-leaf a').each(function() {
		var text = $(this).text();
		//$(this).html($(this).html().replace('Procedure', 'Policy', 'Overview', 'Help').replace('', '', '', ''));
		/*$(this).text(text.replace('Procedure', '')); 
		/*$(this).text(text.replace('Policy', '')); 
		$(this).text(text.replace('Overview', ''));*/
		$(this).text(text.replace('Help', '')); 
	});
}


//home menu the only menu on the page and needs to be called by foundation 
		$("#home-dropdown").foundation();
		$("#page-dropdown").foundation();
	/*	setTimeout(function() {
			$("#sidbar-nav, #nav-accordion").css("visibility", "visible");
		  }, 00); */
	
	
	

});

				
				/* Foundation menu initialisation for accordion and drilldown menus */
				/* By David Lee 2016 - http://ukauthor.wordpress.com/ */
				/* --- */
				/* Uses Foundation 6.2.1 */
				/* Download:       http://foundation.zurb.com/sites/download.html/ */
				/* Drilldown menu: http://foundation.zurb.com/sites/docs/drilldown-menu.html */
				/* Accordion menu: http://foundation.zurb.com/sites/docs/accordion-menu.html */		
				/* Off-canvas:     http://foundation.zurb.com/sites/docs/off-canvas.html */
				/* Icon fonts:     http://foundation.zurb.com/icon-fonts.html */

				
			//	$("#nav-accordion ul.nocontent.menu").removeClass("_Skins_Menu");
			//	$(".mc-component.accordion").removeClass("_Skins_Menu");
			//	$("ul._Skins_Bucket1").addClass("bucket").addClass("accordion");
				//$("ul._Skins_Bucket2").addClass("bucket").addClass("accordion");
			//	$("ul._Skins_IndexMenu ").addClass("cats").addClass("accordion");
				//$("ul._Skins_SidebarMenu").addClass("sidebar").addClass("accordion");
				//$(".mc-component.accordion").removeClass("_Skins_Bucket1");
				//$(".mc-component.accordion").removeClass("_Skins_Bucket2");
				//$(".mc-component.accordion").removeClass("_Skins_IndexMenu");
				//$(".mc-component.accordion").removeClass("_Skins_SidebarMenu");
				//$("ul.bucket").removeClass("mc-component");
				/*don't think I need this anymore
				$("ul.bucket").each(function(index){
					
					$(this).attr('id', index+1 );
				});
				
				/* Remove (most of) Flare's menu formatting from the skin. You need to remove the '_Skins_[menu filename]' class, so if your menu skin filename is 'Menu' the class is '_Skins_Menu'. Some of the menu skin styles are hard-coded by Flare, but you can override these in the CSS. */

			//	$("#nav-accordion ul.sub-menu").addClass("menu vertical");
			//	$(".mc-component.accordion").addClass("menu vertical");
			//	$(".bucket.accordion").addClass("menu vertical");
				/* Here we add the Foundation 'menu' and 'vertical' classes to all the Flare 'sub-menu' classes in accordion menu. */
		
				//$("#sidebar-nav .selected").parents("ul").addClass("is-active");
				//$(".mc-component.accordion.cats > .submenu").parents("ul").addClass("is-active");
				//$(".mc-component.accordion.sidebar > .submenu").parents("ul").addClass("is-active");
				/* To automatically open the accordion on page load and show the current topic, the 'is-active' class needs to be set on each parent ul tag. Flare indicates the current topic with the 'selected' class, so we can use that to find the current item, then add the 'is-active' class to all its parents. */
				
				//$("#nav-accordion>ul").clone().appendTo("#nav-drilldown");
				//".mc-component.accordion").
				/* Now we've configured most of the accordion menu, we need to duplicate (clone) the menu to use it in the off-canvas drilldown menu too. This clones the menu inside the #nav-accordion container, and appends it to the empty #nav-drilldown container. */
		
			//	$("#nav-accordion ul.sub-menu").addClass("nested");
			//	$(".mc-component.accordion").addClass("nested");
				//$(".bucket.accordion").addClass("nested");
				/* For the accordion menu (only), we want each level to be indented. We find the Flare 'sub-menu' class, and add the Foundation 'nested' class to indent. This is done after the clone above because it's only for the accordion, not the drilldown. */
		
		
			//	$("#nav-accordion>ul").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");
			//	$(".mc-component.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");
				//$(".bucket.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");
				/* Set Foundation styles for accordion menu (the top level ul) - add attributes data-accordion-menu="" and data-multi-open="true" */
		
				//$("#nav-drilldown>ul").addClass("menu vertical").attr("data-drilldown", "");
			//	$(".mc-component.accordion").addClass("menu vertical").attr("data-drilldown", "");
				/* Set Foundation styles for drilldown (off-canvas) menu (the top level ul) - add attributes data-drilldown="" */
				/* This must come after the menu is cloned */		
	
				/*$("#nav-drilldown, #nav-accordion").css("display", "block");
				$(".mc-component.accordion").css("display", "block");*/
				/* Set menus to be visible. They are initially hidden in the CSS, to prevent FOUC (flash of unstyled content). The menus can initially appear unformatted before all scripts have run, which was evident in Chrome browser especially. So we hide the menus in the CSS, and then display them in the script (using display:block), after they have been manipulated.  */
				/* This must come last */
			//	$("ul.bucket").addClass("is-active").attr("role","tablist");
			//	$("ul.bucket > li").attr("role","tab");
				//keeps the first level menu items open! FINALLY!
				//$("ul.bucket > li > ul").css("display","list-item").attr("aria-expanded","true");
				//$("ul.bucket > li > ul").attr("aria-expanded","true");
				//$("ul.bucket > li > ul").removeClass("is-accordion-submenu sub-menu submenu");
				//$("ul.bucket > li > ul").removeAttr("data-submenu");
				//$("ul.bucket >is-accordion-submenu-parent").attr("aria-expanded","true");
					

				
				/* christina's changes notes on top rather than under the code
					May 2018  chmcreative.com*/
				
				/* written for Sherwin, not just for the menu, has to run before Foundation initializes!*/

			
				/*Creating a multilevel accordion ala  https://foundation.zurb.com/building-blocks/blocks/accordion.html  
				using the previous css changes to alter the behavior*/
				
				/*$("[data-mc-linked-toc='Data/Tocs/COE.js']").removeClass("nocontent").addClass('topic-combo');
				$("[data-mc-linked-toc='Data/Tocs/POS.js']").removeClass("nocontent").addClass('topic-combo');
				$("[data-mc-linked-toc='Data/Tocs/Human_Resources.js']").removeClass("nocontent").addClass('topic-combo');
				$("[data-mc-linked-toc='Data/Tocs/Inventory.js']").removeClass("nocontent").addClass('topic-combo');
				$("[data-mc-linked-toc='Data/Tocs/Kronos.js']").removeClass("nocontent").addClass('topic-combo');
				$("[data-mc-linked-toc='Data/Tocs/Loss_Prevention.js']").removeClass("nocontent").addClass('topic-combo');
				$("[data-mc-linked-toc='Data/Tocs/Merchandise.js']").removeClass("nocontent").addClass('topic-combo');
				$("[data-mc-linked-toc='Data/Tocs/Shipping_Delivery.js']").removeClass("nocontent").addClass('topic-combo');
				$("[data-mc-linked-toc='Data/Tocs/Store_Maintenance.js']").removeClass("nocontent").addClass('topic-combo');*/

				//$("ul._Skins_Test_for_Bucket_Menus").removeClass("nocontent").addClass('topic-combo');
				//$("ul._Skins_Test_for_Bucket_Menus").removeClass("nocontent").addClass('topic-combo');
				/*$(".nocontent.menu").addClass("accordion");
				$(".nocontent.menu ul.submenu").addClass("menu vertical");
				$(".nocontent").attr("data-accordion-menu", "data-accordion-menu");
				$(".topic-combo.menu ul.submenu").addClass("menu vertical");
				$('.topic-combo.menu').addClass("accordion");
				$('ul.menu._Skins_Test_for_Bucket_Menus.mc-component').addClass("is-active");
				//$('ul.menu.topic-combo.mc-component ul > li.has-children > a').addClass("chm");
				$('.sub-menu.submenu.is-accordion-submenu.menu.vertical').addClass("open-accord");
				$('ul._Skins_Test_for_Bucket_Menus .open-accord').addClass("is-active");*/

				//$(document).foundation();
				//var elem1 = new Foundation.AccordionMenu('ul#2');
				/*$('ul#2 ').foundation('down', $('ul.bucket li.is-accordion-submenu-parent'));
				$('ul#1 ').foundation('down', $('ul.bucket li.is-accordion-submenu-parent'));*/
				//Foundation.reInit($('[accordion]'));
				//Foundation.reInit(['ul#2'])
				//Foundation.reInit($("ul#2"));
				//Foundation.reInit($("ul#1"));
				//	$('ul.bucket').foundation();
				/* initialise Foundation on the whole document
				//$("ul._Skins_Bucket1").on("loaded", function () { 	 
		$("ul._Skins_Bucket1").addClass("bucket").addClass("accordion");
		$(".mc-component.accordion").removeClass("_Skins_Bucket1");
		$(".bucket.accordion").addClass("menu vertical");
		$(".mc-component.accordion").addClass("nested");
		$(".mc-component.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");
		replaceClass();
		//$(document).foundation();
//	});

new try old here:
	$("ul._Skins_Bucket2").on("loaded", function () { 	 
		$("ul._Skins_Bucket2").addClass("bucket").addClass("accordion");
		$(".mc-component.accordion").removeClass("_Skins_Bucket2");
		$(".bucket.accordion").addClass("menu vertical");
		$(".mc-component.accordion").addClass("nested");
		$(".mc-component.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");
		replaceClass();
		//$(document).foundation();
	}); 

	$("body.full-width").on("loaded", function () { 
		$("ul._Skins_Bucket1").addClass("bucket").addClass("accordion");
		$("ul._Skins_Bucket2").addClass("bucket").addClass("accordion");
		$(".mc-component.accordion").removeClass("_Skins_Bucket1");
		$(".mc-component.accordion").removeClass("_Skins_Bucket2");
		$(".bucket.accordion").addClass("menu vertical");
		$(".mc-component.accordion").addClass("nested");
		$(".mc-component.accordion").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");	 
		replaceClass();
		$(document).foundation();
	});*/