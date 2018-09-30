import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../store/models";
import * as TMEvents from "../api/TMEvents";
import { EventItem } from "./EventItem";
import { SearchBar } from "./SearchBar";

interface MappedStateProps {
  events: TMEvents.Event[];
  isSearching: boolean;
}

type Props = MappedStateProps;

export class _Home extends React.Component<Props> {
  public render() {
    return (
      <div>
        <SearchBar />
        <div>
          {this.props.events.map(event => (
            <EventItem event={event} />
          ))}
        </div>
      </div>
    );
  }
}

export const Home = connect(
  (state: RootState): MappedStateProps => ({
    events: state.events.items,
    isSearching: state.events.isSearching
  })
)(_Home);
