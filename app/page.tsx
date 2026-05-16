export default function Home() {
  const featuredSystems = [
    {
      name: "Oduor Web Services",
      summary:
        "Professional web services business with a custom domain, Google Workspace operations, GitHub Pages deployment, DNS configuration, and AI lead qualification workflows.",
    },
    {
      name: "2x Run Club",
      summary:
        "Community platform built with React, TypeScript, Supabase, and Vercel to support member engagement and operations.",
    },
    {
      name: "Think Tank Tutors",
      summary:
        "Operations system coordinating 150+ expert solvers and 2,400+ delivered assignments through structured delivery and client communication.",
    },
    {
      name: "IAM / Cloud Labs",
      summary:
        "Coming soon: practical labs covering Azure Entra ID, Okta, AWS IAM, and cloud automation patterns.",
    },
  ];

  const experience = [
    {
      role: "IT Intern",
      company: "Okta",
      details:
        "Supported enterprise IT initiatives with exposure to identity systems, IT operations, support engineering processes, and IAM workflow fundamentals.",
    },
    {
      role: "IT Support Specialist",
      company: "California Public Utilities Commission",
      details:
        "Delivered enterprise infrastructure support across ServiceNow operations, device lifecycle support, Azure AD / Entra concepts, JAMF, Intune, and day-to-day operational reliability.",
    },
    {
      role: "Project Management & Founder Operations",
      company: "Oduor Web Services • Think Tank Tutors • 2x Run Club",
      details:
        "Managed client projects, coordinated technical work, built SOPs, handled client communication, and delivered production systems from planning through execution.",
    },
  ];

  const technicalStack = [
    {
      category: "Infrastructure",
      tools: [
        "DNS",
        "Google Workspace",
        "GitHub Pages",
        "Vercel",
        "JAMF",
        "Intune",
        "ServiceNow",
      ],
    },
    {
      category: "IAM / Security",
      tools: [
        "Okta",
        "Azure AD / Entra ID",
        "RBAC",
        "MFA",
        "Conditional Access",
      ],
    },
    {
      category: "Cloud",
      tools: ["AWS", "Azure", "Google Cloud"],
    },
    {
      category: "Development",
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Automation",
      tools: [
        "Scripting",
        "SOPs",
        "Client onboarding workflows",
        "AI lead qualification",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl space-y-20">
        <section id="hero" className="space-y-8 border-b border-zinc-800 pb-14">
          <p className="uppercase tracking-[0.2em] text-green-400">
            Infrastructure • IAM • Cloud • Automation • Full-Stack • Project Management
          </p>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Davis Oduor
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            Engineering portfolio focused on building reliable systems across
            enterprise infrastructure, identity and access management, cloud
            operations, automation, and full-stack delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#featured-systems"
              className="bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
            >
              View Featured Systems
            </a>
            <a
              href="#contact"
              className="border border-zinc-700 px-6 py-3 transition hover:border-green-400"
            >
              Contact
            </a>
          </div>
        </section>

        <section id="featured-systems" className="space-y-8">
          <h2 className="text-3xl font-semibold">Featured Systems</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredSystems.map((system) => (
              <article
                key={system.name}
                className="rounded-lg border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-green-400">
                  {system.name}
                </h3>
                <p className="leading-relaxed text-zinc-300">{system.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="rounded-lg border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="mb-3 mt-1 text-green-400">{item.company}</p>
                <p className="leading-relaxed text-zinc-300">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="technical-stack" className="space-y-8">
          <h2 className="text-3xl font-semibold">Technical Stack</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {technicalStack.map((group) => (
              <article
                key={group.category}
                className="rounded-lg border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-green-400">
                  {group.category}
                </h3>
                <p className="leading-relaxed text-zinc-300">
                  {group.tools.join(" • ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-5 border-t border-zinc-800 pt-14">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <ul className="space-y-3 text-zinc-300">
            <li>
              Email:{" "}
              <a
                href="mailto:davisoduor65@gmail.com"
                className="text-green-400 hover:text-green-300"
              >
                davisoduor65@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/davisoduor"
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                linkedin.com/in/davisoduor
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/Davisoduor"
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                github.com/Davisoduor
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://davisoduor.me"
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                davisoduor.me
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
