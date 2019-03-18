import React from 'react';
import  { Link } from 'react-router-dom'
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'

const SurveyForm = (props) => {

  const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
  ]

  const renderFields = () => {
    return _.map(FIELDS, ({ label, name }) => {
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
      <form onSubmit={props.handleSubmit(v => console.log(v))}>
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
  const errors = {

  }
  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
