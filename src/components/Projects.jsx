import SectionHeader from './SectionHeader';
import { ArrowUpRightIcon, GitHubIcon } from './Icons';
import { buttonPrimary, buttonSecondary, card, cardTitle, dashItem, meta, section, tag } from './ui';

const isUrl = (value) => typeof value === 'string' && /^https?:\/\//.test(value);

function Projects({ projectList = [] }) {
  return (
    <section id="projects" className={section}>
      <SectionHeader
        title="Featured projects"
        subtitle="Selected work showcasing my skills and experience"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <article
            key={project.id}
            className={`${card} flex flex-col p-6 transition-colors duration-150 ease-out hover:border-zinc-300 dark:hover:border-zinc-700`}
          >
            <div className="flex flex-col gap-1">
              <h3 className={cardTitle}>{project.title}</h3>
              {project.subtitle && <p className={`${meta} leading-relaxed`}>{project.subtitle}</p>}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            {project.highlights?.length > 0 && (
              <ul className="mt-4 flex flex-col gap-1.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className={`${dashItem} text-[13px] text-zinc-600 dark:text-zinc-400`}>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {project.techStack.map((tech) => (
                <li key={tech} className={tag}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
              {isUrl(project.githubLink) && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
                  <GitHubIcon className="size-3.5" />
                  Code
                </a>
              )}
              {isUrl(project.liveLink) && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
                  Live demo
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              )}
              {project.liveLink && !isUrl(project.liveLink) && (
                <span className="inline-flex items-center rounded-md border border-dashed border-zinc-300 px-2 py-1 font-mono text-xs text-zinc-500 dark:border-zinc-700">
                  {project.liveLink}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;