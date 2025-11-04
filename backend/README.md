# Aurora Armenia - Backend

Express 5 API serving curated travel data for the Aurora Armenia experience.

## Quick start

```bash
cd backend
npm install
npm run dev        # starts nodemon on http://localhost:5000

# production start
npm run start
```

## Endpoints

- `GET /api/destinations` — curated regions with descriptions, highlights, and seasons
- `GET /api/experiences` — immersive experiences linked to local partners
- `GET /api/itineraries` — multi-day itineraries with day-by-day detail
- `POST /api/custom-itineraries` — accept planner briefs (returns reference id)

Data lives in `data/travelData.js`. Extend or connect to a database as needed.
