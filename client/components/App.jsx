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

  exportCards(event) {
    event.stopPropagation();
    let file = `cards-${moment().format('MM-DD-YYYY')}.csv`;
    Meteor.call('exportCSV', function(err, fileContent) {
      if(err) {
        console.log('err', err);
        alert(JSON.stringify(err));
      } else if(fileContent){
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, file);
      }
    });
  },

  render() {
    //console.log("App has props", this.props);
    return (
      <div className="outer">
        <Grid fluid={true}>

          <Navbar fluid={true}>
            <Navbar.Header>
              <NavbarBrand onClick={() => store.dispatch(pushPath('/'))} style={{cursor: 'pointer'}}>
                <i className='fa fa-wrench' style={{marginRight: 5}} />
                Card Creator
              </NavbarBrand>
            </Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav navbar pullRight>
                <NavItem eventKey={1} href='#' onClick={this.exportCards}>
                  <i className='fa fa-download' style={{marginRight: 5}} />
                  Export {this.props.cards.length} Cards to Excel
                </NavItem>
                <NavItem eventKey={2} href='#' onClick={this.createCard}>
                  <i className='fa fa-plus' style={{marginRight: 5}} />
                  Create a Card
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Grid>
        <Grid fluid={true}>
          {React.cloneElement(this.props.children, this.props)}
        </Grid>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    cards: state.cards,
    order: state.order,
    //selectedId: state.userInterface.selectedId,
  };
}
this.App = connect(mapStateToProps)(App);
