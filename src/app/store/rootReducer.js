// combined reducer function
import { combineReducers } from "redux"; // combining our reducers
import eventReducer from "../../features/events/eventReducers";
import testReducer from "../../features/sandbox/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
});

export default rootReducer;
