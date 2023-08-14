import { NavLink, useLoaderData, useNavigation } from "react-router-dom"
import { ROUTES } from "../../constants";

export const Users = () => {
    const { users } = useLoaderData();
    const { state } = useNavigation();

    return (
        <>
            {state === 'loading' 
                ? 
                <p>Loading . . .</p> 
                : 
                <ul className="users">
                    {users.map(user =>
                    <li key={user.id} className="user">
                        <div className="user-info">
                            <h3>{user.name}</h3>
                            <p>{user.phone}</p>
                            <NavLink className="btn-albums" key={user.id} to={ROUTES.albums(user.id)}>ALBUMS</NavLink>
                        </div>
                    </li> 
                    )}
                </ul>
            }
        </>  
    )
}