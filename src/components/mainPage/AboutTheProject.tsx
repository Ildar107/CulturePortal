import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutTheProject = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="jumbotron jumbotron-mainPage">
      <h1>{t('headers.aboutPortal')}</h1>
      <p className="lead">{t('content.portalDescription')}</p>
    </div>
  );
};

export default AboutTheProject;
