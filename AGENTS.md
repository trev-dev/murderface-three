# AGENTS.md - Development Guidelines for Cat Licence Registry

This document provides guidance for agents and developers working on the Cat Licence Registry SPA to ensure consistent use of the BC Government Design System.

## Design System Integration

### Core Dependencies

This project uses the following BC Government Design System packages:

- **@bcgov/design-system-react-components** - React components following BC Gov standards
- **@bcgov/design-tokens** - Design tokens for colors, typography, spacing, and other design properties
- **@bcgov/bc-sans** - Official BC Government sans-serif font

### Installation & Setup

When modifying this project, always ensure these dependencies remain installed and up-to-date:

```bash
npm install @bcgov/design-system-react-components @bcgov/design-tokens @bcgov/bc-sans
```

All three packages must be imported in the application:

```javascript
import '@bcgov/bc-sans/css/BC_Sans.css'
import '@bcgov/design-tokens/css/variables.css'
import { /* components */ } from '@bcgov/design-system-react-components'
```

## Component Usage

### Preferred Components

Always use BC Government Design System components for UI elements:

- **Header** - Page header with title and optional action buttons
- **Footer** - Standard BC Gov footer with links and copyright
- **Button** - All interactive buttons (use variants like 'primary', 'secondary')
- **Heading** & **Subheader** - Text hierarchy components
- **Text** - Body text and descriptions
- **Form**, **TextField**, **TextArea**, **Select** - Form inputs
- **RadioGroup**, **CheckboxGroup**, **Switch** - Selection controls
- **AlertBanner**, **InlineAlert** - User notifications
- **Modal**, **Dialog** - Modal dialogs
- **Menu**, **MenuItem** - Navigation menus

See the complete component list in `node_modules/@bcgov/design-system-react-components/README.md`.

### Component Props

When using design system components, always:

1. Follow React Aria documentation for component APIs
2. Use semantic HTML attributes (aria-labels, aria-descriptions)
3. Ensure keyboard navigation and screen reader compatibility
4. Test with assistive technologies

## Design Tokens

### Using Design Tokens

Always use design tokens for styling instead of hardcoded colors or spacing values:

#### CSS Variables (Recommended)

```css
/* In CSS files */
background-color: var(--surface-color-primary-default);
color: var(--typography-color-default);
padding: var(--spacing-md);
border: 1px solid var(--surface-color-border-default);
```

#### JavaScript Objects

```javascript
import * as tokens from "@bcgov/design-tokens/js";

const buttonStyle = {
  backgroundColor: tokens.surfaceColorPrimaryButtonDefault,
  color: tokens.typographyColorPrimaryInvert,
};
```

### Key Token Categories

- **surface-color-*** - Background colors and surfaces
- **typography-color-*** - Text colors
- **spacing-*** - Margins and padding
- **border-*** - Border styles
- **shadow-*** - Box shadows
- **radius-*** - Border radius values

Refer to `@bcgov/design-tokens` documentation for complete token listings.

## Styling Guidelines

### CSS Architecture

- Use CSS files co-located with components
- Import design tokens CSS at the application root (`src/index.css` or `src/App.jsx`)
- Use CSS custom properties (variables) exclusively for theming
- Avoid inline styles; use CSS classes instead

### Responsive Design

Always support mobile, tablet, and desktop breakpoints:

```css
/* Mobile first approach */
.container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

### Color Usage

**Do NOT use hardcoded hex colors.** Always use design tokens:

✅ Good:
```css
color: var(--typography-color-default);
background: var(--surface-color-primary-default);
```

❌ Bad:
```css
color: #333333;
background: #003D82;
```

## Accessibility Requirements

All components must meet WCAG 2.1 AA standards:

1. **Semantic HTML** - Use correct HTML elements (buttons not divs, etc.)
2. **ARIA Labels** - Provide aria-label or aria-labelledby for unlabeled elements
3. **Keyboard Navigation** - All interactive elements must be keyboard accessible
4. **Color Contrast** - Text must have sufficient contrast against backgrounds
5. **Focus Indicators** - Design system components include proper focus styling
6. **Form Validation** - Provide clear error messages and validation feedback

## Project Structure

```
/src
  /components       - Reusable React components
  /pages           - Page-level components
  /styles          - Global styles and CSS variables
  App.jsx          - Main application component
  index.css        - Global styles
  main.jsx         - React entry point
```

## Adding New Pages

When creating new pages:

1. Use `Header` and `Footer` components on every page
2. Wrap page content in a `main` element with `id="main-content"`
3. Use `skipLinks` prop on Header for accessibility
4. Import design tokens CSS in App.jsx
5. Apply design tokens for all colors and spacing
6. Test responsive design on mobile and desktop

Example:

```jsx
import '@bcgov/bc-sans/css/BC_Sans.css'
import '@bcgov/design-tokens/css/variables.css'
import { Header, Footer, Heading } from '@bcgov/design-system-react-components'
import './PageName.css'

export default function PageName() {
  return (
    <>
      <Header
        title="Page Title"
        skipLinks={[
          <a key="main" href="#main-content">Skip to main content</a>,
        ]}
      />
      <main id="main-content">
        {/* Page content */}
      </main>
      <Footer />
    </>
  )
}
```

## Building & Deployment

### Development

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

### Production Build

The app is built with Vite and uses:

- ESM modules for modern browsers
- Tree-shaking for optimized bundle size
- Asset optimization and minification

## Deprecation Policy

When design system components are updated or deprecated:

1. Check release notes for migration guides
2. Update all usages across the application
3. Test thoroughly with the new component version
4. Update this AGENTS.md file if guidelines change

## Support & Resources

- **GitHub**: https://github.com/bcgov/design-system/
- **Storybook**: https://designsystem.gov.bc.ca/react-components/
- **Documentation**: https://gov.bc.ca/designsystem/
- **Email**: DesignSystem@gov.bc.ca
- **Issues**: https://github.com/bcgov/design-system/issues

## Standards Deviation

If the mockup or requirements deviate from BC Government design standards:

**Trust the design system standards over the mockup.**

Design system standards ensure:
- Consistency across government services
- Accessibility compliance
- User familiarity with government applications
- Long-term maintainability

Document any deviations and contact the design system team before implementation.
