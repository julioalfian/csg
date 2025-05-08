import type {ReactNode} from "react"

export function PageContainer(props: IProps) {
  return (
    <div
      className={`${`${props.size === "small" ? "px-8" : "px-32"}`} mx-auto ${props.className || ""} `}>
      {props.children}
    </div>
  )
}

interface IProps {
  children: ReactNode
  className?: string
  size?: "small" | "normal"
}