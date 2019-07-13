//ALL FETCH HELPER FUNCTIONS ARE CONTAINED WITHIN THIS FILE
export const autoLogin = token => {
  return fetch(`http://localhost:3000/api/v1/auto_login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({payload: token})
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
}

export const login = credentials => {
  return fetch(`http://localhost:3000/api/v1/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
}

export const createUser = credentials => {
  return fetch(`http://localhost:3000/api/v1/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
}

export const createPost = postContent => {
  return fetch(`http://localhost:3000/api/v1/posts/create`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
         'Authenticate': postContent.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postContent)
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
}

export const savePost = postContent => {
  return fetch(`http://localhost:3000/api/v1/save`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
         'Authenticate': postContent.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postContent)
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
}
