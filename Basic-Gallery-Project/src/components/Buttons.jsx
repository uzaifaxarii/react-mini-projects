import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <div className="flex justify-center gap-5 my-4">
        <button
        disabled={props.index===1}
          className="bg-amber-500 text-black px-4 py-2 rounded font-semibold text-sm cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (props.index > 1) {
              props.setUserData([])
              props.setIndex(props.index - 1);
              
            }
          }}
        >
          Prev
        </button>
        <h4 className="my-auto">Page {props.index}</h4>
        <button
          className="bg-amber-500 text-black px-4 py-2 rounded font-semibold text-sm cursor-pointer active:scale-95"
          onClick={() => {
            props.setUserData([])
            props.setIndex(props.index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Buttons
