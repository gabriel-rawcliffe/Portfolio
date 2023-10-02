import Projects from '../elements/Projects'

export default function Intro() {
  return (
    <div className="hero bg-base-200 min-h-[60vh]">
      <div className="hero-content h-full lg:flex-row">
        <div className="flex-1 h-full">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="flex-1">
          <Projects />
        </div>
      </div>
    </div>
  )
}
