import Ecommerce from '../../assets/images/e-commerce.png';
import Crud from "../../assets/images/Screenshot 2024-09-28 124435.png";
import Quiz from '../../assets/images/Screenshot 2024-09-28 124729.png'
import rentCar from '../../assets/images/rentCar.jpeg'
import bookStore from '../../assets/images/bookStore.jpeg'
import dashboard from '../../assets/images/dashboard.jpeg'
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";




export const Icons = [
    {
        name: "HTML",
        icon: FaHtml5,
    },
    {
        name: "CSS",
        icon: SiCss3,
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        name: "Tailwind",
        icon: RiTailwindCssFill,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "React",
        icon: FaReact ,
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
  
  
const Data2 = [
    {
        id: 1,
        title: "RentCars",
        img: rentCar,
        link: "https://cars-project-tk9d.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/cars-project"
    },
    {
        id: 2,
        title: "BookStore",
        img: bookStore,
        link: "https://bookstore-rouge.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/BookStore"
    },
    {
        id: 3,
        title: "Dashboard",
        img: dashboard,
        link: "https://dashboard25-azk2.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/Dashboard"
    },
    {
        id: 4,
        title: "e-commerce",
        img: Ecommerce,
        link: "https://hazemsaad231.github.io/E-commerce/",
        gitHub: "https://github.com/hazemsaad231/e-commerce"
    },
    {
        id: 5,
        title: "CRUD",
        img: Crud,
        link: "https://hazemsaad231.github.io/cruds/",
        gitHub: "https://github.com/hazemsaad231/cruds"
    },
    {
        id: 6,
        title: "Quiz",
        img: Quiz,
        link: "https://quiz-rouge.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/Quiz-app"
    },
]

export default Data2