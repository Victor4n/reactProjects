import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientId = "7fe03f89ce364ddab771d00f2edb92be";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

axios.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('Error en la solicitud Axios:', error);
      return Promise.reject(error);
    }
  );

export default apiClient;