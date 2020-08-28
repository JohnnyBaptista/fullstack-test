import { SpotifyAuthorization } from "../api/Spotify";
import { stringify } from "querystring";
import { SPOTIFY_AUTHORIZATION } from '../config/Contants'
class AuthController {

  async getSpotifyAccess() {
    try {
      const response = await SpotifyAuthorization.post(
        "/token",
        stringify({
          grant_type: "client_credentials",
        }),
        {
          headers: {
            Authorization: `Basic ${SPOTIFY_AUTHORIZATION}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if(response.status === 200) return response.data.access_token;
    } catch (err) {
      console.log(err.response.data);
    }
  }
}

export default AuthController;
