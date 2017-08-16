import { action, observable, computed } from 'mobx';

class WebshopList {
  @observable webshops = [];

  @action addWebshop(webshop) {
    this.webshops.push(webshop);
  }

  @computed get newId() {
    return this.webshops.length + 1;
  }
}

const observableWebshopList = new WebshopList();
export default observableWebshopList;
