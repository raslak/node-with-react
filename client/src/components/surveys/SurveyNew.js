// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [showFormReview, toggleShowFormReview] = useState(false);

  function renderContent() {
    if (showFormReview) {
      return <SurveyFormReview onCancel={() => toggleShowFormReview(false)} />;
    }

    return <SurveyForm onSurveySubmit={() => toggleShowFormReview(true)} />;
  }

  return <div>{renderContent()}</div>;
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
