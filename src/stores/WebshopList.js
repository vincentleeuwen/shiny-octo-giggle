import { action, extendObservable } from 'mobx';

class WebshopList {
  constructor() {
    extendObservable(this, {
      webshops: [],
      addWebshop: action((webshop) => {
        this.webshops.push(webshop);
      }),
      get newId() {
        return this.webshops.length + 1;
      },
    });
  }
}

const observableWebshopList = new WebshopList();
export default observableWebshopList;
