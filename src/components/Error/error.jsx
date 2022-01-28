import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <div>
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas</p>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
