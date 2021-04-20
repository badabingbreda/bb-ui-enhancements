(function($) {
    // Create a function to fire when your custom shortcut is triggered
    function outlineObjects() {
      $('body').toggleClass('matts-make-my-day');
    }
    $(function() { // Once the document is ready
        // Register a hook listener using the key that you registered 
        // your shortcut with along with the function it should fire.
        FLBuilder.addHook('outlineObjects', outlineObjects );
    });
})(jQuery);