import {useEffect, useState} from "react";
import type {IPostResponse} from "../../models/response/IPostResponse.ts";
import {ENV_CONSTANTS} from "../../constants/EnvConstants.ts";
import {ENDPOINT_CONSTANTS} from "../../constants/EndpointConstants.ts";
import type {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import type {IPostCountResponse} from "../../models/response/IPostCountResponse.ts";
import type {IUserPostCount} from "../../models/response/IUserPostCount.ts";

export const useReport = () => {
    const [dataRerum, setDataRerum] = useState<IPostCountResponse[]>([])
    const [dataUserPost, setUserPost] = useState<IUserPostCount[]>([])

    useEffect(() => {
        fetch(ENV_CONSTANTS.ENDPOINT + ENDPOINT_CONSTANTS.POSTS())
            .then((response) => response.json())
            .then((json: IPostResponse[]) => {

                // Count the number of "rerum" in each post body
                const newData: IPostCountResponse[] = json.map(item => {
                    const count = countRerum(item.body)
                    return {
                        id: item.id,
                        title: item.title,
                        count: count
                    }
                })
                setDataRerum(newData)

                // Count the number of posts per user
                const userPostCount: IUserPostCount[] = []
                let tempUser: IUserPostCount
                json.map(item => {
                    if(item.userId != tempUser?.userId) {
                        tempUser = {
                            id: item.id,
                            userId: item.userId,
                            count: 1
                        }
                    }else {
                        tempUser = {
                            id: item.id,
                            userId: item.userId,
                            count: tempUser.count + 1
                        }
                    }
                    userPostCount.push(tempUser)
                })
                setUserPost(filterDataWithMaxCountPerUserId(userPostCount))
            })
    }, [])

    function countRerum(str: string): number {
        const lowerStr = str.toLowerCase();
        const rerumRegex = /rerum/g;
        const matches = lowerStr.match(rerumRegex);
        return matches ? matches.length : 0;
    }

    function filterDataWithMaxCountPerUserId(data: IUserPostCount[]): IUserPostCount[] {
        const maxCountByUser: { [userId: number]: IUserPostCount } = {};

        for (const item of data) {
            const userId = item.userId;
            const count = item.count;

            if (!maxCountByUser[userId] || count > maxCountByUser[userId].count) {
                maxCountByUser[userId] = item;
            }
        }

        return Object.values(maxCountByUser);
    }

    const uiId = (data: GridRenderCellParams<IPostCountResponse>) => <div className={'text-center'}>{data.row.id}</div>
    const uiTitle = (data: GridRenderCellParams<IPostCountResponse>) => <>{data.row.title}</>
    const uiCount = (data: GridRenderCellParams<IPostCountResponse>) => <div className={'text-center'}>{data.row.count}</div>

    const uiUserId = (data: GridRenderCellParams<IUserPostCount>) => <div className={'text-center'}>{data.row.userId}</div>
    const uiUserCount = (data: GridRenderCellParams<IUserPostCount>) => <div className={'text-center'}>{data.row.count}</div>


    const columnRerum: GridColDef[] = [
        {
            headerName: 'Id',
            field: 'id',
            headerAlign: 'center',
            width: 200,
            renderCell: (row) => uiId(row),
        },
        {
            headerName: 'Title',
            field: 'title',
            headerAlign: 'left',
            width: 400,
            renderCell: (row) => uiTitle(row),
        },
        {
            headerName: 'Rerum Count',
            field: 'userId',
            headerAlign: 'center',
            width: 200,
            renderCell: (row) => uiCount(row),
        }
    ]

    const columnUserCount: GridColDef[] = [
        {
            headerName: 'User Id',
            field: 'userId',
            headerAlign: 'center',
            width: 200,
            renderCell: (row) => uiUserId(row),
        },
        {
            headerName: 'Count',
            field: 'count',
            headerAlign: 'center',
            width: 200,
            renderCell: (row) => uiUserCount(row),
        }
    ]

    function getTotalRerum (): number {
        let sum = 0
        dataRerum.forEach(item => {
            sum += item.count
        })
        return sum
    }
    return(
        {
            dataRerum,
            columnRerum,
            dataUserPost,
            columnUserCount,
            getTotalRerum
        }
    )
}