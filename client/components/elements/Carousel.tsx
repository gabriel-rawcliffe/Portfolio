import { Link } from 'react-router-dom'

import projects from '../../../public/data/projects'
export default function Projects() {
  return (
    <>
      <div className="carousel w-full">
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
                className="w-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${
                  (index - 1 + projects.length) % projects.length
                }`}
                className="btn btn-circle bg-neutral-focus hover:bg-success"
              >
                ❮
              </a>
              <a
                href={`#slide${(index + 1) % projects.length}`}
                className="btn btn-circle bg-neural-focus hover:bg-success"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
