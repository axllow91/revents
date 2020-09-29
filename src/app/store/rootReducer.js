// combined reducer function
import { combineReducers } from "redux"; // combining our reducers
import authReducer from "../../features/auth/authReducer";
import eventReducer from "../../features/events/eventReducers";
import testReducer from "../../features/sandbox/testReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
});

export default rootReducer;
