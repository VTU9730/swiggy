import { useContext, useEffect } from "react";

import userContext from "./userContext";

const Contact = () =>{

    const {userContextData, setUserContextData} = useContext(userContext)

    useEffect(()=>{
        setUserContextData({...userContextData,contact:'contact'})
    },[])

    

    return(
        <div>
            <h1>This is contact us page</h1>
        </div>
    )
}

export default Contact;