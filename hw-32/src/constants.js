export const ROUTES = {
    root: '/',
    users: '/users',
    posts: '/posts',
    post: (postId = '') => postId ? `/post/${postId}` : '/post/:postId',
    albums: (userId = '') => userId ? `/albums/${userId}` : '/albums/:userId',
    contacts: '/contacts',
}

export const URL = 'https://jsonplaceholder.typicode.com'