import './styles/main.scss';
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import { Route, Routes } from 'react-router-dom';
import SignUp from './assets/pages/SignUpPage';
import SignIn from './assets/pages/SignInPage';
import Dashboard from './assets/pages/Dashboard';
import EventPage from './assets/pages/EventPage';
import EventDetailsPage from './assets/pages/EventDetailsPage';
import BookEventPage from './assets/pages/BookEventPage';
import ProtectedRoute from './assets/routing/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route element={<CenterLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><EventPage/></ProtectedRoute>} />
        <Route path="/events/:id" element={<ProtectedRoute><EventDetailsPage/></ProtectedRoute>} />
        <Route path="/events/booking/:id" element={<ProtectedRoute><BookEventPage/></ProtectedRoute>} />
      </Route>
    </Routes>
  )
}

export default App