import React from 'react';
import queryString from 'query-string';
import Preview from './Preview';

export default class PreviewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {},
    };
  }
  componentWillMount() {
    const params = queryString.parse(window.location.search);
    this.setState({
      params,
    });
  }
  render() {
    return (
      <Preview
        navbarColor={this.state.params.navbarColor}
        brand={this.state.params.brand}
        usp={this.state.params.usp}
        tagline={this.state.params.tagline}
        bannerColor={this.state.params.bannerColor}
        bannerTextColor={this.state.params.bannerTextColor}
        buttonColor={this.state.params.buttonColor}
      />
    );
  }
}
