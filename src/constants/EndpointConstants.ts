export const ENDPOINT_CONSTANTS = {
  POSTS: () => `/posts`,
  POSTS_COMMENT: (id: string) => `/posts/${id}/comments`,
  COMMENTS: () => `/comments`,
  ALBUMS: () => `/albums`,
  PHOTOS: () => `/photos`,
  TODOS: () => `/todos`,
  USERS: () => `/users`
}