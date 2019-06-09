// action type
import { ADD_ARTICLE } from "../actions/action-types";
const initialState = {
  adminMobile: 777777
};
function adminReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
export default adminReducer;
