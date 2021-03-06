import {
  LOADING,
  GET_LISTING_BY_CAT,
  GET_LISTING_BY_CAT_LOADMORE
} from "../constants/actionTypes";
import axios from "axios";

const POSTS_PER_PAGE = 12;

export const getListingByCat = (categoryId, taxonomy) => dispatch => {
  dispatch({
    type: LOADING,
    loading: true
  });
  axios
    .get(`list/listings`, {
      params: {
        page: 1,
        postsPerPage: POSTS_PER_PAGE,
        [taxonomy]: categoryId
      }
    })
    .then(res => {
      dispatch({
        type: GET_LISTING_BY_CAT,
        payload: res.data
      });
      dispatch({
        type: LOADING,
        loading:
          (res.data.oResults && res.data.oResults.length > 0) ||
          res.data.status === "error"
            ? false
            : true
      });
    })
    .catch(err => console.log(err.message));
};

export const getListingByCatLoadmore = (
  next,
  categoryId,
  taxonomy
) => dispatch => {
  return axios
    .get(`list/listings`, {
      params: {
        page: next,
        postsPerPage: POSTS_PER_PAGE,
        [taxonomy]: categoryId
      }
    })
    .then(res => {
      dispatch({
        type: GET_LISTING_BY_CAT_LOADMORE,
        payload: res.data
      });
    })
    .catch(err => console.log(err.message));
};
