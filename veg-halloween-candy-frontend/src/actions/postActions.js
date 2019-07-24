export { ERROR, LOADING, CREATE, SAVE, createPost, savePost };

const ERROR = 'ERROR'
const LOADING = 'LOADING'
const CREATE = 'CREATE'
const SAVE = 'SAVE'

const createPost = (postContent) => {
  return {type: CREATE, payload: postContent}
}

const savePost = (postContent) => {
  return {type: SAVE, payload: postContent}
}

/****************************************************************
FETCHES
****************************************************************/
export const handlePostFetch = (postContent, createOrSave) => {
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
        dispatch(createPost(data.payload))
      } else if (data.status === "saved") {
        dispatch(savePost(data.payload))
      }
      return data;
    })
  }
}
