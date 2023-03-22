type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 text-purple-400 bg-stone-900">{children}</div>
}

export default Container
