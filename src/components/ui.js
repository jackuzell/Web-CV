// Shared Tailwind class recipes. Keeping them in one place means every
// button, card and tag on the site stays visually consistent.

export const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 dark:focus-visible:ring-zinc-600 dark:focus-visible:ring-offset-zinc-950';

const buttonBase = `inline-flex items-center gap-1.5 rounded-md border px-3.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-150 ease-out ${focusRing}`;

export const buttonPrimary = `${buttonBase} border-transparent bg-zinc-900 text-white shadow-xs hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200`;

export const buttonSecondary = `${buttonBase} border-zinc-200 bg-white text-zinc-700 shadow-xs hover:bg-zinc-50 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-300 dark:hover:bg-zinc-800/60`;

export const card =
  'rounded-xl border border-zinc-200/90 bg-white shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]';

export const cardTitle =
  'text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100';

export const label =
  'text-xs font-medium tracking-wider text-zinc-500 uppercase';

export const meta = 'font-mono text-xs text-zinc-500';

// Small rectangular tag (tech stack, placement type)
export const tag =
  'inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-xs whitespace-nowrap text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400';

// Status badges — the only place rounded-full is used
export const badge =
  'inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-400';

export const badgeStrong =
  'inline-flex items-center rounded-full border border-zinc-200 bg-zinc-200/80 px-2.5 py-0.5 text-xs font-medium text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100';

// List item with a short hairline dash instead of a bullet dot
export const dashItem =
  'relative pl-4.5 leading-relaxed before:absolute before:top-[0.8em] before:left-0.5 before:h-px before:w-1.5 before:bg-zinc-400 dark:before:bg-zinc-600';

export const section = 'scroll-mt-20 py-16 sm:py-20';
