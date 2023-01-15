type TestProps = {
  children: React.ReactNode
}

export const Test = (props: TestProps) => {
  const { children, x } = props

  return <article>{children}</article>
}
