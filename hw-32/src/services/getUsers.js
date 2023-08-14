import { URL } from "../constants";

export const getUsers = async () => {
    try {
       const res = await fetch(`${URL}/users`);
       const data = await res.json();
       return { users: data }
    } catch (error) {
        console.error(error)
    }
}