
$(document).ready(function() {
    
  
    // index loading
   // $('#loading').fadeOut(30000);
  // $("#sidebar-nav").css("visibility", "visible");
   //$("#sidebar-nav").css('visibility','visible').hide().fadeIn(2500);
   
    
   //recent updates plugin dynatable
   if ($('h1:contains("Recent Updates")').length){
       $('#recentUpdates').dynatable({
           table: {
               defaultColumnIdStyle: 'camelCase'
           },
           dataset: {
               perPageDefault: 20,
               perPageOptions: [10, 20, 50, 100, 200, 500, 1000,2000],
               sorts: { 'date': -1 }
           },
           features: {
               pushState: false
           },
           inputs: {
               searchText: "Search All Fields",
               perPageText: "Results Per Page"
           }
       });
     //endif
     }
       //end doc ready function  
     });
   
   $(window).on('load', function() {
   
                   //Prevent FOUC as best we can
                   $("body").addClass("fadeIn");
                   //$('body.full-width.fadeIn.index.web').fadeIn(8000);
              
                   //Table alterations
                   /*$('td p').replaceWith
                   (
                       function() { return $(this).contents(); }
                   );*/
                   $('th p').replaceWith
                   (
                       function() { return $(this).contents(); }
                   );
   
   
                   //numbers in tables left column, bold and centered
                   $("td:first-child").each(function() {
                   var el = $(this);
                   var value = (el.text());
                   // el.replaceWith(value);
                   /* Not sure why this has to be filtered thru html twice to work, but it does... the para tag inside the table? ?!??!*/
   
                   //if ($(value.match('^[0-9 -()+ \/]+$'))) {
                   if ( /^\s*\d[\d,\.\+\-]{0,4}\s*$/.test(value) ) {
                   //  if ( /^[0-9/.\-\+]{1,5}$/.test(value) ) {  
                   // if ($.isNumeric(value)) {  
                   //   el.replaceWith(value);
                   el.css("font-weight", "bold").addClass("tablenumber");
                           
                   } else {
                       // el.css("font-weight", "normal");
                   }
   
                   $('td[colspan]').addClass("colspan");
   
                   $('ul li h3 a:contains("Procedure")').addClass('procedure');
                   $('ul li h3 a:contains("Overview")').addClass('overview');
                   $('ul li h3 a:contains("Policy")').addClass('policy');
                   $('ul li h3 a:contains("Help")').addClass('help');
                   
                 
                  
   });  
   
   
   
   
   /******************checkbox legend
    * *****************************
    */
   var legend = '<ul id="filter" class ="legend"><li><span class = "policy">=Policy </span><input type="checkbox" value="policy" id="policy" /> </li><li><span class = "procedure">=Procedure </span><input type="checkbox" value="procedure" id="procedure" /></li><li><span class = "help">=Help </span><input type="checkbox" value="help" id="help" /></li><li><span class = "overview">=Overview </span><input type="checkbox" value="overview" id="overview" /></li></ul><div class ="clearfix"></div>';
   $('#sidebar-nav').prepend($(legend)) ;
   $('h1:contains("Index Lists")').closest('body').addClass('index');
   $('.index #topic-content h1').after($(legend)) ;
   /******************** checkbox storage 
    * ***********
   */
   //session data 
   var checkboxValues = JSON.parse(sessionStorage.getItem('checkboxValues')) || {};
   var $checkboxes = $("#filter :checkbox");
   
   //Checkboxes session on clicks 
   $checkboxes.on("change", function(){
     $checkboxes.each(function(){
       checkboxValues[this.id] = this.checked;
      
       //true false
     });
   
     sessionStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    
   });
   //checkbox on load from session
   $.each(checkboxValues, function(key, value) {
       $("#" + key).prop('checked', value);
       
   });  
   //checkbox corresponds to menu on load
   function persistMenu(){
   $.each(checkboxValues, function(key, value) {
     
       var truet = key + value;
       var truekey = key;
       if(truet.includes('true') ){
                   //$('body').css('background', 'red');
                   //$("ul.nocontent.menu.mc-component.sidebar.accordion.vertical.is-active").addClass("herewego");
                   
                   $('li.is-accordion-submenu-item a').addClass("gone");
                   $("#sidebar-nav ul.sub-menu").css('display', 'list-item');
                   $("li.has-children.is-accordion-submenu-parent > a").css("background", "#c1c1c1");
                 // $('li.is-accordion-submenu-item a').css('display', 'none');
                   $("a." + truekey).addClass("persist");
                   //alert('yeehaw');
                   
            console.log ( $("li.is-accordion-submenu-item a." + truekey));
          // console.log($("li.is-accordion-submenu-item a." + truekey));
       }else{
          
           console.log('nope');
       }
       
   });   
   }
   //Main logic to change the menu when someone checks a box on a page, removes classes from the persistMenu function
   $('#filter :checkbox').click(function () {
       $('li.is-accordion-submenu-item a').removeClass("gone");
       $('li.is-accordion-submenu-item a').removeClass("persist");
   
       if ($('input:checkbox:checked').length) {
           $('li.is-accordion-submenu-item a').hide();
           $("#sidebar-nav ul.sub-menu").css('display', 'list-item');
           $("li.has-children.is-accordion-submenu-parent > a").css("background", "#c1c1c1");
           $('input:checkbox:checked').each(function () {
               $("." + $(this).val()).show();
              // $('li.is-accordion-submenu-item a[data-' + $(this).prop('name') + '*="' + $(this).val() + '"]').show();
              // $('li.is-accordion-submenu-item a[class' + $(this).prop('name') + '*="' + $(this).val() + '"]').show();
           });
       } else {
           $("li.is-accordion-submenu-item a").show();
           $("#sidebar-nav ul.sub-menu").css('display', 'none');
           $(".has-children.is-accordion-submenu-parent[aria-expanded='true'] ul.sub-menu").css('display', 'list-item');
           $("li.has-children.is-accordion-submenu-parent > a").css("background", "#dfe7eb");
           $('li.is-accordion-submenu-parent[aria-expanded="true"] > a ').css("background", "#eff3f5");
           
       }
   });
   /*Wait for menu to load and then apply checkbox session to it */
   function waitForElement(elementPath, callBack){
       window.setTimeout(function(){
         if($(elementPath).length){
           callBack(elementPath, $(elementPath));
         }else{
           waitForElement(elementPath, callBack);
         }
       },500)
     }
     waitForElement("ul.nocontent.menu.mc-component.sidebar.accordion.vertical.is-active", function(){
      // alert("got menu");
       
       persistMenu();
   });
   /*remove highlight from revsion table */
   //$("#sidebar-nav").css('z-index','1000');
   $(".revdoc-title").remove();
   $("#sidebar-nav").hide().fadeIn(3000,  function(){
         $("#sidebar-nav").css('z-index','1');
   });
   $("#menucol-1").hide().fadeIn(3000);
   $("#menucol-2").hide().fadeIn(3000);
   $("#menucol-3").hide().fadeIn(3000);
  /* $('table.revision span.SystemTitle span').removeClass("SearchHighlight");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight1");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight2");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight3");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight4");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight5");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight6");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight7");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight8");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight9");
   $('table.revision span.SystemTitle span').removeClass("SearchHighlight10");*/


   });
   
   
   