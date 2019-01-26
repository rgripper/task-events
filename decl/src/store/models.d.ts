import * as TMEvents from "root/api/TMEvents";
export interface RootState {
    events: typeof events.state;
    userSettings: typeof userSettings.state;
}
export interface EventsState {
    items: TMEvents.Event[];
    keyword: string;
    isSearching: boolean;
}
export declare const events: {
    state: EventsState;
    reducers: {
        startKeywordSearch(state: EventsState, keyword: string): EventsState;
        trySetKeywordSearchResults(state: EventsState, keyword: string, items: TMEvents.Event[]): EventsState;
    };
    effects: {
        load(this: {
            [key: string]: (payload?: any, meta?: any) => import("@rematch/core").Action<any, any>;
        }, keyword: string, state: RootState): Promise<void>;
    };
};
export interface UserSettingsState {
    countryCode: string;
    coordinates?: Coordinates;
}
export declare const userSettings: {
    state: UserSettingsState;
    reducers: {
        setCoordinates(state: UserSettingsState, coordinates: Coordinates): UserSettingsState;
    };
    effects: {
        requestLocation(this: {
            [key: string]: (payload?: any, meta?: any) => import("@rematch/core").Action<any, any>;
        }): Promise<void>;
    };
};
