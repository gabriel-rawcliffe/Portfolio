import { useState } from 'react'
import projects from '../../../public/data/projects'
import { ProjectData } from '../../../models/data'

interface Props {
  toggleInfo: () => void
  handleUp: () => void
  handleDown: () => void
  project: ProjectData
}

export default function Projects({
  toggleInfo,
  handleUp,
  handleDown,
  project,
}: Props) {
  console.log(project)
  return (
    <>
      <div className="flex-1 w-full h-fit overflow-hidden content-center">
        <div className="relative w-full content-center">
          <div className="relative group content-center max-h-[400px]">
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

          <div className="absolute flex transform left-5 top-20">
            <button
              className="btn btn-circle bg-neutral-focus text-neutral-content hover:bg-success"
              onClick={handleDown}
            >
              ←
            </button>
          </div>
          <div className="absolute flex transform right-5 top-20">
            <button
              className="btn btn-circle bg-neutral-focus text-neutral-content hover:bg-success"
              onClick={handleUp}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
