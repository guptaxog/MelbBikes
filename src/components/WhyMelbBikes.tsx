import { BadgeCheck, Scale, MapPin, Bike } from 'lucide-react';
import { Reveal } from './Reveal';

const REASONS = [
  {
    icon: BadgeCheck,
    title: 'Verified & Graded',
    body: 'Every bike is checked and rated A, B or C before it ever goes live. No surprises, no "looked fine in the photos" letdowns.',
    accent: 'text-grade-a',
    ring: 'ring-grade-a/30',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgba(34,197,94,0.45)]',
  },
  {
    icon: Scale,
    title: 'Fair Pricing',
    body: 'No scams, no lowballing. We use transparent price bands so buyers and sellers both get a square deal.',
    accent: 'text-accent-300',
    ring: 'ring-accent-300/30',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgba(166,255,46,0.45)]',
  },
  {
    icon: MapPin,
    title: 'Safe Handover',
    body: 'Supervised meetups at fixed times and locations — public, well-lit, and known to the community.',
    accent: 'text-grade-a',
    ring: 'ring-grade-a/30',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgba(34,197,94,0.4)]',
  },
  {
    icon: Bike,
    title: 'Built for Riders',
    body: 'Run by someone who has actually done DoorDash and Uber Eats. We know what a delivery bike needs to survive.',
    accent: 'text-accent-300',
    ring: 'ring-accent-300/30',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgba(166,255,46,0.45)]',
  },
];

export function WhyMelbBikes() {
  return (
    <section id="why" className="relative scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Why MelbBikes
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-white sm:text-4xl">
            A marketplace you can actually trust
          </h2>
          <p className="mt-4 text-balance text-base text-neutral-400">
            Four reasons riders keep coming back instead of scrolling random Facebook posts.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90} as="article">
              <div
                className={`group relative flex h-full flex-col rounded-2xl border border-white/10 bg-base-800/60 p-6 ring-1 ${reason.ring} transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${reason.glow}`}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <reason.icon className={`h-6 w-6 ${reason.accent}`} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
