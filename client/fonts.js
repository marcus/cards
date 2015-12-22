Meteor.startup(function() {
  console.log("hello");

  WebFontConfig = {
    google: { families: [ 'Lato:400,700,300,700italic,400italic,300italic,900,900italic' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
    //console.log("async fonts loaded", WebFontConfig);
  })();

})
