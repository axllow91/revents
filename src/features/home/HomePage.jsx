import React from "react";
import {
  Header,
  Container,
  Image,
  Segment,
  Button,
  Icon,
} from "semantic-ui-react";

export default function HomePage({ history }) {
  // function navigateToEvents() {
  //   history.push('/events');
  // }

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/images/logo.png"
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}