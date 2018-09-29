import {
  TMEventService
} from "../api/TMEventService";
import { createModel } from "@rematch/core";

const tmEventService = new TMEventService();

export interface State {
  events: typeof events.state;
}

export interface EventsState {
  items: unknown[];
  query: string;
  isSearching: boolean;
}

export const events = createModel({
  state: { items: [], query: '', isSearching: false } as EventsState,
  reducers: {

  },
  effects: {

  }
});