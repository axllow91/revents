import React, { useState } from "react";
import {
  Segment,
  GridColumn,
  Icon,
  SegmentGroup,
  Grid,
  Button,
} from "semantic-ui-react";

import { format } from "date-fns";
import EventDetailedMap from "./EventDetailedMap";

export default function EventDetailedInfo({ event }) {
  const [mapOpen, setMapOpenToggle] = useState(false);

  return (
    <SegmentGroup>
      <Segment>
        <Grid>
          <GridColumn width={1}>
            <Icon size="large" color="teal" name="info" />
          </GridColumn>
          <GridColumn width={15}>
            <p>{event.description}</p>
          </GridColumn>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <GridColumn width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </GridColumn>
          <GridColumn width={15}>
            <span>{format(event.date, "MMMM d, yyyy h:mm a")}</span>
          </GridColumn>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <GridColumn width={1}>
            <Icon name="marker" size="large" color="teal" />
          </GridColumn>
          <GridColumn width={11}>
            <span>{event.venue.address}</span>
          </GridColumn>
          <GridColumn width={4}>
            <Button
              onClick={() => setMapOpenToggle(!mapOpen)}
              color="teal"
              size="tiny"
              content={mapOpen ? "Hide Map" : "Show Map"}
            />
          </GridColumn>
        </Grid>
      </Segment>
      {mapOpen && <EventDetailedMap latLng={event.venue.latLng} />}
    </SegmentGroup>
  );
}
