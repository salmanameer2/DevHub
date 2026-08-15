# Dev Hub Pro

MASTER PROMPT — ALL-IN-ONE WEB DEVELOPER & DESIGNER PLATFORM

1. PROJECT OVERVIEW

Build a premium, modern, production-quality All-in-One Web Developer & Designer Platform that brings the most important tools, resources, technologies, AI tools, design resources, development environments, APIs, deployment platforms, documentation, and productivity utilities into one centralized platform.

The platform should feel like a professional developer operating system / command center rather than a simple directory website.

The target users are:

Frontend developers

Backend developers

Full-stack developers

React developers

MERN developers

UI/UX designers

Web designers

Freelancers

Students

Startup developers

Software engineers

AI developers

Mobile developers

The primary goal is:

"Everything a modern web developer or designer needs, organized in one beautiful workspace."

The website should be premium, polished, modern, highly interactive, intuitive, fast, accessible, and production-ready.

2. TECHNOLOGY REQUIREMENTS

Use ONLY the following primary frontend stack:

React JS

JavaScript

Tailwind CSS

Framer Motion

HTML5

CSS3

Do NOT use TypeScript.

Do NOT convert the project to TypeScript.

Use React functional components and hooks.

Use reusable React components throughout the application.

Do NOT create a giant monolithic App.jsx.

Do NOT hardcode repeated content directly inside components.

3. IMPORTANT CODE ARCHITECTURE REQUIREMENTS

The application must be structured for maintainability, scalability, and future expansion.

Create reusable components such as:

Navbar

Sidebar

Footer

HeroSection

SearchBar

ToolCard

ToolGrid

CategoryCard

ResourceCard

TechnologyCard

FeaturedTool

ToolDetailsModal

FilterPanel

Breadcrumbs

SectionHeader

Badge

Button

EmptyState

LoadingState

Pagination

MobileNavigation

DashboardCard

StatsCard

FavoriteButton

ThemeToggle

Notification

Modal

Dropdown

Tabs

CommandPalette

SearchResults

FooterColumn

Avoid duplicated JSX.

Use component props and data mapping.

4. MANDATORY ASSETS FILE

Create this exact file:

src/assets/assets.js

ALL reusable:

Images

Logos

Icons references

Tool data

Categories

Technologies

Resource data

Navigation data

Featured tools

Deployment platforms

Design resources

Developer resources

API resources

AI tools

Font resources

Icon resources

Tool descriptions

Tool URLs

Tool categories

Tool tags

must be managed through src/assets/assets.js.

Components should import data from:

src/assets/assets.js

Do NOT scatter tool data across multiple components.

Do NOT hardcode tool cards individually.

Use .map() to render cards and lists from the centralized data.

Example architecture:

export const tools = [
{
id: 1,
name: "React",
category: "Frontend",
description: "...",
website: "...",
icon: "...",
tags: ["JavaScript", "Frontend", "UI"]
}
];

Then render dynamically using reusable components.

5. DESIGN DIRECTION

Create a premium modern SaaS-style interface.

Visual direction:

Modern

Minimal

Premium

Developer-focused

Futuristic but professional

Clean

Elegant

High information density without feeling cluttered

Use:

Subtle glassmorphism

Soft borders

Elegant shadows

Rounded cards

Layered backgrounds

Subtle gradients

Smooth hover effects

Micro-interactions

Beautiful typography

Clear visual hierarchy

Premium spacing

Subtle background patterns

Soft glow effects where appropriate

Do NOT overuse gradients.

Do NOT make the interface look like a generic AI-generated dashboard.

Keep the design professional and suitable for serious developers and designers.

6. RESPONSIVE DESIGN

The website MUST be pixel-perfect responsive.

Support:

Desktop

1920px
1440px
1366px
1280px

Tablet

1024px
768px

Mobile

430px
414px
390px
375px
360px

Use a mobile-first responsive approach.

The UI must automatically adapt to different screen sizes.

Nothing should:

Overflow horizontally

Break layouts

Overlap

Become unreadable

Get clipped

Have unusable navigation

Cards should intelligently change columns.

Example:

Desktop:

4-column tool grid

Tablet:

2–3 columns

Mobile:

1 column

7. NAVIGATION

Create a premium responsive navbar.

Desktop navigation should include:

Logo

Home

Tools

Resources

Technologies

AI Tools

Developer Tools

Design Tools

Search

Favorites

Theme toggle

Include a prominent search/command button.

Example:

"Search tools... Ctrl K"

On mobile:

Compact logo

Search button

Menu button

Create an elegant mobile navigation drawer.

Use Framer Motion animations for opening and closing.

8. HERO SECTION

Create a visually impressive hero section.

Headline:

"Your Entire Developer Toolkit. One Powerful Workspace."

Supporting text:

"Discover, organize, and access the best tools, technologies, resources, and platforms for modern web development and design."

Add:

Primary CTA: Explore Tools

Secondary CTA: Browse Categories

Add a large global search interface:

"Search tools, technologies, APIs, frameworks, resources..."

Add subtle animated background elements.

Use Framer Motion for:

Entrance animations

Floating elements

Search interaction

CTA hover animations

Do not make animations excessive.

9. GLOBAL SEARCH

Create a powerful global search experience.

Users should be able to search:

Tools

Technologies

Frameworks

Libraries

APIs

AI tools

Design resources

Icons

Fonts

Deployment platforms

Hosting

Developer utilities

Documentation

Search results should update dynamically.

Support:

Search by name

Search by category

Search by technology

Search by tags

Include:

Search suggestions

Recent searches

Popular searches

Keyboard shortcut

Empty state

Create a command-palette-style search interface.

Use Framer Motion for the modal and result transitions.

10. MAIN CATEGORIES

Create a beautiful category system.

Categories should include:

Development

Frontend Development

Backend Development

Full Stack Development

React

JavaScript

Node.js

APIs

Databases

Git & GitHub

Testing

DevOps

Cloud

Security

CSS & UI

Tailwind CSS

Bootstrap

React Bootstrap

CSS Libraries

UI Component Libraries

Animation Libraries

Design

UI/UX Design

Design Systems

Figma

Prototyping

Illustrations

Images

Icons

Typography

Color Tools

AI Development

AI Coding Tools

AI Website Builders

AI Design Tools

AI APIs

AI Assistants

AI Agents

Deployment

Frontend Deployment

Backend Deployment

Cloud Hosting

VPS

Serverless

Docker

CI/CD

Mobile

Android Development

React Native

Expo

Flutter

Ionic

App Deployment

App Testing

Productivity

Developer Utilities

Code Generators

JSON Tools

Regex Tools

API Testing

Browser Tools

Documentation

11. TOOL DIRECTORY

Create the main Tool Directory.

Display tools using reusable ToolCard components.

Every tool card should support:

Tool logo/icon

Tool name

Short description

Category

Technology tags

Free/Paid indicator

Featured indicator

Favorite button

External link

View details button

Example:

React

"JavaScript library for building user interfaces."

Tags:

JavaScript
Frontend
UI

Buttons:

"Visit"
"Details"

12. FEATURED TOOLS

Create a premium Featured Tools section.

Highlight popular tools such as:

React

Tailwind CSS

Node.js

Git

GitHub

VS Code

Cursor

Figma

Framer

Google AI Studio

Claude Code

Vercel

Netlify

Supabase

MongoDB

Use larger premium cards for featured tools.

13. DEVELOPMENT TOOLS

Create a dedicated development tools section.

Include:

Editors / IDEs

VS Code

Cursor

Windsurf

Zed

WebStorm

Replit

StackBlitz

CodeSandbox

GitHub Codespaces

Google AI Studio

Claude Code

Frontend

React

React Router

Next.js

Vite

Redux Toolkit

Zustand

TanStack Query

CSS

Tailwind CSS

Bootstrap

React Bootstrap

Sass

PostCSS

Backend

Node.js

Express

NestJS

Fastify

Hono

14. DATABASE SECTION

Create database resource cards.

Include:

MongoDB

PostgreSQL

MySQL

SQLite

Redis

Supabase

Firebase

Appwrite

Display:

Logo

Description

Database type

Features

Website

Documentation

15. GIT & VERSION CONTROL

Create a Git ecosystem section.

Include:

Git

GitHub

GitLab

Bitbucket

GitHub Codespaces

GitHub Actions

GitHub Copilot

GitHub Pages

Create a visual workflow:

Code → Git → GitHub → CI/CD → Deployment

16. ICON RESOURCE SECTION

Create a dedicated Icons category.

Include:

Font Awesome

Lucide

Heroicons

Tabler Icons

Phosphor Icons

Material Symbols

React Icons

Iconify

Boxicons

Bootstrap Icons

Simple Icons

Iconoir

Hugeicons

Each card should contain:

Logo

Name

Description

Icon style

License information

Website link

17. TYPOGRAPHY SECTION

Create a dedicated typography resource section.

Include:

Google Fonts

Fontshare

Adobe Fonts

Font Squirrel

Fontsource

Bunny Fonts

Fontpair

Fontjoy

Typewolf

Fonts In Use

Add typography utilities such as:

Font pairing

Font preview

Font categories

Serif

Sans Serif

Monospace

Display

18. DESIGN RESOURCE SECTION

Include:

Figma

Canva

Framer

Dribbble

Behance

Awwwards

unDraw

Storyset

Unsplash

Pexels

Pixabay

LottieFiles

Create visually rich cards.

19. AI TOOLS SECTION

Create a dedicated AI Tools directory.

Include:

Google AI Studio

Gemini

Claude

Claude Code

ChatGPT

GitHub Copilot

Cursor

Windsurf

Bolt

Lovable

v0

Replit

Firebase Studio

Organize them by:

AI Coding

AI Website Building

AI Design

AI APIs

AI Agents

20. API RESOURCE SECTION

Create an API hub.

Include:

Postman

Swagger

RapidAPI

Apidog

Public APIs

Add categories:

API Testing

API Documentation

API Discovery

REST APIs

GraphQL

Mock APIs

21. DEPLOYMENT SECTION

Create a complete deployment directory.

Frontend

Vercel

Netlify

Cloudflare Pages

GitHub Pages

Firebase Hosting

Backend

Render

Railway

Fly.io

Heroku

Koyeb

Northflank

Cloud

AWS

Google Cloud

Microsoft Azure

DigitalOcean

Vultr

Hetzner

Akamai Cloud

Containers

Docker

Docker Hub

Kubernetes

22. ANDROID / MOBILE SECTION

Create a mobile development category.

Include:

Android Studio

React Native

Expo

EAS Build

Flutter

FlutterFlow

Ionic

Capacitor

Codemagic

Firebase App Distribution

Publishing:

Google Play Console

Samsung Galaxy Store

Amazon Appstore

Huawei AppGallery

23. RESOURCE DETAIL PAGE

When a user clicks a tool, show a dedicated details page or modal.

Include:

Tool logo

Tool name

Description

Category

Tags

Pricing

Features

Official website

Documentation

Related tools

Alternatives

Favorite button

Include:

"Visit Website"

button.

Open external websites safely in a new tab.

24. FAVORITES

Allow users to save tools to favorites.

Create:

"My Favorites"

section.

Display:

Favorite tools

Recently viewed tools

Recently added tools

Build the UI so persistence can later be connected to authentication/backend.

Do not create fake authentication.

25. DASHBOARD

Create an optional user dashboard interface.

Dashboard sections:

Overview

Favorites

Recently Viewed

Saved Resources

Collections

Settings

Stats:

Saved Tools

Favorite Tools

Collections

Recently Viewed

Make the dashboard responsive.

26. FILTER SYSTEM

Create advanced filtering.

Users can filter by:

Category

Technology

Pricing

Type

Popularity

Featured

Free

Open Source

Include sorting:

Most Popular

Recently Added

A-Z

Z-A

Use reusable Filter components.

27. DARK / LIGHT MODE

Implement a polished dark/light mode.

Dark mode should feel premium and developer-oriented.

Light mode should remain clean and professional.

Persist the selected theme.

Do not create two completely different layouts.

Use the same component system with theme-aware styling.

28. ANIMATIONS

Use Framer Motion throughout the interface.

Use subtle animations for:

Page transitions

Card hover

Button hover

Navbar

Mobile menu

Search modal

Tool filtering

Tool cards

Category cards

Modals

Dropdowns

Section entrances

Use animation carefully.

Prioritize performance.

Avoid excessive animation.

Respect reduced-motion preferences where possible.

29. FOOTER

Create a premium multi-column footer.

Columns:

Platform

Home

Tools

Categories

Resources

Favorites

Development

React

Node.js

Tailwind CSS

Git

GitHub

Design

Figma

Icons

Fonts

Illustrations

AI

AI Tools

AI Coding

AI Design

Deployment

Vercel

Netlify

Render

Railway

Footer should also include:

Logo

Short description

Social icons

Copyright

Privacy Policy

Terms

Contact

30. PERFORMANCE

Build the application with performance in mind.

Requirements:

Lazy-load images where appropriate

Avoid unnecessary re-renders

Use reusable components

Use efficient .map() rendering

Keep components focused

Avoid massive components

Avoid unnecessary dependencies

Optimize animations

Optimize image loading

Use semantic HTML

31. ACCESSIBILITY

Follow modern accessibility practices.

Include:

Semantic HTML

Keyboard navigation

Visible focus states

Accessible buttons

Accessible forms

Proper labels

ARIA attributes where necessary

Sufficient color contrast

Keyboard-accessible search

Keyboard-accessible dialogs

32. SEO

Implement basic SEO-friendly structure.

Include:

Proper page titles

Meta descriptions

Semantic headings

Descriptive links

Open Graph metadata where appropriate

Clean URLs

Proper heading hierarchy

33. RESPONSIVE SIDEBAR

On desktop:

Use a collapsible sidebar for categories.

On tablet:

Allow sidebar collapse.

On mobile:

Replace sidebar with a slide-out drawer.

Sidebar categories should be generated from assets.js.

34. COMMAND PALETTE

Create a premium command palette.

Keyboard shortcut:

Ctrl + K

Allow users to quickly search:

Tools

Categories

Technologies

Resources

Pages

Example commands:

Search Tools
Open Favorites
Browse React Tools
Browse AI Tools
Browse Design Tools
Browse Deployment

Use Framer Motion for opening/closing.

35. DATA STRUCTURE

Create structured data inside:

src/assets/assets.js

Organize exports like:

export const navigationItems = [];

export const categories = [];

export const tools = [];

export const featuredTools = [];

export const developmentTools = [];

export const designTools = [];

export const aiTools = [];

export const deploymentTools = [];

export const mobileTools = [];

export const iconResources = [];

export const typographyResources = [];

export const apiTools = [];

export const databaseTools = [];

All UI sections should consume these arrays.

Do not duplicate data.

36. ROUTING

Use React Router.

Create routes such as:

/
/tools
/tools/:slug
/categories
/category/:slug
/resources
/ai-tools
/design-tools
/development-tools
/deployment
/mobile
/favorites
/dashboard
/settings

Create reusable layouts.

37. ERROR & EMPTY STATES

Create polished:

404 page

No search results

No favorites

Empty category

Loading state

Error state

Do not leave blank screens.

38. CODE QUALITY

The generated code must be:

Clean

Maintainable

Scalable

Beginner-friendly

Production-oriented

Reusable

Modular

Avoid:

Hardcoded repeated JSX

Duplicate components

Huge files

Inline repeated data

Unnecessary dependencies

Unnecessary state

Unnecessary rendering

39. IMPORTANT RESTRICTIONS

DO NOT:

Use TypeScript

Use hardcoded repeated tool cards

Put all application logic into App.jsx

Duplicate data across components

Create fake authentication

Create fake backend functionality

Use unnecessary libraries

Create non-responsive layouts

Use excessive animations

Use placeholder content when real tool/resource information can be represented in assets.js

40. FINAL VISUAL GOAL

The finished product should feel like a combination of:

Premium SaaS dashboard

Developer portal

Resource directory

Developer command center

Design resource hub

AI tools marketplace

Technology discovery platform

It should NOT look like a basic blog, simple directory, or generic admin dashboard.

Think:

"Linear + Vercel + Raycast + GitHub + modern developer resource marketplace"

but create an ORIGINAL visual identity rather than copying any existing website.

41. FINAL IMPLEMENTATION REQUIREMENT

Before considering the project complete:

Verify every route works.

Verify every navigation link works.

Verify responsive layouts.

Verify mobile navigation.

Verify dark/light mode.

Verify global search.

Verify filtering.

Verify sorting.

Verify favorites UI.

Verify tool details.

Verify all tool data comes from src/assets/assets.js.

Verify images/data are mapped dynamically.

Verify there is no unnecessary hardcoded repeated content.

Verify components are reusable.

Verify Framer Motion animations work.

Verify there are no console errors.

Verify there are no broken imports.

Verify there are no horizontal scrolling issues.

Verify the application works on desktop, tablet, and mobile.

Polish spacing, typography, alignment, interactions, and visual consistency until the interface feels production-ready.

The final result must be a premium, modern, responsive, scalable All-in-One Developer & Designer Platform built with:

React JS + Tailwind CSS + Framer Motion + JavaScript

with centralized data and assets in:

src/assets/assets.js

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3beacd51-39fc-4d06-84b2-8a88df72b595).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
