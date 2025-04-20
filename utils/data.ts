import {
  LogoType,
  ServiceType,
  TeamMemberType,
  WorkingProcessesType,
} from "./types";

export const services: ServiceType[] = [
  {
    title: "Search Engine Optimisation",
    image: "seo",
    variant: "light",
  },
  {
    title: "Pay-per-click Advertising",
    image: "advertising",
    variant: "primary",
  },
  {
    title: "Social Media Marketing",
    image: "smm",
    variant: "dark",
  },
  {
    title: "Email Marketing",
    image: "emailmarketing",
    variant: "light",
  },
  {
    title: "Content Creation",
    image: "contentcreation",
    variant: "primary",
  },
  {
    title: "Analytics and Tracking",
    image: "analyticsandtracking",
    variant: "dark",
  },
];

export const caseStudies = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export const teamMembers: TeamMemberType[] = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    image: "johnsmith",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    image: "janedoe",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    image: "michaelbrown",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    image: "emilyjohnson",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    image: "brianwilliams",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    image: "sarahkim",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export const logos: LogoType[] = [
  "amazon",
  "dribbble",
  "hubspot",
  "notion",
  "netflix",
  "zoom",
];

export const workingProcesses: WorkingProcessesType[] = [
  {
    question: "Consultaion",
    answer:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    question: "Research and Strategy Development",
    answer:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    question: "Implementation",
    answer:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    question: "Monitoring and Optimization",
    answer:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    question: "Reporting and Communication",
    answer:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    question: "Continual Improvement",
    answer:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

export const navItems: string[] = [
  "About us",
  "Services",
  "Use Cases",
  "Pricing",
  "Blog",
];

export const currentYear = new Date().getFullYear();
