# sheikhfuzael website

Personal website of Sheikh Fuzael Rahman. Plain HTML and CSS, no build step. Hosted on Cloudflare Pages from this GitHub repository.

- Content plan: `claude/website-plan.md` in the "Personal website" Claude project
- Preview: https://claude.ai/artifact/7eMs2xEZxMdvhJUoNb9CW5

## Files

- `index.html` the whole site (Home, Experience, Projects, Research, About, Contact)
- `assets/sheikh-fuzael-rahman.jpg` headshot
- `assets/favicon.svg` browser tab icon
- `assets/Sheikh-Fuzael-Rahman-CV.pdf` the CV behind the Download CV button. Replace it with the updated CV, keeping the same file name.

## First-time deploy

1. On GitHub, create a new public repository called `sheikhfuzael-website`.
2. Upload `index.html`, `README.md` and the `assets` folder (Add file, Upload files).
3. Sign in at dash.cloudflare.com, open Workers and Pages, then Create, Pages, Connect to Git.
4. Pick the `sheikhfuzael-website` repository.
5. Framework preset None. Build command empty. Build output directory `/`.
6. Save and Deploy. The site goes live at a `*.pages.dev` address. Every later change pushed to GitHub publishes automatically.

## Adding a demo video

1. Upload the video to YouTube as Unlisted.
2. Copy the video ID, the part after `v=` in the link. For `https://www.youtube.com/watch?v=AbC123xyz`, the ID is `AbC123xyz`.
3. In `index.html`, find the project's `<div class="media" data-youtube="">` and put the ID inside the quotes, for example `data-youtube="AbC123xyz"`.

Video slots exist for Check-Mate, TaktArm Twin and the 5S Analyzer.
