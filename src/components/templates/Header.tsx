import { PAGE_TYPE_ENUM } from "../../enums/PageTypeEnum.ts"
import { Link, useLocation } from "react-router-dom"
import {RoutesConstants} from "../../constants/RoutesConstants.ts";
import {PageContainer} from "../atoms/PageContainer.tsx";

export const Header = (props: IHeader) => {
  const location = useLocation()

  const menu: IMenu[] = [
    {
      label: 'Post',
      path: RoutesConstants.POST()
    },
    {
      label: 'Report',
      path: RoutesConstants.REPORT()
    }
  ]

  if (props.type === PAGE_TYPE_ENUM.FULL_PAGE) {
    return null
  } else {
    return (
      <div className={"header drop-shadow-md bg-white fixed top-0 w-full z-40 h-[60px]"}>
        <div className={" items-center h-full py-4"}>
          <PageContainer className=" grid grid-cols-3 h-full">
            <div className={"flex h-full items-center"}>
              <Link to={'https://jsonplaceholder.typicode.com'} className={'text-black font-medium'}>
                JSON Placeholder
              </Link>
            </div>
            <div className={"flex justify-center items-center gap-4 md:gap-8 lg:gap-14 "}>
              {menu.map((item, index) => {
                  return (
                    <Link to={item.path} key={index}>
                      <h4
                        className={
                          item.path === location.pathname ? "font-medium text-blue-400" : "hover:text-blue-400 transition"
                        }>
                        {item.label}
                      </h4>
                    </Link>
                  )
              })}
            </div>
          </PageContainer>
        </div>
      </div>
    )
  }
}

interface IHeader {
  type: PAGE_TYPE_ENUM
}

interface ISubMenu {
  label: string
  path: string
}

interface IMenu {
  label: string
  path: string
  child?: ISubMenu[]
}