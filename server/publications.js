Meteor.publish('cards', function() {
  var cursor = Cards.find({}, {fields: { title: 1 }});
  return cursor;
});
