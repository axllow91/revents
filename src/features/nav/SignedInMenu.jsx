import React from "react";
import {
  MenuItem,
  Image,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signOutFirebase } from "../../app/firestore/firebaseService";

export default function SignedInMenu() {
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();
  console.log(useSelector((state) => state.auth));

  // is async because we want to wait for the user to be signout
  // before to be pushed to the new location (home screen )
  async function handleSignOut() {
    try {
      await signOutFirebase();
      history.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <MenuItem position="right">
      <Image
        avatar
        spaced="right"
        src={currentUser.photoURL || "/assets/images/user.png"}
      />
      <Dropdown pointing="top left" text={currentUser.displayName}>
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to="/createEvent"
            text="Create event"
            icon="plus"
          />
          <DropdownItem text="My Profile" icon="user" />
          <DropdownItem
            as={Link}
            to="/account"
            text="My Account"
            icon="settings"
          />
          <DropdownItem onClick={handleSignOut} text="Sign out" icon="power" />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
}
