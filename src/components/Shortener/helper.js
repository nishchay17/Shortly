import axios from "axios";
import URL from "../../API";

export const getShortLink = (originalLink) => {
  return axios
    .get(`${URL}/shorten?url=${originalLink}`)
    .then((response) => {
      if (response.data.ok === false) {
        const data = { ok: false, error: response.data.error };
        return data;
      }
      const link = response.data.result.full_short_link;
      const data = { ok: true, link };
      return data;
    })
    .catch((error) => {
      const data = { ok: false, error };
      return data;
    });
};
