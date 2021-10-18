import { useEffect } from "react";

const InitialState = {
   Events: [],
   Users: [],
   Event:{},
  };
  
function Reducer(state = InitialState, action) {

    switch (action.type) { 
      case "ALL_EVENTS":
        return {
          ...state,
          Events: action.payload,
        };
        case "USERS":
            return {
        };
        case "EVENT":
        return {
          ...state,
          Event: action.payload
        };
      default:
        return state;
    }
  }
  
  export default Reducer;