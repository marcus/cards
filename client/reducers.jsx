// reducers allow you to 'slice' off a part of the single state object which
// lets you think about the domain in a smaller picture. You could use one
// reducer in a small app like this but in large apps this reducer could be
// several hundred lines. See store.jsx to see how these reducers get 'combined'
// into one single app state. We'll use two reducers, one for transient state
// that the UI uses (selected id,name) and one for data (coming from Mongo)

let { cardsChanged, selectCard } = Actions;
Reducers = {};

let initialInterfaceState = {
  selectedId: '',
}

// helper to *copy* old state and merge new data with it
function merge(oldState, newState) {
  return _.extend({}, oldState, newState);
}

// these reducers *must* be pure to use time-travel dev-tools
// never directly mutate the `state` param, use merge instead

Reducers.userInterface = function userInterface(state, action) {
  state = state || initialInterfaceState;

  switch (action.type) {
    case 'SELECT_CARD':
      // we happen to be replacing all the reducers state but with merge you
      // could just return the selectedId and it would retain selectedPlayerName
      return merge(state, {
        selectedId: action.cardId,
      });
    default:
      return state;
  }
}

Reducers.cards = function cards(state = [], action) {
  switch (action.type) {
    case 'CARDS_CHANGED':
      // we don't have to merge the single doc that changes since minimongo
      // keeps the entire cache for us. We'll just return the new minimongo state
      // We *could* also return another fetch if sorting wasn't so easy here
      let docs = _.clone(action.collection); // clone to prevent mutating action!!
      return docs.sort((a,b) => b.title - a.title);
    default:
      return state;
  }
}
