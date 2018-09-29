import * as React from "react";
import { shallow } from "enzyme";
import { _Home } from "./Home";

describe("<Home />", () => {
  const setup = () => {
    return shallow(<_Home isSearching={false} events={[]} />);
  };

  it("should render successfully", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
