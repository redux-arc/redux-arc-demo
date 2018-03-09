import axios from 'axios';

var api = axios.create({
  baseURL: window.location.origin, // you could use something like http://yourhost/api
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

const asyncTask = store => done => (options) => {
  const { method, url, payload } = options;

  const params = method === 'get'
    ? { params: payload }
    : payload;

  return api[method](url, params).then(
    response => done(null, response.data),
    error => done(error, null)
  );
};

export default asyncTask;
