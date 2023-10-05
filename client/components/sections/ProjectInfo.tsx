import { ProjectData } from '../../../models/data'

interface Props {
  project: ProjectData
  toggleInfo: () => void
  handleUp: () => void
  handleDown: () => void
}

export default function ProjectInfo({
  project,
  toggleInfo,
  handleUp,
  handleDown,
}: Props) {
  return (
    <div className="bg-secondary p-4 shadow-md rounded-lg h-fit">
      <div className="absolute left-2 top-1/4">
        <button
          className="btn btn-circle bg-neutral-focus text-neutral-content hover:bg-success"
          onClick={handleDown}
        >
          ←
        </button>
      </div>
      <div className="absolute flex transform right-2 top-1/4">
        <button
          className="btn btn-circle bg-neutral-focus text-neutral-content hover:bg-success"
          onClick={handleUp}
        >
          →
        </button>
      </div>
      <button
        className="btn btn-circle btn outline btn-sm relative float-right"
        onClick={toggleInfo}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-wrap ">
        <div className="flex-1 min-w-[300px] flex items-center justify-center">
          <figure className="w-full">
            {project.video ? (
              <>
                <div className="min-w-[300px] content-center">
                  <iframe
                    width="100%"
                    height="auto"
                    src={`${project.video}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={`${project.name} demo`}
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </>
            ) : (
              <img
                src={`${project.image}`}
                alt={`${project.name} screenshot`}
              />
            )}
          </figure>
        </div>
        <div className="m-5 flex-1 h-full min-w-[300px]">
          <article className="prose text-secondary-content">
            <h2 className="text-secondary-content">{project.name}</h2>
            <p className="text-secondary-content">{project.blurb}</p>
          </article>
          <div className="flex flex-row mt-3 ">
            <a
              className="text-success-content bg-success rounded-md p-1 mr-2"
              href={project.link}
            >
              Project link
            </a>
            <a href={project.repoLink}>
              <img
                src="/images/githublogo.png"
                alt="github logo"
                className="h-8 w-8 bg-white rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
