import React from 'react';
import "./SearchAndCompare.css";
import searchIco from "/src/assets/search-icon.png"
import todoList from "/src/assets/task-list.png"
import billList from "/src/assets/bill-icon.png"



function SearchAndCompare() {

  return (
    <div className='detail-icons-container'>
      <h2>Compare All Inclusive Student Homes</h2>
      <div className='detail-info-container'>
        <div className="detail-icon-card">
            <img src={searchIco} />
        <h3>Search</h3>
        <p>Find your dream home in the perfect area near your university</p>
        </div>
        <div className="detail-icon-card"><img src={todoList} />
        <h3>Compare</h3>
        <p>Compare student accommodation to find the right home for you</p></div>
        <div className="detail-icon-card">
            <img src={billList} />
        <h3>Bills Included</h3>
        <p>Bills are included in all rent prices. No hidden fees</p>
        </div>
      </div>
    </div>
  )
}

export default SearchAndCompare
