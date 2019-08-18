export { DELETE_POST, ERROR, LOADING, CREATE_POST, SAVE_POST, EDIT_POST, createPost, saveDraft, editPost, deletePost };

const ERROR = 'ERROR';
const LOADING = 'LOADING';
const CREATE_POST = 'CREATE';
const SAVE_POST = 'SAVE';
const EDIT_POST = 'EDIT';
const DELETE_POST = 'DELETE';

const createPost = (postContent) => {
  return {type: CREATE_POST, payload: postContent};
}

const saveDraft = (postContent) => {
  return {type: SAVE_POST, payload: postContent};
}

const editPost = (postContent) => {
  return {type: EDIT_POST, payload: postContent};
}

const deletePost = (payload) => {
  return {type: DELETE_POST, payload: payload};
}
/****************************************************************
FETCH
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
          dispatch({type: CREATE_POST, payload: data.payload})
      } else if (data.status === "saved") {
          dispatch({ type: SAVE_POST, payload: data.payload })
      } else if (data.status === "edited") {
          dispatch({ type: EDIT_POST, payload: data.payload })
      } else if (data.status === "deleted") {
          dispatch({ type: DELETE_POST, payload: data.payload })
      }
      return data;
    })
  }
}
