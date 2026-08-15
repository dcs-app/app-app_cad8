
# Project: Arizon E-Commerce

## Tech Stack

**Framework:** static-html
**State:** none
**Styling:** tailwind
**Data:** none
**Auth:** none

## Database Schema

No database — static content only. Product data will be managed via static JSON or CSV imported into page templates.

## API Endpoints

No backend — all functionality is client-side (cart, wishlist, search) using localStorage.

## Frontend Components / Pages

- index (landing / homepage with hero, featured products, categories)
- products (product listing with filters, search, sorting)
- product (product detail page)
- cart (shopping cart with item management)
- checkout (order review and payment method selection)
- about (company story, mission, values)
- contact (contact form, hours, location)

## Critical Requirements

1. **E-commerce conversion flow** — index → products → product detail → cart → checkout must be seamless and mobile-optimized
2. **Product filtering & search** — fast client-side filtering by category, price, rating on products page
3. **Cart persistence** — localStorage-based cart that survives page refresh
4. **Mobile-first responsive** — 375px–1400px breakpoints, touch-friendly tap targets (44px min)
5. **Accessible forms** — checkout form with proper labels, error states, ARIA attributes

## Complexity Rating

**Medium** — Static e-commerce site with 7 pages, client-side cart/wishlist, no backend. Requires clean component structure and robust filtering logic.