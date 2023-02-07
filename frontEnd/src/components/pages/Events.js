import React, { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";
import EventsList from "../EventsList";

export default function Events() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={ <p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={ events }>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Could not fetch events."}, {
        status: 500,
    });
  } else
    return response;
}

export function loader() {
  return defer({
    events: loadEvents(),
  })
}
