import { GET_ADMIN_NAME } from "../actions/types";

export const getAdminName = adminName => {
  return { type: GET_ADMIN_NAME, adminName };
};
