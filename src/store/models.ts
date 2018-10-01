import { createModel } from "@rematch/core";
import { TMEventService } from "../api/TMEventService";
import * as TMEvents from "../api/TMEvents";

const tmEventService = new TMEventService();

export interface RootState {
  events: typeof events.state;
  userSettings: typeof userSettings.state;
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
    async load(keyword: string, state: RootState) {
      if (keyword.length < 3) return;

      this.startKeywordSearch(keyword);
      const events = await tmEventService.getEvents(keyword, state.userSettings);
      this.trySetKeywordSearchResults(keyword, events);
    }
  }
});

export interface UserSettingsState {
  countryCode: string;
  coordinates?: Coordinates;
}

export const userSettings = createModel({
  state: { countryCode: 'AU' } as UserSettingsState,
  reducers: {
    setCoordinates(state: UserSettingsState, coordinates: Coordinates): UserSettingsState {
      return { ...state, coordinates };
    },
  },
  effects: {
    async requestLocation() {
      navigator.geolocation.getCurrentPosition(position => this.setCoordinates(position.coords), error => console.log(error));
    }
  }
});