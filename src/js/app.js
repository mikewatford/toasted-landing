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
      // $slide.height(winH);
      
      // Refresh Skrollr after resizing our sections
      s.refresh($('.homeSlide'));
    } else {
      var sk = skrollr.init();
      sk.destroy();
    }
  }
    
} )( jQuery );