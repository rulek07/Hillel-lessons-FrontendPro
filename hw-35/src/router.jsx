import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './constants'
import { Root } from './pages/Root'
import { Users } from './pages/Userspage'
import { Albums } from './pages/AlbumsPage'
import { Posts } from './pages/Postspage'
import { Post } from './pages/Postpage'
import { getUsers } from './services/getUsers'
import { getPosts } from './services/getPosts'
import { getPostById } from './services/getPostById'
import { getAlbumsByUserId } from './services/getAlbumsByUserId'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: ROUTES.users,
        element: <Users />,
        loader: getUsers,
      },
      {
        path: ROUTES.albums(),
        element: <Albums />,
        loader: getAlbumsByUserId,
      },
      {
        path: ROUTES.posts,
        element: <Posts />,
        loader: getPosts,
      },
      {
        path: ROUTES.post(),
        element: <Post />,
        loader: getPostById,
      }
    ]
  },
]);