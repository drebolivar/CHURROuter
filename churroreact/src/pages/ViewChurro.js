import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewChurro = () => {
  const [viewChurro, setViewChurro] = useState([])

  let { churroId } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/api/churro/${churroId}`).then((res) => {
      setViewChurro(res.data)
    })
  }, [churroId])

  return (
    <div>
      <section>
        <div>
          {viewChurro != null ? <img src={viewChurro.img} alt="" /> : ``}
        </div>
      </section>
      <section>
        <div>
          <h3>{viewChurro != null ? <p>{viewChurro.type}</p> : ``}</h3>
          {viewChurro != null ? viewChurro.description : ``}
        </div>
      </section>
    </div>
  )
}
export default ViewChurro
