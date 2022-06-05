import "../App.css";
import styled from "styled-components";
import React, { useState } from "react";

// components
import AddMessageBox from "./AddMessageBox";
import TimeArea from "./TimeArea";
import Footer from "./Footer";

const Title = styled.h1`
text-align: center;
`;

function HomePage() {
  const defaultUser = [
    { author: "Heidi", Message: "Hello", id: 123456 },
    { author: "Peter", Message: "It's to hard", id: 124897 },
    { author: "Peter", Message: "What's happening?", id: 245896 },
  ]

  const [users, setUser] = useState(defaultUser);

  const updateUser = (newUser) => {
    setUser([...users,newUser])
    console.log(users)
  }
  
  return (
    <>
      <Title>React MessageBox</Title>
      <TimeArea />
      <AddMessageBox updateUser={updateUser} />
      <ul>
        {users.map((user, i) => (
          <div key={i}>
            {user.author}: {user.Message}
          </div>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default HomePage;
