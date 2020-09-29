//
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

// action creaters
export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

const initialState = null;

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      // pass the properties when we are opening a modal
      // and return them as a object
      const { modalType, modalProps } = payload;
      return { modalType, modalProps }; // inside state will have this 

    case CLOSE_MODAL:
      return null;

    default:
      return state;
  }
}
