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

export function useDeletePost(){
    const {
        loading: deletePostLoading,
        error: deletePostError,
        task: deletePost
    } = useAsync(postApi.deletePost, false)

    return {
        deletePostLoading,
        deletePostError,
        deletePost
    }
}

export function useUpdatePost(){
    const {
        data: updatePostData,
        loading: updatePostLoading,
        error: updatePostError,
        task: updatePost
    } = useAsync(postApi.updatePost, false)

    return {
        updatePostData,
        updatePostLoading,
        updatePostError,
        updatePost
    }
}