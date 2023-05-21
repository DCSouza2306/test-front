import {postApi} from "../../services/postApi";
import useAsync from "../useAsync";

export function useGetPosts(){
    const {
        data: postData,
        loading: postLoading,
        error: postError,
        task: getPosts
    } = useAsync(postApi.getPosts)

    return {
        postData,
        postLoading,
        postError,
        getPosts
    }
}

export function useCreatePost(){
    const {
        data: createPostData,
        loading: createPostLoading,
        error: createPostError,
        task: createPost
    } = useAsync(postApi.createPost, false)

    return {
        createPostData,
        createPostLoading,
        createPostError,
        createPost
    }
}