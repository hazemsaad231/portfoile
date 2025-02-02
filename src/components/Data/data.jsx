import Ecommerce from '../../assets/images/e-commerce.png';
import Crud from "../../assets/images/Screenshot 2024-09-28 124435.png";
import Quiz from '../../assets/images/Screenshot 2024-09-28 124729.png'
import rentCar from '../../assets/images/rentCar.jpg'
import bookStore from '../../assets/images/bookStore.jpg'
import dashboard from '../../assets/images/dashboard.jpg'
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiReactquery } from "react-icons/si";
import { SiFramer } from "react-icons/si";




export const Icons = [
    
    {
        name: "HTML",
        icon: ImHtmlFive,
    },
    {
        name: "CSS",
        icon: SiCss3,
    }, 
    {
        name: "JavaScript",
        icon: IoLogoJavascript,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "Tailwind",
        icon: RiTailwindCssFill,
    },
    {
        name: "Framer Motion",
        icon: SiFramer,
    },
   
    {
        name: "React",
        icon: FaReact ,
    },
    {
        name: "React Query",
        icon: SiReactquery,
    },
    {
        name: "Redux",
        icon: SiRedux ,
    },
    {
        name: "Figma",
        icon: FaFigma,
    },
    {
        name: "GitHub",
        icon: FaGithub ,
    },
    {
        name: "Firebase",
        icon: SiFirebase,
    },
  
];
  
  
const Data = [
    {
        id: 1,
        title: "Rent cars",
        img: rentCar,
        link: "https://cars-project-tk9d.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/cars-project"
    },
    {
        id: 2,
        title: "BookStore",
        img: bookStore,
        link: "https://bookstore-jkll.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/BookStore"
    },
    {
        id: 3,
        title: "user dashboard",
        img: dashboard,
        link: "https://dashboard25-azk2.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/Dashboard"
    },
    
]

export default Data



export const Data2 = [

    {
        id: 1,
        title: "Shoes e-commerce",
        img: Ecommerce,
        link: "https://hazemsaad231.github.io/E-commerce/",
        gitHub: "https://github.com/hazemsaad231/e-commerce"
    },
    {
        id: 2,
        title: "Crud system",
        img: Crud,
        link: "https://hazemsaad231.github.io/cruds/",
        gitHub: "https://github.com/hazemsaad231/cruds"
    },
    {
        id: 3,
        title: "Quiz app",
        img: Quiz,
        link: "https://quiz-rouge.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/Quiz-app"
    },
]