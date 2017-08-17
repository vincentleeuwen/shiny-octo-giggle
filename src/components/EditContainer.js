import React from 'react';
import queryString from 'query-string';
import { observer, PropTypes } from 'mobx-react';
import EditWebshop from './EditWebshop';

const EditContainer = observer(class EditContainer extends React.Component {
  static propTypes = {
    webshop: PropTypes.observableObject.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      webshop: props.webshop,
    };
  }

  handleInputChange = (e) => {
    switch (e.target.name) {
      case 'brand':
        this.state.webshop.brand = e.target.value;
        break;
      case 'usp':
        this.state.webshop.usp = e.target.value;
        break;
      case 'tagline':
        this.state.webshop.tagline = e.target.value;
        break;
      default:
        break;
    }
  }
  loadPreview = () => {
    const params = queryString.stringify(this.state.webshop);
    window.open(`/preview?${params}`, '_blank');
  }

  updateBannerColor = (color) => {
    this.state.webshop.updateBannerColor(color.hex);
  };
  updateBannerTextColor = (color) => {
    this.state.webshop.updateBannerTextColor(color.hex);
  }
  updateButtonColor = (color) => {
    this.state.webshop.updateButtonColor(color.hex);
  }
  updateNavbarColor = (color) => {
    this.state.webshop.updateNavbarColor(color.hex);
  }

  render() {
    return (
      <div>
        <EditWebshop
          shopId={this.state.webshop.id}
          navbarColor={this.state.webshop.navbarColor}
          updateNavbarColor={this.updateNavbarColor}
          bannerColor={this.state.webshop.bannerColor}
          updateBannerColor={this.updateBannerColor}
          bannerTextColor={this.state.webshop.bannerTextColor}
          updateBannerTextColor={this.updateBannerTextColor}
          buttonColor={this.state.webshop.buttonColor}
          updateButtonColor={this.updateButtonColor}
          handleInputChange={this.handleInputChange}
          brand={this.state.webshop.brand}
          usp={this.state.webshop.usp}
          tagline={this.state.webshop.tagline}
          loadPreview={this.loadPreview}
        />
      </div>
    );
  }
});
export default EditContainer;
