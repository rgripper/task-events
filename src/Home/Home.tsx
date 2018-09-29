import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/models";

interface MappedStateProps {
  events: unknown[];
  isSearching: boolean;
}

interface MappedDispatchProps {

}

type Props = MappedStateProps & MappedDispatchProps;

export class _Home extends React.Component<Props> {
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
