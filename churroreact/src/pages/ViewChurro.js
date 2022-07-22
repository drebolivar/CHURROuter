import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewChurro = () => {
  const [viewChurro, setViewChurro] = useState([])

  let { churroId } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/api/churro/${churroId}`).then((res) => {
      // console.log(res.data)
      setViewChurro(res.data.churro)
    })
  }, [churroId])

  // console.log(viewChurro)

  return (
    <div>
      <section>
        <div>
          {viewChurro != null ? <img src={viewChurro.img} alt="" /> : ``}
        </div>
      </section>
      <section>
        <div>
          <h3>
            {viewChurro != null ? <p>Type of Churro: {viewChurro.type}</p> : ``}
          </h3>
          <h3>
            {viewChurro != null ? <p>Location: {viewChurro.location}</p> : ``}
          </h3>
          <h3>
            {viewChurro != null ? (
              <p>Description: {viewChurro.description}</p>
            ) : (
              ``
            )}
          </h3>
        </div>
      </section>
    </div>
  )
}
export default ViewChurro
