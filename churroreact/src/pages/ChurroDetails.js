import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ChurroCard from '../components/ChurroCard'

const ChurroDetails = () => {
  const [churroDetails, setChurroDetails] = useState([])

  //   let { churroId } = useParams()

  useEffect(() => {
    const getChurroDetails = async () => {
      await axios.get(`http://localhost:3001/api/churro`).then((res) => {
        console.log(res.data.churros)
        setChurroDetails(res.data.churros)
      })
    }
    getChurroDetails()
  }, [])

  return (
    <div>
      <div className="churro-results container-grid">
        {churroDetails.map((churro) => (
          <ChurroCard
            img={churro.img}
            type={churro.type}
            price={churro.price}
            description={churro.description}
            location={churro.location}
          />
        ))}
      </div>
    </div>
    // <div>
    //   <section>
    //     <div>
    //       {churroDetails != null ? <img src={churroDetails.img} alt="" /> : ``}
    //     </div>
    //   </section>
    //   <section>
    //     <div></div>
    //     <div>
    //       <h3>{churroDetails != null ? <p>{churroDetails.type}</p> : ``}</h3>
    //       {churroDetails != null ? churroDetails.description : ``}
    //     </div>
    //   </section>
    // </div>
  )
}

export default ChurroDetails
