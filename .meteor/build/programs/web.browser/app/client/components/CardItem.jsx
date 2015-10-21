(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/components/CardItem.jsx                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CardItem = React.createClass({                                         // 1
  displayName: 'CardItem',                                             //
                                                                       //
  mixins: [History],                                                   // 2
                                                                       //
  render: function () {                                                // 4
    var _this = this;                                                  //
                                                                       //
    var cardStyle = {                                                  // 5
      boxSizing: 'border-box',                                         // 6
      position: 'relative',                                            // 7
      float: 'left',                                                   // 8
      border: '1px solid #bbb',                                        // 9
      padding: 20,                                                     // 10
      width: '30%',                                                    // 11
      margin: '10',                                                    // 12
      textAlign: 'center',                                             // 13
      minHeight: 30,                                                   // 14
      boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.3)',                    // 15
      backgroundColor: 'white',                                        // 16
      cursor: 'pointer'                                                // 17
    };                                                                 //
    //fontFamily: '"Slabo", "Source Sans", sans',                      //
    return React.createElement(                                        // 20
      'div',                                                           //
      { className: 'card-home', style: cardStyle, onClick: function () {
          return _this.history.pushState(null, '/edit/' + _this.props.card._id);
        } },                                                           //
      React.createElement(                                             //
        'p',                                                           //
        { className: 'card-home-title' },                              //
        this.props.card.title                                          //
      ),                                                               //
      React.createElement('p', { className: 'card-home-text-front' })  //
    );                                                                 //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
