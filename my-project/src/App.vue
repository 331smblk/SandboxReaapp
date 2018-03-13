<template>
  <div id="app">

      <router-view/>

  </div>
</template>

<script>
  export default {
    name: 'App'

  }
</script>

<style lang="scss" >

  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #35978f ;
  $primary-invert: findColorInvert(#35978f );
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);
  $bg-light: #f5f5f5    ;


// #543005    
// #8c510a    
// #bf812d    
// #dfc27d    
// #f6e8c3    
// #f5f5f5    
// #c7eae5    
// #80cdc1    
// #35978f    
// #01665e    
// #003c30    

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert),
      "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";




 html, body {
    // font-family: 'Open Sans', serif;
    font-size: 16px;
    line-height: 1.5;
    height: 100%;
    background: $bg-light;
  }

.is-sticky-top {
     position: -webkit-sticky;  // required for Safari
    position: sticky;
    top: 0; // required as well.
    z-index: 100;
}
  
</style>
