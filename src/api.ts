const API_URL = 'https://simple-blog-api.crew.red/';

const axios = require('axios').default;

export async function getPosts(): Promise<Post[]> {
  return axios.get(`${API_URL}posts`)
    .then(res => res.data);
}

export async function getComments(postId: number) {
  return axios.get(`${API_URL}posts/${postId}?_embed=comments`)
    .then(res => res.data);
}

export async function setPost(data) {
  return axios.post(`${API_URL}posts`, data);
}

export async function setComment(data) {
  return axios.post(`${API_URL}comments`, data);
}

export async function deletePost(id) {
  return axios.delete(`${API_URL}posts/${id}`);
}
