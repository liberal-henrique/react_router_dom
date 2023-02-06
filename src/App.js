import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/pages/Home";
import EventsPage from "./components/pages/EventsPage";
import Events, { loader as eventsLoader } from "./components/pages/Events";
import EventDetailPage, {
  loader as eventsDetailsLoader,
  action as deleteEventAction
} from "./components/pages/EventDetailPage";
import NewEventPage, {
  action as newEventAction,
} from "./components/pages/NewEventPage";
import EditEventPage from "./components/pages/EditEventPage";
import Root from "./components/pages/Root.js";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsPage />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventsDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
