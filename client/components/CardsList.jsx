CardsList = React.createClass({
  render() {
    //console.log("rendering ", this.props.cards.length, "cards");
    return (
      <div>
        <h3>Some Cards</h3>
        {this.props.cards.map((card) => <CardItem card={card} />)}
      </div>
    )
  }
});
