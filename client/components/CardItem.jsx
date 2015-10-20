CardItem = React.createClass({
  render() {
    let cardStyle = {
      boxSizing: 'border-box',
      position: 'relative',
      float: 'left',
      border: '1px solid #bbb',
      padding: 20,
      width: '30%',
      margin: '15',
      textAlign: 'center',
      minHeight: 30
    }
    return (
      <div style={cardStyle}>
        <Link to={`/edit/${this.props.card._id}`}>{this.props.card.title}</Link>
        <p>{this.props.card.text_front}</p>
      </div>
    );
  }
});
