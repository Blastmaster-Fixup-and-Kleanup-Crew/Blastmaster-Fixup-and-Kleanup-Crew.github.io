---
layout: page
title: "About"
permalink: /about
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700;800&display=swap');

.about-page {
  --about-ink: #172033;
  --about-muted: #536176;
  --about-accent: #2457c5;
  --about-line: #dce4ef;
  color: var(--about-ink);
  font-family: "Libre Franklin", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  margin: 0 auto;
  max-width: 1080px;
}
.about-page * { box-sizing: border-box; }
.about-page a { color: var(--about-accent); text-underline-offset: .2em; }
.about-page a:focus-visible { outline: 3px solid #f0b429; outline-offset: 3px; }
.about-page .about-hero {
  background: linear-gradient(135deg, #f2f6ff 0%, #ffffff 72%);
  border: 1px solid var(--about-line);
  border-radius: 22px;
  padding: clamp(1.5rem, 5vw, 3.5rem);
}
.about-page .about-eyebrow {
  color: var(--about-accent);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
  margin: 0 0 .8rem;
  text-transform: uppercase;
}
.about-page h1, .about-page h2, .about-page h3 {
  color: var(--about-ink);
  font-family: "Libre Franklin", sans-serif;
  line-height: 1.2;
}
.about-page h1 {
  font-size: clamp(2.1rem, 6vw, 4rem);
  font-weight: 700;
  letter-spacing: -.045em;
  margin: 0 0 1rem;
}
.about-page h2 {
  font-size: clamp(1.45rem, 3vw, 2rem);
  font-weight: 600;
  letter-spacing: -.025em;
  margin: 0 0 1rem;
}
.about-page h3 { font-size: 1.12rem; font-weight: 600; margin: 0 0 .55rem; }
.about-page p { margin: 0 0 1rem; }
.about-page .about-lead {
  color: var(--about-muted);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  max-width: 740px;
  margin-bottom: 0;
}
.about-page .about-section { margin-top: clamp(2.5rem, 6vw, 4rem); }
.about-page .about-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr));
}
.about-page .about-card {
  background: #fff;
  border: 1px solid var(--about-line);
  border-radius: 16px;
  padding: 1.35rem;
}
.about-page .about-card p { color: var(--about-muted); margin-bottom: .9rem; }
.about-page .about-card a { font-weight: 600; }
.about-page .about-pill {
  background: #e9efff;
  border-radius: 999px;
  color: #2149a4;
  display: inline-block;
  font-size: .78rem;
  font-weight: 600;
  margin-bottom: .85rem;
  padding: .25rem .65rem;
}
.about-page .about-note {
  background: #f7f9fc;
  border-left: 4px solid var(--about-accent);
  border-radius: 0 12px 12px 0;
  color: var(--about-muted);
  padding: 1rem 1.2rem;
}
.about-page .about-footer {
  border-top: 1px solid var(--about-line);
  color: var(--about-muted);
  font-size: .9rem;
  margin-top: 3rem;
  padding-top: 1.25rem;
}
@media (prefers-reduced-motion: no-preference) {
  .about-page .about-card { transition: border-color .18s ease, transform .18s ease; }
  .about-page .about-card:hover { border-color: #a9bee9; transform: translateY(-2px); }
}
@media (prefers-reduced-motion: reduce) {
  .about-page *, .about-page *::before, .about-page *::after {
    animation-duration: .01ms !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
</style>

<div class="about-page">
  <section class="about-hero" aria-labelledby="about-heading">
    <p class="about-eyebrow">Blastmaster Fixup &amp; Kleanup Crew</p>
    <h1 id="about-heading">Building useful software, one project at a time.</h1>
    <p class="about-lead">We are an independent software project group working on desktop applications, operating-system experiments, and tools designed around usability, compatibility, and thoughtful engineering.</p>
  </section>

  <section class="about-section" aria-labelledby="about-mission">
    <h2 id="about-mission">What we do</h2>
    <p>Our projects explore both familiar computing experiences and new implementations. We aim to make our software approachable, document it clearly, and improve it through testing and community feedback. Projects may be in active development, so features and availability can change between revisions.</p>
    <div class="about-note"><strong>Development status:</strong> These are evolving projects. Check each repository for its current status, build instructions, known issues, and contribution guidance before relying on a feature.</div>
  </section>

  <section class="about-section" aria-labelledby="about-projects">
    <h2 id="about-projects">Explore our projects</h2>
    <div class="about-grid">
      <article class="about-card">
        <span class="about-pill">Office productivity</span>
        <h3>Blastmaster Suite</h3>
        <p>A desktop productivity suite with Docs, Presentations, Workbooks, and Databases.</p>
        <a href="https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/Blastmaster-Suite">Explore the repository →</a>
      </article>
      <article class="about-card">
        <span class="about-pill">Operating system</span>
        <h3>BlastmasterOS</h3>
        <p>An operating-system project exploring a classic desktop experience, theming, and system components.</p>
        <a href="https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/BlastmasterOS">Explore the repository →</a>
      </article>
      <article class="about-card">
        <span class="about-pill">PDF software</span>
        <h3>Docureader Exchange</h3>
        <p>A Qt-based document and PDF application project inspired by classic Acrobat Exchange workflows.</p>
        <a href="https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/Docureader-Exchange">Explore the repository →</a>
      </article>
      <article class="about-card">
        <span class="about-pill">Virtualization</span>
        <h3>Stratovise</h3>
        <p>A Windows-oriented virtual-machine application using a Qt interface and a QEMU backend.</p>
        <a href="https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/Stratovise">Explore the repository →</a>
      </article>
    </div>
  </section>

  <section class="about-section" aria-labelledby="about-principles">
    <h2 id="about-principles">Our principles</h2>
    <div class="about-grid">
      <article class="about-card">
        <h3>Usability first</h3>
        <p>Interfaces should be consistent, understandable, and practical to use.</p>
      </article>
      <article class="about-card">
        <h3>Compatibility in mind</h3>
        <p>We consider existing workflows and file formats wherever the project scope allows.</p>
      </article>
      <article class="about-card">
        <h3>Iterative improvement</h3>
        <p>Testing, issue reports, documentation, and review help guide ongoing work.</p>
      </article>
    </div>
  </section>

  <footer class="about-footer">
    <p>Interested in the work? Visit a project repository to review its code, open issues, and contribution instructions.</p>
    <p>© <span id="about-year">2026</span> Blastmaster Fixup &amp; Kleanup Crew.</p>
  </footer>
</div>

<script>
(function () {
  var year = document.getElementById("about-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
</script>
