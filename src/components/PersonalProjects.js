import React from 'react'
import ProjectCard from './ProjectCard'
import projectData from './project_data'

const style = {
  container: {
    backgroundColor: '#333',
    color: '#fff',
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  flex: {
    justifyContent: 'space-around'
  }
}

const PersonalProjects = () => {
  const projectCards = projectData.map(project =>
    <ProjectCard
      key={project.id}
      image={project.image}
      title={project.title}
      blurb={project.blurb}
    />
  )

  return (
    <div className="flex-column" style={style.container}>
      <h1 className="header secondary">Personal Projects</h1>
      <div className="flex-row" style={style.flex}>
        {projectCards}
      </div>
    </div>
  )
}

export default PersonalProjects
