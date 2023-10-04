import { Link } from 'react-router-dom'

import projects from '../../../public/data/projects'
import { useState } from 'react'

interface Props {
  toggleInfo: () => void
  setNewProject: (index: number) => void
}

export default function Projects({ toggleInfo, setNewProject }: Props) {
  return (
    <>
      <div className="carousel flex-1 w-full h-[55vh] overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={`${project.name} project thumbnail`}
                className="object-contain w-full"
                onClick={() => toggleInfo()}
              />
              <div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-100"
                style={{ pointerEvents: 'none' }}
              ></div>
            </div>

            <div className="absolute flex transform left-5 top-1/2">
              <a
                href={`#slide${
                  (index - 1 + projects.length) % projects.length
                }`}
                className="btn btn-circle bg-neutral-focus text-neutral-content hover:bg-success"
                onClick={() => setNewProject(index - 1)}
              >
                ←
              </a>
            </div>
            <div className="absolute flex transform right-5 top-1/2">
              <a
                href={`#slide${(index + 1) % projects.length}`}
                className="btn btn-circle bg-neutral-focus text-neutral-content hover:bg-success"
                onClick={() => setNewProject(index + 1)}
              >
                →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
