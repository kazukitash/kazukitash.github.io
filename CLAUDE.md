# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for kazukitash, hosted on GitHub Pages at kazukitash.github.io. It's a static website built with vanilla HTML and CSS.

## Architecture

The website consists of:
- `index.html` - Single-page portfolio with profile information, social links, and project showcase
- `style.css` - Styling with dark theme, responsive grid layout for social links, and card-based design
- `images/profile.png` - Profile picture asset

## Key Features

1. **Profile Section**: Displays name, job title, and technical skills with emoji indicators
2. **Social Links Grid**: 2x2 responsive grid linking to X, Instagram, GitHub, and Hatena Blog
3. **Prairie Card Section**: Featured project showcase with gradient background and pattern overlay

## Development Commands

This is a static site with no build process. To develop:
- Open `index.html` directly in a browser
- Use a local server (e.g., `python -m http.server` or VS Code Live Server) for better development experience

## Deployment

The site auto-deploys via GitHub Pages when changes are pushed to the main branch.

## Styling Conventions

- Dark theme with `#2d2d2d` background
- Japanese font stack including Hiragino Kaku Gothic ProN and Meiryo
- Social icons use Simple Icons CDN
- Responsive breakpoint at 380px for mobile optimization
- Hover effects with transform and box-shadow transitions

## Future Considerations

The .gitignore file suggests potential future JavaScript/Node.js tooling integration, but currently no build tools are implemented.