import caIcon from "@/assets/ca-icon.png";

type BrandLogoProps = {
  isLight?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ isLight = false, compact = false }: BrandLogoProps) {
  const primaryTextClass = isLight ? "text-white" : "text-obsidian";
  const secondaryTextClass = isLight ? "text-white/80" : "text-slate-mid";
  const dividerClass = isLight ? "bg-white/35" : "bg-border";
  const iconSubTextClass = isLight ? "text-white/75" : "text-slate-light";

  return (
    <span className="inline-flex items-center gap-3">
      <span className={`flex flex-col items-center justify-center ${compact ? "w-9" : "w-12"}`}>
        <span className={`relative ${compact ? "w-6 h-auto" : "w-9 h-auto"}`}>
          <img
            src={caIcon}
            alt="CA logo icon"
            className="w-full h-full object-cover scale-[1.26] -translate-y-[16%]"
          />
        </span>
        <span className={`font-body font-semibold uppercase translate-y-1 tracking-[0.22em] leading-none mt-0.5 ${compact ? "text-[8px]" : "text-[9px]"} ${iconSubTextClass}`}>
          India
        </span>
      </span>

      <span className="flex flex-col leading-tight">
        <span className={`font-display font-bold tracking-tight ${compact ? "text-base" : "text-lg"} ${primaryTextClass}`}>
          VRM <span className="text-vault-cyan">&</span> Associates
        </span>
        <span className={`h-px ${dividerClass} my-0.5 w-full`} />
        <span className={`font-body uppercase tracking-[0.22em] ${compact ? "text-[9px]" : "text-[10px]"} ${secondaryTextClass}`}>
          Chartered Accountants
        </span>
      </span>
    </span>
  );
}
