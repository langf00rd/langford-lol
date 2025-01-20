export default function Left(props: {
  children?: React.ReactNode
  title: string
}) {
  return (
    <div className="flex-1 py-10">
      <h1 className="text-[18px] sticky top-0">{props.title}</h1>
      {props.children}
    </div>
  )
}
