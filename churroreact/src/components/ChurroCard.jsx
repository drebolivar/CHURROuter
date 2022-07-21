import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ChurroCard = (props) => {
  const [churro, setChurro] = useState([])
  // const [x, setx] = useState(false)

  useEffect(() => {
    const getChurro = async () => {
      await axios.get(`/api/churro`).then((res) => {
        console.log(res.json)
        // setChurro(res.churro)
      })
    }
    getChurro()
  }, [])

  return (
    <div className="churro-card" onClick={props.onClick}>
      <Link to="/">Back Home</Link>
      <h3>{props.name}</h3>
    </div>
  )
}

export default ChurroCard
