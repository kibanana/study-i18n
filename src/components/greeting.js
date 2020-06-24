import React, { Component } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import i18n from '../i18n';

// 1)
// const Greeting = () => {
// const { t } = useTranslation();
//   return (
//     <h2>{i18n.t('greeting')}</h2>
//   );
// }

class Greeting extends Component {
  render() {
    // 2)
    const { t } = this.props;
    return (
      <h2>{t('greeting')}</h2>
      // 3)
      // <h2>{i18n.t('greeting')}</h2>
    );
  }
}

export default withTranslation()(Greeting);
