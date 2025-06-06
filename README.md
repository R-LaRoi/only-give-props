# ONLY GIVE PROPS

OG Props is a modern sports app that features classic game props from your favorite players, letting you bet on historical performances risk-free!

## Features

- Animated diagonal image marquee for showcasing player props or highlights
- Sleek, minimal black-themed UI with bold, centered typography
- Responsive design for mobile and desktop

## Tech Stack

- **React** (with Next.js App Directory)
- **TypeScript**
- **CSS Modules** for component styling
- **Tailwind CSS** (optional for utility classes)
- **Unsplash** for demo images

## Screenshots

![Screenshot](https://github.com/user-attachments/assets/782a9e95-109c-42b1-909f-28c50e99d9b1)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/only-give-props.git
   cd only-give-props
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) to view the app.**

## Project Structure

- `/src/app/page.tsx` – Main page, includes hero section and DiagonalImageMarquee
- `/src/app/components/LandingPageHero.tsx` – Centered headline, subheadline, description, and contact button
- `/src/app/components/DiagonalImageMarquee.tsx` – Animated, skewed image carousel
- `/src/app/components/marquee.module.css` – Marquee-specific component styles
- `/src/app/components/LandingPageHero.module.css` – Hero section styles
- `/src/app/globals.css` – Global base styles

## Customization

- **Images:** Update the `portfolioImages` array in `page.tsx` with your own URLs.
- **Marquee Settings:** Adjust `itemWidth`, `itemHeight`, `itemGap`, and `scrollDuration` props for different marquee effects.
- **Contact:** The contact button opens a mailto link; you can update the address or link as needed.

## License

MIT

---

OG Props is not affiliated with or endorsed by any sports leagues or organizations. This is a demo project for creative and educational purposes.
