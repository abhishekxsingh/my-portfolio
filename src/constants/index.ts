import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  devops,
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
  nftfn,
  chatapp,
  crypto,
  auth,
  threejs,
  unbiasly,
  coinliv,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: devops,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "NFTFN",
    icon: nftfn,
    iconBg: "#383E56",
    date: " October 2023 - Current",
    points: [
      "developed and maintained a resilient order book data system and a robust trading view backend. By optimizing performance, I ensured real-time data accuracy and enhanced the platform's reliability and efficiency",
      "These improvements facilitated seamless and secure trading experiences. The order book data system handled high-frequency trading demands, while the trading view backend provided users with up-to-date market information and analytics.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Unbaisly",
    icon: unbiasly,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Aug 2022",
    points: [
      "Developed and maintained responsive web applications using React.js and Node.js.",
      "Collaborated with cross-functional teams to define and implement innovative solutions for the product direction, visuals, and user experience.",
      "Deployed applications on AWS and managed cloud infrastructure.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Internship",
    companyName: "CoinLIV",
    icon: coinliv,
    iconBg: "#E6DEDD",
    date: " November 2022 - July 2023",
    points: [
      "Developed and maintained responsive web applications using React.js and Node.js.",
      "Collaborated with cross-functional teams to define and implement innovative solutions for the product direction, visuals, and user experience.",
      "Deployed applications on AWS and managed cloud infrastructure.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abhishek proved me wrong.",
    name: "Vikas Singh",
    designation: "CEO",
    company: "NFTFN",
    image: "https://ca.slack-edge.com/T01BP233L79-U01BX2C7VSA-33ef7eff3b5b-512",
  },
];

const projects: TProject[] = [
  {
    name: "Chat App",
    description:
      "CHAT is a versatile messaging app offering real-time text, voice, and video communication. Features include end-to-end encryption, AI-powered tools, customizable themes, and multi-device sync.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresSQL",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    sourceCodeLink: "https://github.com/abhishekxsingh/chatup-client",
  },
  {
    name: "Crypto Pocket",
    description:
  "Crypto Pocket is a secure mobile app for managing cryptocurrencies. It allows users to store, send, and receive various digital assets like Bitcoin, Ethereum, and more. Featuring robust encryption and user-friendly interface.",
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
    image: crypto,
    sourceCodeLink: "https://github.com/abhishekxsingh/crypto-front-end",
  },
  {
    name: "Auth Service",
    description:
      "Our backend authentication service ensures secure user access, integrates with existing systems via OAuth, and employs encryption standards for data protection, supporting scalable user management and seamless login experiences.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Jwt",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: auth,
    sourceCodeLink: "https://github.com/abhishekxsingh/auth-service",
  },
];

export { services, technologies, experiences, testimonials, projects };
