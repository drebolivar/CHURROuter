const ChurroCard = (props) => {
  return (
    <div className="card churro-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <h3>{props.type}</h3>
        <p>{props.price}</p>
        <img src={props.img} alt={props.type} />
      </div>
      <div className="info-wrapper"></div>
    </div>
  )
}

export default ChurroCard
