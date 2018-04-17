
const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  // 'Content-Type': 'application/json',
  'Authorization': token
}

//Fetch all Categories
export const GetCategories = () =>
  fetch(`${api}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)

//Fetch all Posts
export const GetPosts = (filter) => {
  const url = filter ? `${api}/${filter}/posts` : `${api}/posts`
  return fetch(url, { headers })
    .then(res => res.json())
    .then(data => data)
}

// Fetch Post
export const GetPost = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data);

//Add Post
// export const addPost = post => {
//       const postData = {
//         ...post,
//         timestamp: new Date().getTime()
//       };
//
//       return fetch(`${api}/posts`, {
//         method: "POST",
//         body: JSON.stringify(postData),
//         headers
//       }).then(res => res.json())
//         .then(data => data);
//     }

//Update Post
// export const updatePost = post => {
//   const postData = {
//     ...post,
//     timestamp: new Date().getTime()
//   };
//
//       return fetch(`${api}/posts/${post.id}`, {
//         method: "PUT",
//         body: JSON.stringify(postData),
//         headers
//       }).then(res => res.json())
//         .then(data => data);
//     }
//
//     export const removePost = id =>
//       fetch(`${api}/posts/${id}`, {
//         method: 'DELETE',
//         headers
//       });

      // Comments
      // export const fetchPostComments = id =>
      //   fetch(`${api}/posts/${id}/comments`, { headers })
      //     .then(res => res.json())
      //     .then(data => data);
      //
      // export const addNewComment = comment => {
      //   const commentData = {
      //     ...comment,
      //     timestamp: new Date().getTime()
      //   };
      //
      //   return fetch(`${api}/comments`, {
      //     method: "POST",
      //     body: JSON.stringify(commentData),
      //     headers
      //   }).then(res => res.json())
      //     .then(data => data);
      // }
      //
      // export const removeComment = id =>
      //   fetch(`${api}/comments/${id}`, {
      //     method: 'DELETE',
      //     headers
      //   });
      //
      // export const updateComment = comment => {
      //   const commentData = {
      //     ...comment,
      //     timestamp: new Date().getTime()
      //   };
      //
      //   return fetch(`${api}/comments/${comment.id}`, {
      //     method: "PUT",
      //     body: JSON.stringify(commentData),
      //     headers
      //   }).then(res => res.json())
      //     .then(data => data);
      // }
      //

// export const get = (bookId) =>
//   fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)
//
// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)
//
// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())
//
// export const search = (query) =>
//   fetch(`${api}/search`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   }).then(res => res.json())
//     .then(data => data.books)
