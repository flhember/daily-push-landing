import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DailyPushLanding from './DailyPushLanding';
import SupportPage from './SupportPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DailyPushLanding />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}
   