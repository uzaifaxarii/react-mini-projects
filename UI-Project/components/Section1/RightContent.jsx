import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  // console.log(props.users);
  
  return (
    <div className='h-full w-3/4 p-6 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
