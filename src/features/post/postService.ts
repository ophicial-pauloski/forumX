import axios from "axios";

const URL_POST= "http://localhost:4000/post/";


//create post
export const createNewPost = async (post: any, token:string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.post(URL_POST + 'create', post, config);
    return response.data;
};

//get all post
export const getPosts = async () => {
    const response = await axios.get(URL_POST);
    return response.data;
}
