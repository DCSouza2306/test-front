import api from "./api";

async function getPosts() {
 const response = await api.get("/");
 return response.data;
}

async function createPost(body){
    const response = await api.post("/",body);
    return response.data;
}

export const postApi = {
 getPosts,
 createPost
};
