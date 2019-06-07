import { GET_ADMIN_NAME } from "../actions/types";

const INIT_STATE = {
  adminName: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ADMIN_NAME:
      return {
        ...state,
        adminName: "testUser"
      };

    default:
      return {
        ...state
      };
  }
};
