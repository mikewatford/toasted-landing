( function( $ ) {
  
  // Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $body = $('body');
  
    //FadeIn all sections   
  $body.imagesLoaded( function() {
    setTimeout(function() {
      // Resize sections
      adjustWindow();
      
      // Fade in sections
      $body.removeClass('loading').addClass('loaded');
        
    }, 800);
  });
  
  function adjustWindow(){
    // Get window size
    winH = $window.height();
    winW = $window.width();

    // s = skrollr.init();
    // Keep minimum height 550
    if(winH <= 550) {
      winH = 550;
    }

    // Init skrollr only at 768 and up
    if( winW >= 768 ){
      // Init skrollr
      var s = skrollr.init({
        forceHeight: false
      });
      
      // Resize slides
      $slide.height(winH);
      
      // Refresh Skrollr after resizing our sections
      s.refresh($('.homeSlide'));
    } else {
      skrollr.init().destroy();
      console.log( 'destroyed');
    }

    // Disable skrollr for touch devices
    if( Modernizr.touch ){
      skrollr.init().destroy();
      console.log( 'destroyed touch');
    }
  }

  function initAdjustWindow(){
    return {
      match   : function(){
        adjustWindow();
      },
      unmatch : function(){
        adjustWindow();
      }
    };
  }

  enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);

    
} )( jQuery );