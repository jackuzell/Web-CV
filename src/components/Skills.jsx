import SectionHeader from './SectionHeader';
import { card, label, section } from './ui';

const categories = [
  { key: 'languages', title: 'Languages' },
  { key: 'frameworks', title: 'Frameworks & libraries' },
  { key: 'systemsAndIT', title: 'Systems & enterprise IT' },
  { key: 'engineeringPractices', title: 'Engineering practices & tools' },
];

function Skills({ skillsData = {} }) {
  return (
    <section id="skills" className={section}>
      <SectionHeader
        title="Technical skills & competencies"
        subtitle="Technologies, frameworks, systems administration and software practices"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map(({ key, title }) => (
          <div key={key} className={`${card} flex flex-col gap-3 p-5`}>
            <h3 className={label}>{title}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {(skillsData[key] ?? []).map((skill) => (
                <li
                  key={skill}
                  className="inline-flex items-center rounded-md border border-zinc-200/90 bg-zinc-50 px-2 py-0.5 text-[13px] text-zinc-800 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;