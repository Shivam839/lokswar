import React from 'react'
import Footer from '../components/Footer'
import PageNavigation from '../components/PageNavigation'
import PastProjects from '../components/PastProjects'
import Header from '../components/Header'

const Projects = () => {
  return (
    <div>
      <Header/>
        <PageNavigation title={"Our Programs"}/>
        <PastProjects/>
      <Footer/>
    </div>
  )
}

export default Projects
