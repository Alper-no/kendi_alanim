import data from '../helpers/data'
import Question from './Question'

const InterviewAccord = () => {
    
  return (
    <div>
        {data.map((item)=>
        <Question key={item.id} {...item}/>
        )}
    </div>
  )
}

export default InterviewAccord