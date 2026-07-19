import { MessageCircle, ClipboardCheck, Share2, Bike } from 'lucide-react';
import { Reveal } from './Reveal';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'DM us your bike details & photos',
    body: 'Send us a message on WhatsApp or Facebook with specs, condition and a few clear photos.',
  },
  {
    icon: ClipboardCheck,
    title: 'We verify & grade it (A / B / C)',
    body: 'We check the details and assign a grade so buyers know exactly what they are getting.',
  },
  {
    icon: Share2,
    title: 'It goes live on WhatsApp + Facebook',
    body: 'Your listing is posted to the community and Marketplace — reaching real Melbourne riders.',
  },
  {
    icon: Bike,
    title: 'Meet safely, get riding',
    body: 'Buyer and seller meet at a fixed, supervised location. Cash, keys, and you are off.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 border-y border-white/5 bg-base-900/40 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#A6FF2E 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            How It Works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-white sm:text-4xl">
            From DM to riding in four steps
          </h2>
          <p className="mt-4 text-balance text-base text-neutral-400">
            Selling or buying — the process is the same, simple and safe.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 110}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-base-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300/30">
                {/* Connector line on desktop */}
                {i < STEPS.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-gradient-to-r from-white/15 to-transparent lg:block" />
                )}

                <div className="flex items-center gap-3">
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-300 font-display text-lg font-bold text-base-950">
                    {i + 1}
                  </span>
                  <step.icon className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-accent-300" />
                </div>

                <h3 className="mt-5 text-base font-semibold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
