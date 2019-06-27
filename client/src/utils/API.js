  export default {
  // This API saves a customer to the database
  saveCustomer: function(customerData) {
    return axios.post("/api/books", customerData);
  }
  };
