import * as React from "react";
import * as TMEvents from "../api/TMEvents";
import styled from "react-emotion";

interface Props {
  event: TMEvents.Event;
}

const Container = styled("div")`
  position: relative;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  > img {
    flex: 1;
  }
`;

const ThumbImage = styled("img")`
  height: 14rem;
  object-fit: cover;

  &[src=""] {
    background: #eee;
  }
`;

const Price = styled('span')`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  background-color: #ccc;
  opacity: 0.75;
`;

const Description = styled("div")`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  padding: 0.5rem;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const getThumbImage = (images: TMEvents.Image[]): TMEvents.Image | undefined =>
  images.filter(x => x.width > 300).sort((a, b) => a.width - b.width)[0];

export const EventItem: React.SFC<Props> = props => {
  const image = getThumbImage(props.event.images);
  const priceRange = props.event.priceRanges && props.event.priceRanges[0];
  return (
    <Container>
      {priceRange && <Price>{priceRange.min} - {priceRange.max} AUD</Price>}
      <ThumbImage src={image ? image.url : ""} />
      <Description>{props.event.name}</Description>
    </Container>
  );
};
