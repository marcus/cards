(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/components/CardPreview.jsx                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CardPreview = React.createClass({                                      // 1
  displayName: 'CardPreview',                                          //
                                                                       //
  textFrontHtml: function () {                                         // 2
    return { __html: this.props.card.text_front };                     // 3
  },                                                                   //
                                                                       //
  render: function () {                                                // 6
    return React.createElement(                                        // 7
      'div',                                                           //
      { className: 'card-preview-container' },                         //
      React.createElement(                                             //
        'h3',                                                          //
        null,                                                          //
        this.props.card.title                                          //
      ),                                                               //
      React.createElement('div', {                                     //
        dangerouslySetInnerHTML: this.textFrontHtml()                  // 11
      })                                                               //
    );                                                                 //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
