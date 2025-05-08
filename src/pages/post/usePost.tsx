import {useEffect, useState} from "react";
import type {IPostResponse} from "../../models/response/IPostResponse.ts";
import {ENV_CONSTANTS} from "../../constants/EnvConstants.ts";
import {ENDPOINT_CONSTANTS} from "../../constants/EndpointConstants.ts";
import type {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import {RoutesConstants} from "../../constants/RoutesConstants.ts";
import {useNavigate} from "react-router-dom";

export const usePost = () => {
    const navigate = useNavigate()
    const [data, setData] = useState<IPostResponse[]>([])
    useEffect(() => {
        fetch(ENV_CONSTANTS.ENDPOINT + ENDPOINT_CONSTANTS.POSTS())
            .then((response) => response.json())
            .then((json) => setData(json))
    }, [])

    const uiId = (data: GridRenderCellParams<IPostResponse>) => <div className={'text-center'}>{data.row.id}</div>
    const uiUserId = (data: GridRenderCellParams<IPostResponse>) => <div className={'text-center'}>{data.row.userId}</div>
    const uiTitle = (data: GridRenderCellParams<IPostResponse>) => <>{data.row.title}</>
    const uiBody = (data: GridRenderCellParams<IPostResponse>) => <>{data.row.body}</>
    const uiAction = (data: GridRenderCellParams<IPostResponse>) => <Button variant={'text'}  onClick={() => navigate(RoutesConstants.POSTS_COMMENT(data.row.id))}>Comment</Button>

    const columnData: GridColDef[] = [
        {
            headerName: 'Id',
            field: 'id',
            headerAlign: 'center',
            width: 200,
            renderCell: (row) => uiId(row),
        },
        {
            headerName: 'User Id',
            field: 'userId',
            headerAlign: 'center',
            width: 200,
            renderCell: (row) => uiUserId(row),
        },
        {
            headerName: 'Title',
            field: 'title',
            headerAlign: 'left',
            width: 400,
            renderCell: (row) => uiTitle(row),
        },
        {
            headerName: 'Body',
            field: 'body',
            headerAlign: 'left',
            minWidth: 500,
            resizable: true,
            renderCell: (row) => uiBody(row),
            cellClassName: (params) => {
                const isBody = params.row.body
                return isBody.toLowerCase().includes('rerum') ? 'bg-gray-200' : ''
            }
        },
        {
            headerName: 'Action',
            field: 'action',
            headerAlign: 'left',
            width: 200,
            renderCell: (row) => uiAction(row),
        },
    ]

    return(
        {
            data,
            columnData
        }
    )
}