import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Vishv Salvi",
  initials: "VS",
  url: "#",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "I am a software engineer. Freelancer in college with experience interning at remote startups, currently building at HeroUI (YC S24) and always experimenting with cool side projects.",
  summary:
    "I started my career as a freelancer in college, in my sophomore year I interned at a remote health tech startup. In my final year of college, I worked a a remote fintech startup. Currently, I am building at HeroUI (YC S24) and always experimenting with cool side projects.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1674310573427924992/lKb0_b8K_400x400.jpg",
  skills: [
    "React",
    "Next.js",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "AWS",
    "Postgres",
    "Docker",
    "Redis",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "vishvsalvi10@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "http://github.com/vishvsalvi/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vishvsalvi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SalviVishv",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HeroUI (YC S24)",
      href: "https://heroui.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "https://bookface-images.s3.amazonaws.com/small_logos/f324d3272a9c106015bc04587fbb6b150b6e6b1e.png",
      start: "Mar 2025",
      end: "Present",
      description:
        "Developed an automatic route detection algorithm to power a dynamic URL bar, similar to lovable.dev.\nLead contributor to the release of version 2.8.0.\nCreated a credit counter feature for HeroUI Chat v2.\nDeveloped the entire notification system for the current version of HeroUI Chat."
    },
    
    {
      company: "S.G Investments",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Aug 2023",
      end: "Mar 2024",
      description:
        "Developed a full stack web application that manages the financial data of 150+ clients. Developed a secure file upload service using AWS S3, handling 12 GBs of data weekly. Collaborated with the engineering team to revamp the backend from Java to Express in 3 weeks.",
    },
    {
      company: "LoveFoodLoveLife",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "https://www.nourishgenie.com/public/desktop/img/header/logo.png",
      start: "Dec 2022",
      end: "Jun 2023",
      description:
        "Collaborated with the engineering team to develop a web application for the personal nutritionists. Built an email automation system that reduced junk food consumption by 34%. Developed 5+ health analysis metrics that enabled real-time tracking for nutritionists.",
    },
    
  ],
  education: [
    {
      school: "Thakur College of Science and Commerce",
      href: "",
      degree: "Bachelor's Degree of Computer Science (BSc)",
      logoUrl: "",
      start: "2022",
      end: "2025",
    },
    {
      school: "John XXIII high school",
      href: "",
      degree: "Higher Secondary School (HSC)",
      logoUrl: "",
      start: "2005",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "ConceptMap AI",
      href: "https://conceptmapai.vercel.app/",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Conceptmap.AI is an AI-driven concept map creator designed to simplify and deepen your understanding of any topic. It generates nodes with content powered by an LLM, connected through edges to visually represent relationships.",
      technologies: [
        "Next.js",
        "Typescript",
        'Reactflow',
        "PostgreSQL",
        "Prisma",
        "Vercel AI SDK",
        "TailwindCSS",
        "Shadcn",
        "Shadcn UI",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://conceptmapai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vishvsalvi/conceptmap.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/conceptmap.webp",
      video: "",
    },
    {
      title: "Documind",
      href: "https://documind.vercel.app/",
      // dates: "June 2023 - Present",
      active: false,
      description:
        "Documind is an intelligent document chat application that allows users to interact with PDF documents using natural language queries.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Pinecone",
        "TailwindCSS",
        "Vercel AI SDK",
        "Drizzle",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vishvsalvi/documind/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/documind.webp",
      video: "",
    },
    {
      title: "K3DF",
      href: "https://k3df.vercel.app/",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "A landing page for a 3D printing farm to showcase their services and products. This is my first even freelance gig and first earning through tech. (The client has changed the url)",
      technologies: [
        "Next.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://k3df.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/k3df.webp",
      video: "",
    },
  ],
} as const;
