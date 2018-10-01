import * as React from "react";
import { connect } from "react-redux";
import { RootState, UserSettingsState } from "../store/models";
import * as TMEvents from "../api/TMEvents";
import { EventItem } from "./EventItem";
import { SearchBar } from "./SearchBar";
import styled from "react-emotion";
import { Loader } from "./Loader";

interface MappedStateProps {
  events: TMEvents.Event[];
  isSearching: boolean;
  userSettings: UserSettingsState;
}

type Props = MappedStateProps;

const EventListContainer = styled("div")`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 19rem);
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;

  > {
    margin: 0 auto;
    max-width: 60rem;
  }
`;

const Center = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled("div")`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;

  > {
    margin: 0 auto;
    max-width: 60rem;
  }
`;

const Container = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NoResults = styled("div")`
  margin: 2rem;
  text-align: center;
  color: #ccc;
  font-size: 1.125rem;
`;

const SearchHint = styled("small")`
  color: #ccc;
  font-size: 0.75rem;
  padding: 0.5rem 0;
`;

export class _Home extends React.Component<Props> {
  public render() {
    return (
      <Container>
        <SearchBarContainer>
          <SearchBar />
          <SearchHint>
            {this.props.userSettings.coordinates
              ? `Search around coordinates: ${
                  this.props.userSettings.coordinates.latitude
                }, ${this.props.userSettings.coordinates.longitude}`
              : `Search in country: ${this.props.userSettings.countryCode}`}
          </SearchHint>
        </SearchBarContainer>

        {this.props.isSearching ? (
          <Center>
            <Loader />
          </Center>
        ) : this.props.events.length > 0 ? (
          <div>
            <EventListContainer>
              {this.props.events.map(event => (
                <EventItem key={event.id} event={event} />
              ))}
            </EventListContainer>
          </div>
        ) : (
          <Center>
            <NoResults>No events found so far.</NoResults>
          </Center>
        )}
      </Container>
    );
  }
}

export const Home = connect(
  (state: RootState): MappedStateProps => ({
    events: state.events.items,
    isSearching: state.events.isSearching,
    userSettings: state.userSettings
  })
)(_Home);
