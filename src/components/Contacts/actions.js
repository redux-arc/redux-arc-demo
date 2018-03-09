import { createActions } from 'redux-arc';

import './middlewares/reloadList';

/*
  In this file, you can define all actions that is in the scope
  of the module Contacts. Then, createActions will return the types, that you
  can use inside your reducers and will also return the creators, to be used
  inside your components or wherever you need to dispatch the actions.

  Only if you provide a url param inside the action's config object, redux-arc will
  assume that the action is an async action. Otherwise, it will treat the definition as
  a simple fsa action config.
*/

export const { types, creators } = createActions('contacts', {
  /*** Async actions ***/
  read: { url: '/contacts/:id', method: 'get' },
  list: { url: '/contacts', method: 'get' },
  create: { url: '/contacts', method: 'post' },
  update: { url: '/contacts/:id', method: 'put' },
  remove: { url: '/contacts/:id', method: 'delete', middlewares: ['reloadList'] },

  /*** Simple FSA actions ***/
  openForm: null,
  closeForm: null,
});


