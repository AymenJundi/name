import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React js",
    icon: mobile,
  },
  {
    title: "Tailwindcss",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Javascript",
    company_name: "",
    icon: javascript,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Writing clean, efficient, and maintainable JavaScript code to develop interactive and dynamic web applications.Building functionality for web interfaces, including form validation, interactive elements, and real-time updateUtilizing ES6+ features (e.g., arrow functions, destructuring, promises) to write modern and optimized JavaScript code.Debugging and troubleshooting JavaScript issues to ensure seamless performance and usability.Working with the DOM to manipulate and update content dynamically based on user interactions.",
    ],
  },
  {
    title: "Reactjs",
    company_name: "",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Building and managing component-based web applications using React.js for scalable and dynamic user interfaces.Leveraging React hooks and state management libraries (e.g., Redux) to efficiently manage application state.Optimizing performance by implementing techniques like lazy loading, memoization, and efficient rendering.Integrating APIs and handling asynchronous data fetching using modern React patterns.Troubleshooting and debugging React components to ensure reliability and consistency.",
    ],
  },
  {
    title: "Tailwind Css",
    company_name: "",
    icon: tailwind,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designing responsive, utility-first interfaces using Tailwind CSS to accelerate development and maintain design consistency.Creating custom themes and extending Tailwind configurations to meet unique project requirements.Ensuring pixel-perfect designs by working closely with UI/UX designers and aligning with the design system.Implementing animations and transitions for an enhanced user experience using Tailwind’s animation utilities.Maintaining clean and reusable styles by adhering to a modular, component-first CSS approach.",
    ],
  },
  {
    title: "Threejs",
    company_name: "",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing interactive 3D visuals and animations for web applications using Three.js to create immersive experiences.Integrating 3D models, lighting, and textures into web projects for visually stunning effects.Ensuring optimal performance by optimizing 3D rendering and reducing computational overhead.Collaborating with designers to incorporate creative 3D elements that align with the project’s goals. Collaborating with designers to incorporate creative 3D elements that align with the project’s goals.Staying updated on WebGL and Three.js advancements to implement cutting-edge features in projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aymen proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aymen does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aymen optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };