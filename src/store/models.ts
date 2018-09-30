import { createModel } from "@rematch/core";
import { TMEventService } from "../api/TMEventService";
import * as TMEvents from "../api/TMEvents";

const tmEventService = new TMEventService();

export interface RootState {
  events: typeof events.state;
}

export interface EventsState {
  items: TMEvents.Event[];
  keyword: string;
  isSearching: boolean;
}

export const events = createModel({
  state: { items: [], keyword: "", isSearching: false } as EventsState,
  reducers: {
    startKeywordSearch(state: EventsState, keyword: string): EventsState {
      return { ...state, items: [], keyword, isSearching: true };
    },
    trySetKeywordSearchResults(
      state: EventsState,
      keyword: string,
      items: TMEvents.Event[]
    ): EventsState {
      if (state.keyword !== keyword) {
        return state;
      }

      return { ...state, items, isSearching: false };
    }
  },
  effects: {
    async load(keyword: string) {
      if (keyword.length < 3) return;

      this.startKeywordSearch(keyword);
      const shows = await tmEventService.getEvents("AU", keyword);
      this.trySetKeywordSearchResults(keyword, shows);
    }
  }
});
