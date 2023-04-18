import React from 'react'

function Counter({count}) {
  console.log(count);
  if(count <= 0){
    count = 0
  }
  if(count > 10){
    count = 10
  }
  return (
    <div>
      count :- {count}
    </div>
  )
}

export default Counter

