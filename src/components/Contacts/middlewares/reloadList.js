import { creators } from '../actions';

function reloadList(store) {
  return done => (action, error, response) => {
    store.dispatch(creators.list());
    return done(action, error, response);
  }
}

reloadList.applyPoint = 'onResponse';

export default reloadList;
