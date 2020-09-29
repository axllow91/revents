import React from "react";
import {
  MenuItem,
  Image,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../auth/authActions";

export default function SignedInMenu() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();
  console.log(useSelector((state) => state.auth));

  return (
    <MenuItem position="right">
      <Image
        avatar
        spaced="right"
        src={currentUser.photoURL || "/assets/images/user.png"}
      />
      <Dropdown pointing="top left" text={currentUser.email}>
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to="/createEvent"
            text="Create event"
            icon="plus"
          />
          <DropdownItem text="My Profile" icon="user" />
          <DropdownItem
            onClick={() => {
              dispatch(signOutUser());
              history.push("/");
            }}
            text="Sign out"
            icon="power"
          />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
}
