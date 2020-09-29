import React from "react";
import { useDispatch } from "react-redux";
import { MenuItem, Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";

export default function SignedOutMenu({ setAuthenticated }) {
  const dispatch = useDispatch();

  return (
    <MenuItem position="right">
      <Button
        onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}
        basic
        inverted
        content="Login"
      />
      <Button
        basic
        inverted
        content="Sign Out"
        style={{ marginLeft: "0.5em" }}
      />
    </MenuItem>
  );
}
