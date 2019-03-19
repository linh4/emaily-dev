import React from 'react';
import  { Link } from 'react-router-dom'
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails.js'
import formFields from './formFields'

const SurveyForm = (props) => {

  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return <Field
            key={name}
            label={label}
            type="text"
            name={name}
            component={SurveyField}
          />
    })
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  )
}

const validate = (values) => {
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '')

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value!'
    }
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
