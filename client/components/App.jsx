App = React.createClass({
  propTypes: {
    cards: React.PropTypes.array,
    selectedId: React.PropTypes.string,
  },

  render() {
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Cards</h1>
        <div>
          <Link to='create'>
            Create a Card
          </Link>
          {this.props.children}
        </div>
      </div>
    );
  }
});
