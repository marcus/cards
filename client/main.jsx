Meteor.startup(function() {
  //const { syncReduxAndRouter, routeReducer } = ReduxSimpleRouter;
  const history = History.createHistory();
  
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={CardsList}/>
          <Route path='cards' component={CardsList}/>
          <Route path='edit/:id' component={EditCard} />
        </Route>
      </Router>
    </Provider>,
    //document.getElementById('app')
    document.body
  );

  syncReduxAndRouter(history, store);
  
});
      //<DebugPanel top right bottom>
        //<DevTools store={store} monitor={LogMonitor} />
      //</DebugPanel>

