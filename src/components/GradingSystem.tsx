import { Battery, Gauge, PlugZap, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

const GRADES = [
  {
    label: 'Grade A',
    dot: 'bg-grade-a',
    ring: 'ring-grade-a/40',
    border: 'border-grade-a/30',
    glow: 'shadow-[0_0_50px_-16px_rgba(34,197,94,0.5)]',
    title: 'Delivery-Ready Premium',
    body: 'Recently serviced, clean drivetrain, strong brakes, ready to ride tomorrow. The bike you buy to start earning straight away.',
    badge: 'bg-grade-a/15 text-grade-a border-grade-a/30',
  },
  {
    label: 'Grade B',
    dot: 'bg-grade-b',
    ring: 'ring-grade-b/40',
    border: 'border-grade-b/30',
    glow: 'shadow-[0_0_50px_-16px_rgba(234,179,8,0.45)]',
    title: 'Solid Daily Rider',
    body: 'Good condition with minor wear. Fully functional, may need a small part soon. The honest workhorse for daily shifts.',
    badge: 'bg-grade-b/15 text-grade-b border-grade-b/30',
  },
  {
    label: 'Grade C',
    dot: 'bg-grade-c',
    ring: 'ring-grade-c/40',
    border: 'border-grade-c/30',
    glow: 'shadow-[0_0_50px_-16px_rgba(249,115,22,0.45)]',
    title: 'Needs Work',
    body: 'Priced accordingly for someone handy. Needs parts or a service before it is shift-ready — great value if you can tinker.',
    badge: 'bg-grade-c/15 text-grade-c border-grade-c/30',
  },
];

const EBIKE_STATS = [
  { icon: Battery, label: 'Battery health', value: 'Shown as %', hint: 'e.g. 92%' },
  { icon: Gauge, label: 'Range', value: 'Est. km/charge', hint: 'real-world, not lab' },
  { icon: PlugZap, label: 'Charger status', value: 'Included / missing', hint: 'stated up front' },
];

export function GradingSystem() {
  return (
    <section id="grading" className="relative scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Grading System
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-white sm:text-4xl">
            Every bike gets an honest grade
          </h2>
          <p className="mt-4 text-balance text-base text-neutral-400">
            No vague "good condition" claims. You see the grade, what it means, and what to expect.
          </p>
        </Reveal>

        {/* Grade cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-14">
          {GRADES.map((grade, i) => (
            <Reveal key={grade.label} delay={i * 110} as="article">
              <div
                className={`group relative h-full overflow-hidden rounded-2xl border ${grade.border} bg-base-800/60 p-6 ring-1 ${grade.ring} transition-all duration-300 hover:-translate-y-1 hover:${grade.glow}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-3.5 w-3.5 rounded-full ${grade.dot} shadow-[0_0_12px_2px_currentColor]`}
                  />
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${grade.badge}`}
                  >
                    {grade.label}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">{grade.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{grade.body}</p>

                <div
                  className={`mt-5 h-1 w-full rounded-full ${grade.dot} opacity-70`}
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* E-bike battery panel */}
        <Reveal delay={120}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-accent-300/20 bg-gradient-to-br from-base-800/80 to-base-900/80 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-300/15 text-accent-300">
                  <Zap className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    E-bikes always show battery health
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-neutral-400">
                    For every electric bike we list the three things that actually matter before you
                    buy — no guessing at the charger situation.
                  </p>
                </div>
              </div>

              <div className="grid w-full gap-3 sm:grid-cols-3 lg:w-auto lg:min-w-[440px]">
                {EBIKE_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-base-950/50 p-4"
                  >
                    <stat.icon className="h-5 w-5 text-accent-300" />
                    <p className="mt-3 text-sm font-semibold text-white">{stat.label}</p>
                    <p className="text-xs text-neutral-400">{stat.value}</p>
                    <p className="mt-1 text-[11px] text-neutral-500">{stat.hint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
