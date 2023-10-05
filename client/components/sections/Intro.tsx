import { useState } from 'react'
import Carousel from '../elements/Carousel'

import ProjectInfo from './ProjectInfo'
import projects from '../../../public/data/projects'

export default function Intro() {
  const [projectIndex, setProjectIndex] = useState(0)
  const project = projects[projectIndex]
  const [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }
  const handleUp = () => {
    setProjectIndex((projectIndex + 1) % projects.length)
  }

  const handleDown = () => {
    // Calculate the new index, ensuring it wraps around to the last index
    const newIndex =
      projectIndex - 1 < 0 ? projects.length - 1 : projectIndex - 1
    setProjectIndex(newIndex)
  }

  return (
    <>
      {!showInfo && (
        <div className="bg-base w-screen h-fit">
          <div className="h-full flex flex-wrap">
            <div className="m-5 flex-1 h-full min-w-[300px]">
              <article className="prose text-base-content">
                <p className="text-base-content">
                  {`I am a developer with a background in research science. I
                completed Dev Academy Aotearoa's emersive full-stack course in
                2023 in order to facilitate a transition into the tech industry.
                I am excited about the facility for technology to solve
                problems, communicate ideas and help people, communities and the
                environment.`}
                </p>
                <h2 className="text-base-content">Project portfolio:</h2>
                <p className="text-base-content">
                  The work presented here is a selection of personal or group
                  projects that I have produced since June 2023. Please scroll
                  through the selection and click on the projects to see more
                  details.
                </p>
              </article>
            </div>

            <div className="flex-1 m-5 min-w-[300px] h-full content-center">
              <Carousel
                project={project}
                toggleInfo={toggleInfo}
                handleDown={handleDown}
                handleUp={handleUp}
              />
            </div>
          </div>
        </div>
      )}
      <div className="">
        {showInfo && (
          <ProjectInfo
            project={project}
            toggleInfo={toggleInfo}
            handleDown={handleDown}
            handleUp={handleUp}
          />
        )}
      </div>
    </>
  )
}
