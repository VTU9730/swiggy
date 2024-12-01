import Header from './Header'
import { Outlet } from 'react-router-dom';
// import '../../style.css';
import userContext from './userContext';
import { useContext, useState } from 'react';
const Main = () => {
    console.log('Main');
    
    const data = useContext(userContext)
    const [userContextData, setUserContextData] = useState(data)
    return(
        <userContext.Provider value={{userContextData, setUserContextData}}>
            <div className="app-container">
                <Header />
                <Outlet />
                {/* Footer */}
            </div>
        </userContext.Provider>
    )
}

export default Main;