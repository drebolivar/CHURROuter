import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>
        <Link to="/">CHURROuter</Link>
      </h4>
      <div>
        <Link to="/listchurros">List Churros</Link>
        <Link to="/about">About Churros</Link>
      </div>
    </nav>
  )
}

export default Nav
