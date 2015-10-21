CardPreview = React.createClass({
  textFrontHtml() {
    return {__html: this.props.card.text_front};
  },

  render() {
    return (
      <div className='card-preview-container'>
        <h3>{this.props.card.title}</h3>
        <div
          dangerouslySetInnerHTML={this.textFrontHtml()}
        />
      </div>
    )
  }
});
