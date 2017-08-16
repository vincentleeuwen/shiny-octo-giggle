import React from 'react';
import queryString from 'query-string';
import { observer, PropTypes } from 'mobx-react';
import EditWebshop from './EditWebshop';

@observer
export default class EditContainer extends React.Component {
  handleInputChange = (e) => {
    switch (e.target.name) {
      case 'brand':
        this.props.webshop.brand = e.target.value;
        break;
      case 'usp':
        this.props.webshop.usp = e.target.value;
        break;
      case 'tagline':
        this.props.webshop.tagline = e.target.value;
        break;
      default:
        break;
    }
  }
  loadPreview = () => {
    const params = queryString.stringify(this.props.webshop);
    window.open(`/preview?${params}`, '_blank');
  }

  updateBannerColor = (color) => {
    this.props.webshop.updateBannerColor(color.hex);
  };
  updateBannerTextColor = (color) => {
    this.props.webshop.updateBannerTextColor(color.hex);
  }
  updateButtonColor = (color) => {
    this.props.webshop.updateButtonColor(color.hex);
  }
  updateNavbarColor = (color) => {
    this.props.webshop.updateNavbarColor(color.hex);
  }

  render() {
    return (
      <div>
        <EditWebshop
          shopId={this.props.webshop.id}
          navbarColor={this.props.webshop.navbarColor}
          updateNavbarColor={this.updateNavbarColor}
          bannerColor={this.props.webshop.bannerColor}
          updateBannerColor={this.updateBannerColor}
          bannerTextColor={this.props.webshop.bannerTextColor}
          updateBannerTextColor={this.updateBannerTextColor}
          buttonColor={this.props.webshop.buttonColor}
          updateButtonColor={this.updateButtonColor}
          handleInputChange={this.handleInputChange}
          brand={this.props.webshop.brand}
          usp={this.props.webshop.usp}
          tagline={this.props.webshop.tagline}
          loadPreview={this.loadPreview}
        />
      </div>
    );
  }
}

EditContainer.propTypes = {
  webshop: PropTypes.observableObject.isRequired,
};
