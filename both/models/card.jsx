Cards = new Mongo.Collection('cards');

Meteor.startup(function() { // work around files not being defined yet
  if (Meteor.isClient) { // work around not having actions in /both folder
    // trigger action when this changes
    trackCollection(Cards, (data) => {
      data = data.sort((a, b) => b.created_at - a.created_at);
      store.dispatch(Actions.cardsChanged(data));
    });

    // First run
    store.dispatch(Actions.cardsChanged(Card.findAll()));
  }
});

let sort = { created_at: -1, title: 1 };
Card = {
  create(card) {
     return Cards.insert(card);
  },

  update(card) {
    return Cards.update(card._id, {
      $set: card,
    });
  },

  delete(cardId) {
    Cards.remove(cardId);
  },

  findAll() {
    return Cards.find({}, { sort: sort }).fetch();
  }
};
