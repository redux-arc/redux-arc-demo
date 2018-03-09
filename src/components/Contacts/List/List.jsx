import React, { Component } from 'react';
import { connect } from 'react-redux';

import { creators } from '../actions';

import './List.css';

class ContactList extends Component {
  componentDidMount() {
    this.props.list();
  }

  render() {
    const { pending, error, data, openForm, remove } = this.props;

    if (error) {
      return <div className="contact-list__error">Uh! Something is not right</div>;
    }

    if (pending) {
      return <div className="contact-list__loading">Loading....</div>;
    }

    return (
      <div className="contact-list">
        <ul>
          {data.map(contact => (
            <li key={contact.id}>
              <h1 className="contact-list__name">{contact.name}</h1>
              <span className="contact-list__email">{contact.email}</span>
              <span className="contact-list__phone">{contact.phone}</span>

              <div className="contact-list__actions">
                <button onClick={() => remove(null, { id: contact.id})}>delete</button>
                <button onClick={() => openForm(contact.id)}>edit</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    data: state.contacts.listResult,
    error: state.contacts.listError,
    pending: state.contacts.listIsPending,
  }),
  {
    list: creators.list,
    remove: creators.remove,
    openForm: creators.openForm,
  },
)(ContactList)
