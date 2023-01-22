export type DummyProps = {
  children: React.ReactNode
  title: string
}

const Dummy = (props: DummyProps) => {
  const { children, title } = props

  return (
    <section>
      <h1>{title}</h1>

      {children}
    </section>
  )
}

export default Dummy
