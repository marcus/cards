Actions = {
  cardsChanged(newDocs) {
    return {
      type: 'CARDS_CHANGED',
      collection: newDocs
    };
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
