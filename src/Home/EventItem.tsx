import * as React from "react";
import * as TMEvents from '../api/TMEvents';

interface Props {
  event: TMEvents.Event
}

export const EventItem: React.SFC<Props> = props => (
  <div>
    {props.event.name}
  </div>
)