import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home'
import DestinationsPage from './pages/Destinations'
import ExperiencesPage from './pages/Experiences'
import PlannerPage from './pages/Planner'
import StoriesPage from './pages/Stories'
import AboutPage from './pages/About'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/plan" element={<PlannerPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
