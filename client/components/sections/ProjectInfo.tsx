import projects from '../../../public/data/projects'

interface Props {
  project: number
  toggleInfo: (index: number) => void
}

export default function ProjectInfo({ project, toggleInfo }: Props) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <button
        className="btn btn-circle btn-sm position- absolute right-3 top-3"
        onClick={() => toggleInfo(project)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
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
      <h2 className="text-xl font-semibold mb-2">{projects[project].name}</h2>
      <p>{projects[project].blurb}</p>
    </div>
  )
}
