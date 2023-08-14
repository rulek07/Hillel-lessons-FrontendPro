import { useLoaderData, useNavigation } from "react-router-dom"
import React, { useState } from "react";
import { Photo } from "../Photos/Photos";
import { URL } from "../../constants";

export const Albums = () => {
    const { albums } = useLoaderData();
    const { state } = useNavigation();
    const [photos, setPhotos] = useState({});

    const clickedAlbum  = async (albumId) => {
        try {
           const res = await fetch(`${URL}/albums/${albumId}/photos`);
           const data = await res.json();
           setPhotos(prevValue => ({
                ...prevValue,
            [albumId]: data
           }))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {state === 'loading' 
                ? 
                <p>Loading . . .</p> 
                : 
                <ul className="albums">
                    {albums.map(album =>
                        <li key={album.id} className="post">
                            <p>User id: {album.userId}</p> 
                            <h3>{album.title}</h3>
                            {photos[album.id] 
                                ? 
                                <Photo photos={photos[album.id]} /> 
                                : 
                                <button key={album.id} onClick={() => clickedAlbum(album.id)}>
                                    PHOTOS
                                </button>
                            }
                        </li>    
                    )}
                </ul>
            }
        </>    
    )       
}