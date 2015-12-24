CardsList = React.createClass({
  getInitialState() {
    return {order: 'updated_at'}
  },

  sort(order) {
    if(order === this.state.order) return;
    this.setState({order: order})
  },

  componentWillReceiveProps(props) {
    if(props.order) this.setState({order: props.order});
  },

  renderCards() {
    let prop = this.state.order;
    return this.props.cards
      .sort((a, b) => {
        if (prop === 'title') {
          a = a[prop].toLowerCase();
          b = b[prop].toLowerCase();
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        } else if (prop === 'created_at' || prop === 'updated_at') {
          if (a[prop] < b[prop]) return 1;
          if (a[prop] > b[prop]) return -1;
          return 0;
        }
      })
      .map((card, i) => <div key={i} className="card-container"><CardItem card={card} title={card.title} /></div>);
  },

  btnClass(label) {
    return cx('btn', {
      'btn-primary': this.state.order === label,
      'btn-default': this.state.order !== label,
    });
  },

  render() {
    //console.log("PROPS", this.props);
    if(this.props.cards && this.props.cards.length) {

      return (
        <div>
          <div>
            <span className='sort-label'>Sort by: </span>
            <span className="btn-group" role="group" aria-label="Sort">
              <button className={this.btnClass('title')} onClick={() => this.sort('title')}>Title</button>
              <button className={this.btnClass('updated_at')} onClick={() => this.sort('updated_at')}>Date Updated</button>
              <button className={this.btnClass('created_at')} onClick={() => this.sort('created_at')}>Date Created</button>
            </span>
          </div>
          <MagicMove>
            {this.renderCards()}
          </MagicMove>
        </div>
      );
    } else {
      return (
        <div>Make some cards!</div>
      );
    }
  }
});
