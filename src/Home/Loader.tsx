import styled from "react-emotion";
import * as React from "react";

export const Container = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.125rem;
  width: 8rem;
  height: 8rem;

  > div {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: #ccc;
    transform: scale(0);
    transform-origin: center center;
    animation: loader 2s infinite linear;

    &:nth-of-type(7) {
    }

    &:nth-of-type(1),
    &:nth-of-type(5),
    &:nth-of-type(9) {
      animation-delay: 0.4s;
    }

    &:nth-of-type(4),
    &:nth-of-type(8) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(2),
    &:nth-of-type(6) {
      animation-delay: 0.6s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.8s;
    }
  }

  @keyframes loader {
    0% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

export const Loader = () => (
  <Container>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </Container>
);
