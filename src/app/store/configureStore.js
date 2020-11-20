import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { verifiyAuth } from "../../features/auth/authActions";

export function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  ); // with this configuration we can use devtools and redux-thunk
  store.dispatch(verifiyAuth()); // we configured store to dispatch our authentication verifier

  return store;
}
