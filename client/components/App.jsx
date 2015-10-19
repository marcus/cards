let App = React.createClass({
  componentWillMount() {
    this.sub = Meteor.subscribe('cards');
  },

  componentWillUnmount() {
    this.sub.stop();
  },

  propTypes: {
    cards: React.PropTypes.array,
    selectedId: React.PropTypes.string,
  },

  createCard(event) {
    event.stopPropagation();
    store.dispatch(Actions.createCard());
  },

  render() {
    console.log("App has props", this.props);
    return (
      <div className="outer">
        <div className="logo"></div>
        <Link to='/'>
          <h1 className="title">Cards</h1>
        </Link>
        <div>
          <a href='#' onClick={this.createCard}>
            Create a Card
          </a>
          <Grid>
            {React.cloneElement(this.props.children, this.props)}
          </Grid>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    cards: state.cards,
    selectedId: state.userInterface.selectedId,
  };
}
this.App = connect(mapStateToProps)(App);
