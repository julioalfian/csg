import {usePostComment} from "./usePostComment.tsx";
import {Card} from "@mui/material";

export const PostComment = () => {
    const page = usePostComment()
    return (
        <div className={'w-full px-32 my-4'}>
            {page.commenst.map((item, index) => {
                return (
                    <Card variant={'outlined'} key={index} className={'p-4 my-4'}>
                        <div key={index} className={'my-4'}>
                            <h4 className={'font-medium'}>{item.name}</h4>
                            <h4 className={'text-gray-400'}>{item.email}</h4>
                            <hr className={'my-4'}/>
                            <p className={'text-gray-500'}>{item.body}</p>
                        </div>
                    </Card>
                )
            })
            }
        </div>
    )
}