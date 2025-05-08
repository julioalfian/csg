import {useEffect, useState} from "react";
import {ENV_CONSTANTS} from "../../../constants/EnvConstants.ts";
import {ENDPOINT_CONSTANTS} from "../../../constants/EndpointConstants.ts";
import {useParams} from "react-router-dom";
import type {Comment} from "../../../models/response/ICommentResponse.ts";

export const usePostComment = () => {
    const {id} = useParams()
    const [commenst, setComment] = useState<Comment[]>([])
    useEffect(() => {
        if(id){
            fetch(ENV_CONSTANTS.ENDPOINT + ENDPOINT_CONSTANTS.POSTS_COMMENT(id))
                .then((response) => response.json())
                .then((json) => setComment(json))
        }
    }, [])
    return({
        commenst
    })
}