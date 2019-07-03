import axios from "axios";

export default {
  // This API gets item categories currently saved to the DB
  getitemcategories: () => {
    return axios.get("/api/itemcategory");
  },
  // This API writes new item categories to the DB
  addCategoryToDB: (itemcategoriesData) => {
    return axios.post("/api/itemcategory", itemcategoriesData);
  },

  // This API saves a customer to the database
  saveCustomer: function (customerData) {
    return axios.post("/api/customer", customerData);
  },

  // API to get customers
  getCustomers: () => {
    return axios.get("api/customer");
  }
}
