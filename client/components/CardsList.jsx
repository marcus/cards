CardsList = React.createClass({
  render() {
    if(this.props.cards && this.props.cards.length) {
      return (
        <div>
          {this.props.cards.map((card, i) => <CardItem key={i} card={card} />)}
        </div>
      );
    } else {
      return (
        <div>Make some cards!</div>
      );
    }
  }
});
