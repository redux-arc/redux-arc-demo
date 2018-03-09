import { middlewares } from 'redux-arc';
import { creators } from '../actions';

function reloadList(store) {
  return done => (action, error, response) => {
    store.dispatch(creators.list());
    return done(action, error, response);
  }
}

reloadList.applyPoint = 'onResponse';

middlewares.register('reloadList', reloadList);
