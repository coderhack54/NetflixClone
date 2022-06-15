import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// whenever we will write instance.get("foo-bar");
// it will convert it into like this -----  https://api.themoviedb.org/3/foo-bar

export default instance;
