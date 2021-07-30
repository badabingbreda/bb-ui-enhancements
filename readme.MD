# Beaver Builder UI Enhancements
### Community Plugin by Matt Eastwood / Guy Barry / Didou Schol / Marleen Kiral
---

Add extra styling when editing Beaver Builder layouts. Hit CTRL+e or CMD+e to activate/deactivate enhancements.

- Distinguishes nested columns by showing dotted outlines
- Adds a small icon to nested columns
- Highlights columns and their parents on hover
- Gives distinct colours to rows, columns and modules
- Shows all columns when hovering BB admin bar
- Shows all rows and columns when hovering "Responsive Editing" bar

Once you've selected to show the enhancements, it will be remembered until you disable it again, much like the dark/light mode option.

---
## change styling

You *can* change the styling of the enhancements by adding CSS variables to your global CSS. All default colors and the outline width are set at root level, so redeclaring them at anything below that should work:

    body.fl-builder-edit {
        --bbui-row-color                        : #5fb238;
        --bbui-row-color-hover                  : #8ac171;
        --bbui-column-color                     : #00A0D2;
        --bbui-column-color-hover               : #00A0D2;
        --bbui-module-color                     : #d2005f;
        --bbui-module-color-hover               : #e05292;
        --bbui-empty-col-highlight-bgcolor      : rgba(0, 160, 210, 0.1);
        --bbui-nested-col-parent-border-color   : rgba(0, 160, 210, 0.5);
        --bbui-outline-width                    : 2px;
        --bbui-module-hover-opacity             : .4;
    }


---
## disable Enhance button

You can remove the enhance button from the toolbar if needed. Simply add a filter to your theme's functions.php

    add_filter( 'bb-ui-enhancements-settings' , 'disable_enhance_button' , 10 , 1 );
    /**
    * disable_enhance_button
    *
    * @param  mixed $settings
    * @return array
    */
    function disable_enhance_button( $settings ) {
        $settings[ 'enhanceButton' ] = false;
        return $settings; 
    }


---
## Tested with the following themes

BB UI Enhancements has been succesfully tested with the following popular (child-)themes:

- Beaver Theme
- Page Builder Framework
- Astra
- GeneratePress

---
## Version history

|Version|Changes|
|---|---|
|1.1.3|Added module outline on admin-bar hover. Added --bbui-module-hover-opacity css variable to allow control over opacity|
|1.1.2|Added Enhance Button on Beaver Builder toolbar; tweaked CSS for theme compatability.|
|1.1.1|Moved loading of bb-ui-enhancements.js to footer to ensure jQuery is loaded.|
|1.1.0|Store Enhancement preference to local storage so it also starts that way on reload, adding css vars so custom colors and border width can be set easily.|
|1.0.0|First commit.|


---
### Mandatory attribution:
Icons made by [Freepik](https://www.freepik.com "Freepik") from [www.flaticon.com](https://www.flaticon.com/ "flaticon")
