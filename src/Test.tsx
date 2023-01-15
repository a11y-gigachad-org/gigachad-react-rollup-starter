type TestProps = {
  children: React.ReactNode
}

export const Test = (props: TestProps) => {
  const { children } = props

  return <article>{children}</article>
}
