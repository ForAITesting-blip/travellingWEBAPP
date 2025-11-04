# Aurora Armenia - Frontend

Design-forward travel atelier for immersive journeys across Armenia.

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS with custom theming, glassmorphism, and responsive gradients
- Redux Toolkit for state + async queries
- React Router for multi-page navigation
- Framer Motion + Headless UI for animation and overlays

## Available scripts

```bash
# install dependencies
npm install

# start the Vite dev server (http://localhost:5173)
npm run dev

# type-check and build for production
npm run build

# preview the production build
npm run preview
```

## Environment

The frontend expects the backend API at `http://localhost:5000` by default. Override with `VITE_API_URL`.

```bash
VITE_API_URL=https://your-api.example.com npm run dev
```

## Project structure highlights

- `src/app` — Redux store configuration
- `src/features` — slices for destinations, experiences, itineraries
- `src/components` — layout and section components with animations
- `src/pages` — routed screens (home, destinations, experiences, planner)
- `src/api/client.ts` — Axios instance with interceptors

## Styling conventions

- Tailwind + utility variants for spacing and typography
- Custom classes in `src/index.css` for reusable glass cards, section headings
- Google Fonts: Inter + Playfair Display

## Data flow

Redux thunks fetch data from the backend REST API (`/api/destinations`, `/api/experiences`, `/api/itineraries`). Derived selectors drive filters and itinerary recommendations client-side.
