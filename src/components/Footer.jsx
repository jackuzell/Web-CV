import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import { buttonPrimary, buttonSecondary, focusRing } from './ui';

function Footer({ personalInfo }) {
  const { name, email, github, linkedin } = personalInfo;

  return (
    <footer id="contact" className="scroll-mt-14 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-8 sm:pt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Let&apos;s connect
        </h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Open to graduate software engineering, junior systems / IT and full-stack opportunities.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {email && (
            <a href={`mailto:${email}`} className={buttonPrimary}>
              <MailIcon className="size-3.5" />
              {email}
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              <GitHubIcon className="size-3.5" />
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              <LinkedInIcon className="size-3.5" />
              LinkedIn
            </a>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800/80">
          <p>
            © {new Date().getFullYear()} {name}. Built with React, Vite &amp; Tailwind CSS.
          </p>
          <a
            href="#hero"
            className={`inline-flex items-center gap-1 rounded-md font-mono transition-colors duration-150 ease-out hover:text-zinc-900 dark:hover:text-zinc-100 ${focusRing}`}
          >
            Back to top
            <ArrowUpIcon className="size-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
