"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'http://localhost:4173', 'http://127.0.0.1:5173'],
}));
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
app.get('/api/hero', (_req, res) => {
    res.json(data_1.hero);
});
app.get('/api/destinations', (req, res) => {
    const { season, region, tag } = req.query;
    const filtered = data_1.destinations.filter((destination) => {
        const matchSeason = season ? destination.seasons.includes(String(season)) : true;
        const matchRegion = region ? destination.region === String(region) : true;
        const matchTag = tag ? destination.tags.includes(String(tag)) : true;
        return matchSeason && matchRegion && matchTag;
    });
    res.json(filtered);
});
app.get('/api/itineraries', (req, res) => {
    const { season, pace } = req.query;
    const filtered = data_1.itineraries.filter((itinerary) => {
        const matchSeason = season ? itinerary.season === String(season) : true;
        const matchPace = pace ? itinerary.pace === String(pace) : true;
        return matchSeason && matchPace;
    });
    res.json(filtered);
});
app.get('/api/experiences', (req, res) => {
    const { category, season } = req.query;
    const filtered = data_1.experiences.filter((experience) => {
        const matchCategory = category ? experience.category === String(category) : true;
        const matchSeason = season ? experience.season === String(season) : true;
        return matchCategory && matchSeason;
    });
    res.json(filtered);
});
app.get('/api/festivals', (_req, res) => {
    res.json(data_1.festivals);
});
app.get('/api/stories', (_req, res) => {
    res.json(data_1.stories);
});
app.post('/api/plan', (req, res) => {
    var _a;
    const payload = req.body;
    if (!(payload === null || payload === void 0 ? void 0 : payload.name) || !(payload === null || payload === void 0 ? void 0 : payload.email) || !(payload === null || payload === void 0 ? void 0 : payload.travelWindow) || !((_a = payload === null || payload === void 0 ? void 0 : payload.preferences) === null || _a === void 0 ? void 0 : _a.length)) {
        return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }
    const recommendation = data_1.planners.generateRecommendation(payload);
    res.json({ success: true, recommendation });
});
app.listen(PORT, () => {
    console.log(`Armenian Horizons API running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map