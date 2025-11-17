# Sarina's Kitchen (React + Vite)

Simple Vite + React + TypeScript site with page-level components you can edit directly. This README focuses on how to change the on-page text and supporting assets.

## Running the project

- Install deps: `npm install`
- Start dev server: `npm run dev`
- Build: `npm run build`

EmailJS (contact form) needs env vars in `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Editing page content

All copy lives in the page components under `src/pages/`. Update the strings and save; Vite hot-reloads in dev.

- **Home (`src/pages/Home.tsx`)**  
  - Hero intro, stats, and CTA buttons are near the top of the component.  
  - “Signature Offerings” cards and their body text are plain JSX strings.  
  - Process steps and the CTA band text are also inline.  
  - Styling: `src/pages/Home.module.scss` (e.g., card images, grid spacing, hero layout).

- **About (`src/pages/About.tsx`)**  
  - Title, lead paragraphs, and the card section lists/notes are all JSX text.  
  - The large image below the lead uses `aboutLogo`; swap the import/`src` and `alt` if you want a different photo.  
  - Styling: `src/pages/About.module.scss` (image sizing, padding, cards).

- **Services (`src/pages/Services.tsx`)**  
  - Service cards are defined in the `services` array (title, description, details, examples).  
  - The Sample Chef’s Menu photo gallery uses `menuPhotos`; each entry has `title` and `desc` fields you can edit.  
  - Styling for cards, menu gallery, and CTA band: `src/pages/Services.module.scss`.

- **Contact (`src/pages/Contact.tsx`)**  
  - Form headings, helper text, status messages, and the info sidebar text are inline strings.  
  - Adjust validation messages or placeholders directly in the component.  
  - Styling: `src/pages/Contact.module.scss`.

- **Header & Footer (`src/Layout.tsx`)**  
  - Navigation labels and footer copy live here.  
  - The navbar logo image is imported as `logo` from `src/assets/Logo_1.png`; swap the import if you change the file.  
  - Header/footer styles and global tokens: `src/Brand.scss`.

## Editing images

- Assets live in `src/assets/`. Import a file and assign it to `src` on an `<img>` tag.  
- For the Services menu gallery, add/remove entries in `menuPhotos` and ensure the imports match your filenames.  
- To change sizing/fit, edit the corresponding SCSS module (e.g., `.cardImg`, `.menuPhoto img`, `.aboutImg`).

## Notes

- All page sections are plain React components—no CMS required.  
- Keep button/link URLs (`to`/`href`) aligned with your routes.  
- After editing env vars, restart `npm run dev` so Vite picks them up.
