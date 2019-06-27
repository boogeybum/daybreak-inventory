import axios from "axios";

export default {
  getitemcategories: () => {
    return axios.get("/api/itemcategory");
  },
  // addCategoryToDB: (itemcategoriesData) => {
  //   return axios.post("/api/Itemcategory", itemcategoriesData);
  // }
}
