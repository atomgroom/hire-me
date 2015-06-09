var querySM = "screen and (min-width: 20em) and (max-width: 47em)";
enquire.register(querySM, function() {
  var wow = new WOW(
    {
      boxClass:     'scroll-one',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      }
    }
  );
  wow.init();
  var wow = new WOW(
    {
      boxClass:     'scroll-icon',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       30,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      }
    }
  );
  wow.init();
});
var queryMD = "screen and (min-width:48em)";
enquire.register(queryMD, function() {
  var wow = new WOW(
    {
      boxClass:     'scroll-one',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       300,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      }
    }
  );
  wow.init();
});
