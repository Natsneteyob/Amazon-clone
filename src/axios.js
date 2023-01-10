import axios from "axios";

// when we are working with payment js 
const instance = axios.create({
  //baseURL: "http://127.0.0.1:5001/clone-776df/us-central1/api",
  //the API (cloud function) URL
  baseURL: "https://us-central1-clone-776df.cloudfunctions.net/api",
});

export default instance;