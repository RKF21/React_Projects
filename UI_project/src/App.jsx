import React from 'react'
import Section1 from './components/Section1/section1';

const App = () => {
  const cards = [
    { id: 1, color: "bg-blue-500", img: "https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis repellat placeat ad sint fuga adipisci in libero et qui.", btn: "Satisfied" },
    { id: 2, color: "bg-gray-400", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Excepturi aliquam in iure, repellat, fugiat illum voluptate repellendus blanditiis veritatis ducimus ad ipsa quisquam sequi.", btn: "Impressed" },
    { id: 3, color: "bg-yellow-500", img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.", btn: "Amazed" },
    { id: 4, color: "bg-zinc-950", img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.", btn: "Delighted" },
    { id: 5, color: "bg-red-500", img: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.", btn: "Excited" },
  ]
  return (
    <div>
      <Section1 cards={cards} />
    </div>
  )
}

export default App