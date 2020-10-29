import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";

import { useSelector } from "react-redux";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import EventFilters from "./EventFilters";

export default function EventDashboard() {
  // use a selector
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  // while we are waiting for the events to be loaded
  // we are going to display a loading component
  if(loading) return <LoadingComponent />

  return (
    <Grid>
      <Grid.Column width={10}>

        { loading && 
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        }

        <EventList events={events} />
      </Grid.Column>

      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
