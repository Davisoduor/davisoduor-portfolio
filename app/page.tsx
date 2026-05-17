export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">

      {/* HERO */}
      <section className="max-w-5xl mx-auto mb-32">
        <p className="text-green-400 uppercase tracking-[0.2em] mb-4 text-sm">
          IT Support · IAM · Cloud · Cybersecurity
        </p>

        <h1 className="text-6xl font-bold leading-tight mb-6">
          Davis Oduor
        </h1>

        <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed mb-4">
          IT Support Engineer and cybersecurity enthusiast focused on Identity &
          Access Management, Cloud Infrastructure, and enterprise IT operations.
          Currently interning at Okta — building experience at the intersection
          of IAM and enterprise support.
        </p>

        <p className="text-zinc-600 text-sm mb-10">
          San Francisco, CA · CS @ SFSU May 2027 · Open to full-time roles
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/Davisoduor"
            target="_blank"
            className="border border-zinc-700 px-6 py-3 hover:border-green-400 transition text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/davisoduor"
            target="_blank"
            className="bg-green-400 text-black px-6 py-3 font-semibold hover:bg-green-300 transition text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:davisoduor65@gmail.com"
            className="border border-zinc-700 px-6 py-3 hover:border-green-400 transition text-sm"
          >
            Contact
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-[0.2em] mb-3 text-sm">
            Experience
          </p>
          <h2 className="text-4xl font-bold">
            Where I've Operated
          </h2>
        </div>

        <div className="flex flex-col gap-0 border border-zinc-800">

          {/* Okta */}
          <div className="border-b border-zinc-800 p-8 hover:bg-zinc-950 transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold">IT Support Intern</h3>
                <p className="text-green-400 text-sm mt-1">Okta</p>
              </div>
              <span className="text-zinc-500 text-sm whitespace-nowrap">May 2026 — Present</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4 max-w-3xl">
              Supporting enterprise IT operations at the world's leading identity company.
              Gaining hands-on exposure to identity and access management systems, enterprise
              support workflows, and internal tooling in a high-scale cloud-native environment.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-green-400">
              <span className="border border-zinc-800 px-2 py-1">Okta</span>
              <span className="border border-zinc-800 px-2 py-1">IAM</span>
              <span className="border border-zinc-800 px-2 py-1">Enterprise IT</span>
              <span className="border border-zinc-800 px-2 py-1">IT Support</span>
              <span className="border border-zinc-800 px-2 py-1">SaaS Operations</span>
            </div>
          </div>

          {/* CPUC */}
          <div className="border-b border-zinc-800 p-8 hover:bg-zinc-950 transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold">IT Support Specialist</h3>
                <p className="text-green-400 text-sm mt-1">California Public Utilities Commission</p>
              </div>
              <span className="text-zinc-500 text-sm whitespace-nowrap">Prior — San Francisco, CA</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4 max-w-3xl">
              Managed enterprise IT infrastructure and end-user support across a large state agency.
              Administered device management, ticketing, and access workflows using industry-standard
              enterprise tools. Operated within regulated government IT environments with strict
              security and compliance requirements.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-green-400">
              <span className="border border-zinc-800 px-2 py-1">ServiceNow</span>
              <span className="border border-zinc-800 px-2 py-1">JAMF</span>
              <span className="border border-zinc-800 px-2 py-1">Intune</span>
              <span className="border border-zinc-800 px-2 py-1">Azure AD</span>
              <span className="border border-zinc-800 px-2 py-1">Device Management</span>
              <span className="border border-zinc-800 px-2 py-1">Enterprise Infrastructure</span>
            </div>
          </div>

          {/* Founder */}
          <div className="p-8 hover:bg-zinc-950 transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold">Founder & Technical Lead</h3>
                <p className="text-green-400 text-sm mt-1">Oduor Web Services · Think Tank Tutors</p>
              </div>
              <span className="text-zinc-500 text-sm whitespace-nowrap">2022 — Present</span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4 max-w-3xl">
              Founded and operate two independent ventures. Oduor Web Services delivers
              professional websites, email infrastructure, and automation systems to small
              businesses across the US. Think Tank Tutors coordinates 150+ expert solvers
              across 2,400+ completed assignments — managing SOPs, delivery workflows,
              and client communication end to end.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-green-400">
              <span className="border border-zinc-800 px-2 py-1">Full-Stack Development</span>
              <span className="border border-zinc-800 px-2 py-1">DNS & Email Config</span>
              <span className="border border-zinc-800 px-2 py-1">Google Workspace</span>
              <span className="border border-zinc-800 px-2 py-1">Operations</span>
              <span className="border border-zinc-800 px-2 py-1">Team Management</span>
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS & EDUCATION */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-[0.2em] mb-3 text-sm">
            Credentials
          </p>
          <h2 className="text-4xl font-bold">
            Education & Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-1 border border-zinc-800">

          <div className="border-b md:border-b-0 md:border-r border-zinc-800 p-8 hover:bg-zinc-950 transition">
            <p className="text-green-400 text-xs uppercase tracking-widest mb-3">Education</p>
            <h3 className="text-xl font-semibold mb-1">
              B.S. Computer Science
            </h3>
            <p className="text-zinc-400 text-sm mb-3">San Francisco State University</p>
            <p className="text-zinc-600 text-sm">Expected May 2027</p>
          </div>

          <div className="p-8 hover:bg-zinc-950 transition">
            <p className="text-green-400 text-xs uppercase tracking-widest mb-3">Certifications</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">CodePath Web Development</p>
                  <p className="text-zinc-600 text-xs mt-0.5">CodePath · Completed</p>
                </div>
                <span className="text-green-400 text-xs border border-zinc-800 px-2 py-1">✓</span>
              </div>
              <div className="border-t border-zinc-900 pt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">CodePath Cybersecurity</p>
                  <p className="text-zinc-600 text-xs mt-0.5">CodePath · Completed</p>
                </div>
                <span className="text-green-400 text-xs border border-zinc-800 px-2 py-1">✓</span>
              </div>
              <div className="border-t border-zinc-900 pt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">AWS Cloud Practitioner</p>
                  <p className="text-zinc-600 text-xs mt-0.5">Amazon Web Services · In Progress</p>
                </div>
                <span className="text-zinc-600 text-xs border border-zinc-800 px-2 py-1">→</span>
              </div>
              <div className="border-t border-zinc-900 pt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Okta Certified IT Admin</p>
                  <p className="text-zinc-600 text-xs mt-0.5">Okta · In Progress</p>
                </div>
                <span className="text-zinc-600 text-xs border border-zinc-800 px-2 py-1">→</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED SYSTEMS */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-[0.2em] mb-3 text-sm">
            Featured Systems
          </p>
          <h2 className="text-4xl font-bold">
            Engineering Projects & Operational Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-zinc-800 p-8 hover:border-green-400 transition">
            <h3 className="text-xl font-semibold mb-3">Oduor Web Services</h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Professional web services business featuring GitHub Pages deployment,
              Google Workspace integration, DNS configuration, AI lead qualification
              agent, and client onboarding systems.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-green-400">
              <span>GitHub Pages</span>
              <span>DNS</span>
              <span>Google Workspace</span>
              <span>Claude API</span>
            </div>
            <a href="https://oduorwebservices.com" target="_blank" className="text-xs text-zinc-500 hover:text-green-400 transition mt-4 inline-block">
              oduorwebservices.com ↗
            </a>
          </div>

          <div className="border border-zinc-800 p-8 hover:border-green-400 transition">
            <h3 className="text-xl font-semibold mb-3">2x Run Club</h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Community-driven running platform built for engagement,
              events, and growth. Full-stack build with real-time data
              and mobile-first design.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-green-400">
              <span>React</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>Vercel</span>
            </div>
            <a href="https://2xrunclub.com" target="_blank" className="text-xs text-zinc-500 hover:text-green-400 transition mt-4 inline-block">
              2xrunclub.com ↗
            </a>
          </div>

          <div className="border border-zinc-800 p-8 hover:border-green-400 transition">
            <h3 className="text-xl font-semibold mb-3">Think Tank Tutors</h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Operations-focused tutoring infrastructure coordinating
              150+ expert solvers and over 2,400 completed assignments.
              Built SOPs, delivery workflows, and communication systems.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-green-400">
              <span>Operations</span>
              <span>Automation</span>
              <span>Project Management</span>
            </div>
          </div>

          <div className="border border-zinc-800 p-8 hover:border-green-400 transition">
            <h3 className="text-xl font-semibold mb-3">IAM & Cloud Labs</h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Hands-on labs focused on Okta, Azure Entra ID,
              AWS IAM, RBAC, MFA, Conditional Access, and automation.
              Coming to GitHub soon.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-green-400">
              <span>Okta</span>
              <span>AWS</span>
              <span>Azure</span>
              <span>IAM</span>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-[0.2em] mb-3 text-sm">
            Technical Stack
          </p>
          <h2 className="text-4xl font-bold">
            Tools & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-1 border border-zinc-800">

          <div className="border-r border-zinc-800 p-6 hover:bg-zinc-950 transition">
            <p className="text-green-400 text-xs uppercase tracking-widest mb-4">Identity & Access</p>
            <ul className="flex flex-col gap-2 text-zinc-400 text-sm">
              <li>Okta</li>
              <li>Azure AD / Entra ID</li>
              <li>AWS IAM</li>
              <li>RBAC / MFA</li>
              <li>Conditional Access</li>
            </ul>
          </div>

          <div className="border-r border-zinc-800 p-6 hover:bg-zinc-950 transition">
            <p className="text-green-400 text-xs uppercase tracking-widest mb-4">Enterprise IT</p>
            <ul className="flex flex-col gap-2 text-zinc-400 text-sm">
              <li>ServiceNow</li>
              <li>JAMF</li>
              <li>Intune</li>
              <li>Google Workspace</li>
              <li>DNS / Email Config</li>
            </ul>
          </div>

          <div className="border-r border-zinc-800 p-6 hover:bg-zinc-950 transition">
            <p className="text-green-400 text-xs uppercase tracking-widest mb-4">Development</p>
            <ul className="flex flex-col gap-2 text-zinc-400 text-sm">
              <li>HTML / CSS / JS</li>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Supabase</li>
            </ul>
          </div>

          <div className="p-6 hover:bg-zinc-950 transition">
            <p className="text-green-400 text-xs uppercase tracking-widest mb-4">Cloud & Security</p>
            <ul className="flex flex-col gap-2 text-zinc-400 text-sm">
              <li>AWS (in progress)</li>
              <li>Vercel</li>
              <li>GitHub Pages</li>
              <li>Network Security</li>
              <li>Cybersecurity (CodePath)</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto">
        <div className="border border-zinc-800 p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-green-400 uppercase tracking-[0.2em] mb-3 text-sm">Contact</p>
            <h2 className="text-3xl font-bold mb-2">Open to opportunities.</h2>
            <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
              Looking for IT support, IAM, cloud, or cybersecurity roles — internships
              and full-time. Reach out directly.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-fit">
            <a
              href="mailto:davisoduor65@gmail.com"
              className="bg-green-400 text-black px-8 py-3 font-semibold hover:bg-green-300 transition text-sm text-center"
            >
              davisoduor65@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/davisoduor"
              target="_blank"
              className="border border-zinc-700 px-8 py-3 hover:border-green-400 transition text-sm text-center"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex justify-between items-center">
          <p className="text-zinc-700 text-xs">© 2026 Davis Oduor — San Francisco, CA</p>
          <p className="text-zinc-700 text-xs">davisoduor.me</p>
        </div>
      </section>

    </main>
  );
}