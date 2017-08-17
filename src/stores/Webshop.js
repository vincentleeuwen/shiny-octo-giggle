import { action, extendObservable } from 'mobx';

export default class Webshop {
  id = null;

  constructor() {
    extendObservable(this, {
      brand: 'Awesome store',
      usp: 'Awesome',
      tagline: 'Check out our awesome collection',
      bannerColor: '#ebebeb',
      bannerTextColor: '#2c3e50',
      buttonColor: '#1abc9c',
      navbarColor: '#2c3e50',

      updateBrand: action((brand) => {
        this.brand = brand;
      }),
      updateUsp: action((usp) => {
        this.usp = usp;
      }),
      updateTagline: action((tagline) => {
        this.tagline = tagline;
      }),
      updateBannerColor: action((color) => {
        this.bannerColor = color;
      }),
      updateBannerTextColor: action((color) => {
        this.bannerTextColor = color;
      }),
      updateButtonColor: action((color) => {
        this.buttonColor = color;
      }),
      updateNavbarColor: action((color) => {
        this.navbarColor = color;
      }),
    });
  }
}
