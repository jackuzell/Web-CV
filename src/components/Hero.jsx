import { buttonPrimary, buttonSecondary, focusRing } from './ui';
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons';

const contactChip = `inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-[13px] text-zinc-600 shadow-xs transition-colors duration-150 ease-out hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-400 dark:shadow-none dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100 ${focusRing}`;

function Hero({ personalInfo }) {
  const { name, tagline, subTagline, location, email, phone, github, linkedin } = personalInfo;

  return (
    <section id="hero" className="scroll-mt-20 py-20 sm:py-28">
      <div className="flex max-w-2xl flex-col items-start">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 font-mono text-xs text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-transparent dark:text-zinc-400 dark:shadow-none">
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          Available for graduate roles
        </span>

        <h1 className="text-4xl leading-[1.05] font-semibold tracking-tighter text-zinc-900 sm:text-5xl dark:text-zinc-100">
          {name}
        </h1>
        <p className="mt-4 text-lg font-medium tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-100">
          {tagline}
        </p>
        {subTagline && (
          <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {subTagline}
          </p>
        )}
        {location && (
          <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500">
            <MapPinIcon className="size-3.5" />
            {location}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {email && (
            <a href={`mailto:${email}`} className={contactChip}>
              <MailIcon className="size-3.5" />
              {email}
            </a>
          )}
          {phone && (
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className={contactChip}>
              <PhoneIcon className="size-3.5" />
              {phone}
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={contactChip}>
              <GitHubIcon className="size-3.5" />
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={contactChip}>
              <LinkedInIcon className="size-3.5" />
              LinkedIn
            </a>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className={buttonPrimary}>
            Get in touch
          </a>
          <a href="#projects" className={buttonSecondary}>
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;