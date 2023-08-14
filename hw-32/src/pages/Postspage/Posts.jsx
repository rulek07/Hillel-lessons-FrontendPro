import { NavLink, useLoaderData, useNavigation } from "react-router-dom"
import { ROUTES } from "../../constants";

export const Posts = () => {
    const { posts } = useLoaderData();
    const { state } = useNavigation();

    return (
        <>
            {state === 'loading' 
                ? 
                <p>Loading . . .</p> 
                : 
                <div className="posts">
                    {posts.map(post =>
                        <NavLink key={post.id} to={ROUTES.post(post.id)}>
                            <div className="post">
                                <p className="post-id">Post id:{post.id}</p>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        </NavLink>
                    )}
                </div>
            }
        </>    
    )       
}