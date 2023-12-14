import Hamburger from './hamburger'
import DesktopNavbar from './navbar'

const BASE_LINKS = [
  {
    name: 'States',
    href: '/states'
  },
  {
    name: 'Teams',
    href: '/teams'
  }
]

export function Navbar (): JSX.Element {
  return (
    <div>
      <DesktopNavbar links={BASE_LINKS} />
      <Hamburger links={BASE_LINKS} />
    </div>
  )
}
