import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import TestMap from "./TestMap";
import TestPlaceInput from "./TestPlaceInput";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  // A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
  const data = useSelector((state) => state.test.data);

  const { loading } = useSelector((state) => state.async);

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const [location, setLocation] = useState(defaultProps);

  function handleSetLocation(latLng) {
    setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
  }

  return (
    <>
      <h1>Testing 1,2,3</h1>
      <h3>The data is: {data}</h3>
      <Button
        name="increment"
        loading={loading && target === "increment"} // load if we decrement
        onClick={(e) => {
          dispatch(increment(10));
          setTarget(e.target.name); // make sure we display the loading if we are doing the loading
        }}
        content="Increment"
        color="green"
      />

      <Button
        name="decrement"
        loading={loading && target === "decrement"} // load if we decrement
        onClick={(e) => {
          dispatch(decrement(5));
          setTarget(e.target.name); // make sure we display the loading if we are doing the loading
        }}
        content="Decrement"
        color="red"
      />

      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content="Open Modal"
        color="teal"
      />

      <div style={{ marginTop: 15 }}>
        <TestPlaceInput setLocation={handleSetLocation} />
        <TestMap location={location} />
      </div>
    </>
  );
}
