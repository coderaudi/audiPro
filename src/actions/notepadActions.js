// src/js/actions/index.js
import { ADD_NOTE } from "./action-types";

// add note
export const addNote = payload => {
  return {
    type: "ADD_NOTE",
    payload
  };
};
