import React from "react";

import EventListItem from "./EventListItem";

export default function EventList({ events }) {
  return (
    <>
      {events.map((event) => (
        // tell me what event you want to select
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
}
