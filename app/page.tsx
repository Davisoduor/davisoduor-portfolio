export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">

      {/* HERO */}
      <section className="max-w-5xl mx-auto mb-32">
        <p className="text-green-400 uppercase tracking-[0.2em] mb-4">
          Infrastructure • IAM • Cloud • Full-Stack
        </p>

        <h1 className="text-6xl font-bold leading-tight mb-6">
          Davis Oduor
        </h1>

        <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed mb-10">
          Full-Stack Engineer focused on Infrastructure,
          Identity & Access Management, Cloud Engineering,
          and Automation.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/Davisoduor"
            target="_blank"
            className="border border-zinc-700 px-6 py-3 hover:border-green-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/davisoduor"
            target="_blank"
            className="bg-green-400 text-black px-6 py-3 font-semibold hover:bg-green-300 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FEATURED SYSTEMS */}
      <section className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-[0.2em] mb-3">
            Featured Systems
          </p>

          <h2 className="text-4xl font-bold">
            Engineering Projects & Operational Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Oduor Web */}
          <div className="border border-zinc-800 p-8 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-4">
              Oduor Web Services
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Professional web services business featuring GitHub Pages deployment,
              Google Workspace integration, DNS configuration, AI lead qualification,
              and client onboarding systems.
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-green-400">
              <span>GitHub Pages</span>
              <span>DNS</span>
              <span>Google Workspace</span>
              <span>Claude API</span>
            </div>
          </div>

          {/* 2x Run Club */}
          <div className="border border-zinc-800 p-8 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-4">
              2x Run Club
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Community-driven running platform built for engagement,
              events, and growth.
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-green-400">
              <span>React</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>Vercel</span>
            </div>
          </div>

          {/* Think Tank Tutors */}
          <div className="border border-zinc-800 p-8 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-4">
              Think Tank Tutors
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Operations-focused tutoring infrastructure coordinating
              150+ expert solvers and over 2,400 completed assignments.
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-green-400">
              <span>Operations</span>
              <span>Automation</span>
              <span>Project Management</span>
            </div>
          </div>

          {/* IAM Labs */}
          <div className="border border-zinc-800 p-8 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-4">
              IAM & Cloud Labs
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Hands-on labs focused on Okta, Azure Entra ID,
              AWS IAM, RBAC, MFA, Conditional Access, and automation.
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-green-400">
              <span>Okta</span>
              <span>AWS</span>
              <span>Azure</span>
              <span>IAM</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}