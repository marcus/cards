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
    }
    let createdCard = Card.create(card);
    console.log("Created a card", card);

    return {
      type: 'CREATE_CARD',
      card: createdCard,
    }
  },

  createCard(card) {
    let updatedCard = Card.update(card);
    console.log("Updated a card", card);

    return {
      type: 'UPDATED_CARD',
      card: updatedCard,
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
