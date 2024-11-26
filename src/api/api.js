import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = () => {
  return axios
    .get(`${BACKEND_ENDPOINT}/albums/top`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchNewAlbums = () => {
  return axios
    .get(`${BACKEND_ENDPOINT}/albums/new`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchSongs = () => {
  return axios
    .get(`${BACKEND_ENDPOINT}/songs`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
