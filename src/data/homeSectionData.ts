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


export 
const sections: SectionProps[] = [
  {
    title: "Gather Feedback",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.",
    buttonText: "Check Out",
    imgSrc: "assets/img/undraw_svg_3.svg",
    imgAlt: "Image2",
    btnLink: "#",
    imgAlignment: "left",
    animation: "fade-left"
  },
  {
    title: "Seamlessly Communicate",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.",
    buttonText: "Download Now",
    imgSrc: "assets/img/undraw_svg_2.svg",
    imgAlt: "Image",
    btnLink: "#",
    imgAlignment: "right",
    animation: "fade-right"
  },
  {
    title: "Preserve History",
    description: "Explore and contribute to the digital archive of Malindi's cultural artifacts, historical events, and traditional practices. Be part of the effort to preserve our heritage for future generations.",
    buttonText: "Start Preserving",
    imgSrc: "https://source.unsplash.com/random/1/?malindi",
    imgAlt: "Preserve History Image",
    btnLink: "#",
    imgAlignment: "left",
    animation: "fade-left"
  },
  {
    title: "Virtual Discovery",
    description: "Embark on virtual tours, uncovering the unique cultural aspects of Malindi. Immerse yourself in multimedia content that brings the rich history and traditions of the Swahili Coast to life.",
    buttonText: "Begin Exploring",
    imgSrc: "https://source.unsplash.com/random/1/?coralreef",
    imgAlt: "Virtual Discovery Image",
    btnLink: "#",
    imgAlignment: "right",
    animation: "fade-right"
  },
  {
    title: "Community Engagement",
    description: "Join hands with residents, students, and cultural enthusiasts in actively documenting and preserving Malindi's cultural heritage. Contribute insights, stories, and experiences to enrich the platform.",
    buttonText: "Get Involved",
    imgSrc: "https://source.unsplash.com/random/1/?african_community",
    imgAlt: "Community Engagement Image",
    btnLink: "#",
    imgAlignment: "left",
    animation: "fade-left"
  }
];