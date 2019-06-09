// combile reducer
import { combineReducers } from "redux";

// reducers
import adminReducer from "./adminReducer";
import webInfo from "./websiteInfoReducer";
import notePadReducer from "./notepadReducer.js";

export default combineReducers({
  webInfo,
  notePad: notePadReducer,
  admin: adminReducer
});
