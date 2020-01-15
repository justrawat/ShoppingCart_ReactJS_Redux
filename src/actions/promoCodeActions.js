import { PROMO_CODE } from "./types";

//dispatching an action using a handle chnge event.
export const handleChange = e => dispatch => {
  dispatch({
    type: PROMO_CODE,
    payload: e.target.value
  });
};
