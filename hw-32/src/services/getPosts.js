import { URL } from "../constants";

export const getPosts = async () => {
    try {
       const res = await fetch(`${URL}/posts`);
       const data = await res.json();
       return { posts: data }
    } catch (error) {
        console.error(error)
    }
}