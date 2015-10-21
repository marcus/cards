(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/store.jsx                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _Redux = Redux;                                                    //
var createStore = _Redux.createStore;                                  //
var combineReducers = _Redux.combineReducers;                          //
var applyMiddleware = _Redux.applyMiddleware;                          //
var _ReduxDevTools = ReduxDevTools;                                    //
var devTools = _ReduxDevTools.devTools;                                //
var persistState = _ReduxDevTools.persistState;                        //
var _ReactReduxDevTools = ReactReduxDevTools;                          //
var DevTools = _ReactReduxDevTools.DevTools;                           //
var DebugPanel = _ReactReduxDevTools.DebugPanel;                       //
var LogMonitor = _ReactReduxDevTools.LogMonitor;                       //
                                                                       //
// Redux has a single store. to reduce complexity it allows you to combine
// several 'reducer' functions that share this single state object.    //
// They are combined into one root reducer which is passed to the store
//                                                                     //
// the shape of root reducer will then look like:                      //
//    {                                                                //
//      userInterface: {                                               //
//        selectedId: 'ds34sjsa34',                                    //
//        selectedPlayerName: 'Bob Smith'                              //
//      },                                                             //
//      players: [                                                     //
//        { mongo doc },                                               //
//        { mongo doc },                                               //
//        { mongo doc }                                                //
//      ]                                                              //
//    }                                                                //
                                                                       //
var rootReducer = combineReducers({                                    // 22
  userInterface: Reducers.userInterface,                               // 23
  cards: Reducers.cards                                                // 24
});                                                                    //
                                                                       //
var finalCreateStore = applyMiddleware(logger)(devTools()(persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))(createStore)));
                                                                       //
// applyMiddleware takes createStore() and returns a new wrapped createStore
// note, this is an optional step to use middleware (we're auto console.log dispatches)
// let createStoreWithMiddleware = applyMiddleware(logger)(createStore);
// store = createStoreWithMiddleware(rootReducer);                     //
store = finalCreateStore(rootReducer);                                 // 40
/////////////////////////////////////////////////////////////////////////

}).call(this);
