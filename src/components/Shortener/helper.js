import axios from "axios";
import URL from "../../API";

export const getShortLink = (originalLink) => {
  return axios
    .post(URL, { long_url: originalLink }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    })
    .then((response) => {
      if (response.data.ok === false) {
        const data = { ok: false, error: response.data.error };
        return data;
      }
      const link = response.data.link;
      const data = { ok: true, link };
      return data;
    })
    .catch((error) => {
      const data = { ok: false, error };
      return data;
    });
};
