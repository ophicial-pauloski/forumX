import axios from "axios";



// "http://localhost:4000/post/";
const URL_POST = process.env.REACT_APP_API_KEY + "post/";


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
export const likePost = async (postId: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

const res = await axios.put(`${URL_POST}like/${postId}`, config);
console.log(res.data);

};
