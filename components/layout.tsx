import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-stone-900">
        <Alert preview={preview} />
        <main  className="min-h-screen bg-stone-900">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
