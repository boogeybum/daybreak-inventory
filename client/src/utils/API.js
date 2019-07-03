import axios from "axios";

export default {
  getitemcategories: () => {
    return axios.get("/api/itemcategory");
  },
  // This API saves a customer to the database
  saveCustomer: function (customerData) {
    return axios.post("/api/customer", customerData);
  },

  // API to get customers
  getCustomers: () => {
    return axios.get("api/customer");
  },

  // addCategoryToDB: (itemcategoriesData) => {
  //   return axios.post("/api/Itemcategory", itemcategoriesData);
  // }
  // getCustomers: () => {
  //   return axios.get("api/customers");
  // }
  saveLots: function (lotData) {
    return axios.post("/api/lot", lotData);
  },

  getLots: () => {
    return axios.get("/api/lot");
  },

  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },

  getUser: () => {
    return axios.get("/api/user");
  },

  getInventoryitems: () => {
    return axios.get("api/inventoryitem");
  },
  addInventoryitem: (data) => {
    return axios.post("api/inventoryitem", data);
  },
  saveInventoryitem: (data) => {
    return axios.put("api/inventoryitem", data);
  }

}
