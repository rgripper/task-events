import * as React from "react";
import { RootState } from "../store/models";
import { connect } from "react-redux";
import memoizeOne from "memoize-one";
import { debounce } from "throttle-debounce";

interface MappedStateProps {
  value: string;
}

interface MappedDispatchProps {
  onChange: (value: string) => void;
}

type Props = MappedStateProps & MappedDispatchProps;

class _SearchBar extends React.Component<Props> {

  // make sure we cache and use the same debouncer
  memoizeDebounce = memoizeOne(fun => debounce(300, fun));

  render() {
    return (
      <div>
        <i className="fa fa-search" />
        <input
          type="text"
          placeholder="Search title..."
          onChange={event => this.memoizeDebounce(this.props.onChange)(event.currentTarget.value)}
        />
      </div>
    );
  }
}

export const SearchBar = connect(
  (state: RootState): MappedStateProps => ({
    value: state.events.keyword
  }),
  ({ events }: any): MappedDispatchProps => ({
    onChange: (query: string) => events.load(query)
  })
)(_SearchBar);