import React from 'react'
import RightContentCard from './RightContentCard'

const RightCard = (props) => {
    // console.log(props.users);
    
  return (
    <div className='w-75 h-full rounded-4xl relative overflow-hidden -mt-6 shrink-0'>
        <img className='h-full w-full object-left object-cover' src={props.img} alt="" />
        <RightContentCard color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
