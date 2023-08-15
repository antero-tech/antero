import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import HomePage from './pages/homePage/HomePage';
import ContactPage from './pages/contactPage/ContactPage';
import OurWorkPage from './pages/ourWorkPage/OurWorkPage';
import workData from './assets/work-cards-data.ts';
import Navbar from './sharedComponents/Navbar';
import { RouterProvider, Router, Route, RootRoute } from '@tanstack/router';

//defines root route and creates outlet for children to be render within
const rootRoute = new RootRoute({
  component: Navbar,
});

//defines child routes
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
const ourWorkRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'our-work',
  component: () => <OurWorkPage workData={workData} />,
});
const contactUsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'contact-us',
  component: ContactPage,
});
// TO DO: add sub route for individual works within our-work route

//defines route tree assembly
//TO DO: add children route on our work route that handles individual work
const routeTree = rootRoute.addChildren([
  indexRoute,
  ourWorkRoute,
  contactUsRoute,
]);

// create router instance
const router = new Router({ routeTree });

//registering router types
//explained here https://tanstack.com/router/v1/docs/guide/routes#registering-router-types
declare module '@tanstack/router' {
  interface Register {
    // This infers the type of our router and registers it across the entire project
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
