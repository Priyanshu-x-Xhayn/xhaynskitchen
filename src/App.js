import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import { Outlet, BrowserRouter as Router } from 'react-router-dom'; // Imported BrowserRouter as Router
import Body from './Components/Body';
import { Provider as ReduxProvider } from 'react-redux'; // Renamed Provider alias
import userContext from './Components/Utils/userContext'; // Changed to named import
import appStore from './Components/Utils/appStore';

const App = () => {
  const [user, setUser] = useState("DefaultUser");

  return (
    <ReduxProvider store={appStore}>
      <userContext.Provider value={{ loggedInUser: user, setUser }}>
        <div className='bg-[#E5E7EB]'>
            <NavigationBar />
            <Outlet/>
      
        </div>
      </userContext.Provider>
    </ReduxProvider>
  );
};

export default App;
