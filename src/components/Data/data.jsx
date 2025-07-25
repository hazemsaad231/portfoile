import Ecommerce from '../../assets/images/e-commerce.png';
import Crud from "../../assets/images/cruds.png";
import Quiz from '../../assets/images/Screenshot 2024-09-28 124729.png'
import rentCar from '../../assets/images/rentCar.jpeg'
import bookStore from '../../assets/images/bookstore.jpeg'
import dashboard from '../../assets/images/dashboard.jpeg'
import Ali from '../../assets/images/family of ali.png'
import xo  from '../../assets/images/xo-game.png'
import apple  from '../../assets/images/apple.png'
import calc  from '../../assets/images/calc.png'
import editor  from '../../assets/images/editor.png'
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
import { SiMui } from "react-icons/si";




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
        name: "meterial UI",
        icon: SiMui,
    },
  
    {
        name: "React",
        icon: FaReact ,
    },
    {
        name: "ReactQuery",
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
        gitHub: "https://github.com/hazemsaad231/cars-project",
        description: `A simple website for selling and renting cars, allowing users to easily browse, search, and filter cars. Administrators can add and remove car listings, while customers can view details and quickly find the best options.
    `,
    
    },
    {
        id: 2,
        title: "Book store",
        img: bookStore,
        link: "https://bookstore-three-delta.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/BookStore",
        description: `An online bookstore with a full authentication system. Admins can add and remove books and manage orders, while customers can create accounts, add books to favorites and cart, and place or manage their orders easily.

`,
    },
    {
        id: 3,
        title: "User dashboard",
        img: dashboard,
        link: "https://dashboard25-beta.vercel.app",
        gitHub:"https://github.com/hazemsaad231/dashboard25",
        description: `A user management dashboard that allows admins to view, add, update, and delete users. It includes login functionality and an API connection for handling user data securely and efficiently.

`,
    },
    {
        id:4,
        title: "Family of ali",
        img:Ali,
        link: "https://family-of-ali.vercel.app/",
        gitHub: "https://github.com/hazemsaad231/family-of-ali",
        description: `A personal website showcasing the family of Ali, featuring a simple and elegant design. It includes sections for family members, photos, and a contact form, providing a platform to share family stories and memories.
`,
    }
    
]

export default Data



export const Data2 = [

    {
        id: 4,
        title: "XO game",
        img: xo,
        link: "https://hazemsaad231.github.io/XO-Game/",
        gitHub: "https://github.com/hazemsaad231/XO-Game",
        description: `A simple XO game that allows two players to play against each other. The game features a clean interface and keeps track of the game state, providing a fun and interactive experience.
`
    },
    {
        id: 5,
        title: "Crud system",
        img: Crud,
        link: "https://hazemsaad231.github.io/cruds/",
        gitHub: "https://github.com/hazemsaad231/cruds"
        , description: `A CRUD (Create, Read, Update, Delete) system that allows users to manage data efficiently. It includes features for adding, editing, and deleting records, providing a user-friendly interface for data management.
`
    },
    {
        id: 6,
        title: "Quiz app",
        img: Quiz,
        link:"https://hazemsaad231.github.io/Quiz-app/",
        gitHub: "https://github.com/hazemsaad231/Quiz-app",
        description: `A quiz application that allows users to test their knowledge on various topics. It features multiple-choice questions, a timer, and a scoring system, providing an engaging way to learn and challenge oneself.
`
    },
  
    {
        id: 7,
        title: "Shoes e-commerce",
        img: Ecommerce,
        link: "https://hazemsaad231.github.io/shoes-ecommerce/",
        gitHub: "https://github.com/hazemsaad231/shoes-ecommerce",
        description: `An e-commerce website for shoes that allows users to browse, search, and filter products. It includes features for adding items to the cart, viewing product details, and managing orders, providing a seamless shopping experience.
`
    },
    {
        id: 8,
        title: "Calculator",
        img: calc,
        link:"https://hazemsaad231.github.io/Calc/",
        gitHub:"https://github.com/hazemsaad231/Calc",
        description: `A simple calculator application that performs basic arithmetic operations. It features a user-friendly interface and allows users to perform calculations easily, making it a handy tool for everyday use.
`
    },
    {
        id: 9,
        title:"Filter-image",
        img: editor,
        link:"https://hazemsaad231.github.io/Editor/",
        gitHub:"https://github.com/hazemsaad231/Editor",
        description: `An image editor that allows users to apply filters and effects to their photos. It includes a variety of editing tools, providing a fun and creative way to enhance images before sharing them.
`
    },
    {
        id: 10,
        title:"Iphone",
        img: apple,
        link:"https://hazemsaad231.github.io/apple/",
        gitHub:"https://github.com/hazemsaad231/apple",
        description: `A website showcasing the latest iPhone models with detailed specifications and features. It provides an elegant design and easy navigation, allowing users to explore the iPhone lineup effortlessly.
`
    }
]

export const Data3 = [

    {
        name: "Front-End Developer",
        title: "Freelance",
        text : ' Developing web interfaces using React.js, Tailwind CSS, and JavaScript.Enhancing user experience (UX/UI) and website performance.',
        date : "2025 - Present"
    },
    {
        name: "Freelance",
        title: "Car E-Commerce Platform",
        text : 'Developed an online car marketplace with features for both admin and user roles.Implemented dynamic search and pagination. Integrated Firebase for data storage,allowing real-time updates and secure data management. Retrieved and displayed car data via API for seamless user  interaction.',
        date : "2024 - Present"
    },
    {
        name: "Front-End Intern ",
        title: "Web Master (Mar 2024 – May 2024)",
        text : ' Worked on React projects, UI development, and API integration. Assisted in optimizing web applications ',
        date : "2024 - Present"
    }
  
]


export const Data4 = ['HTML', 'CSS', 'JavaScript','TypeScript', 'React', 'Tailwind','MUI', 'Redux', 'Firebase','React Query','Framer Motion']