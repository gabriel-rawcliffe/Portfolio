export default function Nabar() {
  return (
    <div className="navbar bg-accent">
      <div className="navbar-start">
        <article className="prose">
          <h1 className="text-accent-content">Gabriel Rawcliffe</h1>
        </article>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/gabriel-rawcliffe"
          className="btn btn-ghost btn-circle"
        >
          <img
            src="/images/githublogo.png"
            alt="github logo"
            className="h-10 w-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-rawcliffe-745193293/"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <img
              src="/images/linkedinlogo.png"
              alt="linked in logo"
              className="h-10 w-10"
            />
          </div>
        </a>
      </div>
    </div>
  )
}
