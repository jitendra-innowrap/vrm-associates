import caIcon from "@/assets/ca-icon.png";

type BrandLogoProps = {
  isLight?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ isLight = false, compact = false }: BrandLogoProps) {
  const primaryTextClass = isLight ? "text-white" : "text-obsidian";
  const secondaryTextClass = isLight ? "text-white/80" : "text-slate-mid";
  const dividerClass = isLight ? "bg-white/35" : "bg-border";

  return (
    <span className="inline-flex items-center gap-3">
      <span className={`flex items-center justify-center ${compact ? "w-8 h-8" : "w-10 h-10"}`}>
        <img
          src={caIcon}
          alt="CA logo icon"
          className="w-full h-full object-contain"
        />
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
