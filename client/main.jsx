Meteor.startup(function() {
  React.render(
    <div>

      <Provider store={store}>
        {() =>

          <Router>
            <Route path='/' component={App}>
              <IndexRoute component={CardsList}/>
              <Route path='cards' component={CardsList}/>
              <Route path='edit/:id' component={EditCard} />
            </Route>
          </Router>

        }
      </Provider>

      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>,
    //document.getElementById('app')
    document.body
  );
});
