import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-admin-dashboard-9e2e7.firebaseio.com/",
});

export default instance;
