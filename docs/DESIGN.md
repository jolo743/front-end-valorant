---
name: Cobalt Strike
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002388'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#124af0'
  secondary: '#ffb3b2'
  on-secondary: '#680013'
  secondary-container: '#b60129'
  on-secondary-container: '#ffc2c1'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#656d84'
  on-tertiary-container: '#eef0ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b2'
  on-secondary-fixed: '#410008'
  on-secondary-fixed-variant: '#92001f'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is a high-performance, dark-mode aesthetic engineered for precision and rapid response. It merges the sleek, futuristic qualities of "Electric Cobalt" with a tactical, high-alert layer. The target audience includes developers, cybersecurity analysts, and competitive gamers who require a "combat-ready" interface that feels both powerful and technically sophisticated.

The style is **Modern-Tactical**. It utilizes a deep monochromatic base, electric blue data visualizations, and high-contrast red accents to signify urgency. The visual language is inspired by heads-up displays (HUDs) and command-center interfaces, prioritizing clarity and functional hierarchy over decorative flourishes.

## Colors

The palette is anchored in deep space tones and high-energy signals. 

- **Primary (Electric Cobalt):** Used for interactive elements, focus states, and primary navigation. It represents the "active" state of the system.
- **Secondary (Tactical Red):** Reserved exclusively for critical actions, destructive operations, alerts, and high-priority status indicators. It must be used sparingly to maintain its psychological impact.
- **Backgrounds:** A tiered system of deep navies and near-blacks (#020617, #0F172A) provides a non-distracting canvas.
- **Data/Accents:** Cyan and soft blues are used for secondary data points to maintain the "tech" feel without competing with the primary cobalt.

## Typography

This design system uses **Space Grotesk** for all structural and impactful elements (Headings, Labels, Buttons) to reinforce the technical, geometric aesthetic. Its idiosyncratic letterforms provide a "tech-forward" personality.

**Inter** is utilized for body copy and dense data displays. Its neutrality and high legibility ensure that long-form content remains readable against dark backgrounds. Labels and small captions should always use Space Grotesk with increased letter-spacing and uppercase styling to mimic tactical instrumentation.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict adherence to a 4px baseline rhythm. 

- **Desktop:** 12-column grid with 20px gutters. Content is often contained in "modules" or "panels" to simulate a dashboard environment.
- **Mobile:** 4-column grid with 16px margins. 
- **Philosophy:** Spacing should feel "tight" and efficient. Use smaller gaps (8px, 16px) between related data points and larger gaps (48px+) only to separate major functional sections. Vertical stacking of panels should favor high-density information display.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layering** and **Subtle Outlines** rather than traditional shadows.

1.  **Base Layer:** The darkest tone (#020617), used for the application background.
2.  **Surface Layer:** A slightly lighter navy (#0F172A), used for cards and panels.
3.  **Contrast Outlines:** Instead of shadows, surfaces are defined by 1px borders. Normal panels use a low-opacity blue-tinted border; "Active" or "Focused" panels use a crisp Electric Cobalt border.
4.  **Tactile Overlay:** A very subtle scanline texture or 10% opacity grain can be applied to the background to enhance the "hardware" feel.

## Shapes

The shape language is **Soft-Technical**. We use a 0.25rem (4px) base radius to prevent the UI from feeling too aggressive or "sharp," while maintaining a disciplined, professional appearance. 

Buttons and input fields should strictly follow the 4px radius. Avoid pill shapes or large radii, as they conflict with the technical narrative. Occasional 0px (sharp) corners are permitted for decorative bracket elements or secondary UI "tags."

## Components

- **Buttons:** Primary buttons are solid Electric Cobalt with white text. Tactical buttons (Delete, Emergency Stop, Deploy) are solid Tactical Red. Secondary buttons use a transparent background with a 1px Electric Cobalt border.
- **Inputs:** Dark backgrounds with a 1px stroke. The stroke glows (2px outer blur) in Electric Cobalt when focused. Error states trigger a Tactical Red stroke and red helper text.
- **Chips/Status Tags:** Small, uppercase labels. Use a "hollow" style (border only) for neutral states and a "filled" style for active or high-alert states.
- **Cards:** Defined by a 1px border (#1E293B). On hover, the border color shifts to Electric Cobalt. 
- **Progress Bars:** Use thin, 4px height bars. The fill is Electric Cobalt; for "Critical" levels, the fill transitions to Tactical Red.
- **Data Grid:** High-density rows with subtle separators. Alternate row striping is discouraged; use hover highlights in a low-opacity Electric Cobalt instead.