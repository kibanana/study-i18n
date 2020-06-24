import React, { Component } from 'react';
import i18n from '../i18n';

class LanguageBox extends Component {
  state = {
    lan: 'ko',
  };
  handleSelectBox = (e) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    this.setState({
      lan: newLanguage,
    });
  } 
  render() {
    return (
      <form>
        <select onChange={this.handleSelectBox}>
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="zh">汉语</option>
        </select>
      </form>      
    );
  }
}

export default LanguageBox;
