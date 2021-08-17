import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();



const UserContextProvider = (props) => {
  
  const [user, setUser] = useState({})
  
  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')): null;
    setUser(userDataFromLocalStorage)
  }, [])
  
    //address: [],
    //dateOfBirth: "",
    //email: "",
    //gender: "",
  

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;

