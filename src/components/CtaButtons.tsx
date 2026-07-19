import { WHATSAPP_COMMUNITY_URL, FACEBOOK_MARKETPLACE_URL } from '../lib/links';
import { WhatsAppIcon, FacebookIcon } from './BrandIcons';

type Variant = 'whatsapp' | 'facebook';
type Size = 'lg' | 'md';

type CtaButtonsProps = {
  variant?: 'stacked' | 'inline';
  size?: Size;
  className?: string;
};

function Button({
  variant,
  size = 'lg',
}: {
  variant: Variant;
  size?: Size;
}) {
  const isWhatsApp = variant === 'whatsapp';
  const href = isWhatsApp ? WHATSAPP_COMMUNITY_URL : FACEBOOK_MARKETPLACE_URL;
  const Icon = isWhatsApp ? WhatsAppIcon : FacebookIcon;

  const base =
    'group relative inline-flex items-center justify-center gap-3 rounded-2xl font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950';
  const sizes: Record<Size, string> = {
    lg: 'min-h-[60px] px-6 text-base sm:text-[17px] w-full sm:w-auto',
    md: 'min-h-[52px] px-5 text-[15px] w-full sm:w-auto',
  };
  const styles = isWhatsApp
    ? 'bg-accent-300 text-base-950 hover:bg-accent-200 focus-visible:ring-accent-300 shadow-[0_10px_30px_-10px_rgba(166,255,46,0.55)] hover:shadow-[0_14px_38px_-10px_rgba(166,255,46,0.7)] hover:-translate-y-0.5'
    : 'bg-white/10 text-white hover:bg-white/15 border border-white/15 backdrop-blur focus-visible:ring-white/40 hover:-translate-y-0.5';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${styles}`}
    >
      <Icon className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
      <span className="whitespace-nowrap">
        {isWhatsApp ? 'Join WhatsApp Community' : 'View Listings on Facebook'}
      </span>
      <span
        className={`ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs transition-transform duration-200 group-hover:translate-x-0.5 ${
          isWhatsApp ? 'bg-base-950/15 text-base-950' : 'bg-white/15 text-white'
        }`}
        aria-hidden="true"
      >
        ↗
      </span>
    </a>
  );
}

export function CtaButtons({
  variant = 'stacked',
  size = 'lg',
  className = '',
}: CtaButtonsProps) {
  return (
    <div
      className={
        variant === 'stacked'
          ? `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center ${className}`
          : `flex flex-col gap-3 sm:flex-row sm:items-center ${className}`
      }
    >
      <Button variant="whatsapp" size={size} />
      <Button variant="facebook" size={size} />
    </div>
  );
}
