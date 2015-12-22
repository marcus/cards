CardItem = React.createClass({
  mixins: [ History ],

  render() {
    let cardStyle = {
      boxSizing: 'border-box',
      position: 'relative',
      float: 'left',
      border: '1px solid #bbb',
      padding: 20,
      width: '30%',
      margin: '10',
      textAlign: 'center',
      minHeight: 30,
      boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.3)',
      backgroundColor: 'white',
      cursor: 'pointer',
      //fontFamily: '"Slabo", "Source Sans", sans',
    }
    return (
      <div className='card-home' style={cardStyle} onClick={() => store.dispatch(pushPath(`/edit/${this.props.card._id}`))}>
        <p className='card-home-title'>{this.props.card.title}</p>
        <p className='card-home-text-front'></p>
      </div>
    );
  }
});
