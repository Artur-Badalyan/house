import { makeAutoObservable, action, computed, toJS, extendObservable, set } from "mobx";

const defaultData = {
  sku: '',
  barcode: '',
  catalogLocalizations: []
};

const defaultParams = {
  params: {
    filter: {},
    sort: {
      field: "name",
      order: "asc"
    },
    limit: 50,
    skip: 0
  }
}

class Catalogues {

  getDefaultStoreProps = () => ({
    catalogues: {
      count: 0,
      data: []
    },
    filterData: defaultParams,
    menuItemState: '',
    menuItemData: JSON.parse(JSON.stringify(defaultData)),
    spList: []
  })
 

  constructor() {
    makeAutoObservable(this);
    extendObservable(this, { ...this.getDefaultStoreProps()});
  }

}

export default new Catalogues();