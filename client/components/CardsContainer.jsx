// AppContainer is responsible for fetching data from the store and
// listening for changes. In a larger app you would have a container
// for each major component.

let CardsContainer = React.createClass({
  componentWillMount() {
    this.sub = Meteor.subscribe('cards');
  },

  componentWillUnmount() {
    this.sub.stop();
  },

  render() {
    //debugger // checkout this.props with debugger!
    return (<App {...this.props} />);
  }
});

// choose what state we send to comp. above and it's children, in
// this app we're sending everything at once, we're also splitting
// it out into three properties to match previous state shape, you
// could easily just return `state` for this small app

function mapStateToProps(state) {
  return {
    cards: state.cards,
    selectedId: state.userInterface.selectedId,
  };
}
this.CardsContainer = connect(mapStateToProps)(CardsContainer);
//this.CardsContainer = CardsContainer;
