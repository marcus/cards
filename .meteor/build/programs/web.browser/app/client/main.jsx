(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/main.jsx                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
  React.render(React.createElement(                                    // 2
    'div',                                                             //
    null,                                                              //
    React.createElement(                                               //
      Provider,                                                        // 5
      { store: store },                                                //
      function () {                                                    //
        return React.createElement(                                    //
          Router,                                                      // 8
          null,                                                        //
          React.createElement(                                         //
            Route,                                                     // 9
            { path: '/', component: App },                             //
            React.createElement(IndexRoute, { component: CardsList }),
            React.createElement(Route, { path: 'cards', component: CardsList }),
            React.createElement(Route, { path: 'edit/:id', component: EditCard })
          )                                                            //
        );                                                             //
      }                                                                //
    )                                                                  //
  ),                                                                   //
  //document.getElementById('app')                                     //
  document.body);                                                      // 21
});                                                                    //
//<DebugPanel top right bottom>                                        //
//<DevTools store={store} monitor={LogMonitor} />                      //
//</DebugPanel>                                                        //
/////////////////////////////////////////////////////////////////////////

}).call(this);
