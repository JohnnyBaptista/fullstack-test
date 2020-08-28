import { Spotify } from "../api/Spotify";
import AuthController from "./AuthController";
import ClimateController from "./ClimateController";

class PlaylistController {
  auth = new AuthController();
  lat = 0;
  lon = 0;

  constructor(lat, lon) {
    this.lon = lon;
    this.lat = lat;
  }

  async getPlaylistByTemperature() {
    try {
      const token = await this.auth.getSpotifyAccess();
      if (token) {
        const climate = await ClimateController._getClimate(this.lat, this.lon);
        if (climate) {
          const genre = this.getMusicGenre(climate.temp);
          if (genre) {
            const playlists = await this.getPlaylist(token, genre);
            return { playlists };
          }
        }
      }
      return {};
    } catch (error) {
      console.log(error);
      alert("Something went Wrong!");
    }
  }

  getMusicGenre(temp) {
    let genre = "pop";
    if (temp >= 30) genre = "party";
    else if (temp >= 15 && temp < 30) genre = "pop";
    else if (temp >= 10 && temp <= 14) genre = "rock";
    else genre = "classical";

    return genre;
  }

  async getPlaylist(token, genre) {
    const playlists = await Spotify.get(
      `/browse/categories/${genre}/playlists`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return playlists.data.playlists.items;    
  }
}

export default PlaylistController;
