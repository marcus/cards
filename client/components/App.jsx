let App = React.createClass({
  mixins: [History],

  componentWillMount() {
    this.sub = Meteor.subscribe('cards');
    Card.findAll();
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
    //console.log("App has props", this.props);
    return (
      <div className="outer">
        <Grid fluid={true}>

          <Navbar toggleNavKey={0}>
            <NavBrand onClick={() => this.history.pushState(null, '/')} style={{cursor: 'pointer'}}>
              <i className='fa fa-wrench' style={{marginRight: 5}} />
              Card Creator
            </NavBrand>

            <CollapsibleNav eventKey={0}>

              <Nav navbar right>
                <NavItem eventKey={1} href='#' onClick={this.createCard}>
                  <i className='fa fa-plus' style={{marginRight: 5}} />
                  Create a Card
                </NavItem>
              </Nav>

            </CollapsibleNav>
          </Navbar>
        </Grid>
        <Grid>
          {React.cloneElement(this.props.children, this.props)}
        </Grid>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    cards: state.cards,
    //selectedId: state.userInterface.selectedId,
  };
}
this.App = connect(mapStateToProps)(App);
