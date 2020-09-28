import React from "react";
import {
  MenuItem,
  Image,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignedInMenu({ signOut }) {
  return (
    <MenuItem position="right">
      <Image avatar spaced="right" src={"/assets/images/user.png"} />
      <Dropdown pointing="top left" text="Bob">
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to="/createEvent"
            text="Create event"
            icon="plus"
          />
          <DropdownItem text="My Profile" icon="user" />
          <DropdownItem onClick={signOut} text="Sign out" icon="power" />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
}
