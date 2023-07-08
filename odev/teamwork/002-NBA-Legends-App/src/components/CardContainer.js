import PlayerCard from "./PlayerCard"


const CardContainer = (data) => {

  return (
    <div className="container">
        <input type="text" placeholder="Search Player..." />
        <div className="card-container">

        </div>
    <PlayerCard/>
    </div>
  )
}

export default CardContainer