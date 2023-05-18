import axios from "axios";

// export async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// }

export const getUsers = async () => {
  return axios.get("http://127.0.0.1:5001/api/users");
};
