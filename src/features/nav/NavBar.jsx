import React, { useState } from "react";
import { Menu, MenuItem, Container, Button } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

function NavBar() {
  const history = useHistory(); // now we have access to the history
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push("/");
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem as={NavLink} exact to="/" header>
          <img src="/assets/images/logo.png" alt="logo" />
          Re-vents
        </MenuItem>
        <MenuItem as={NavLink} to="/events" name="Events" />
        <MenuItem as={NavLink} to="/sandbox" name="Sandbox" />
        {authenticated && (
          <MenuItem as={NavLink} to="/createEvent">
            {/* if we want to call the setFormOpen(true) only like this the App component will try to load and immediatly call this function
                so we need an anonymous function () => setFormOpen(true) that will call the method only when we are trying to click the button
            */}
            <Button positive inverted content="Create Event" />
          </MenuItem>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}

export default NavBar;
