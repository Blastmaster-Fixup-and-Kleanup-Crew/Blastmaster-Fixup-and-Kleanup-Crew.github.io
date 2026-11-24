---
layout: page
title: "BFKC Wiki"
permalink: /wiki/
---
<link rel="stylesheet" href="{{ '/css/wiki.css' | relative_url }}">
<section class="wiki-landing">
  <p class="wiki-kicker">BLASTMASTER FIXUP &amp; KLEANUP CREW</p>
  <h1>BFKC Wiki</h1>
  <p class="wiki-landing-lead">The documentation hub for BFKC projects, development tools, technical guides, and community contributions.</p>
  <div class="wiki-landing-search">
    <label for="wiki-home-search">What are you looking for?</label>
    <input id="wiki-home-search" type="search" placeholder="Search documentation, projects, guides…">
    <p id="wiki-home-search-status" aria-live="polite">Search the article directory below.</p>
  </div>
  <div class="wiki-landing-grid" id="wiki-article-directory">
    <a class="wiki-tile" data-search-card data-keywords="start beginner navigation help" href="{{ '/wiki/getting-started' | relative_url }}"><span>01 / START HERE</span><h2>Getting started</h2><p>Learn how the Wiki is organized and where to find project information.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="organization crew mission history" href="{{ '/wiki/about-bfkc' | relative_url }}"><span>02 / ORGANIZATION</span><h2>About BFKC</h2><p>Our purpose, working principles, and project ecosystem.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="software repositories applications" href="{{ '/wiki/projects' | relative_url }}"><span>03 / DIRECTORY</span><h2>Projects</h2><p>An overview of the projects represented on the BFKC website.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="operating system desktop install features" href="{{ '/wiki/blastmasteros' | relative_url }}"><span>04 / OPERATING SYSTEM</span><h2>BlastmasterOS</h2><p>Project overview, development notes, and where to find authoritative instructions.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="server edition counterpart administration" href="{{ '/wiki/blastmasterserver' | relative_url }}"><span>05 / SERVER</span><h2>BlastmasterServer</h2><p>Planned server counterpart, scope, and documentation status.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="compiler toolchain development environment build" href="{{ '/wiki/bosde' | relative_url }}"><span>06 / TOOLCHAIN</span><h2>BosDE</h2><p>BlastmasterOS Development Environment architecture and goals.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="MSYS2 Windows MinGW32 compiler build" href="{{ '/wiki/bosde-windows' | relative_url }}"><span>07 / WINDOWS GUIDE</span><h2>BosDE on Windows</h2><p>Current Windows build workflow and environment notes.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="errors fixes help diagnose" href="{{ '/wiki/troubleshooting' | relative_url }}"><span>08 / SUPPORT</span><h2>Troubleshooting</h2><p>A practical starting point for diagnosing common development problems.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="questions answers FAQ" href="{{ '/wiki/faq' | relative_url }}"><span>09 / QUICK ANSWERS</span><h2>FAQ</h2><p>Answers to common questions about BFKC and its projects.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="contribute documentation edit github" href="{{ '/wiki/contributing' | relative_url }}"><span>10 / COMMUNITY</span><h2>Contributing</h2><p>How to improve articles, report corrections, and contribute responsibly.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="terminology definitions words" href="{{ '/wiki/glossary' | relative_url }}"><span>11 / REFERENCE</span><h2>Glossary</h2><p>Definitions for project names and technical terms used throughout the Wiki.</p></a>
    <a class="wiki-tile" data-search-card data-keywords="roadmap status planned in progress" href="{{ '/wiki/roadmap' | relative_url }}"><span>12 / STATUS</span><h2>Roadmap &amp; status</h2><p>Understand the difference between active work, plans, and completed work.</p></a>
  </div>
  <div class="wiki-landing-note"><strong>Documentation principle:</strong> This Wiki describes known project goals and verified development information. Planned features are labeled as plans, not as released functionality.</div>
  <p class="wiki-landing-footer">Want to improve an article? Read <a href="{{ '/wiki/contributing' | relative_url }}">the contribution guide</a>.</p>
</section>
<script src="{{ '/js/wiki.js' | relative_url }}" defer></script>
