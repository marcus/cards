(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// both/models/card.jsx                                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Cards = new Mongo.Collection('cards');                                 // 1
                                                                       //
Meteor.startup(function () {                                           // 3
  // work around files not being defined yet                           //
  if (Meteor.isClient) {                                               // 4
    // work around not having actions in /both folder                  //
    // trigger action when this changes                                //
    trackCollection(Cards, function (data) {                           // 6
      data = data.sort(function (a, b) {                               // 7
        return b.created_at - a.created_at;                            //
      });                                                              //
      store.dispatch(Actions.cardsChanged(data));                      // 8
    });                                                                //
                                                                       //
    // First run                                                       //
    store.dispatch(Actions.cardsChanged(Card.findAll()));              // 12
  }                                                                    //
});                                                                    //
                                                                       //
var sort = { created_at: -1, title: 1 };                               // 16
Card = {                                                               // 17
  create: function (card) {                                            // 18
    return Cards.insert(card);                                         // 19
  },                                                                   //
                                                                       //
  update: function (card) {                                            // 22
    var id = card._id;                                                 // 23
    delete card._id;                                                   // 24
    console.log('updating card', card);                                // 25
    return Cards.update(id, {                                          // 26
      $set: card                                                       // 27
    });                                                                //
  },                                                                   //
                                                                       //
  'delete': function (cardId) {                                        // 31
    Cards.remove(cardId);                                              // 32
  },                                                                   //
                                                                       //
  findAll: function () {                                               // 35
    return Cards.find({}, { sort: sort }).fetch();                     // 36
  }                                                                    //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
