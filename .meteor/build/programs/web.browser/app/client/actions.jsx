(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/actions.jsx                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Actions = {                                                            // 1
  cardsChanged: function (newDocs) {                                   // 2
    return {                                                           // 3
      type: 'CARDS_CHANGED',                                           // 4
      collection: newDocs                                              // 5
    };                                                                 //
  },                                                                   //
                                                                       //
  createCard: function (card) {                                        // 9
    card = card || {                                                   // 10
      title: 'New Card',                                               // 11
      created_at: new Date()                                           // 12
    };                                                                 //
    var createdCard = Card.create(card);                               // 14
    console.log("Created a card", card);                               // 15
                                                                       //
    return {                                                           // 17
      type: 'CREATE_CARD',                                             // 18
      card: createdCard                                                // 19
    };                                                                 //
  },                                                                   //
                                                                       //
  updateCard: function (card) {                                        // 23
    var updatedCard = Card.update(card);                               // 24
                                                                       //
    return {                                                           // 26
      type: 'UPDATE_CARD',                                             // 27
      card: updatedCard                                                // 28
    };                                                                 //
  },                                                                   //
                                                                       //
  deleteCard: function (cardId) {                                      // 32
    var updatedCard = Card['delete'](cardId);                          // 33
                                                                       //
    return {                                                           // 35
      type: 'DELETE_CARD',                                             // 36
      id: cardId                                                       // 37
    };                                                                 //
  },                                                                   //
                                                                       //
  selectCard: function (cardId) {                                      // 41
    var card = Cards.findOne(cardId);                                  // 42
                                                                       //
    return {                                                           // 44
      type: 'SELECT_CARD',                                             // 45
      cardId: cardId,                                                  // 46
      card: card                                                       // 47
    };                                                                 //
  }                                                                    //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
