Meteor.methods({ // work around not having actions in /both folder
  exportCSV() {
    var collection = Cards.find().fetch();
    var heading = true; // Optional, defaults to true
    var delimiter = "," // Optional, defaults to ",";
    return exportcsv.exportToCSV(collection, heading, delimiter);
  },
});
