import axios from "axios";

const apiUrl = "";
const myApiUrl = "http://127.0.0.1:8000/api/myapi";

const errorResponseHandler = (error) => {
  return Promise.reject(error);
};

const getInstance = () => {
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 60000,
  });

  instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
  );
  return instance;
};

const getInstanceAuth = (token) => {
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 60000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
  );
  return instance;
};

const routes = {
  // myapi routes
  login: () => `${myApiUrl}/login`,
  signup: () => `${myApiUrl}/signup`,
  getUsers: () => `${myApiUrl}/users`,
  getUserById: (id = "") => `${myApiUrl}/users/${id}`,
};

export { getInstance, routes, apiUrl, getInstanceAuth };
