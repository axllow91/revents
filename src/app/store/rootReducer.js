// combined reducer function
import { combineReducers } from "redux"; // combining our reducers
import authReducer from "../../features/auth/authReducer";
import eventReducer from "../../features/events/eventReducers";
import profileReducer from "../../features/profiles/profileReducer";
import testReducer from "../../features/sandbox/testReducer";
import asyncReducer from "../async/asyncReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  profile: profileReducer,
});

export default rootReducer;
