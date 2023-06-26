import {useContext} from 'react'
import "./ShortListPage.css"
import { ShortList } from '../../Contexts/ShortList'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

function ShortListPage() {
      const {favorites} = useContext(ShortList)
  return (
    <div className="short-list-container">
         <div className='shortlist-grid'>
            {
                favorites.length > 0?
                favorites.map((card, index) => (
                <PropertyCard key={index} card={card}/>
            ))
            :
            <h1 id='error-header'>No Favorites Selected</h1>
            }
            </div>
    </div>
  )
}

export default ShortListPage
