(function($) {
    
    // Create a function to fire when your custom shortcut is triggered
    function uiEnhancements() {
      if ($('body').hasClass( 'bb-ui-enhancements' )) {
        window.localStorage.removeItem( 'bb-ui-enhancements' )
      } else {
        window.localStorage.setItem( 'bb-ui-enhancements',true );
      }
      $('body').toggleClass('bb-ui-enhancements');
    }

    $(function() { // Once the document is ready
        // Register a hook listener using the key that you registered 
        // your shortcut with along with the function it should fire.
        FLBuilder.addHook('BBUIEnhancements', uiEnhancements );
    });

    $(document).ready( function() {
      if (window.localStorage.getItem( 'bb-ui-enhancements' )) $('body').addClass('bb-ui-enhancements');
    });

})(jQuery);
