Meteor.publish('cards', function() {
  var cursor = Cards.find({}, {
    fields: Card.publicFields
  });
  return cursor;
});
