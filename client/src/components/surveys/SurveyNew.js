// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [showFormReview, toggleShowFormReview] = useState(false);

  function renderContent() {
    if (showFormReview) {
      return <SurveyFormReview />;
    }

    return <SurveyForm onSurveySubmit={() => toggleShowFormReview(true)} />;
  }

  return <div>{renderContent()}</div>;
};

export default SurveyNew;
