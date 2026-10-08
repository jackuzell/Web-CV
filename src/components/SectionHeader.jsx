function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 flex flex-col gap-1">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {subtitle && <p className="text-sm text-zinc-500">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
