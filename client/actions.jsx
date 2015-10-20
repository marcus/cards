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

  selectCard(cardId) {
    let card = Cards.findOne(cardId);

    return {
      type: 'SELECT_CARD',
      cardId: cardId,
      card: card,
    }
  },
};
