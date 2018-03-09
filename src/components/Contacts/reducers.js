import { createReducers } from 'redux-arc';
import { types } from './actions';

/*
  On reducers file, you define the handlers for each action you have previously defined
  in actions.js file.

  You should also define your INITIAL_STATE for this module and then, you call the function
  createReducers, providing the INITIAL_STATE, and a HANDLERS object.

  the HANDLERS object should contain the keys as the action types and the values as the handlers
  for each action.

  Bellow, we define handlers for async request (actions for api requests) and also
  Flux standard Actions. If you are not familiar with this concept, you should take a look at
*/

const INITIAL_STATE = {
  readResult: null,
  readIsPending: false,
  readError: null,

  listResult: [],
  listIsPending: false,
  listError: null,

  createResult: null,
  createIsPending: false,
  createError: null,

  updateResult: null,
  updateIsPending: false,
  updateError: null,

  removeResult: null,
  removeIsPending: false,
  removeError: null,

  shouldDisplayForm: false,
  editingId: null,
};

const onReadRequest = (state) => ({
  ...state,
  readIsPending: true,
  readError: INITIAL_STATE.readError,
});

/*
  When occurred an error in the request, action.error will be true and
  the payload will be the error response.
  When the request was successful, error will be false or undefined and the payload
  will be the response
*/
const onReadResponse = (state, action) => action.error ? {
  ...state,
  readIsPending: INITIAL_STATE.readIsPending,
  readError: action.payload,
  readResult: INITIAL_STATE.readResult,
} : {
  ...state,
  readIsPending: INITIAL_STATE.readIsPending,
  readResult: action.payload,
};

const onListRequest = (state) => ({
  ...state,
  listIsPending: true,
  readError: INITIAL_STATE.readError,
});

const onListResponse = (state, action) => action.error ? {
  ...state,
  listIsPending: INITIAL_STATE.listIsPending,
  listError: action.payload,
  listResult: INITIAL_STATE.listResult,
} : {
  ...state,
  listIsPending: INITIAL_STATE.listIsPending,
  listResult: action.payload,
};

const onCreateRequest = state => ({
  ...state,
  createIsPending: true,
  readError: INITIAL_STATE.readError,
});

const onCreateResponse = (state, action) => action.error ? {
  ...state,
  createIsPending: INITIAL_STATE.createIsPending,
  createError: action.payload,
  createResult: INITIAL_STATE.createResult,
} : {
  ...state,
  createIsPending: INITIAL_STATE.createIsPending,
  createResult: action.payload,
};

const onUpdateRequest = state => ({
  ...state,
  updateIsPending: true,
  readError: INITIAL_STATE.readError,
});

const onUpdateResponse = (state, action) => action.error ? {
  ...state,
  updateIsPending: INITIAL_STATE.updateIsPending,
  updateError: action.payload,
  updateResult: INITIAL_STATE.updateResult,
} : {
  ...state,
  updateIsPending: INITIAL_STATE.updateIsPending,
  updateResult: action.payload,
};

const onDeleteRequest = state => ({
  ...state,
  removeIsPending: true,
  readError: INITIAL_STATE.readError,
});

const onDeleteResponse = (state, action) => action.error ? {
  ...state,
  removeIsPending: INITIAL_STATE.removeIsPending,
  removeError: action.payload,
  removeResult: INITIAL_STATE.removeResult,
} : {
  ...state,
  removeIsPending: INITIAL_STATE.removeIsPending,
  removeResult: action.payload,
};

const onOpenForm = (state, action) => ({
  ...state,
  shouldDisplayForm: true,
  editingId: action.payload,
});

const onCloseForm = state => ({
  ...state,
  shouldDisplayForm: false,
  editingId: INITIAL_STATE.editingId,
});

const HANDLERS = {
  /*** ASYNC ACTIONS ***/
  [types.READ.REQUEST]: onReadRequest,
  [types.READ.RESPONSE]: onReadResponse,

  [types.LIST.REQUEST]: onListRequest,
  [types.LIST.RESPONSE]: onListResponse,

  [types.CREATE.REQUEST]: onCreateRequest,
  [types.CREATE.RESPONSE]: onCreateResponse,

  [types.UPDATE.REQUEST]: onUpdateRequest,
  [types.UPDATE.RESPONSE]: onUpdateResponse,

  [types.REMOVE.REQUEST]: onDeleteRequest,
  [types.REMOVE.RESPONSE]: onDeleteResponse,

  /*** SIMPLE FSA ACTIONS ***/
  [types.OPEN_FORM]: onOpenForm,
  [types.CLOSE_FORM]: onCloseForm,
}

export default createReducers(INITIAL_STATE, HANDLERS);
