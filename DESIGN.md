# Design Brief

## Direction

Vibrant Educational — A modern, approachable Gen AI learning platform that feels trustworthy and engaging while keeping learners motivated through visual clarity.

## Tone

Playful yet professional — high engagement through rounded forms and vibrant (not garish) accent colors, balanced with clean whitespace and geometric typography.

## Differentiation

Mobile-first touch-optimized controls (48px targets) with gradient corner accents on cards and smooth progress indicators providing visual micro-feedback.

## Color Palette

| Token      | OKLCH           | Role                                    |
| ---------- | --------------- | --------------------------------------- |
| background | 0.99 0.003 240  | Crisp white, light mode primary         |
| foreground | 0.16 0.015 240  | Deep blue-grey text                     |
| primary    | 0.55 0.2 240    | Bright cyan-blue (modern, trustworthy)  |
| accent     | 0.6 0.22 155    | Vibrant emerald (growth, progress)      |
| card       | 1.0 0 0         | Pure white card surfaces                |
| muted      | 0.94 0.01 240   | Soft background for alternation        |
| border     | 0.92 0.008 240  | Subtle dividers                         |

## Typography

- Display: Space Grotesk — geometric, modern, tech-forward headings
- Body: DM Sans — friendly, mobile-readable at all sizes (≥14px)
- Mono: JetBrains Mono — code snippets with full legibility on mobile
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl`, body `text-base md:text-lg`

## Elevation & Depth

Subtle card elevation via `shadow-card` (0 2px 8px) for hierarchy; hover states boost to `shadow-elevated` (0 4px 16px). Accent corner detail (right-top edge) provides visual anchoring.

## Structural Zones

| Zone    | Background          | Border                | Notes                              |
| ------- | ------------------- | --------------------- | ---------------------------------- |
| Header  | `bg-background`     | `border-b border-border` | Primary navigation, search bar     |
| Content | `bg-background`     | —                     | Alternating `bg-muted` for rhythm |
| Cards   | `bg-card`           | —                     | Rounded 12-16px, `shadow-card`    |
| Footer  | `bg-muted`          | `border-t border-border` | Links, copyright info             |

## Spacing & Rhythm

Mobile-first compact density (16-24px gaps) expanding to spacious (32-48px) on desktop. Cards grouped with 16px intra-group, 32px inter-section spacing. Touch targets always ≥48px.

## Component Patterns

- Buttons: Primary (bg-primary, text-primary-foreground, rounded-lg), Secondary (bg-muted, text-foreground, rounded-lg); all ≥48px height
- Cards: Rounded 12px, bg-card shadow-card, accent corner detail via `.card-accent` utility
- Badges: Inline, accent color background, small radius, uppercase label
- Input: bg-input border-border focus:ring-2 ring-primary, readable 16px+ on mobile
- Progress: Accent green (chart-3 0.62 0.18 145) bars with subtle animation

## Motion

- Entrance: Fade + subtle scale (0.98→1.0) over 300ms on route load
- Hover: All interactive elements use `transition-smooth` (0.3s cubic-bezier)
- Decorative: Pulse-subtle animation for learning badges and achievement highlights

## Constraints

- All text ≥14px on mobile (readable code snippets required)
- Touch targets always ≥48px (buttons, links in quiz/course cards)
- Light mode primary (no dark mode toggles unless explicitly requested)
- Card grid responsive: 1col mobile, 2col sm:, 3col md:+

## Signature Detail

Gradient corner accent (1px wide by 8px tall emerald bar) on top-right of course and lesson cards — reinforces growth/progress visual language without cluttering the interface.
