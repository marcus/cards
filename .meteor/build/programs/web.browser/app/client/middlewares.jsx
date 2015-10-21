(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/middlewares.jsx                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// middleware allows you to do something in between the dispatch       //
// and handing it off to the reducer                                   //
                                                                       //
// console.log our state changes                                       //
logger = function (store) {                                            // 5
  return function (next) {                                             //
    return function (action) {                                         //
      log('[Dispatching]', action);                                    // 6
      // essentially call 'dispatch'                                   //
      var result = next(action);                                       // 8
      log('[Store]', store.getState());                                // 9
      return result;                                                   // 10
    };                                                                 //
  };                                                                   //
};                                                                     //
                                                                       //
function log() {                                                       // 13
  if (__debug_redux) {                                                 // 14
    console.log.apply(console, arguments);                             // 15
  }                                                                    //
}                                                                      //
__debug_redux = true;                                                  // 18
/////////////////////////////////////////////////////////////////////////

}).call(this);
