import { PAGE_TYPE_ENUM } from "../../enums/PageTypeEnum.ts"
import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";

export const MainPage = (prop: IProps) => {
  return (
    <div className={"h-auto"}>
      <Header type={prop.type} />
      <div className={"h-full"}>
        {prop.type !== PAGE_TYPE_ENUM.FULL_PAGE && (
          <div className={'mt-[60px] flex'}></div>
        )}
        {prop.children}
      </div>
        <Footer/>
    </div>
  )
}

interface IProps {
  children: any
  type: PAGE_TYPE_ENUM
}