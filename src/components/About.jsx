import SectionHeader from './SectionHeader';
import { section } from './ui';

function About({ personalInfo, stats = [] }) {
  return (
    <section id="about" className={section}>
      <SectionHeader title="About me" subtitle="Background, core focus and engineering mindset" />

      <p className="max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        {personalInfo.summary}
      </p>

      {stats.length > 0 && (
        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4 dark:border-zinc-800/80 dark:bg-zinc-800/80">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2 bg-white p-5 dark:bg-zinc-950">
              <dt className="text-xs leading-snug text-zinc-500">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-zinc-900 tabular-nums dark:text-zinc-100">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

export default About;