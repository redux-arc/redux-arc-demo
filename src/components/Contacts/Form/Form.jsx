import React, { Component } from 'react';
import { connect } from 'react-redux';

import { creators } from '../actions';

import './Form.css'

const defaultValues = {
  name: '',
  email: '',
  phone: '',
};

class ContactsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: this.props.initialValues,
    };
  }

  componentDidMount() {
    const { id, read } = this.props;

    if (id) {
      read(null, { id });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id && nextProps.initialValues !== this.props.initialValues) {
      this.setState({ values: nextProps.initialValues });
    }
  }

  onChange = ({ target: { value, name }}) => {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    })
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { values } = this.state;
    const { create, update, closeForm, list } = this.props;

    await values.id
      ? update(values, { id: values.id })
      : create(values);

    closeForm();
    list();
  };

  render() {
    const {
      readIsPending, saveIsPending, readError, saveError, initialValues, closeForm,
    } = this.props;

    if (readError) {
      return <div>Uh, Sorry! Something is not right</div>
    }

    if (readIsPending || !initialValues) {
      return <div>Loading...</div>
    }

    const { values } = this.state;

    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          className={`contacts-form ${saveIsPending ? 'is-disabled' : ''}`}
        >
          <div className="contacts-form__form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={this.onChange}
              disabled={saveIsPending}
            />
          </div>
          <div className="contacts-form__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={this.onChange}
              disabled={saveIsPending}
            />
          </div>
          <div className="contacts-form__form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={this.onChange}
              disabled={saveIsPending}
            />
          </div>
          {saveError &&
            <div>{saveError.message}</div>
          }

          <div className="contacts-form__actions">
            <button
              type="button"
              onClick={() => closeForm()}
              disabled={saveIsPending}
            >
              Cancel
            </button>
            <button type="submit" disabled={saveIsPending}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ contacts }) => ({
    id: contacts.editingId,
    initialValues: contacts.editingId ? contacts.readResult : defaultValues,
    shouldDisplay: contacts.shouldDisplayForm,

    error: contacts.saveError,
    readIsPending: contacts.readIsPending,
    saveIsPending: contacts.createIsPending || contacts.updateIsPending,
  }),
  {
    read: creators.read,
    list: creators.list,
    create: creators.create,
    update: creators.update,
    closeForm: creators.closeForm,
  },
)(ContactsForm)
