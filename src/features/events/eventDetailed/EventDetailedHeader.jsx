import React from "react";
import { Link } from "react-router-dom";
import {
  SegmentGroup,
  Segment,
  Image,
  ItemGroup,
  Item,
  ItemContent,
  Header,
  Button,
} from "semantic-ui-react";

import { format } from "date-fns";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

export default function EventDetailedHeader({ event }) {
  return (
    <SegmentGroup>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />
        <Segment basic style={eventImageTextStyle}>
          <ItemGroup>
            <Item>
              <ItemContent>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>Event date: {format(event.date, "MMMM d, yyyy h:mm a")}</p>
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Segment>
      </Segment>
      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button
          as={Link}
          to={`/manage/${event.id}`}
          color="orange"
          floated="right"
        >
          Manage Event
        </Button>
      </Segment>
    </SegmentGroup>
  );
}
