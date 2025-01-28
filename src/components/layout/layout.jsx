import NavBar from "../navbar/navBar"
import {Outlet} from "react-router-dom"

const Master = ()=>{




    return(

        <>
        <div className="flex flex-col">

        <NavBar/>
        <Outlet/>
        </div>
       
        
        
        </>
    )
}

export default Master