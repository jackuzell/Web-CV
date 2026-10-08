import { buttonPrimary, focusRing } from './ui';
import { MoonIcon, SunIcon } from './Icons';

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
];

function Navbar({ name, theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-100/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-6"
      >
        <a
          href="#hero"
          className={`shrink-0 rounded-md text-sm font-semibold tracking-tight text-zinc-900 max-[480px]:hidden dark:text-zinc-100 ${focusRing}`}
        >
          {name}
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <ul className="flex min-w-0 items-center gap-1 overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-md px-2.5 py-1.5 text-sm whitespace-nowrap text-zinc-500 transition-colors duration-150 ease-out hover:bg-zinc-200/70 hover:text-zinc-900 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100 ${focusRing}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-2 shrink-0">
              <a href="#contact" className={buttonPrimary}>
                Contact
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-600 shadow-xs transition-colors duration-150 ease-out hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100 ${focusRing}`}
          >
            {theme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
