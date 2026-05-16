export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">
      <section className="max-w-5xl mx-auto">
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
    </main>
  );
}