import React from 'react'

const RightContentCard = (props) => {

    // console.log(props.users);
    
    return (
        <div className='h-full w-fit absolute top-0 left-0 m-6 flex flex-col justify-between'>
            <h2 style={{backgroundColor:props.color}} className='w-12 h-12 text-white rounded-full flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
            <p className='mt-50 text-lg text-gray-100 text-shadow-2xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae dolorem nesciunt facilis ad delectus, laboriosam nemo ipsam sapiente.</p>
            <div className='mb-14 flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white px-8 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    )
}
export default RightContentCard
