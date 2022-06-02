import React from "react";  
import { create } from "react-test-renderer";
import { Creation } from "../src/screens/Creation";

const tree = create(<Creation/>);
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
        navigate: mockedNavigate,
      }),
  };
});


test('snapshot', ()=>{
    expect(tree).toMatchSnapshot();
})