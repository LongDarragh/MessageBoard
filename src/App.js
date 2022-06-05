import React from "react";
import styled from "styled-components";
import "./App.css";



const Title = styled.h1`
  text-align: center;
`;


function AddMessageBox(props){
  const [author, setAuthor] = useState()
  const [message, setMessage] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    props.setUser(prev => prev.concat({author, message, id: Date.now()}))
    setAuthor("")
    setMessage("")
}

return (
  <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Message</legend>
        <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="author" />
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder="message"/>
        <button>Send</button>
      </fieldset>
    </form>
)
}

function TimeArea() {
  const [theTime, setTime] = useState(new Date().toLocaleString())

  setTimeout(function(){
    setTime(new Date().toLocaleString())
  }, 1000)

  return <p>The current time is {theTime}.</p>
}

function User(props){
  return <li>{props.author}: {props.Message}</li>

}

const useState=React.useState

function App() {

  const[users, setUser] = useState([
    {author: "Heidi", Message:"Hello", id: 123456},
    {author: "Peter", Message:"It's to hard", id: 124897},
    {author: "Peter", Message:"What's happening?", id: 245896}
  ])
  return (
    
    <>
    <Title>React MessageBox</Title>
    <TimeArea/>
    <AddMessageBox setUser={setUser}/>
      <ul>
        {users.map(users => <User author={users.author} Message={users.Message} key={users.id} />)}
      </ul>
    <Footer />
    </>
  )
}

function Footer() {
  return <big>Thank you for leaving message!!!</big>
}

export default App;