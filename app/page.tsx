const featuredSystems = [
  {
    name: "Oduor Web Services",
    description:
      "Professional web services business featuring GitHub Pages deployment, Google Workspace integration, DNS configuration, AI lead qualification, and client onboarding systems.",
    technologies: [
      "GitHub Pages",
      "DNS",
      "Google Workspace",
      "Claude API",
      "HTML/CSS/JavaScript",
    ],
  },
  {
    name: "2x Run Club",
    description:
      "Community-driven running platform built for engagement, events, and growth.",
    technologies: ["React", "TypeScript", "Supabase", "Vercel"],
  },
  {
    name: "Think Tank Tutors",
    description:
      "Operations-focused tutoring infrastructure coordinating 150+ expert solvers and over 2,400 completed assignments.",
    technologies: [
      "Operations systems",
      "Automation workflows",
      "Project coordination",
    ],
  },
  {
    name: "IAM & Cloud Labs",
    description:
      "Hands-on labs focused on Okta, Azure Entra ID, AWS IAM, RBAC, MFA, Conditional Access, and automation.",
    technologies: ["Okta", "Azure", "AWS", "IAM", "RBAC", "MFA"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        <section>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-green-400 sm:text-base">
          Infrastructure • IAM • Cloud • Full-Stack
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl">
            Davis Oduor
          </h1>

          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Full-Stack Engineer focused on Infrastructure, Identity & Access
            Management, Cloud Engineering, and Automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Davisoduor"
              target="_blank"
              className="border border-zinc-700 px-6 py-3 transition hover:border-green-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/davisoduor"
              target="_blank"
              className="bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              Featured Systems
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Selected systems built for scale, operations, and growth.
            </h2>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              A recruiter-friendly snapshot of platforms, operational systems,
              and IAM labs designed with modern engineering discipline.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredSystems.map((system) => (
              <article
                key={system.name}
                className="group flex h-full flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/70 hover:bg-zinc-900"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white transition group-hover:text-green-300">
                      {system.name}
                    </h3>
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                  </div>

                  <p className="text-base leading-relaxed text-zinc-400">
                    {system.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {system.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-sm text-green-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
