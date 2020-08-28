import { OPEN_WHEATER_API_KEY } from "../config/Contants";
import OpenWheater from "../api/OpenWheater";

class ClimateController {

  static async _getClimate(lat, lon) {
    console.log(lat, lon)
    try {
      const response = await OpenWheater.get("/weather", {
        params: { appid: OPEN_WHEATER_API_KEY, lat, lon },
      });
      if (response.status === 200) {
        const { name } = response.data;
        const { temp } = response.data.main;
  
        const location = {
          name,
          temp: temp - 273.15,
        };
        return location;
      }
      throw new Error('OpenWheater api has failure the request');  
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong!');  
    }
    
  }
}

export default ClimateController;
