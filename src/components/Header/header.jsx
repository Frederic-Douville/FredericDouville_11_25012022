import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'

function Header() {
  return (
    <nav>
      <img src={Logo} alt="logo_kaza" />
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  )
}

export default Header
