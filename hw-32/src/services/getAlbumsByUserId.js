import { URL } from "../constants";

export const getAlbumsByUserId  = async ({params}) => {
    try {
       const res = await fetch(`${URL}/users/${params.userId}/albums`);
       const data = await res.json();
       return { albums: data }
    } catch (error) {
        console.error(error)
    }
}