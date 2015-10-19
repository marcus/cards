EditCard = React.createClass({
  getInitialState() {
    return ({
      title: ''
    });
  },

  componentDidMount() {
    let editor = new MediumEditor('#editor', {
      // options go here
    });
  },
  validationState() {
    let length = this.state.title.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(event) {
    this.setState({
      title: this.refs.title.getValue()
    });
  },

  render() {
    return (
      <div>
        <h3>Edit Card</h3>
        <Row>
          <Col sm={6}>
            <Input
              type="text"
              value={this.state.value}
              placeholder="Title"
              label="Title"
              bsStyle={this.validationState()}
              hasFeedback
              ref="title"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleChange} />

            <div id="editor"></div>
          </Col>
          <Col sm={6}>
            Preview
          </Col>
        </Row>
      </div>
    )
  }
});
