const ChurroCard = (props) => {
  return (
    <div className="card churro-card" onClick={props.onClick}>
      {/* <Link to="/">Back Home</Link> */}
      <h3>{props.type}</h3>
      <h4>{props.price}</h4>
      <div className="img-wrapper">
        <img src={props.img} alt={props.type} />
      </div>
    </div>
  )
}

export default ChurroCard
