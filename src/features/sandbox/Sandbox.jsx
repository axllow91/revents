import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  // A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>Testing 1,2,3</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(10))}
        content="Increment"
        color="green"
      />

      <Button
        onClick={() => dispatch(decrement(5))}
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
    </>
  );
}
