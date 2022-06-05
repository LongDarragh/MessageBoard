import React from 'react'

export default function AddMessageBox(props){
    const [author, setAuthor] = React.useState("")
    const [message, setMessage] = React.useState("")
  
    function handleSubmit(e) {
      e.preventDefault()
      props.updateUser({author, Message:message, id: Date.now()})
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
