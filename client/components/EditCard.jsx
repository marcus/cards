EditCard = React.createClass({
  getInitialState() {
    let card = this.props.cards.find((c) => c._id === this.props.params.id) || {};
    console.log('found anything?', card);
    return Object.assign({title: 'loading...'}, card);
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

  save() {
    console.log("Saving");
  },

  render() {
    console.log("Rendering card item", this.props);
    return (
      <div>
        <h3>Edit Card</h3>
        <Row>
          <Col sm={6}>
            <Input
              type="text"
              value={this.state.title}
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
        <Row>
          <Button onClick={this.save()}><i className="fa fa-save" /> Save</Button>
        </Row>
      </div>
    )
  }
});
