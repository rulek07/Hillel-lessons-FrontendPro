import { URL } from "../constants";

export const getContacts = async () => {
    try {
       const res = await fetch(`${URL}/users`);
       const data = await res.json();
       return { contacts: data }
    } catch (error) {
        console.error(error)
    }
}