import axios from "axios";

const URL_POST = "post/";


//create post
export const createNewPost = async (post: any, token:string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.post(`${URL_POST}create`, post, config);
    return response.data;
};

//get all post
export const getPosts = async () => {
    const response = await axios.get(URL_POST);
    return response.data;
}

//like post
export const likePost = async (postId: string, userId: string, token: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  const res = await axios.put(`${URL_POST}like/${postId}`, {userId}, config);
  return res.data;
};

//get post by id
export const getPostById = async (postId: string) => {
    const response = await axios.get(`${postId}`);
    console.log(response.data);
    
    return response.data;
}

// delete post
export const deletePost = async (postId: string, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.delete(`${URL_POST}delete/${postId}`, config);
    return response.data;
}