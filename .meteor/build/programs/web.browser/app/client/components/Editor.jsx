(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/components/Editor.jsx                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
//var ReactDOM = require('react-dom');                                 //
//var MediumEditor = require('medium-editor');                         //
console.log('Got editor', MediumEditor);                               // 3
                                                                       //
Editor = React.createClass({                                           // 5
  displayName: 'Editor',                                               // 6
                                                                       //
  getInitialState: (function () {                                      // 8
    function getInitialState() {                                       // 8
      return {                                                         // 9
        text: this.props.text                                          // 10
      };                                                               //
    }                                                                  //
                                                                       //
    return getInitialState;                                            //
  })(),                                                                //
                                                                       //
  getDefaultProps: (function () {                                      // 14
    function getDefaultProps() {                                       // 14
      return {                                                         // 15
        tag: 'div'                                                     // 16
      };                                                               //
    }                                                                  //
                                                                       //
    return getDefaultProps;                                            //
  })(),                                                                //
                                                                       //
  componentDidMount: (function () {                                    // 20
    function componentDidMount() {                                     // 20
      var _this = this;                                                // 21
                                                                       //
      var dom = React.findDOMNode(this).element;                       // 23
      this.medium = new MediumEditor(dom, this.props.options);         // 24
      this.medium.subscribe('editableInput', function (e) {            // 25
        _this._updated = true;                                         // 26
        _this.change(dom.innerHTML);                                   // 27
      });                                                              //
    }                                                                  //
                                                                       //
    return componentDidMount;                                          //
  })(),                                                                //
                                                                       //
  componentWillUnmount: (function () {                                 // 31
    function componentWillUnmount() {                                  // 31
      this.medium.destroy();                                           // 32
    }                                                                  //
                                                                       //
    return componentWillUnmount;                                       //
  })(),                                                                //
                                                                       //
  componentWillReceiveProps: (function () {                            // 35
    function componentWillReceiveProps(nextProps) {                    // 35
      if (nextProps.text !== this.state.text && !this._updated) {      // 36
        this.setState({ text: nextProps.text });                       // 37
      }                                                                //
                                                                       //
      if (this._updated) this._updated = false;                        // 40
    }                                                                  //
                                                                       //
    return componentWillReceiveProps;                                  //
  })(),                                                                //
                                                                       //
  render: (function () {                                               // 43
    function render() {                                                // 43
      return React.createElement(this.props.tag, {                     // 44
        className: this.props.className,                               // 45
        contentEditable: true,                                         // 46
        dangerouslySetInnerHTML: { __html: this.state.text }           // 47
      });                                                              //
    }                                                                  //
                                                                       //
    return render;                                                     //
  })(),                                                                //
                                                                       //
  change: (function () {                                               // 51
    function change(text) {                                            // 51
      if (this.props.onChange) this.props.onChange(text);              // 52
    }                                                                  //
                                                                       //
    return change;                                                     //
  })()                                                                 //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
