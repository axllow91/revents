import React from "react";
import {
  Segment,
  ItemGroup,
  Item,
  ItemImage,
  ItemContent,
  ItemHeader,
} from "semantic-ui-react";

export default function EventDetailedSidebar({ attendees }) {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees.length} {attendees.style > 1 ? "People" : "Person"} Going
      </Segment>
      <Segment attached>
        <ItemGroup relaxed divided>
          {attendees.map((attendee) => (
            <Item key={attendee.id} style={{ position: "relative" }}>
              <ItemImage
                size="tiny"
                src={attendee.photoURL || "/assets/images/user.png"}
              />
              <ItemContent verticalAlign="middle">
                <ItemHeader as="h3">
                  <span>{attendee.name}</span>
                </ItemHeader>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </Segment>
    </>
  );
}
