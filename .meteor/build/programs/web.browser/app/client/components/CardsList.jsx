(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/components/CardsList.jsx                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CardsList = React.createClass({                                        // 1
  displayName: "CardsList",                                            //
                                                                       //
  render: function () {                                                // 2
    if (this.props.cards && this.props.cards.length) {                 // 3
      return React.createElement(                                      // 4
        "div",                                                         //
        null,                                                          //
        this.props.cards.map(function (card, i) {                      //
          return React.createElement(CardItem, { key: i, card: card });
        })                                                             //
      );                                                               //
    } else {                                                           //
      return React.createElement(                                      // 10
        "div",                                                         //
        null,                                                          //
        "Make some cards!"                                             //
      );                                                               //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
