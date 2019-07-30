export { ERROR, LOADING, CREATE, SAVE, EDIT, createPost, savePost, editPost };

const ERROR = 'ERROR'
const LOADING = 'LOADING'
const CREATE = 'CREATE'
const SAVE = 'SAVE'
const EDIT = 'EDIT'

const createPost = (postContent) => {
  return {type: CREATE, payload: postContent}
}

const savePost = (postContent) => {
  return {type: SAVE, payload: postContent}
}

const editPost = (postContent) => {
  return {type: EDIT, payload: postContent}
}

/****************************************************************
FETCHES
****************************************************************/
export const handlePostFetch = (postContent, fetchType) => {
  return (dispatch) => {
    dispatch( { type: LOADING } );
    fetch(`http://localhost:3000/api/v1/posts/${fetchType}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
         'Authenticate': postContent.payload.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postContent)
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === "success"){
        dispatch(createPost(data.payload))
      } else if (data.status === "saved") {
        dispatch(savePost(data.payload))
      } else if (data.status === "edited") {
        dispatch(editPost(data.payload))
      }
      return data;
    })
  }
}
