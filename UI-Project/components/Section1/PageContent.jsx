import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='py-10 px-18 h-[95vh] flex justify-between items-center gap-20'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default PageContent
