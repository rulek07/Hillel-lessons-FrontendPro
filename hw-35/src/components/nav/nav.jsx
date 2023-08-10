import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.root}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.posts}>Posts</Link>
                </li>
            </ul>
        </nav>
    )
}