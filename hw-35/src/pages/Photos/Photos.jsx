import { useNavigation } from "react-router-dom"

export const Photo = ({photos}) => {
    const { state } = useNavigation();

    return (
        <>
            {state === 'loading' 
                ? 
                <p>Loading . . .</p> 
                : 
                <div className="photo-wrapper">
                    {photos.map(photo =>
                    <span key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </span>
                    )}
                </div>
            }
        </>
    )
}