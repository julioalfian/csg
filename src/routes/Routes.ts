import { PAGE_TYPE_ENUM } from "../enums/PageTypeEnum"
import { RoutesConstants } from "../constants/RoutesConstants"
import { Report } from "../pages/report/Report.tsx"
import { Post } from "../pages/post/Post.tsx"

export const routes: IRoutes[] = [
  {
    path: RoutesConstants.POST(),
    element: Post,
    type: PAGE_TYPE_ENUM.MAIN
  },
  {
    path: RoutesConstants.REPORT(),
    element: Report,
    type: PAGE_TYPE_ENUM.MAIN
  }
]

interface IRoutes {
  path: string
  element: any
  type: PAGE_TYPE_ENUM
}