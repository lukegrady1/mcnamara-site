# McNamara Construction Website

A modern, professional website for McNamara Construction, a Long Island-based home additions and remodeling contractor. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend (for contact forms)
- **Deployment:** Vercel
- **SEO:** Next SEO, custom metadata, sitemap, robots.txt

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mcnamara-site

# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser. The page auto-updates as you edit files.

### Build

```bash
# Create a production build
npm run build

# Start the production server locally
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
mcnamara-site/
├── app/                    # Next.js 14 App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   │   └── home-additions/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # SEO robots configuration
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable React components
│   ├── ui/               # UI primitives (buttons, cards, etc.)
│   ├── Header.tsx        # Site header/navigation
│   ├── Footer.tsx        # Site footer
│   └── ...
├── content/              # Content data and configuration
├── lib/                  # Utility functions and helpers
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind CSS configuration
```

## Key Features

- **Responsive Design:** Mobile-first approach, optimized for all devices
- **SEO Optimized:** Metadata, sitemap, robots.txt, semantic HTML
- **Fast Performance:** Next.js optimizations, image optimization, lazy loading
- **Accessible:** WCAG compliant, keyboard navigation, screen reader friendly
- **Type-Safe:** Full TypeScript implementation
- **Form Validation:** Client-side and server-side validation with Zod
- **Modern UI:** Clean, professional design with Radix UI components
- **Service Pages:** Detailed information about home additions and remodeling
- **Contact Forms:** Multiple contact forms with validation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository to [Vercel](https://vercel.com/new)
3. Configure environment variables (see below)
4. Deploy

Vercel will automatically detect Next.js and configure the build settings.

### Manual Deployment

```bash
# Build the application
npm run build

# The build output will be in the .next folder
# Deploy the .next folder along with:
# - package.json
# - package-lock.json
# - public/
# - node_modules/ (or run npm install on the server)

# Start the production server
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# Email Configuration (Resend)
# Note: Email functionality requires setup
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your-email@example.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://myhomeadditions.com
```

### Required Setup for Email Forms

The contact forms are currently set up but require email service configuration:

1. Sign up for [Resend](https://resend.com)
2. Get your API key
3. Add the API key to your environment variables
4. Configure the recipient email address
5. Implement the email sending API route (if not already done)

## Next Steps / Future Enhancements

### High Priority
- [ ] **Email Integration:** Complete Resend email service setup for contact forms
- [ ] **Additional Service Pages:** Create pages for:
  - Kitchen Remodeling
  - Bathroom Remodeling
  - Basement Finishing
  - Deck Construction
  - General Contracting
- [ ] **Service Area Pages:** Location-specific landing pages for Long Island towns

### Medium Priority
- [ ] **Projects Gallery:** Portfolio section with before/after photos
- [ ] **Testimonials:** Customer reviews and testimonials section
- [ ] **Blog/Resources:** Educational content about home remodeling
- [ ] **Free Estimate Tool:** Interactive cost estimator form
- [ ] **Analytics:** Google Analytics or Vercel Analytics integration

### Lower Priority
- [ ] **CMS Integration:** Headless CMS for easier content management
- [ ] **Virtual Consultations:** Online booking system
- [ ] **Financing Information:** Partner financing options
- [ ] **FAQ Section:** Comprehensive frequently asked questions
- [ ] **Live Chat:** Customer support chat widget

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

This site is optimized for performance with:
- Server-side rendering (SSR) and static generation (SSG)
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Optimized fonts with next/font

## Contact

For questions or support regarding this project:

- **Email:** contact@myhomeadditions.com
- **Phone:** (516) 555-0100
- **Website:** https://myhomeadditions.com

## License

Copyright 2025 McNamara Construction. All rights reserved.

---

Built with [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).
