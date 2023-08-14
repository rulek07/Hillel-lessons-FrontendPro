import { useLoaderData, useNavigation } from "react-router-dom"

export const Post = () => {
    const { post } = useLoaderData();
    const { state } = useNavigation();

    return (
        <>
            {state === 'loading' 
                ? 
                <p>Loading . . .</p> 
                : 
                <div className="post">
                    <p className="post-id">Post id:{post.id}</p>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            }
        </>
    )
}