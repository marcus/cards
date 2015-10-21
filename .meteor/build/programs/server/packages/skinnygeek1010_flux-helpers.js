(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var trackCollection, trackViewer;

(function(){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/skinnygeek1010_flux-helpers/packages/skinnygeek1010_flux-helpers //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
(function () {                                                               // 1
                                                                             // 2
/////////////////////////////////////////////////////////////////////////    // 3
//                                                                     //    // 4
// packages/skinnygeek1010:flux-helpers/flux-helpers.js                //    // 5
//                                                                     //    // 6
/////////////////////////////////////////////////////////////////////////    // 7
                                                                       //    // 8
// watches a reactive collection for changes and emits a changed event // 1  // 9
// (via callback) when it's changed.                                   // 2  // 10
trackCollection = function(collection, callback) {                     // 3  // 11
  if (!collection || !callback) {                                      // 4  // 12
    throw Error('Collection and callback params needed');              // 5  // 13
  }                                                                    // 6  // 14
                                                                       // 7  // 15
  // only run on the client, not needed for SSR                        // 8  // 16
  if (Meteor.isClient) {                                               // 9  // 17
    Meteor.startup(function() {                                        // 10
                                                                       // 11
      Tracker.autorun(function(computation) {                          // 12
        var docs = collection.find().fetch();                          // 13
                                                                       // 14
        if (computation.firstRun) {                                    // 15
          return;  // ignore first empty run                           // 16
        }                                                              // 17
                                                                       // 18
        if (this.__debugFluxHelpers) { // universal global             // 19
          console.log('[Tracker] collection changed', docs);           // 20
        }                                                              // 21
                                                                       // 22
        callback(docs);                                                // 23
      });                                                              // 24
                                                                       // 25
    });                                                                // 26
  }                                                                    // 27
};                                                                     // 28
                                                                       // 29
                                                                       // 30
// track changes on the viewer's user account                          // 31
trackViewer = function(callback) {                                     // 32
  if (!callback) {                                                     // 33
    throw Error('Callback param needed');                              // 34
  }                                                                    // 35
                                                                       // 36
  // only run on the client, not needed for SSR                        // 37
  if (Meteor.isClient) {                                               // 38
    Meteor.startup(function() {                                        // 39
                                                                       // 40
      Tracker.autorun(function(computation) {                          // 41
        var user = Meteor.user();                                      // 42
                                                                       // 43
        if (computation.firstRun) {                                    // 44
          return;  // ignore first empty run                           // 45
        }                                                              // 46
                                                                       // 47
        if (this.__debugFluxHelpers) { // universal global             // 48
           console.log('[Tracker] user changed', user);                // 49
        }                                                              // 50
        callback(user);                                                // 51
      });                                                              // 52
                                                                       // 53
    });                                                                // 54
  }                                                                    // 55
};                                                                     // 56
                                                                       // 57
/////////////////////////////////////////////////////////////////////////    // 66
                                                                             // 67
}).call(this);                                                               // 68
                                                                             // 69
///////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['skinnygeek1010:flux-helpers'] = {
  trackViewer: trackViewer,
  trackCollection: trackCollection
};

})();

//# sourceMappingURL=skinnygeek1010_flux-helpers.js.map
