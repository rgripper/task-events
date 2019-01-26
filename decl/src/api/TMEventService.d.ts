import * as TMEvents from "./TMEvents";
export declare class TMEventService {
    getEvents(keyword: string, location: {
        countryCode: string;
    } | {
        coordinates: Coordinates;
    }): Promise<TMEvents.Event[]>;
}
