import * as React from "react";
import { TMEventService } from "../api/TMEventService";
import { connect } from "react-redux";
import { State } from "../store/models";


interface MappedStateProps {
  shows: SearchTVResult[];
  isSearching: boolean;
  thumbConfig: undefined | ((path: string) => string);
}

interface MappedDispatchProps {
  onPlayTrailer: (id: number) => void;
}

type Props = MappedStateProps & MappedDispatchProps;

class _Home extends React.Component<Props> {
  public render() {

  }
}

export const Home = connect(
  (state: State): MappedStateProps => ({

  }),
  ({ trailer }: any): MappedDispatchProps => ({
    
  })
)(_Home);
