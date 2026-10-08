import SectionHeader from './SectionHeader';
import { cardTitle, dashItem, meta, section, tag } from './ui';

function Experience({ experienceList = [] }) {
  return (
    <section id="experience" className={section}>
      <SectionHeader
        title="Work experience"
        subtitle="Professional engineering placement, retail leadership and operations"
      />

      <ol className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
        {experienceList.map((exp) => (
          <li key={exp.id} className="py-7 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3 className={cardTitle}>{exp.title}</h3>
                <p className="mt-0.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {exp.company}
                  {exp.location && (
                    <span className="font-normal text-zinc-500"> · {exp.location}</span>
                  )}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-1.5">
                <span className={`${meta} leading-6 whitespace-nowrap`}>{exp.period}</span>
                {exp.placementType && <span className={tag}>{exp.placementType}</span>}
              </div>
            </div>

            <ul className="mt-4 flex max-w-3xl flex-col gap-2">
              {exp.highlights.map((highlight) => (
                <li key={highlight} className={`${dashItem} text-sm text-zinc-600 dark:text-zinc-400`}>
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;