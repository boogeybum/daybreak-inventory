import axios from "axios";

export default {
  getitemcategories: () => {
    return axios.get("api/itemcategories");
  },
  addCategoryToDB: (itemcategoriesData) => {
    return axios.post("api/itemcategories", itemcategoriesData);
  }
}