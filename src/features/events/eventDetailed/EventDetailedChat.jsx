import React from "react";
import {
  Segment,
  Header,
  Button,
  CommentAction,
  Form,
  FormTextArea,
  CommentText,
  CommentMetadata,
  CommentAuthor,
  CommentContent,
  CommentAvatar,
  Comment,
  CommentGroup,
  CommentActions,
} from "semantic-ui-react";

export default function EventDetailedChat() {
  return (
    <>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: "none" }}
      >
        <Header>Chat about this event</Header>
      </Segment>

      <Segment attached>
        <CommentGroup>
          <Comment>
            <CommentAvatar src="/assets/images/user.png" />
            <CommentContent>
              <CommentAuthor as="a">Matt</CommentAuthor>
              <CommentMetadata>
                <div>Today at 5:42PM</div>
              </CommentMetadata>
              <CommentText>How artistic!</CommentText>
              <CommentActions>
                <Comment.Action>Reply</Comment.Action>
              </CommentActions>
            </CommentContent>
          </Comment>

          <Comment>
            <Comment.Avatar src="/assets/images/user.png" />
            <CommentContent>
              <CommentAuthor as="a">Elliot Fu</CommentAuthor>
              <CommentMetadata>
                <div>Yesterday at 12:30AM</div>
              </CommentMetadata>
              <CommentText>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </CommentText>
              <CommentActions>
                <CommentAction>Reply</CommentAction>
              </CommentActions>
            </CommentContent>
            <CommentGroup>
              <Comment>
                <CommentAvatar src="/assets/images/user.png" />
                <CommentContent>
                  <CommentAuthor as="a">Jenny Hess</CommentAuthor>
                  <CommentMetadata>
                    <div>Just now</div>
                  </CommentMetadata>
                  <CommentText>Elliot you are always so right :)</CommentText>
                  <CommentActions>
                    <CommentAction>Reply</CommentAction>
                  </CommentActions>
                </CommentContent>
              </Comment>
            </CommentGroup>
          </Comment>

          <Comment>
            <CommentAvatar src="/assets/images/user.png" />
            <CommentContent>
              <CommentAuthor as="a">Joe Henderson</CommentAuthor>
              <CommentMetadata>
                <div>5 days ago</div>
              </CommentMetadata>
              <CommentText>Dude, this is awesome. Thanks so much</CommentText>
              <CommentAction>
                <CommentAction>Reply</CommentAction>
              </CommentAction>
            </CommentContent>
          </Comment>

          <Form reply>
            <FormTextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </CommentGroup>
      </Segment>
    </>
  );
}
