import { Link, NavbarProps } from './interface'

function NavItem (props: Link): JSX.Element {
  return (
    <div>
      {props.name}
    </div>
  )
}
export default function DesktopNavbar (props: NavbarProps): JSX.Element {
  const links = props.links.map((link) => <NavItem key={link.href} name={link.name} href={link.href} />)

  return (
    <div className='hidden xl:flex'>
      {links}
    </div>
  )
}
