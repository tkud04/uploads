import * as types from "../constants/actionTypes";
import axios from "axios";

export const getArticleDetail = articleId => dispatch => {
  return axios
    .get(`posts/${articleId}`)
    .then(res => {
      dispatch({
        type: types.GET_ARTICLE_DETAIL,
        payload: res.data.oResult
      });
    })
    .catch(err => console.log(err.message));
};
