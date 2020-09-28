//
import { sampleData } from "../../app/api/sampleData";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";

const initialState = {
  events: sampleData,
};

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload], // adding a new event (creating a new array so it remains immutable)
      };

    case UPDATE_EVENT:
      return {
        ...state,
        // return all events that do not match our eventId
        // and at the end pass it an additional event to this array
        events: [
          ...state.events.filter((evt) => evt.id !== payload.id),
          payload,
        ],
      };

    case DELETE_EVENT:
      return {
        ...state,
        // return all the elements except the one that we deleted
        // you can see we are not adding new event at the end
        events: [...state.events.filter((evt) => evt.id !== payload)],
      };
    default:
      return state;
  }
}
