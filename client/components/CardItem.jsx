CardItem = React.createClass({
  render() {
    return (
      <div>
        <Link to={`/edit/${this.props.card._id}`}>{this.props.card.title}</Link>
      </div>
    );
  }
});
