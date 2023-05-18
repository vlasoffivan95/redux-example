import axios from "axios";

// export async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// }

export const getUsers = async () =>
  axios.get("http://127.0.0.1:5001/api/users");

export const registerUser = async (userData) =>
  axios.post("http://127.0.0.1:5001/api/users/auth/signup", userData);
