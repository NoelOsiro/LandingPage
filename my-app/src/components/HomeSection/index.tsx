import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { sections } from '../../data/homeSectionData'
import Section from './Section'

const HomeSection = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </>
  )
}

export default HomeSection