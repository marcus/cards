// look into the stuff this returns.. still need to figure out how
// stores and reducers work w/ Meteor
Actions = {
  cardsChanged(newDocs) {
    return {
      type: 'CARDS_CHANGED',
      collection: newDocs
    };
  },

  createCard(card) {
    card = card || {
      title: 'New Card',
      created_at: new Date(),
    }
    let createdCard = Card.create(card);
    //console.log("Created a card", card);

    return {
      type: 'CREATE_CARD',
      card: createdCard,
      order: 'created_at', // for now, change the sort order to show the new card @ the top
    }
  },

  updateCard(card) {
    let updatedCardId = Card.update(card);
    let updatedCard = Card.findOne(card._id)
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
