(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/components/App.jsx                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var App = React.createClass({                                          // 1
  displayName: 'App',                                                  //
                                                                       //
  mixins: [History],                                                   // 2
                                                                       //
  componentWillMount: function () {                                    // 4
    this.sub = Meteor.subscribe('cards');                              // 5
    Card.findAll();                                                    // 6
  },                                                                   //
                                                                       //
  componentWillUnmount: function () {                                  // 9
    this.sub.stop();                                                   // 10
  },                                                                   //
                                                                       //
  propTypes: {                                                         // 13
    cards: React.PropTypes.array,                                      // 14
    selectedId: React.PropTypes.string                                 // 15
  },                                                                   //
                                                                       //
  createCard: function (event) {                                       // 18
    event.stopPropagation();                                           // 19
    store.dispatch(Actions.createCard());                              // 20
  },                                                                   //
                                                                       //
  render: function () {                                                // 23
    var _this = this;                                                  //
                                                                       //
    //console.log("App has props", this.props);                        //
    return React.createElement(                                        // 25
      'div',                                                           //
      { className: 'outer' },                                          //
      React.createElement(                                             //
        Grid,                                                          // 27
        { fluid: true },                                               //
        React.createElement(                                           //
          Navbar,                                                      // 29
          { toggleNavKey: 0 },                                         //
          React.createElement(                                         //
            NavBrand,                                                  // 30
            { onClick: function () {                                   //
                return _this.history.pushState(null, '/');             //
              }, style: { cursor: 'pointer' } },                       //
            React.createElement('i', { className: 'fa fa-wrench', style: { marginRight: 5 } }),
            'Card Creator'                                             //
          ),                                                           //
          React.createElement(                                         //
            CollapsibleNav,                                            // 35
            { eventKey: 0 },                                           //
            React.createElement(                                       //
              Nav,                                                     // 37
              { navbar: true, right: true },                           //
              React.createElement(                                     //
                NavItem,                                               // 38
                { eventKey: 1, href: '#', onClick: this.createCard },  //
                React.createElement('i', { className: 'fa fa-plus', style: { marginRight: 5 } }),
                'Create a Card'                                        //
              )                                                        //
            )                                                          //
          )                                                            //
        )                                                              //
      ),                                                               //
      React.createElement(                                             //
        Grid,                                                          // 47
        null,                                                          //
        React.cloneElement(this.props.children, this.props)            //
      )                                                                //
    );                                                                 //
  }                                                                    //
});                                                                    //
                                                                       //
function mapStateToProps(state) {                                      // 55
  return {                                                             // 56
    cards: state.cards,                                                // 57
    selectedId: state.userInterface.selectedId                         // 58
  };                                                                   //
}                                                                      //
this.App = connect(mapStateToProps)(App);                              // 61
/////////////////////////////////////////////////////////////////////////

}).call(this);
