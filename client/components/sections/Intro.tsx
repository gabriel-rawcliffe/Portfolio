import Carousel from '../elements/Carousel'

export default function Intro() {
  return (
    <div className="hero bg-neutral h-[60vh]">
      <div className="hero-content h-full lg:flex-row">
        <div className="flex-1 h-full flex flex-col justify-end">
          <article className="prose">
            <h2>Project portfolio:</h2>
            <p className="py-7">
              The work presented here is a selection of personal or group
              projects that I have produced since June 2023. Please scroll
              through the selection and click on the projects to see more
              details.
            </p>
          </article>
        </div>
        <div className="flex-1">
          <Carousel />
        </div>
      </div>
    </div>
  )
}
