import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import './sass/main.scss';
import store from './redux/store';
// Routes
import PageRoutes from './components/routing/PageRoutes';
// import SecurePageRoutes from './components/routing/SecurePageRoutes';
// pages
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Profile from './pages/secure/Profile';
import Users from './pages/secure/Users';
import BoardRoom from './pages/secure/BoardRoom';
import NotFound from './pages/NotFound';
// Components
import Meta from './components/Meta';
import NavBar from './components/NavBar';
import Spinner from './components/UI/Spinner';
import CreateUpdateForm from './pages/CreateUpdateForm';

// Admin Pages
/* - can access all routes here and below
New Project
Assign Roles
Add Users || Remove Users (from system/app)
*/

// Project Manager Pages
/* - can access all routes here and below
New Ticket
Assign Members || Remove Members (to projects & tickets)
Update Project Status / Desc
*/

// Developer Pages
/* - Access only data you are assigned to
Dashboard
My Tickets
My Projects
Close Tickets / Update Tickets (creates a ticket history)
Comments
Sign Out
Sign In
Sign Up
*/

function App() {
  return (<>
    <Provider store={store} >
      <Meta />
      <Router>
        <main className="container">
          <NavBar />
          <Suspense
            fallback={
              <main className='container'><Spinner /></main>
            }
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects/new" element={<CreateUpdateForm />} />
              <Route path="/tickets/new" element={<CreateUpdateForm />} />
              <Route path="/projects/:proj_id/update" element={<CreateUpdateForm />} />
              <Route path="/tickets/:tick_id/update" element={<CreateUpdateForm />} />
              <Route path="/projects/:proj_id" element={<Details />} />
              <Route path="/tickets/:tick_id" element={<Details />} />
              <Route path="/users/:user_id" element={<Details />} />
              <Route
                path="/profile"
                element={<PageRoutes component={Profile} />}
              />
              <Route
                path="/tasks"
                element={<PageRoutes component={BoardRoom} />}
              />
              <Route
                path="/admin/users-list"
                element={<PageRoutes component={Users} />}
              />
              {/* <Route path="/admin/users-list" element={<Users />} /> */}
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/* <Route path="/tasks" element={<BoardRoom />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense> 
        </main>
      </Router>
      <ToastContainer
        position='bottom-left'
        newestOnTop={true}
        autoClose={5000}
        closeOnClick
        pauseOnHover
      />
    </Provider>
  </>);
};
export default App;