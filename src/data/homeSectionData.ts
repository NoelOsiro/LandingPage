import undraw3 from '../assets/img/undraw_svg_3.svg'
import undraw2 from '../assets/img/undraw_svg_2.svg'
import undraw1 from '../assets/img/undraw_svg_1.svg'

interface SectionProps {
    title: string;
    description: string;
    buttonText: string;
    imgSrc: string;
    imgAlt: string;
    btnLink: string;
    imgAlignment: "left" | "right";
    animation: "fade-left" | "fade-right";
  }
export  const features = [
  { icon: "bi bi-people", title: "Explore Malindi's Heritage", text: "Embark on a journey to discover the diverse cultural tapestry of Malindi. Engage with the rich history and traditions that define the Swahili Coast." },
  { icon: "bi bi-brightness-high", title: "Digital Cultural Archive", text: "Preserve the essence of Malindi's cultural heritage through a digital archive. Safeguard artifacts, historical events, and traditional practices for future generations." },
  { icon: "bi bi-bar-chart", title: "Community Engagement", text: "Foster active participation from residents, students, and cultural enthusiasts. Contribute insights, stories, and experiences to enrich the platform's documentation process." }
];

export const steps = [
  { number: "01", title: "Join the Community", text: "Sign up to become an integral part of the Malindi Cultural Heritage Platform. Contribute to the preservation and celebration of our rich cultural tapestry." },
  { number: "02", title: "Craft Your Narrative", text: "Create a personalized profile to share your unique connection to Malindi's cultural heritage. Add your stories, experiences, and insights to enrich the platform." },
  { number: "03", title: "Embark on Cultural Exploration", text: "Immerse yourself in the diverse heritage of Malindi. Enjoy interactive features, virtual tours, and multimedia content that bring the Swahili Coast to life." }
];


export const sections: SectionProps[] = [
  {
    title: "Discover Malicul",
    description: "Explore the vibrant coastal culture of Malindi through Malicul - your gateway to the enchanting world of Swahili Coast traditions, events, and tourism. Immerse yourself in the rich heritage of Malindi and its unique coastal communities.",
    buttonText: "Start Exploring",
    imgSrc: undraw3,
    imgAlt: "Discover Malicul Image",
    btnLink: "/explore",
    imgAlignment: "left",
    animation: "fade-left"
  },
  {
    title: "Malicul Events",
    description: "Stay updated on the latest events happening in Malindi. From cultural festivals to community gatherings, Malicul Events keeps you informed and connected to the vibrant happenings along the Swahili Coast.",
    buttonText: "View Events Calendar",
    imgSrc: undraw2,
    imgAlt: "Malicul Events Image",
    btnLink: "/events",
    imgAlignment: "right",
    animation: "fade-right"
  },
  {
    title: "Cultural Heritage Preservation",
    description: "Contribute to the preservation of Malindi's cultural heritage. Explore and contribute to the digital archive, sharing artifacts, historical events, and traditional practices. Be part of the effort to preserve our heritage for future generations.",
    buttonText: "Get Involved",
    imgSrc: undraw2,
    imgAlt: "Cultural Heritage Preservation Image",
    btnLink: "/preservation",
    imgAlignment: "left",
    animation: "fade-left"
  },
  {
    title: "Virtual Coastal Tours",
    description: "Embark on virtual tours, uncovering the unique cultural aspects of Malindi. Immerse yourself in multimedia content that brings the rich history and traditions of the Swahili Coast to life. Experience Malindi from the comfort of your home.",
    buttonText: "Start Your Virtual Tour",
    imgSrc: undraw3,
    imgAlt: "Virtual Coastal Tours Image",
    btnLink: "/virtual-tours",
    imgAlignment: "right",
    animation: "fade-right"
  },
  {
    title: "Community Engagement",
    description: "Join hands with residents, students, and cultural enthusiasts in actively documenting and preserving Malindi's cultural heritage. Contribute insights, stories, and experiences to enrich the Malicul platform and connect with like-minded individuals.",
    buttonText: "Connect with Community",
    imgSrc: undraw1,
    imgAlt: "Community Engagement Image",
    btnLink: "/community",
    imgAlignment: "left",
    animation: "fade-left"
  }
];
