(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/components/EditCard.jsx                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
EditCard = React.createClass({                                         // 1
  displayName: 'EditCard',                                             //
                                                                       //
  mixins: [History],                                                   // 2
  getInitialState: function () {                                       // 3
    var _this = this;                                                  //
                                                                       //
    // TODO - pass card in props;                                      //
    this.card = this.props.cards.find(function (c) {                   // 5
      return c._id === _this.props.params.id;                          //
    }) || {};                                                          //
    return { card: Object.assign({ title: 'loading...' }, this.card) };
  },                                                                   //
                                                                       //
  // TODO - when receives props update the view (?) for live editing in multiple browsers
  componentDidMount: function () {                                     // 10
    //this.editor = new MediumEditor('#editor', {                      //
    //toolbar: {                                                       //
    //allowMultiParagraphSelection: true,                              //
    //buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
    ////standardizeSelectionStart: false,                              //
    //static: false,                                                   //
    //},                                                               //
    //placeholder: {                                                   //
    //text: ''                                                         //
    //}                                                                //
    //});                                                              //
    //this.editor.subscribe('editableInput', (e) => {                  //
    //this.updated = true;                                             //
    //this.handleChange()                                              //
    //});                                                              //
  },                                                                   //
                                                                       //
  //componentWillUnmount() {                                           //
  //this.editor.destroy();                                             //
  //},                                                                 //
                                                                       //
  //shouldComponentUpdate(nextProps, nextState) {                      //
  //},                                                                 //
                                                                       //
  validationState: function () {                                       // 35
    var length = this.state.card.title.length;                         // 36
    if (length > 1 && length < 75) return 'success';else if (length > 75) return 'warning';else if (length > 0) return 'error';
  },                                                                   //
                                                                       //
  handleChange: function (event) {                                     // 42
    var card = Object.assign({}, this.state.card);                     // 43
    card.title = this.refs.title.getValue();                           // 44
    card.text_front = this.refs.text_front.getValue();                 // 45
    //card.text_front = React.findDOMNode(this.refs.text_front).innerHTML
    this.setState({ card: card });                                     // 47
  },                                                                   //
                                                                       //
  save: function () {                                                  // 50
    store.dispatch(Actions.updateCard(Object.assign({}, this.card, {   // 51
      title: this.state.card.title,                                    // 53
      text_front: this.state.card.text_front                           // 54
    })));                                                              //
  },                                                                   //
                                                                       //
  'delete': function () {                                              // 59
    if (confirm('U sure bro? It\'s not coming back.')) {               // 60
      store.dispatch(Actions.deleteCard(this.state.card._id));         // 61
      this.history.pushState(null, '/');                               // 62
    }                                                                  //
  },                                                                   //
                                                                       //
  //textFrontHtml() {                                                  //
  //return {__html: this.state.card.text_front};                       //
  //},                                                                 //
                                                                       //
  render: function () {                                                // 70
    console.log("Rendering card item");                                // 71
    return React.createElement(                                        // 72
      'div',                                                           //
      null,                                                            //
      React.createElement(                                             //
        Row,                                                           // 74
        null,                                                          //
        React.createElement(                                           //
          Col,                                                         // 75
          { sm: 6 },                                                   //
          React.createElement(                                         //
            'h4',                                                      //
            null,                                                      //
            'Edit'                                                     //
          ),                                                           //
          React.createElement(Input, {                                 //
            type: 'text',                                              // 78
            value: this.state.card.title,                              // 79
            placeholder: 'Title',                                      // 80
            label: 'Title',                                            // 81
            bsStyle: this.validationState(),                           // 82
            hasFeedback: true,                                         // 83
            ref: 'title',                                              // 84
            groupClassName: 'group-class',                             // 85
            labelClassName: 'label-class',                             // 86
            onChange: this.handleChange                                // 87
          }),                                                          //
          React.createElement(                                         //
            'label',                                                   //
            { htmlFor: 'editor' },                                     //
            'Card Text (front)'                                        //
          ),                                                           //
          React.createElement(Editor, {                                //
            ref: 'text_front',                                         // 92
            id: 'editor',                                              // 93
            onChange: this.handleChange,                               // 94
            text: this.state.card.text_front                           // 95
          })                                                           //
        ),                                                             //
        React.createElement(                                           //
          Col,                                                         // 100
          { sm: 6 },                                                   //
          React.createElement(                                         //
            'h4',                                                      //
            null,                                                      //
            'Preview'                                                  //
          ),                                                           //
          React.createElement(CardPreview, { card: this.state.card })  //
        )                                                              //
      ),                                                               //
      React.createElement(                                             //
        Row,                                                           // 106
        null,                                                          //
        React.createElement(                                           //
          Col,                                                         // 107
          { sm: 6 },                                                   //
          React.createElement(                                         //
            Button,                                                    // 108
            { onClick: this.save, bsStyle: 'primary' },                //
            React.createElement('i', { className: 'fa fa-save' }),     //
            ' Save'                                                    //
          )                                                            //
        ),                                                             //
        React.createElement(                                           //
          Col,                                                         // 110
          { sm: 6, className: 'text-right' },                          //
          React.createElement(                                         //
            Button,                                                    // 111
            { onClick: this['delete'], bsStyle: 'link' },              //
            React.createElement('i', { className: 'fa fa-trash-o' }),  //
            ' Delete'                                                  //
          )                                                            //
        )                                                              //
      )                                                                //
    );                                                                 //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
