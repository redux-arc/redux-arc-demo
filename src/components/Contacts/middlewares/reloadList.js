import { middlewares } from 'redux-arc';

function reloadList() {
  return done => (action, error, response) => {

  }
}

reloadList.applyPoint = 'onResponse';

middlewares.register('reloadList', reloadList);
