# Shreeja Dutta - Hello Kitty Themed Personal Website

## Context
Shreeja Dutta is a B.Tech Biotechnology student who wants a personal portfolio website with a Hello Kitty / Kawaii theme, rich animations, and interactive elements. The website content is sourced from her resume PDF.

---

## Part 1: AI Wireframe Prompt

Copy and paste the following prompt into any AI wireframe/UI tool (v0, Figma AI, Uizard, Galileo AI, etc.) to generate a visual wireframe:

---

> Design a single-page personal portfolio website wireframe for "Shreeja Dutta", a Biotechnology student. The theme is **Hello Kitty / Kawaii** with a pink color palette (#FFF0F5 background, #FF69B4 accents, #FF0033 red bow highlights, #FF1493 headings). Use rounded corners, bubbly fonts (Quicksand, Nunito, Pacifico), and playful kawaii decorations (bows, stars, hearts, flowers) throughout.
>
> **Sections (top to bottom):**
>
> 1. **Splash Screen Overlay** - Full-screen pink gradient with a centered kawaii cat face SVG (two dot eyes, blush circles, red bow) and "Welcome!" text below it. Fades out after 2 seconds.
>
> 2. **Sticky Navbar** - Translucent pink glassmorphism bar. Logo "SD" on the left in cursive. Nav links: About, Experience, Education, Skills, Certifications, Languages, Contact. Hamburger menu on mobile.
>
> 3. **Hero Section** (full viewport height) - Left column: small text "Hi there! I'm", large typed-out name "Shreeja Dutta" in cursive pink, tagline "B.Tech Biotechnology | Researcher | Aspiring Scientist", two pill-shaped buttons ("View My Work" and "Contact Me"), row of social icons (LinkedIn, Email, Phone). Right column: large decorative red bow illustration with floating hearts, stars, and small flowers. Polka-dot background pattern.
>
> 4. **About Me** - Circular photo placeholder with pink border and a small bow on top-right corner. Summary paragraph beside it. Below: 4 small kawaii cards in a row showing fun facts - "Kathak Dancer", "4 Languages", "30+ Kids Mentored", "Published Researcher" - each with a tiny icon (music note, speech bubble, heart, test tube).
>
> 5. **Experience** (Timeline) - Vertical pink gradient timeline line down the center. 3 cards alternating left-right: (1) "Lab Intern - Agilus Diagnostic, Fortis Hospital" May-Jul 2025, (2) "Research Trainee - Amity University" May 2024-Present, (3) "Intern Educator - Umeed NGO" Oct 2024-Jan 2025. Each card is white with pink left border, rounded corners, subtle shadow, and a small decorative icon.
>
> 6. **Education** - 2 horizontal cards: B.Tech Biotechnology at Amity University (2022-2026) and Senior Secondary at Cambridge School (2020-2022). Each with mortarboard icon, pink accent border, and bow decoration.
>
> 7. **Skills** (Bubble Layout) - Three groups: "Technical Skills" (bubbles: Gel Electrophoresis, PCR, NCBI, ENSEMBL, AST, Gram Staining, Acid Fast Staining), "Programming" (bubbles: Python, R, Excel, Java, C, C++), "Research" (bubbles: Scientific Writing, Data Interpretation, Statistical Analysis). Bubbles are pink gradient circles of varying sizes.
>
> 8. **Certifications** - 2 ribbon/badge-styled cards: "5th Year Kathak - Prayag Sangeet Samiti" and "SOAR AI to Aspire - Microsoft/NCVET". Star icons on top.
>
> 9. **Languages** - 4 circular progress rings: English (Proficient, 95%), Hindi (Proficient, 95%), Bengali (Advanced, 80%), French (Advanced, 75%). Each ring is a different pink shade with the language name centered.
>
> 10. **Contact** - Left: kawaii envelope illustration with a bow. Right: 3 contact cards - Email (shreejadutta23856@gmail.com), Phone (8700912428), LinkedIn. Each with an icon and hover highlight.
>
> 11. **Footer** - Deep pink background, white text. Repeating bow pattern along top edge. "Made with heart by Shreeja Dutta", nav links, copyright 2026.
>
> **Visual Style Notes:** Floating particle decorations (small transparent hearts, stars, bows) drift across the page. Custom pink dot cursor with a larger following ring. All cards have 20px border-radius and soft pink shadows. Sections have alternating white and lightest-pink backgrounds. Keep everything soft, cute, and bubbly.

---

## Part 2: Implementation Plan

### Tech Stack
- Single-page **HTML + CSS + Vanilla JS** (no frameworks, no build step)
- Google Fonts: Quicksand, Nunito, Pacifico
- All decorations via CSS/SVG (zero raster images, copyright-safe kawaii elements)

### File Structure
```
C:\Users\ishan\Desktop\shreeja\
├── index.html                  # All sections, semantic HTML5
├── css/
│   ├── style.css               # Variables, layout, typography, cards
│   ├── animations.css          # @keyframes, .reveal classes, hover effects
│   └── responsive.css          # Media queries (mobile/tablet/desktop)
├── js/
│   ├── main.js                 # Scroll observer, navbar, parallax, splash
│   ├── typing.js               # Hero name typing effect
│   ├── particles.js            # Floating hearts/stars/bows
│   └── cursor.js               # Custom kawaii cursor
└── CV SHREEJA RESUME.pdf       # (existing)
```

### Color Palette
| Token             | Value     | Usage                          |
|--------------------|-----------|--------------------------------|
| `--pink-lightest`  | #FFF0F5   | Page background                |
| `--pink-light`     | #FFB6C1   | Card backgrounds               |
| `--pink-medium`    | #FF69B4   | Accents, buttons               |
| `--pink-dark`      | #FF1493   | Headings, active states        |
| `--red-bow`        | #FF0033   | Bow decorations, special accent|
| `--yellow-accent`  | #FFD700   | Stars                          |
| `--text-dark`      | #4A2040   | Body text                      |

### Sections Overview

| # | Section        | Key Feature                              |
|---|----------------|------------------------------------------|
| 1 | Splash Screen  | Kawaii face + bow, fades out in 2s       |
| 2 | Navbar         | Glassmorphism, sticky, hamburger mobile  |
| 3 | Hero           | Typing effect, parallax, floating decor  |
| 4 | About Me       | Photo placeholder, 4 fun-fact cards      |
| 5 | Experience     | Animated vertical timeline, 3 cards      |
| 6 | Education      | 2 cards with mortarboard icons           |
| 7 | Skills         | Interactive bubble layout, pop-in anim   |
| 8 | Certifications | Ribbon/badge styled cards                |
| 9 | Languages      | SVG circular progress rings              |
|10 | Contact        | Contact cards with kawaii envelope        |
|11 | Footer         | Bow pattern border, social links         |

### Animations Breakdown
| Animation               | Trigger              | Method                    |
|--------------------------|----------------------|---------------------------|
| Splash screen fade       | Page load (2s delay) | JS timeout + CSS opacity  |
| Name typing effect       | After splash gone    | JS setInterval            |
| Scroll reveal (fade up)  | Scroll into view     | IntersectionObserver + CSS|
| Timeline line draw       | Scroll into view     | CSS height transition     |
| Skill bubble pop-in      | Scroll into view     | CSS scaleIn + bounce      |
| Language ring fill       | Scroll into view     | SVG stroke-dashoffset     |
| Floating particles       | Always               | CSS float keyframe        |
| Custom cursor            | Mouse move           | JS transform              |
| Parallax layers          | Scroll               | JS requestAnimationFrame  |
| Card hover lift/wiggle   | Hover                | CSS transform + shadow    |

### Build Phases
1. **HTML + CSS Foundation** - Create index.html with all content, style.css with layout and styling
2. **Responsive** - Add responsive.css with breakpoints at 768px and 1024px
3. **Animations** - Create animations.css + main.js for scroll reveals, navbar, splash
4. **Effects** - Add typing.js, particles.js, cursor.js
5. **Polish** - Fine-tune timings, add prefers-reduced-motion support

### Key Decisions
- **No copyrighted Hello Kitty images** - all kawaii elements (bows, faces, stars) are original CSS/SVG drawings inspired by the aesthetic
- **No framework** - pure HTML/CSS/JS for easy deployment (just open index.html)
- **Performance** - only animate transform and opacity (GPU composited), reduce particles on mobile

### Verification
1. Open index.html in browser - splash screen should appear, then fade
2. Scroll through all sections - elements should animate in
3. Hover over cards/bubbles - lift and wiggle effects
4. Resize to mobile width - layout should reflow, hamburger nav appears
5. Check custom cursor works on desktop, disabled on touch devices
