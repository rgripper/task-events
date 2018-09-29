import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/models";

interface MappedStateProps {
  events: unknown[];
  isSearching: boolean;
}

interface MappedDispatchProps {
  onPlayTrailer: (id: number) => void;
}

type Props = MappedStateProps & MappedDispatchProps;

class _Home extends React.Component<Props> {
  public render() {
    return "Lets see...";
  }
}

export const Home = connect(
  // (state: State): MappedStateProps => ({

  // }),
  // ({ trailer }: any): MappedDispatchProps => ({
    
  // })
)(_Home);
