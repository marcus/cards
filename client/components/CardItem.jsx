CardItem = React.createClass({
  mixins: [ History ],

  render() {
    let cardStyle = {
    }
    return (
      <div className='card-home' style={cardStyle} onClick={() => store.dispatch(pushPath(`/edit/${this.props.card._id}`))}>
        <p className='card-home-title'>{this.props.card.title}</p>
        <p className='card-home-text-front'></p>
      </div>
    );
  }
});
