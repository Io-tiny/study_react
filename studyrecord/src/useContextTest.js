import React, { useContext, useEffect, useState } from 'react'

const TestContext = React.createContext({});

const NavBar = (prop) => {
  const { userName } = useContext(TestContext);
  const {setUserName} = prop;
  return (
    <div>
      <p>1 {userName}</p>
      <button onClick={()=>{setUserName('qiaoge')}}>111</button>
    </div>
  )
}

const Message = () => {
  let { userName } = useContext(TestContext);
  return (
    <div>
      <p>2 {userName}</p>
    </div>
  )
}

export default function UseContextTest() {
  const [name, setName] = useState('heige')
  return (
    <TestContext.Provider value={{
      userName: name
    }}>
      <div>
        <NavBar setUserName={(value) => { setName(value) }}></NavBar>
        <Message></Message>
      </div>
    </TestContext.Provider>
  )
}
