import { Bike, MapPin } from 'lucide-react';
import { CtaButtons } from './CtaButtons';
import { Reveal } from './Reveal';
import { InstagramIcon } from './BrandIcons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../lib/links';

export function CtaFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-accent-500/15 blur-[120px]" />
      </div>

      {/* Main CTA */}
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-300/30 bg-accent-300/10 px-3.5 py-1.5 text-xs font-semibold text-accent-200">
            <Bike className="h-3.5 w-3.5" />
            Join the community
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Buying or selling?{' '}
            <span className="gradient-text">Join the community today.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base text-neutral-400">
            Jump in the WhatsApp group for live listings, or browse everything on our Facebook
            Marketplace page.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5"
            aria-label="MelbBikes home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-300 text-base-950">
              <Bike className="h-4.5 w-4.5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-bold tracking-tight text-white">
              Melb<span className="text-accent-300">Bikes</span>
            </span>
          </a>

          <p className="flex items-center gap-1.5 text-sm text-neutral-500">
            <MapPin className="h-4 w-4" /> Melbourne, Australia
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-neutral-600">
            © {new Date().getFullYear()} MelbBikes. Built for Melbourne's gig riders.
          </p>
        </div>
      </div>
    </footer>
  );
}
