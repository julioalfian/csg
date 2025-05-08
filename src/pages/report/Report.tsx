import {DataGrid} from "@mui/x-data-grid";
import {useReport} from "./useReport.tsx";

export const Report = () => {
    const page = useReport()
    return (
        <div className={'w-full px-32 my-4'}>
            <div className={'flex gap-6'}>
                <div className={'flex-1'}>
                    <div className={'flex my-6 justify-between items-center'}>
                        <h4 className={'font-medium'}>Data Rerum</h4>
                        <h5>Total rerum: <span className={'font-medium'}>{page.getTotalRerum()}</span></h5>
                    </div>
                    <div className={'flex relative'}>
                        <DataGrid
                            key={'dataRerum'}
                            rows={page.dataRerum}
                            initialState={{
                                pagination: {
                                    paginationModel: {page: 0, pageSize: 5},
                                }
                            }}
                            columns={page.columnRerum}
                            loading={false}
                            pageSizeOptions={[5]}
                            hideFooterSelectedRowCount
                        />
                    </div>
                </div>
                <div className={'flex-1'}>
                    <h4 className={'my-6 font-medium'}>Data User Count</h4>
                    <div className={'flex relative'}>
                        <DataGrid
                            key={'dataUserCount'}
                            rows={page.dataUserPost}
                            initialState={{
                                pagination: {
                                    paginationModel: {page: 0, pageSize: 5},
                                }
                            }}
                            columns={page.columnUserCount}
                            loading={false}
                            pageSizeOptions={[5]}
                            hideFooterSelectedRowCount
                        />
                    </div>
                </div>
            </div>
        </div>


    )
}