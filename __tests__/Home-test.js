import React from "react";  
import { create } from "react-test-renderer";
import { Home } from "../src/screens/Home";

const tree = create(<Home/>);
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

test('snapshot', ()=>{
    expect(tree).toMatchSnapshot();
})