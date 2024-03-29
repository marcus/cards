Editor = React.createClass({
  displayName: 'Editor',

  getInitialState: function getInitialState() {
    return {
      text: this.props.text
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      tag: 'div'
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    var dom = ReactDOM.findDOMNode(this);
    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', function (e) {
      _this._updated = true;
      _this.change(dom.innerHTML);
    });
  },

  componentWillUnmount: function componentWillUnmount() {
    this.medium.destroy();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.state.text && !this._updated) {
      this.setState({ text: nextProps.text });
    }

    if (this._updated) this._updated = false;
  },

  render: function render() {
    return React.createElement(this.props.tag, {
      id: 'editor',
      className: this.props.className,
      contentEditable: true,
      dangerouslySetInnerHTML: { __html: this.state.text }
    });
  },

  change: function change(text) {
    if (this.props.onChange) this.props.onChange(text);
  }
});
