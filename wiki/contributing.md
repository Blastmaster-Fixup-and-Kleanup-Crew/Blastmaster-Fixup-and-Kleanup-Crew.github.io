---
layout: wiki
title: "Contributing"
permalink: /wiki/contributing
description: "How to suggest corrections and contribute documentation to the BFKC Wiki."
---
Contributions that make the documentation more accurate, useful, and understandable are welcome.

## Ways to contribute

- Correct a factual error.
- Clarify an installation or development step.
- Add a missing explanation or glossary entry.
- Improve navigation and cross-links.
- Report a broken link or confusing page.
- Add a new article when a topic deserves its own page.

## Article guidelines

1. **Be accurate.** Verify technical claims against the relevant repository, source code, or reproducible test.
2. **Label status.** Distinguish working functionality from experiments, plans, and future ideas.
3. **Be specific.** Include relevant versions, platforms, and prerequisites.
4. **Keep it maintainable.** Prefer short sections, descriptive headings, and useful links.
5. **Protect privacy.** Never publish passwords, tokens, private keys, personal contact details, or private logs.
6. **Avoid unsupported promises.** Do not invent release dates, compatibility guarantees, or feature commitments.

## Editing through GitHub's website

The BFKC website is stored in the Blastmaster-Fixup-and-Kleanup-Crew.github.io repository.

To propose an edit using GitHub's website:

1. Open the repository and navigate to the Markdown article.
2. Use the edit control to make the change.
3. Preview the Markdown if the editor offers a preview.
4. Prefer a new branch and pull request when available, so the change can be reviewed before it reaches the published site.
5. Explain what changed and why in the commit or pull request description.

If you cannot create a branch or pull request, use the repository's available issue/discussion process to propose the correction.

## Adding a new article

Create a Markdown file under the wiki/ directory and include front matter like this:

~~~yaml
---
layout: wiki
title: "Article title"
permalink: /wiki/article-name
description: "A short summary of this article."
---
~~~

Then add a link to the article in _layouts/wiki.html and a searchable card on wiki/index.md. Use a unique permalink and test every link.

## Review checklist

- [ ] Claims are supported by the current project information.
- [ ] Planned work is clearly labeled as planned.
- [ ] Headings and links are descriptive.
- [ ] Code and commands are checked for accuracy.
- [ ] No credentials or private information are included.
- [ ] The page works on a narrow/mobile screen.
