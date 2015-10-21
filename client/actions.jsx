// look into the stuff this returns.. still need to figure out how
// stores and reducers work w/ Meteor
Actions = {
  cardsChanged(newDocs) {
    return {
      type: 'CARDS_CHANGED',
      collection: newDocs
    };
  },

  getCards() {
    return {
      type: 'GET_CARDS',
    }
  },

  createCard(card) {
    card = card || {
      title: 'New Card',
      created_at: new Date(),
    }
    let createdCard = Card.create(card);
    console.log("Created a card", card);

    return {
      type: 'CREATE_CARD',
      card: createdCard,
    }
  },

  updateCard(card) {
    let updatedCard = Card.update(card);

    return {
      type: 'UPDATE_CARD',
      card: updatedCard,
    }
  },

  deleteCard(cardId) {
    let updatedCard = Card.delete(cardId);

    return {
      type: 'DELETE_CARD',
      id: cardId,
    }
  },

  // prob don't need
  selectCard(cardId) {
    let card = Cards.findOne(cardId);

    return {
      type: 'SELECT_CARD',
      cardId: cardId,
      card: card,
    }
  },
};
