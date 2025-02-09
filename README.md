# Ethereal

Project made by using Next.js and Tailwind

## Run Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Inspiration

This project was built by taking inspiration from:

- [Enefty by Dhimas Mo](https://dribbble.com/shots/20762040-Enefty-NFT-Marketplace-Landing)
- [NFT Website Design by Alamgir Hossain](https://dribbble.com/shots/22036822-NFT-Website-Design)

### Web Avatars Credits

Web avatars used in this project are credited to [Koncepted](https://www.figma.com/@koncepted).

## Layout & Animation

### Layout

The website primarily utilizes **Grid** and **Flexbox** for layout structuring, with a focus on a grid-based design.

### Animation

Animations are powered by **GSAP** using:

- `ScrollToPlugin` for smooth scrolling
- `ScrollTrigger` for scroll-based animations
- `transform` properties for element transitions

### Challenged faced

Thus, the development process for this project went smoothly. However, there is issue arose with **GSAP's ScrollToPlugin**. The exact cause of the problem remains unclear.

#### Issue: Home Navigation Link Not Scrolling to the Top

The "Home" navigation link and The "Ethereal" logo should scroll to the top section. While the logic remains the same, the scrolling does not work on smaller screens.

#### Solution: Hardcoding a Scroll Fix

To resolve this, a hardcoded fix was implemented by detecting the destination of the scroll action. If the target is the Home section, the scroll action is forced to `scrollTo(0)`.

## Deploy on Vercel

You can find the deployed version of this website [Ethereal](https://ethereal-psi.vercel.app/)
