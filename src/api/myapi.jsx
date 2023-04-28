import { getInstance, getInstanceAuth, routes } from "./axiosInstance";

const login = async (email,password) => {
  try {
    const response = await getInstance().post(routes.login(), {
      email: email,
      password : password,
      });
      const { data } = response;
   
      return data;
    
  } catch (err) {

    return err;
  }
  
};

const signup = async (name,email,password,confirm_password) => {
  try {
    const response = await getInstance().post(routes.signup() , {
      name:name,
      email:email,
      password:password,
      confirm_password:confirm_password,
  });
  const { data } = response;
  console.log(data);
    return data;
} catch (err) {

  return err;
}

};


const getUsers = async (token) => {
  try {
    const response = await getInstanceAuth(token).get(routes.getUsers());
    const { data } = response;
    return data;
  } catch (err) {
    return err;
  }
};

const getUserById = async (token, id) => {
  try {
    const response = await getInstanceAuth(token).get(routes.getUserById(id));
    const { data } = response;
    return data;
  } catch (err) {
    return err;
  }
};

const updateUserById = async (token, id, name,email) => {
  try {
    const response = await getInstanceAuth(token).put(routes.getUserById(id) , {
      name:name,
      email:email,
  });
    const { data } = response;
    return data;
  } catch (err) {
    return err;
  }
};

const deleteUserById = async (token, id) => {
  try {
    const response = await getInstanceAuth(token).delete(routes.getUserById(id));
    const { data } = response;
    return data;
  } catch (err) {
    return err;
  }
};

export { login, signup, getUserById, getUsers, updateUserById, deleteUserById };
