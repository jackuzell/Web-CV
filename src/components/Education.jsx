import SectionHeader from './SectionHeader';
import { badge, badgeStrong, card, cardTitle, label, meta, section } from './ui';

function Education({ educationList = [] }) {
  return (
    <section id="education" className={section}>
      <SectionHeader
        title="Education & academic results"
        subtitle="Academic qualifications and standout module performances"
      />

      <div className="flex flex-col gap-4">
        {educationList.map((edu) => (
          <article key={edu.id} className={`${card} p-6`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3 className={cardTitle}>{edu.institution}</h3>
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">{edu.degree}</p>
              </div>
              <span className={`${meta} shrink-0 leading-6 whitespace-nowrap`}>{edu.period}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {edu.status && <span className={badge}>{edu.status}</span>}
              {edu.annualMark && <span className={badgeStrong}>{edu.annualMark}</span>}
              {edu.creditsEarned && <span className={badge}>{edu.creditsEarned}</span>}
            </div>

            {edu.topModules?.length > 0 && (
              <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800/80">
                <h4 className={label}>Standout modules</h4>
                <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-8">
                  {edu.topModules.map((module) => (
                    <li
                      key={module.code}
                      className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-baseline gap-3 border-b border-zinc-200 py-2.5 dark:border-zinc-800/80"
                    >
                      <span className={meta}>{module.code}</span>
                      <span className="text-sm text-zinc-900 dark:text-zinc-100">{module.name}</span>
                      <span className="font-mono text-[13px] font-medium text-zinc-900 tabular-nums dark:text-zinc-100">
                        {module.grade}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;