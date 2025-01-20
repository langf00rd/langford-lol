export default function Wrapper(props: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row pb-10 md:pb-0 border-b">
      {props.children}
    </div>
  )
}
