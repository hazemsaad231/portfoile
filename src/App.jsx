
import Master from './components/layout/layout'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BigHome from '../src/components/BigHome'


function App() {

const zamlek = createBrowserRouter([
  {

    path: '/',
    element:<Master/>,
    errorElement:<div>this page not found</div>,
    children:[
      {index:true,element:<BigHome/>},

    ]
  }
])
  
  return (
    <>
<div className='flex'>
<RouterProvider router={zamlek} ></RouterProvider>
</div>

    </>
  )
}

export default App
