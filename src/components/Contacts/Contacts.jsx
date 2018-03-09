import React from 'react';
import { connect } from 'react-redux';

import List from './List/List';
import Form from './Form/Form';
import { creators } from './actions';

import './Contacts.css';

const Contacts = ({ shouldDisplayForm, openForm }) => (
  <div className="contacts">
    {shouldDisplayForm
      ? <Form />
      : <button onClick={() => openForm()}>New Contact</button>
    }
    <List />
  </div>
);

export default connect(
  ({ contacts }) => ({
    shouldDisplayForm: contacts.shouldDisplayForm,
  }),
  {
    openForm: creators.openForm,
  }
)(Contacts)
