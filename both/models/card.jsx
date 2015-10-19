Cards = new Mongo.Collection('cards');

Meteor.startup(function() { // work around files not being defined yet
  if (Meteor.isClient) { // work around not having actions in /both folder
    // trigger action when this changes
    trackCollection(Cards, (data) => {
      store.dispatch(Actions.cardsChanged(data));
    });

    // First run
    store.dispatch(Actions.cardsChanged(Card.findAll()));
  }
});


Card = {
  create(card) {
    //console.log("INSERTING CARD", card);
     return Cards.insert(card);
  },
  update() {
    // Cards.update(...)
  },
  destroy() {
    // Cards.remove(...)
  },
  findAll() {
    return Cards.find({}, { sort: { created_at: -1, title: 1 } }).fetch();
  }
};
