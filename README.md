# Li Yu Laboratory · Tsinghua University

[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)](https://liyu-lab-tsinghua.github.io)
[![Jekyll](https://img.shields.io/badge/jekyll-4.x-orange)](https://jekyllrb.com/)
[![Status](https://img.shields.io/badge/version-3.0-purple)]()

Official website of **Li Yu Laboratory** at Tsinghua University — pioneering migrasome biology and cell communication research.

**Live Site** → [liyu-lab-tsinghua.github.io](https://liyu-lab-tsinghua.github.io)

---

## Quick Start

```bash
git clone git@github.com:LiYu-Lab-Tsinghua/LiYu-Lab-Tsinghua.github.io.git
cd LiYu-Lab-Tsinghua.github.io
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
```

---

## Project Structure

```
├── _config.yml                 # Site configuration
├── _data/
│   └── navigation.yml          # Navigation menu
├── _pages/                     # Main pages
│   ├── about.md                # Homepage
│   ├── research.md             # Research overview
│   ├── members.md              # Lab members
│   ├── publications.md         # Publications list
│   ├── protocols.html          # Lab protocols
│   ├── covers.md               # Journal covers
│   ├── gallery.md              # Photo gallery
│   ├── join-us.md              # Recruitment
│   └── news.html               # News archive
├── _news/                      # News articles
├── _protocols/                 # Protocol documents
├── _layouts/                   # Page layouts
├── _includes/                  # Reusable components
├── _sass/                      # Stylesheets
│   ├── _custom-variables.scss  # Design tokens & theme colors
│   └── _custom-theme.scss      # Custom styles
├── assets/
│   ├── css/main.scss           # Main stylesheet entry
│   ├── js/custom.js            # Interactive features
│   └── fonts/                  # Font assets
└── images/                     # Image assets
```

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#6B21D6` | Tsinghua Purple |
| Secondary | `#0E8FEA` | Science Blue |
| Accent | `#08A878` | Bio Green |

- **Gradient**: 135° purple → blue across Hero, cards, stats
- **Dark mode**: Auto-detected via `prefers-color-scheme`
- **Typography**: System font stack with 1.6 line-height
- **Spacing**: 4px base grid system
- **Responsive**: Mobile-first, three breakpoints

---

## Content Management

### Adding News
Create `_news/YYYY-MM-DD-title.md`:
```yaml
---
title: "News Title"
date: 2026-04-28
---
Content...
```

### Updating Members
Edit `_pages/members.md` — use the `member-card` template inside `.members-grid`.

### Changing Colors
Edit design tokens in `_sass/_custom-variables.scss`.

---

## Deployment

Push to `master` branch — GitHub Actions builds and deploys automatically.

```bash
git add .
git commit -m "Update"
git push origin master
```

---

## Tech Stack

- **Static Generator**: Jekyll 4
- **CSS**: SCSS (compressed)
- **JavaScript**: Vanilla ES6
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

---

**Maintained by** Li Yu Laboratory © Tsinghua University