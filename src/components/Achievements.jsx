import SectionHeader from './SectionHeader';
import { card, cardTitle, label, section } from './ui';

function Achievements({ achievementsList = [] }) {
  return (
    <section id="achievements" className={section}>
      <SectionHeader
        title="Leadership & achievements"
        subtitle="Sports leadership, national awards and professional recognition"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {achievementsList.map((item) => (
          <article key={item.id} className={`${card} flex flex-col gap-2 p-5`}>
            <span className={label}>{item.category}</span>
            <h3 className={cardTitle}>{item.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;