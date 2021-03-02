const initalState = {
    distance_lookup: "",
    brand_lookup: [],
  };
  function hotelReducer(state = initalState, action) {
    if (action) {
      switch (action.type) {
        case "GET_DISTANCELOOKUP": {
          return { distance_lookup: action.payload };
        }
        case "GET_BRANDLOOKUP": {
            return { brand_lookup: action.payload };
          }
        default:
          return state;
      }
    }
  }
  export default hotelReducer;
  