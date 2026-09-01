---
name: Chopp D'Casa
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e2beba'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#aa8986'
  outline-variant: '#5a403e'
  surface-tint: '#ffb4ac'
  primary: '#ffb4ac'
  on-primary: '#690007'
  primary-container: '#b22222'
  on-primary-container: '#ffc8c2'
  inverse-primary: '#b52424'
  secondary: '#c8c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b6b5b4'
  tertiary: '#fbbc00'
  on-tertiary: '#402d00'
  tertiary-container: '#775700'
  on-tertiary-container: '#ffcf66'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#92030f'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#fbbc00'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Domine
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Domine
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Domine
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Domine
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 20px
---

## Brand & Style
The design system embodies the "Boteco" spirit: a classic neighborhood pub that is welcoming, unpretentious, and built for the Brazilian happy hour. The visual direction leans into a Traditional Brewery Seal aesthetic, utilizing a Dark Mode foundation to simulate the cozy, evening atmosphere of a physical bar. 

The style is a blend of **Corporate Modern** structure with **Retro/Vaporwave** color intensity, minus the neon. It prioritizes high-contrast readability and a sense of establishment. The target audience is the local community in Goiânia seeking a reliable spot for cold beer and conversation. The UI should feel substantial, high-quality, but entirely accessible—never "fine dining," but rather the best version of a local favorite.

## Colors
The palette is rooted in the tradition of brewing. 
- **Primary (Deep Red):** Used for key branding elements, price highlights, and critical actions. It evokes the energy of a bustling bar.
- **Secondary (Graphite):** The primary surface color. It provides a sophisticated, "night-time" backdrop that allows other colors to pop.
- **Accent (Amber/Golden):** Reserved for borders, active states, and "Order via WhatsApp" prompts. It represents the color of the beer and high-quality service.
- **Support (Off-white):** Used primarily for typography and icons to ensure maximum legibility against the dark backgrounds without the harshness of pure white.

## Typography
This design system utilizes a high-contrast typographic pairing to reinforce the brewery aesthetic. 
- **Headlines:** Use **Domine**, a sturdy and authoritative serif. It mimics the classic lettering found on traditional beer seals and heritage publishing, providing a sense of history and reliability.
- **Body & Labels:** Use **Work Sans**, a grounded and professional sans-serif. It ensures that menu items, descriptions, and operational details remain legible under various lighting conditions (simulating a dark bar environment). 
- **Styling:** Use uppercase transformations for labels and small headers to evoke a "menu board" feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain the "seal" and "framed" look, transitioning to a fluid model on mobile. 
- **Grid:** A 12-column grid is used for desktop. For mobile, a single-column stack is preferred to emphasize large, appetising food and drink photography.
- **Rhythm:** An 8px base unit drives all spatial decisions. 
- **Safe Areas:** Generous top and bottom margins (xl) are used to allow the "Order" button to remain easily accessible and the branding to breathe.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Bold Borders** rather than soft shadows.
- **Surface 0:** The main background (#2F2F2F).
- **Surface 1:** Card backgrounds, slightly lighter than the base to create a subtle lift.
- **Accents:** Use 1px or 2px solid strokes in Amber (#FFBF00) to define sections and interactive elements. This replaces traditional elevation shadows, giving the UI a more "graphic" and "physical" feel reminiscent of a printed metal sign or a coasters' edge.

## Shapes
The shape language is strictly **Soft (0.25rem)**. While modern apps often use high roundedness, this design system uses subtle corners to maintain a "classic" and "rugged" brewery feel. 
- **Cards:** Use square corners or the minimal `rounded-sm` (4px).
- **Buttons:** Follow the same minimal rounding to feel more like industrial signage than a tech app.
- **Images:** Always framed with a thin Amber border to simulate a framed picture or a label.

## Components
- **Order via WhatsApp Button:** This is the primary CTA. It should be styled with a Deep Red (#B22222) background, Off-white text, and an Amber (#FFBF00) left-border or icon accent.
- **Menu Cards:** Square-ish aspect ratio. They feature a dark background, a 1px Amber border, and the price highlighted in Domine Bold.
- **Chips/Categories:** Used for "Beer," "Appetizers," "Specials." These should be outlined in Amber with text in Work Sans (Label-lg).
- **Status Indicators:** Use Amber for "Happening Now" or "Happy Hour" tags.
- **Lists:** Clean, horizontal dividers using a low-opacity Off-white to separate menu items without cluttering the dark interface.
- **Navigation:** A simple, centered "Seal" logo at the top with minimal text links. No complex menus or sidebars are required for this focused experience.