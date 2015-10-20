EditCard = React.createClass({
  mixins: [ History ],
  getInitialState() {
    // TODO - pass card in props;
    this.card = this.props.cards.find((c) => c._id === this.props.params.id) || {};
    return {card: Object.assign({title: 'loading...'}, this.card)};
  },

  componentDidMount() {
    let editor = new MediumEditor('#editor', {
      toolbar: {
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
        standardizeSelectionStart: false,
        static: false,
      },
      placeholder: {
        text: ''
      }
    });
  },

  validationState() {
    let length = this.state.card.title.length;
    if (length > 10 && length < 150) return 'success';
    else if (length > 150) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(event) {
    let card = Object.assign({}, this.state.card);
    card.title = this.refs.title.getValue();
    this.setState({card: card});
  },

  save() {
    console.log("Saving");
    store.dispatch(Actions.updateCard(
      Object.assign({}, this.card, {title: this.state.card.title})
    ));
  },

  delete() {
    if(confirm('U sure bro? It\'s not coming back.')) {
      store.dispatch(Actions.deleteCard(this.state.card._id));
      this.history.pushState(null, '/');
    }
  },

  render() {
    console.log("Rendering card item");
    return (
      <div>
        <Row>
          <Col sm={6}>
            <h4>Edit</h4>
            <Input
              type="text"
              value={this.state.card.title}
              placeholder="Title"
              label="Title"
              bsStyle={this.validationState()}
              hasFeedback
              ref="title"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleChange} />

            <label htmlFor="editor">Card Text (front)</label>
            <div id="editor"></div>

          </Col>

          <Col sm={6}>
            <h4>Preview</h4>
            <CardPreview card={this.state.card} />
          </Col>

        </Row>
        <Row>
          <Col sm={6}>
            <Button onClick={this.save} bsStyle="primary"><i className='fa fa-save' /> Save</Button>
          </Col>
          <Col sm={6} className='text-right'>
            <Button onClick={this.delete} bsStyle="link"><i className='fa fa-trash-o' /> Delete</Button>
          </Col>
        </Row>
      </div>
    )
  }
});
