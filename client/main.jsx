Meteor.startup(function() {
  console.log("starting up meteor", store);

  React.render(
    <div>
      <Provider store={store}>
        <CardsContainer />
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>,
    //document.getElementById('app')
    document.body
  );
});
