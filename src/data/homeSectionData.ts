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
export const features = [
    { icon: "bi bi-people", title: "Explore Your Team", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." },
    { icon: "bi bi-brightness-high", title: "Digital Whiteboard", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." },
    { icon: "bi bi-bar-chart", title: "Design To Development", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." }
  ];

export const steps = [
    { number: "01", title: "Sign Up", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." },
    { number: "02", title: "Create Profile", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." },
    { number: "03", title: "Enjoy the app", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio." }
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
  }
];