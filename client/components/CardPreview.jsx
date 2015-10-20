CardPreview = React.createClass({
  render() {
    return (
      <div className='card-preview-container'>
        <h3>{this.props.card.title}</h3>
        <p>{this.props.card.text_front}</p>
      </div>
    )
  }
});
