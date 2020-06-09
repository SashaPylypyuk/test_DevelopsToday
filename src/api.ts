const API_URL = 'https://simple-blog-api.crew.red/';

const axios = require('axios').default;

export async function getPosts(): Promise<Post[]> {
  return axios.get(`${API_URL}posts`)
    .then(res => res.data);
}

export async function getComments( postId: number ): Promise<Comment[]> {
  return axios.get(`${API_URL}posts/${postId}?_embed=comments`)
    .then(res => res.data);
}

export async function setPost(data) {
  return axios.post(`${API_URL}posts`, data)
    .then((res) => {
      console.log(res);
    });
}

