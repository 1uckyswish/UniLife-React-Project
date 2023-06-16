import React from 'react';
import "./SearchAndCompare.css";
import searchIco from "/src/assets/search-icon.png"
import todoList from "/src/assets/task-list.png"
import billList from "/src/assets/bill-icon.png"



function SearchAndCompare() {

  return (
    <div className='detail-icons-container'>
      <h2>Compare all inclusive student homes.</h2>
      <div className='detail-info-container'>
        <div className="detail-icon-card">
            <img src={searchIco} />
        <h3>Search</h3>
        <p>Find your dream home in the perfect area near your university.</p>
        </div>
        <div className="detail-icon-card"><img src={todoList} />
        <h3>Search</h3>
        <p>Find your dream home in the perfect area near your university.</p></div>
        <div className="detail-icon-card">
            <img src={billList} />
        <h3>Search</h3>
        <p>Find your dream home in the perfect area near your university.</p>
        </div>
      </div>
    </div>
  )
}

export default SearchAndCompare
