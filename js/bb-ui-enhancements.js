(function($) {
    
    // Create a function to fire when custom shortcut is triggered
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

    function addBeaverXray() {
      
      // create new element
      const beaverXray = document.createElement( 'img' );
      // use our localized variable to get the correct foldername
      beaverXray.setAttribute( 'src' , bbuie.pluginFolder + 'images/beaver-xray.png' );
      beaverXray.classList.add( 'xray' );
      // add default class to original logo
      document.querySelector( '.fl-builder-bar-title-icon img' ).classList.add( 'default' );
      // select TitleIcon area and append beaverXray image
      const barTitleIcon = document.querySelector( '.fl-builder-bar-title-icon' );
      barTitleIcon.appendChild( beaverXray );

    }

    function addEnhanceButton() {

      // xray svg icon
      const xray = {
        svg : `<svg width="28" height="28" viewBox="0 0 14 14" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="enhance" x="0" y="0" width="14" height="14" style="fill:none;"/><path d="M11.678,5.046c-0.225,-0.611 -0.728,-1.063 -1.249,-1.233c-0.241,-0.078 -0.509,-0.014 -0.69,0.166l-7.04,7.041c-0.187,0.186 -0.249,0.467 -0.157,0.714c0.209,0.569 0.655,1.015 1.224,1.224c0.247,0.092 0.528,0.03 0.714,-0.157c0.536,-0.535 6.507,-6.506 7.041,-7.04c0.186,-0.186 0.248,-0.467 0.157,-0.715Zm-0.449,0.165c0.027,0.074 0.008,0.156 -0.046,0.211l-1.241,1.241c-0.054,0.044 -0.129,0.057 -0.196,0.033c-0.437,-0.161 -0.779,-0.504 -0.94,-0.941c-0.027,-0.073 -0.009,-0.156 0.046,-0.211c1.324,-1.325 1.233,-1.24 1.273,-1.262c0.032,-0.012 0.081,-0.039 0.159,-0.013c0.397,0.136 0.774,0.48 0.945,0.942Zm-7.087,7.252c-0.055,0.055 -0.138,0.073 -0.211,0.046c-0.437,-0.161 -0.779,-0.503 -0.94,-0.94c-0.027,-0.073 -0.009,-0.156 0.046,-0.211l5.353,-5.353c0.209,0.5 0.605,0.896 1.104,1.106l-5.352,5.352Z" style="fill-rule:nonzero;"/><path id="module" d="M5.881,5.409c0.279,0.08 0.494,0.294 0.573,0.573c0.088,0.306 0.523,0.307 0.61,0c0.08,-0.279 0.294,-0.493 0.574,-0.573c0.306,-0.087 0.306,-0.522 -0,-0.61c-0.28,-0.08 -0.494,-0.294 -0.574,-0.574c-0.087,-0.305 -0.522,-0.306 -0.61,0c-0.079,0.28 -0.294,0.494 -0.573,0.574c-0.306,0.087 -0.307,0.522 -0,0.61Zm0.878,-0.705c0.103,0.161 0.239,0.297 0.4,0.4c-0.161,0.102 -0.297,0.239 -0.4,0.4c-0.102,-0.161 -0.239,-0.298 -0.4,-0.4c0.161,-0.103 0.298,-0.239 0.4,-0.4Z" /><path id="row" d="M6.608,2.731c0.496,0.141 0.877,0.522 1.018,1.017c0.1,0.351 0.599,0.352 0.699,0c0.142,-0.495 0.522,-0.876 1.018,-1.017c0.351,-0.1 0.352,-0.599 -0,-0.7c-0.496,-0.141 -0.876,-0.521 -1.018,-1.017c-0.1,-0.351 -0.599,-0.352 -0.699,-0c-0.141,0.496 -0.522,0.876 -1.018,1.017c-0.351,0.1 -0.351,0.599 0,0.7Zm1.368,-1.29c0.194,0.415 0.524,0.746 0.94,0.94c-0.416,0.194 -0.746,0.525 -0.94,0.94c-0.194,-0.415 -0.525,-0.746 -0.94,-0.94c0.415,-0.194 0.746,-0.525 0.94,-0.94Z" /><path id="column" d="M3.704,3.819c0.373,0.106 0.66,0.392 0.766,0.766c0.093,0.325 0.556,0.326 0.649,-0c0.106,-0.374 0.392,-0.66 0.765,-0.766c0.326,-0.093 0.327,-0.556 0,-0.649c-0.373,-0.106 -0.659,-0.393 -0.765,-0.766c-0.093,-0.325 -0.556,-0.326 -0.649,0c-0.106,0.373 -0.393,0.66 -0.766,0.766c-0.325,0.093 -0.326,0.556 0,0.649Zm1.09,-0.952c0.145,0.265 0.362,0.482 0.627,0.627c-0.265,0.145 -0.482,0.362 -0.627,0.627c-0.145,-0.265 -0.362,-0.482 -0.627,-0.627c0.265,-0.145 0.482,-0.362 0.627,-0.627Z" /><path d="M4.949,9.883c-0.132,-0 -0.239,0.107 -0.239,0.239c-0,0.132 0.107,0.239 0.239,0.239l0.001,0c0.132,0 0.239,-0.107 0.239,-0.239c-0,-0.132 -0.108,-0.239 -0.24,-0.239Z" style="fill-rule:nonzero;"/><path d="M4.178,10.56l-0.573,0.578c-0.093,0.094 -0.092,0.245 0.002,0.338c0.093,0.093 0.245,0.093 0.338,-0.001l0.573,-0.578c0.093,-0.094 0.092,-0.245 -0.002,-0.338c-0.094,-0.093 -0.245,-0.092 -0.338,0.001Z" style="fill-rule:nonzero;"/><path id="modulesolid" d="M5.881,5.409c0.279,0.08 0.494,0.294 0.573,0.573c0.088,0.306 0.523,0.307 0.61,0c0.08,-0.279 0.294,-0.493 0.574,-0.573c0.306,-0.087 0.306,-0.522 -0,-0.61c-0.28,-0.08 -0.494,-0.294 -0.574,-0.574c-0.087,-0.305 -0.522,-0.306 -0.61,0c-0.079,0.28 -0.294,0.494 -0.573,0.574c-0.306,0.087 -0.307,0.522 -0,0.61Z" /><path id="rowsolid" d="M6.608,2.731c0.496,0.141 0.877,0.522 1.018,1.017c0.1,0.351 0.599,0.352 0.699,0c0.142,-0.495 0.522,-0.876 1.018,-1.017c0.351,-0.1 0.352,-0.599 -0,-0.7c-0.496,-0.141 -0.876,-0.521 -1.018,-1.017c-0.1,-0.351 -0.599,-0.352 -0.699,-0c-0.141,0.496 -0.522,0.876 -1.018,1.017c-0.351,0.1 -0.351,0.599 0,0.7Z" /><path id="columnsolid" d="M3.704,3.819c0.373,0.106 0.66,0.392 0.766,0.766c0.093,0.325 0.556,0.326 0.649,-0c0.106,-0.374 0.392,-0.66 0.765,-0.766c0.326,-0.093 0.327,-0.556 0,-0.649c-0.373,-0.106 -0.659,-0.393 -0.765,-0.766c-0.093,-0.325 -0.556,-0.326 -0.649,0c-0.106,0.373 -0.393,0.66 -0.766,0.766c-0.325,0.093 -0.326,0.556 0,0.649Z" /></svg>`
      }
      
      const builderBar = document.querySelector( '.fl-builder-bar-actions' );
      const builderNotifications = document.querySelector('#fl-builder-toggle-notifications');

      const enhanceToggler = document.createElement( 'div' );
      enhanceToggler.setAttribute( 'id' , 'bb-ui-enhancements' );

      const enhanceButton = document.createElement( 'button' );
      enhanceButton.setAttribute( 'href' , '#' );
      enhanceButton.setAttribute( 'class' , 'fl-builder-button fl-builder-ui-enhancements' );
      enhanceButton.innerHTML = xray.svg;

      // add button to toggler
      enhanceToggler.appendChild( enhanceButton );
      // add toggler to bar
      builderBar.insertBefore(enhanceButton , builderNotifications);

      // register listener for the button
      $( '.fl-builder-ui-enhancements' ).on( 'click' , uiEnhancements );

    }

    $(document).ready( function() {
      if (window.localStorage.getItem( 'bb-ui-enhancements' )) $('body').addClass('bb-ui-enhancements');

      if (bbuie.enhanceButton ) addEnhanceButton();
      if (bbuie.xray ) addBeaverXray();

    });

})(jQuery);
