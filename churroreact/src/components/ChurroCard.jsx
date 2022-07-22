const ChurroCard = (props) => {
  return (
    <div className="churro-card" onClick={props.onClick}>
      {/* <Link to="/">Back Home</Link> */}
      <h3>{props.type}</h3>
      <p>{props.price}</p>
      <div className="img">
        <img src={props.img} alt={props.type} />
      </div>
      <p>{props.description}</p>
    </div>
  )
}

export default ChurroCard
