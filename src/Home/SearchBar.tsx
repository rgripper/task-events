import * as React from "react";
import { RootState } from "../store/models";
import { connect } from "react-redux";
import memoizeOne from "memoize-one";
import { debounce } from "throttle-debounce";
import styled from 'react-emotion';

interface MappedStateProps {
  value: string;
}

interface MappedDispatchProps {
  onChange: (value: string) => void;
}

type Props = MappedStateProps & MappedDispatchProps;

const Container = styled('div')`
  display: flex;
  border: 0.075rem solid #ccc;
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-items: center;
  color: #ccc;

  > i {
    margin-right: 0.5rem;
  }

  > input {
    flex: 1;
    border: 0;
    outline: 0;
    font-size: 1.125rem;
  }
`;

class _SearchBar extends React.Component<Props> {

  // make sure we cache and use the same debouncer
  memoizeDebounce = memoizeOne(fun => debounce(300, fun));

  render() {
    return (
      <Container>
        <i className="fa fa-search" />
        <input
          type="text"
          placeholder="Search keyword, e.g. music..."
          onChange={event => this.memoizeDebounce(this.props.onChange)(event.currentTarget.value)}
        />
      </Container>
    );
  }
}

export const SearchBar = connect(
  (state: RootState): MappedStateProps => ({
    value: state.events.keyword
  }),
  ({ events }: any): MappedDispatchProps => ({
    onChange: (keyword: string) => events.load(keyword)
  })
)(_SearchBar);