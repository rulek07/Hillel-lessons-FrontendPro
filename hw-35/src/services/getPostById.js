import { URL } from "../constants";

export const getPostById = async ({params}) => {
    try {
       const res = await fetch(`${URL}/posts/${params.postId}`);
       const data = await res.json();
       return { post: data }
    } catch (error) {
        console.error(error)
    }
}