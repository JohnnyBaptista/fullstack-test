import axios from 'axios';

export const Spotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

export const SpotifyAuthorization = axios.create({
  baseURL: 'https://accounts.spotify.com/api',
});

