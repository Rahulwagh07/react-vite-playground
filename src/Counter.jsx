import React from 'react'
 

const Counter = () => {
 
  return (
    <div className="counter-div" >

    {/* handle the increment count here */}
      <button className="btn-increment">    
        +
      </button>
    
    {/* Update to see current count: Edit the hard coded count 1 from here */}
      <div className="count">1</div>

    {/* handle the decrement count here */}
      <button className="btn-decrement">
        -
      </button>
    </div>
  )
}

export default Counter