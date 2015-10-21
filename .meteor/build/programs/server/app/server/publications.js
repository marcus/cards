(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish('cards', function () {                                  // 1
  var cursor = Cards.find({}, { fields: { title: 1 } });               // 2
  return cursor;                                                       // 3
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=publications.js.map
