import axios from "axios";

const giphyHost = "https://api.giphy.com";
const giphySearchUrl = "/v1/gifs/search";
const giphyApiKey = "TVSF9MBADBjL1LmsuaQfIUE0feocNwpV";

export const searchGif = query =>
  axios
    .get(`${giphyHost}${giphySearchUrl}`, {
      params: {
        api_key: giphyApiKey,
        q: query
      }
    })
    .then(res => res.data)
    .catch(e => {
      console.error(e);
    });

export const mapGifUrls = ({
  images: {
    preview_gif: { url }
  },
  id
}) => ({ url, id });
