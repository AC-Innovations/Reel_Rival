import './Cards.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cards({faicon, title, des}) {
  return (
    <div className='cards'>
        <div className="icon-align">
            <FontAwesomeIcon icon={faicon}/>
        </div>
        <h3>{title}</h3>
        <p>{des}</p>
    </div>
  )
}

