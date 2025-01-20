export default function Right(props: { children?: React.ReactNode }) {
  return (
    <div className="flex-[1.8] md:py-10 md:border-l md:pl-10">
      {props.children}
    </div>
  )
}
