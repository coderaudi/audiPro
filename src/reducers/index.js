// combile reducer
import { combineReducers } from "redux";

// reducers
import adminReducer from "./adminReducer";
import webInfo from "./websiteInfoReducer";

export default combineReducers({
  webInfo,
  admin: adminReducer
});
