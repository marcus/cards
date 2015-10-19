CardItem = React.createClass({
  render() {
    console.log("Rendering card item");
    return (
      <div>
        <h3>{this.props.card.title}</h3>
      </div>
    );
  }
});
