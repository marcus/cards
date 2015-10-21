(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/reducers.jsx                                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// reducers allow you to 'slice' off a part of the single state object which
// lets you think about the domain in a smaller picture. You could use one
// reducer in a small app like this but in large apps this reducer could be
// several hundred lines. See store.jsx to see how these reducers get 'combined'
// into one single app state. We'll use two reducers, one for transient state
// that the UI uses (selected id,name) and one for data (coming from Mongo)
                                                                       //
var _Actions = Actions;                                                //
var cardsChanged = _Actions.cardsChanged;                              //
var selectCard = _Actions.selectCard;                                  //
                                                                       //
Reducers = {};                                                         // 9
                                                                       //
var initialInterfaceState = {                                          // 11
  selectedId: ''                                                       // 12
};                                                                     //
                                                                       //
// helper to *copy* old state and merge new data with it               //
function merge(oldState, newState) {                                   // 16
  return _.extend({}, oldState, newState);                             // 17
}                                                                      //
                                                                       //
// these reducers *must* be pure to use time-travel dev-tools          //
// never directly mutate the `state` param, use merge instead          //
                                                                       //
Reducers.userInterface = (function () {                                // 23
  function userInterface(state, action) {                              // 23
    state = state || initialInterfaceState;                            // 24
                                                                       //
    switch (action.type) {                                             // 26
      case 'SELECT_CARD':                                              // 27
        // we happen to be replacing all the reducers state but with merge you
        // could just return the selectedId and it would retain selectedPlayerName
        return merge(state, {                                          // 30
          selectedId: action.cardId                                    // 31
        });                                                            //
      default:                                                         // 32
        return state;                                                  // 34
    }                                                                  // 34
  }                                                                    //
                                                                       //
  return userInterface;                                                //
})();                                                                  //
                                                                       //
Reducers.cards = (function () {                                        // 38
  function players(state, action) {                                    // 38
    if (state === undefined) state = [];                               //
                                                                       //
    switch (action.type) {                                             // 39
      case 'CARDS_CHANGED':                                            // 40
        // we don't have to merge the single doc that changes since minimongo
        // keeps the entire cache for us. We'll just return the new minimongo state
        // We *could* also return another fetch if sorting wasn't so easy here
        var docs = _.clone(action.collection); // clone to prevent mutating action!!
        return docs.sort(function (a, b) {                             // 45
          return b.title - a.title;                                    //
        });                                                            //
      default:                                                         // 45
        return state;                                                  // 47
    }                                                                  // 47
  }                                                                    //
                                                                       //
  return players;                                                      //
})();                                                                  //
/////////////////////////////////////////////////////////////////////////

}).call(this);
