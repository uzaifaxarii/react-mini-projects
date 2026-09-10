import React from 'react'
import Section1 from '../components/Section1/Section1'
import Section2 from '../components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:"https://images.unsplash.com/photo-1788716335245-88a0f056035e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      color:"royalblue",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1787613499742-12b259e19fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
      color:"lightseagreen",
      tag:"Undercover"
    },
    {
      img:"https://images.unsplash.com/photo-1787894565548-0df8b29874bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzN8fHxlbnwwfHx8fHw%3D",
      color:"orange",
      tag:"Underbanked"
    },
    {
      img:"https://images.unsplash.com/photo-1775506519644-1ffd90241183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMTV8fHxlbnwwfHx8fHw%3D",
      color:"violet",
      tag:"Satisfied"
    }
  ]



  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App

