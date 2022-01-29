import React from "react";

type pageContextObject = {
  sectionType: 'text' | 'image' | 'link'
  sectionTitle: string,
  sectionBodyAlign: 'left' | 'right',
  sectionBodyText?: string,
  sectionBodyLink?: string,
  sectionImage?: string
} 

const pageContext = React.createContext([
  {
    sectionType: 'text',
    sectionTitle: 'about',
    sectionBodyAlign: 'left',
    sectionBodyText: 'I am a Computer Science major with five years of tech industry experience in Domain Management, System Administration, and Full-Stack Web Development. My interests are in privacy and security, full-stack web applications, and data science. I graduated in Spring 2020 with a BS in Computer Science. When I\'m not coding, I spend my free time writing and producing music.',
    sectionImage: 'images/profile/me2.min.jpg'
  }, {
    sectionType: 'text',
    sectionTitle: 'work',
    sectionBodyAlign: 'right',
    sectionBodyText: 'A collection of projects I have worked on alone or as part of a team. My career focus has taken a natural progression from service management, to service provisioning, to server side development, to my current work in full-stack and mobile development.',
  }, {
    sectionType: 'link',
    sectionTitle: 'contact',
    sectionBodyAlign: 'left',
    sectionBodyLink: 'mailto:stelios.phan@gmail.com',
  }
] as pageContextObject[]);

export default pageContext;