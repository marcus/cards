if (Meteor.isServer) { // work around not having actions in /both folder
  var basicAuth = new HttpBasicAuth("dlu", "dlu");
  basicAuth.protect();
}
