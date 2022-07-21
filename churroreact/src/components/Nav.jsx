import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>CHURROuter</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/listchurros">List Churros</Link>
        <Link to="/new">Add Churro</Link>
      </div>
    </nav>
  )
}

export default Nav
