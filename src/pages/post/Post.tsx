
import {DataGrid} from '@mui/x-data-grid';
import {usePost} from "./usePost.tsx";

export const Post = () => {
    const page = usePost()
    return (
        <div className={'w-full px-32 my-4'}>
            <h4 className={'my-6 font-medium'}>List Post</h4>
            <div className={'flex relative'}>
                <DataGrid
                    rows={page.data}
                    initialState={{
                        ...page.data,
                        filter: {
                            filterModel: {
                                items: [],
                            },
                        },
                        pagination: {
                            paginationModel: {page: 0, pageSize: 20},
                        }
                    }}
                    columns={page.columnData}
                    loading={false}
                    pageSizeOptions={[20]}
                    hideFooterSelectedRowCount
                    showToolbar
                />
            </div>
        </div>


    )
}