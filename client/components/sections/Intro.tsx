import { useState } from 'react'
import Carousel from '../elements/Carousel'

import ProjectInfo from './ProjectInfo'

export default function Intro() {
  const [showInfo, setShowInfo] = useState(false) // Initialize dropdown state
  const [project, setProject] = useState(0)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }
  const setNewProject = (index: number) => {
    setProject(index)
  }
  return (
    <>
      <div className="bg-neutral w-screen h-fit">
        <div className="h-full flex flex-wrap">
          <div className="m-5 flex-1 h-full min-w-[300px]">
            <article className="prose">
              <p>
                I am a developer with a background in research science. I
                completed Dev Academy Aotearoa's emersive full-stack course in
                2023 in order to facilitate a transition into the tech industry.
                I am excited about the facility for technology to solve
                problems, communicate ideas and help people, communities and the
                environment.
              </p>
              <h2>Project portfolio:</h2>
              <p className="">
                The work presented here is a selection of personal or group
                projects that I have produced since June 2023. Please scroll
                through the selection and click on the projects to see more
                details.
              </p>
            </article>
          </div>
          <div className="flex-1 m-5 min-w-[300px]">
            <Carousel toggleInfo={toggleInfo} setNewProject={setNewProject} />
          </div>
        </div>
      </div>
      <div className="">
        {showInfo && <ProjectInfo project={project} toggleInfo={toggleInfo} />}
      </div>
    </>
  )
}
