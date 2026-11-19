# sheikhfuzael website

Personal website of Sheikh Fuzael Rahman. Plain HTML and CSS, no build step. Hosted on Cloudflare Pages, which publishes every push to the `main` branch of this repository.

- Content plan: `claude/website-plan.md` in the "Personal website" Claude project
- Preview: https://claude.ai/artifact/7eMs2xEZxMdvhJUoNb9CW5

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `experience.html` | Experience |
| `projects.html` | Projects |
| `research.html` | Research and publications |
| `about.html` | About |
| `contact.html` | Contact and CV request |

Shared files live in `assets/`.

- `site.css` styles for every page
- `site.js` mobile menu, copy buttons, video players and case study links
- `sheikh-fuzael-rahman.jpg` headshot
- `check-mate-video.jpg` poster for the Check-Mate video
- `favicon.svg` browser tab icon

The header, closing band and footer are repeated in each page. A change to the menu or footer must be made in all six files.

## CV requests

The CV is not hosted on the site. Every "Request CV" button opens the visitor's email with a ready-made request to sheikh.fuzael.rahman@outlook.com.

## Adding a demo video

1. Upload the video to YouTube as Unlisted.
2. Copy the video ID, the part after `youtu.be/` or `v=`.
3. In `projects.html`, find the project's `<div class="media" data-youtube="">` and put the ID inside the quotes.
4. Optional poster image: add `data-poster="assets/your-image.jpg"` to the same tag.

Video slots exist for Check-Mate (live), TaktArm Twin and the 5S Analyzer.
