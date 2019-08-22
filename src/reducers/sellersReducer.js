export default (state =[], action) => {
  switch (action.type) {
    case "FETCH_SELLER":
      return [...state, action.payload];
    default:
      return state;
  }
}