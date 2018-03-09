# Redux Arc Demo

This repository intends to show Redux Arc's basic features through a  contacts *CRUD*

The project structure is the following:

```
  src
  ├─ components
  │  └─ Contacts
  │    ├─ Form
  │    │ ├─ Form.jsx
  │    │ └─ Form.css
  │    │
  │    ├─ List.jsx
  │    │ ├─ List.jsx
  │    │ └─ List.css
  │    ├─ middlewares
  │    │  └─ reloadList.js
  │    ├─ Contacts.js
  │    ├─ Contacts.css
  │    ├─ reducers.js
  │    └─ actions.js
  │
  ├─ store
  │  ├─ asyncTask.js
  │  ├─ createStore.js
  │  └─ rootReducer.js
  │
  ├─ index.css
  ├─ index.js
  ├─ logo.svg
  ├─ Root.jsx
  ├─ Root.css
  └─ index.css
```


## Get started

Do a git clone from the repo

```
  git clone
```

inside the project's folder, install the dependencies:

```
  npm install
```

OR

```
  yarn install
```


After you have all the dependencies installed, start the server for api and the build for UI:

```
  npm run start:api

  npm run start
```
