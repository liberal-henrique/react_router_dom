import React from "react";
import EventItem from "../EventItem";
import { useRouteLoaderData, json, redirect } from "react-router-dom";

export default function EventDetailPage(props) {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else return response;
}

export async function action({ params, request }) {
  const id = params.id;
  const response =  await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  console.log(response);
  if (!response.ok)
    throw json({ message: "Could not delete event." }, {status: 500});
  return redirect("/events");
}
