# Overview

This is a personal portfolio website for Abdullahi Tahir Adamu, a React/Next.js developer and cinematographer based in Nigeria. The application showcases professional work, projects, certifications, media content (videos and pictures), and provides contact functionality. Built with Next.js 15.3.3 using the App Router architecture, it features a modern, responsive design with dark mode support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 15.3.3 with App Router
- **Rationale**: Leverages Next.js App Router for modern React patterns, built-in routing, SEO optimization, and server/client component separation
- **Client-side Interactivity**: Uses "use client" directive for interactive components (scrolling effects, navigation)
- **Rendering Strategy**: Mix of server and client components for optimal performance

**UI Component Library**: shadcn/ui with Radix UI primitives
- **Rationale**: Provides accessible, customizable components without runtime overhead
- **Styling Approach**: Tailwind CSS v4 with custom theme variables defined in globals.css
- **Design System**: "new-york" style variant from shadcn/ui for consistent aesthetics

**State Management**:
- **Local State**: React useState and useEffect hooks for component-level state
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Problem Addressed**: Need for type-safe, performant form validation without external dependencies

**Theme System**: next-themes
- **Rationale**: Provides seamless dark/light mode switching with system preference detection
- **Implementation**: Custom CSS variables mapped to Tailwind theme for consistent theming

## Page Structure

**Route Organization**:
- `/` - Home page with sections (Hero, About, Work, Certifications, Contact)
- `/projects` - Projects showcase page
- `/sitemap.xml` - Dynamically generated XML sitemap
- `/api/contact` - Contact form submission endpoint

**Component Architecture**:
- Modular section-based components (Navbar, HeroSection, AboutSection, etc.)
- Reusable UI components in `/components/ui` directory
- Custom hooks in `/hooks` directory (as configured)

## Performance Optimizations

**Scroll Performance**:
- `requestAnimationFrame` for scroll event throttling
- Passive event listeners to improve scroll performance
- **Rationale**: Prevents layout thrashing and ensures smooth scrolling on lower-end devices

**Font Optimization**:
- next/font with Google Fonts (Inter) for automatic font optimization
- Geist font family configured for Vercel deployment

**Build Configuration**:
- Turbopack enabled for faster development builds
- Custom port configuration (5000) with network binding (0.0.0.0)

## SEO Architecture

**Metadata Strategy**:
- Template-based titles for consistent branding
- Comprehensive Open Graph and Twitter Card metadata
- Structured keywords for search optimization
- Canonical URLs and robots directives

**Sitemap Implementation**:
- Custom API route generating XML sitemap
- Prioritized pages with change frequency indicators
- Robots.txt configured to allow crawling while protecting API routes

## Form Handling & Validation

**Validation Layer**:
- Zod schemas for runtime type validation
- @hookform/resolvers for React Hook Form integration
- **Pros**: Type-safe, prevents invalid data submission, excellent developer experience
- **Cons**: Adds bundle size, but minimal impact given tree-shaking

**User Feedback**:
- Sonner toast notifications for success/error states
- **Rationale**: Non-intrusive, accessible notification system

# External Dependencies

## Email Service Integration

**Resend API**:
- **Purpose**: Transactional email delivery for contact form submissions
- **Configuration**: API key stored in environment variable `RESEND_API_KEY`
- **Recipient**: Configurable via `CONTACT_EMAIL` environment variable (defaults to abdultahir779@gmail.com)
- **Implementation**: POST endpoint at `/api/contact/route.js` handles form submissions and sends formatted HTML emails

## UI Framework Dependencies

**Radix UI Components**:
- @radix-ui/react-avatar - User avatar display
- @radix-ui/react-dropdown-menu - Accessible dropdown menus
- @radix-ui/react-label - Form label components
- @radix-ui/react-select - Select input components
- @radix-ui/react-slot - Component composition utility

**Styling Utilities**:
- class-variance-authority - Type-safe variant styling
- clsx & tailwind-merge - Utility for merging Tailwind classes
- lucide-react - Icon library

## Development Tools

**Code Quality**:
- ESLint with Next.js configuration
- Custom ESLint configuration via @eslint/eslintrc

**Styling**:
- Tailwind CSS v4 with PostCSS plugin (@tailwindcss/postcss)
- tw-animate-css for animation utilities
- Custom theme configuration via inline @theme directive

## Deployment Considerations

**Hosting**: Optimized for Vercel deployment (referenced in metadata)
- Next.js-specific features like automatic static optimization
- Environment variables for API keys and configuration

**Domain**: tahiradamu.info (as specified in metadata and sitemap)