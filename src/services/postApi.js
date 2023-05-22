import api from "./api";

async function getPosts() {
 const response = await api.get("/");
 return response.data;
}

async function createPost(body){
    const response = await api.post("/",body);
    return response.data;
}

async function deletePost(id){
    const response = await api.delete(`/${id}/`);
    return response.data;
}

export const postApi = {
 getPosts,
 createPost,
 deletePost
};
