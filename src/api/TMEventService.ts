import { ticketmasterApi } from 'appSettings.json';
import axios from 'axios';
import * as TMEvents from './TMEvents';

const client = {
  get <T>(path: string, params: object) {
    return axios.get<T>(ticketmasterApi.baseUrl + path, { params: { apikey: ticketmasterApi.key, ...params } }) 
  }
}

export class TMEventService {
  async getEvents(countryCode: string): Promise<TMEvents.Event[]> {
    const response = await client.get<{ _embedded: TMEvents.EmbeddedEvents }>('events', { countryCode });
    return response.data._embedded.events;
  }
}
