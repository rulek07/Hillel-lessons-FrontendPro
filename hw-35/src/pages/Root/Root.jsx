import { Outlet } from 'react-router-dom'
import { Nav } from '../../components/nav/nav'

export const Root = () => {
    return (
        <main>
            <header>
                <h2>Header</h2>
                <Nav />
            </header>

            <Outlet />

            <footer>
                <h2>Footer</h2>
            </footer>
        </main>
    )
}