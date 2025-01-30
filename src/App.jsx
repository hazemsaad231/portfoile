import NavBar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'
import Contact from './components/contact/Contact'
import { useState, useEffect } from 'react'
import Load from './components/load'

function App() {

const [loading, setLoading] = useState(true); 

useEffect(() => {
  // بعد تحميل الموقع بـ 2 ثانية، يخفي اللودر
  const timer = setTimeout(() => {
    setLoading(false);
  }, 200);

  return () => clearTimeout(timer);
}, []);
  
  return (
    <>
    {loading ? 
      (
        <div className="flex justify-center items-center h-screen bg-white">
          <Load/>
        </div>)
    :
(
<div>
<NavBar/>
<Home/>
<About/>
<Skills/>
<Projects/>
<Experience/>
<Contact/>
</div>

)}
    </>
  )
}

export default App
