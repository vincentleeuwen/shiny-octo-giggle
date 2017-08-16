import { action, observable } from 'mobx';

export default class Webshop {
  id = null;
  @observable brand = 'Awesome store';
  @observable usp = 'Webshop';
  @observable tagline = 'Check out these awesome products';
  @observable bannerColor = '#ecf0f1';
  @observable bannerTextColor = '#2c3e50';
  @observable buttonColor = '#1abc9c';
  @observable navbarColor = '#2c3e50';

  @action updateBrand(brand) {
    this.brand = brand;
  }
  @action updateUsp(usp) {
    this.usp = usp;
  }
  @action updateTagline(tagline) {
    this.tagline = tagline;
  }
  @action updateBannerColor(color) {
    this.bannerColor = color;
  }
  @action updateBannerTextColor(color) {
    this.bannerTextColor = color;
  }
  @action updateButtonColor(color) {
    this.buttonColor = color;
  }
  @action updateNavbarColor(color) {
    this.navbarColor = color;
  }
}
