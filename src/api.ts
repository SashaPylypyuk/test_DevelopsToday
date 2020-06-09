const API_URL = 'https://simple-blog-api.crew.red/';

const axios = require('axios').default;

export async function getPosts(): Promise<Post[]> {
  return axios.get(`${API_URL}posts`)
    .then(res => res.data);
}
