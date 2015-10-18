Cards = new Mongo.Collection('cards');

Meteor.startup(function() { // work around files not being defined yet
  if (Meteor.isClient) { // work around not having actions in /both folder
    // trigger action when this changes
    trackCollection(Cards, (data) => {
      store.dispatch(Actions.cardsChanged(data));
    });
  }
});


Card = {
  create() {
    // Cards.insert(...)
  },
  update() {
    // Cardss.update(...)
  },
  destroy() {
    // Cardss.remove(...)
  },
  findAll() {
    return Cards.find({}, { sort: { created_at: -1, title: 1 } }).fetch();
  }
};
