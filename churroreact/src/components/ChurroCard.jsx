const ChurroCard = (props) => {
  return (
    <div className="card churro-card" onClick={props.onClick}>
      <div>
        <h3>{props.type}</h3>
        <h3>{props.price}</h3>
      </div>
      <div className="img-wrapper">
        <img src={props.img} alt={props.type} />
      </div>
      <div className="info-wrapper"></div>
    </div>
  )
}

export default ChurroCard
