EditCard = React.createClass({
  mixins: [ History ],

  // TODO - pass card in props;
  getInitialState() {
    return ({
      card: {},
      preview: true,
    });
  },

  getCardFromProps(props) {
    let card = props.cards.find((c) => c._id === this.props.params.id) || {};
    this.card = card || {title: 'Loading...'};
    return this.card;
  },

  componentWillMount() {
    this.setState({card: this.getCardFromProps(this.props)});
    //this.autoSaveInterval = setInterval(this.save, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.autoSaveInterval);
  },

  //shouldComponentUpdate(nextProps) {
    //return !_.isEqual(this.state.card, this.getCardFromProps(nextProps));
  //},

  componentWillReceiveProps(nextProps) {
    //console.log("Setting card from props", nextProps);
    this.setState({card: this.getCardFromProps(nextProps)});
  },

  // TODO - when receives props update the view (?) for live editing in multiple browsers
  editorOptions: {
    toolbar: {
      allowMultiParagraphSelection: true,
      buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'orderedlist', 'unorderedlist', 'indent', 'outdent'],
      standardizeSelectionStart: true,
      static: false,
    },
    placeholder: {
      text: ''
    }
  },

  validationState() {
    let length = this.state.card.title ? this.state.card.title.length : 0;
    if (length > 1 && length < 75) return 'success';
    else if (length > 75) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(event) {
    let card = Object.assign({}, this.state.card);
    card.title = this.refs.title.refs.input.value;
    card.text_front = this.refs.text_front.medium.elements[0].innerHTML;

    card.title_back = this.refs.title_back.refs.input.value;
    card.text_back = this.refs.text_back.medium.elements[0].innerHTML;

    card.activity = this.refs.activity.medium.elements[0].innerHTML;
    card.references = this.refs.references.medium.elements[0].innerHTML;
    card.notes = this.refs.notes.medium.elements[0].innerHTML;
    this.setState({card: card});
  },

  save(event) {
    event.preventDefault();
    store.dispatch(Actions.updateCard(
      Object.assign({}, this.card, this.state.card)
    ));
  },

  delete() {
    if(confirm('U sure bro? It\'s not coming back.')) {
      store.dispatch(Actions.deleteCard(this.state.card._id));
      store.dispatch(pushPath('/'));
    }
  },

  togglePreview() {
    this.setState({preview: !this.state.preview});
  },

  preview() {
    return (
      <Col sm={7}>
        <h4>Preview</h4>
        <p>Last Updated {moment(this.state.card.updated_at).format('MMMM Do YYYY, h:mm a')}</p>
        {<CardPreview card={this.state.card} />}
      </Col>
    );
  },

  render() {
    //console.log("Rendering card item", this.state.card);
    return (
      <div>
        <Row>
          <Col sm={this.state.preview ? 5 : 12}>
            <Input
              label={`Preview ${this.state.preview ? 'visible' : 'hidden'}`}
              type="checkbox"
              checked={this.state.preview}
              onChange={this.togglePreview}
            />
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
              onChange={this.handleChange}
            />

            <label htmlFor="text_front">Card Text (front)</label>
            <Editor
              ref="text_front"
              id="text_front"
              onChange={this.handleChange}
              text={this.state.card.text_front}
              options={this.editorOptions}
            />

            <Button onClick={this.save} bsStyle="primary"><i className='fa fa-save' /> Save</Button>

            <h3>Back</h3>
            <Input
              type="text"
              value={this.state.card.title_back}
              placeholder="Title (back)"
              label="Title - Back"
              hasFeedback
              ref="title_back"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleChange}
            />

            <label htmlFor="text_back">Card Text (back)</label>
            <Editor
              ref="text_back"
              id="text_back"
              onChange={this.handleChange}
              text={this.state.card.text_back}
              options={this.editorOptions}
            />

            <label htmlFor="activity">Activity</label>
            <Editor
              ref="activity"
              id="activity"
              onChange={this.handleChange}
              text={this.state.card.activity}
              options={this.editorOptions}
            />

            <label htmlFor="references">Resources</label>
            <Editor
              ref="references"
              id="references"
              onChange={this.handleChange}
              text={this.state.card.references}
              options={this.editorOptions}
            />

            <label htmlFor="notes">Notes (not shown on card)</label>
            <Editor
              ref="notes"
              id="notes"
              onChange={this.handleChange}
              text={this.state.card.notes}
              options={this.editorOptions}
            />

          </Col>
          { this.state.preview ? this.preview() : null }
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
