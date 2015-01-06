$(document).ready(function() {

  var $j = jQuery.noConflict();

  $j('.carousel').carousel({
    interval:false
  });

  /* affix the navbar after scroll below header */
  $j('#nav').affix({
        offset: {
          top: $j('header').height()-$j('#nav').height()
        }
  });	

  /* highlight the top nav as scrolling occurs */
  $j('body').scrollspy({ target: '#nav' })

  /* smooth scrolling for scroll to top */
  $j('.scroll-top').click(function(){
    $j('body,html').animate({scrollTop:0},1000);
  })

  /* smooth scrolling for nav sections */
  $j('#nav .navbar-nav li>a').click(function(){
    var link = $j(this).attr('href');
    var posi = $j(link).offset().top;
    $j('body,html').animate({scrollTop:posi},700);
  });


  /* copy loaded thumbnails into carousel */
  $j('.panel .img-responsive').on('load', function() {
    
  }).each(function(i) {
    	var item = $j('<div class="item"></div>');
      var itemDiv = $j(this).parent('a');
      var title = $j(this).parent('a').attr("title");
      
      item.attr("title",title);
    	$j(itemDiv.html()).appendTo(item);
    	item.appendTo('#modalCarousel .carousel-inner'); 

      if (i==0){ // set first item active
        item.addClass('active');
      }
  });

  /* activate the carousel */
  $j('#modalCarousel').carousel({interval:false});

  /* change modal title when slide changes */
  $j('#modalCarousel').on('slid.bs.carousel', function () {
    //$('.modal-title').html($(this).find('.active').attr("title"));
  })

  /* when clicking a thumbnail */
  $j('.panel-thumbnail>a').on("click", function(e){
    
      e.preventDefault();
      var id = parseInt($j(this).parents('.panel').parent().index());
    
    	$j('#photoProj').modal('show'); // show the modal
      $j('#modalCarousel').carousel(id); // slide carousel to selected

    	return false;
  });
});