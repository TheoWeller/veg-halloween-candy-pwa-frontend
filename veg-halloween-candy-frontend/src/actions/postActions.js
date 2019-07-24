export { ERROR, LOADING, CREATE, createPost };

const ERROR = 'ERROR'
const LOADING = 'LOADING'
const CREATE = 'CREATE'

const createPost = (postContent) => {
  return {type: CREATE, payload: postContent}
}

/****************************************************************
FETCHES
****************************************************************/
export const createPostFetch = (postContent, createOrSave) => {
  return (dispatch) => {
    dispatch( { type: LOADING } );
    fetch(`http://localhost:3000/api/v1/posts/${createOrSave}`, {
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
        dispatch({ type: CREATE, payload: data.payload })
      }
      return data;
    })
  }
}
