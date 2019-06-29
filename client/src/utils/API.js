import axios from "axios";

export default {
  getitemcategories: () => {
    return axios.get("/api/itemcategory");
  },
    // This API saves a customer to the database
    saveCustomer: function(customerData) {
      return axios.post("/api/customer", customerData);
    }
  // addCategoryToDB: (itemcategoriesData) => {
  //   return axios.post("/api/Itemcategory", itemcategoriesData);
  // }
  // getCustomers: () => {
  //   return axios.get("api/customers");
  // }
}
