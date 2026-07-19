import { ShieldCheck, Star, MapPin } from 'lucide-react';
import { CtaButtons } from './CtaButtons';
import { Reveal } from './Reveal';

const HERO_IMAGE =
  'https://images.pexels.com/photos/31603685/pexels-photo-31603685.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]" />
        <div className="absolute top-40 -right-20 h-[320px] w-[320px] rounded-full bg-accent-700/10 blur-[100px]" />
      </div>

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-300/30 bg-accent-300/10 px-3.5 py-1.5 text-xs font-semibold text-accent-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-accent-300" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-300" />
                </span>
                Melbourne · Built for gig riders
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]">
                Melbourne's Trusted Marketplace for{' '}
                <span className="gradient-text">Delivery Bikes &amp; E-Bikes</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-neutral-300 sm:text-lg lg:mx-0">
                Verified listings. Fair prices. Safe handovers. Built for gig riders.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8">
                <CtaButtons />
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-400 lg:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent-300" /> Verified &amp; graded
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-accent-300" /> Fair price bands
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent-300" /> Safe meetups
                </span>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent-500/25 via-accent-700/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-black/50">
                <img
                  src={HERO_IMAGE}
                  alt="Delivery rider on an electric bicycle along Melbourne's Yarra River"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-base-950/10 to-transparent" />

                {/* Floating grade badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/15 bg-base-950/70 px-3 py-2 backdrop-blur-md">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-grade-a shadow-[0_0_10px_2px_rgba(34,197,94,0.7)]" />
                  <span className="text-xs font-semibold text-white">Grade A · Verified</span>
                </div>

                {/* Floating e-bike stat */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-base-950/70 px-4 py-3 backdrop-blur-md">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                      Battery health
                    </p>
                    <p className="text-sm font-semibold text-white">92% · 48V</p>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                      Range
                    </p>
                    <p className="text-sm font-semibold text-white">~55 km</p>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                      Charger
                    </p>
                    <p className="text-sm font-semibold text-accent-200">Included</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-y border-white/5 bg-base-900/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3.5 text-xs font-medium text-neutral-400 sm:px-6 lg:px-8">
          <span className="text-neutral-500">Trusted by riders on</span>
          <span className="font-display font-semibold text-neutral-200">Uber Eats</span>
          <span className="hidden text-neutral-700 sm:inline">·</span>
          <span className="font-display font-semibold text-neutral-200">DoorDash</span>
          <span className="hidden text-neutral-700 sm:inline">·</span>
          <span className="font-display font-semibold text-neutral-200">Amazon Flex</span>
        </div>
      </div>
    </section>
  );
}
