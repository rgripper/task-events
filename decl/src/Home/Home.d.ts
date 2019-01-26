import * as React from "react";
import { UserSettingsState } from "../store/models";
import * as TMEvents from "../api/TMEvents";
interface MappedStateProps {
    events: TMEvents.Event[];
    isSearching: boolean;
    userSettings: UserSettingsState;
}
declare type Props = MappedStateProps;
export declare class _Home extends React.Component<Props> {
    render(): JSX.Element;
}
export declare const Home: import("react-redux").ConnectedComponentClass<typeof _Home, Pick<MappedStateProps, never>>;
export {};
