import { ticketmasterApi } from "appSettings.json";
import axios from "axios";
import * as TMEvents from "./TMEvents";
import * as Geohash from "latlon-geohash";

const client = {
  get<T>(path: string, params: object) {
    return axios.get<T>(ticketmasterApi.baseUrl + path, {
      params: { apikey: ticketmasterApi.key, ...params }
    });
  }
};

export class TMEventService {
  async getEvents(
    keyword: string,
    location: { countryCode: string } | { coordinates: Coordinates }
  ): Promise<TMEvents.Event[]> {
    const locationParam =
      "coordinates" in location
        ? {
            geopoint: Geohash.encode(
              location.coordinates.latitude,
              location.coordinates.longitude
            )
          }
        : location;

    const response = await client.get<TMEvents.EventsResponse>("events", {
      keyword,
      ...locationParam
    });
    return response.data._embedded.events;
  }
}
