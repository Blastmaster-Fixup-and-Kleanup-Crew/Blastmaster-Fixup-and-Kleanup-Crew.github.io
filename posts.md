---
layout: page
title: "Posts"
permalink: /posts/
---

<section class="posts-intro">
  <p style="color:#2457c5;font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;">BFKC updates</p>
  <h1>Posts</h1>
  <p style="color:#536176;font-size:1.1rem;max-width:720px;">Announcements, development updates, project news, and other posts from the Blastmaster Fixup &amp; Kleanup Crew.</p>
</section>

<style>
.posts-list { display:grid; gap:1rem; margin-top:2rem; }
.post-card { background:#fff; border:1px solid #dce4ef; border-radius:14px; padding:1.35rem 1.5rem; }
.post-card h2 { font-size:1.3rem; line-height:1.3; margin:.25rem 0 .5rem; }
.post-card h2 a { color:#172033; text-decoration:none; }
.post-card h2 a:hover { color:#2457c5; }
.post-meta { color:#64748b; font-size:.85rem; margin:0 0 .7rem; }
.post-excerpt { color:#536176; margin:0; }
.posts-empty { background:#fff; border:1px dashed #cbd5e1; border-radius:14px; color:#536176; margin-top:2rem; padding:1.5rem; }
</style>

{% assign post_count = 0 %}
<div class="posts-list">
  {% for post in site.posts %}
    {% unless post.published == false %}
      {% assign post_count = post_count | plus: 1 %}
      <article class="post-card">
        <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.author %} · {{ post.author | escape }}{% endif %}</p>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
        <p class="post-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 220 }}</p>
      </article>
    {% endunless %}
  {% endfor %}
</div>
{% if post_count == 0 %}
  <div class="posts-empty">
    <strong>No posts have been published yet.</strong>
    <p>Check back for announcements, project updates, and news.</p>
  </div>
{% endif %}
