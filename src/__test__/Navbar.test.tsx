import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as ReactDom from 'react-dom'
import Navebar from '../admin/Navebar'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new EnzymeAdapter() });


it('can render the About page', () => {
    const tree = renderer.create(<Navebar />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('renders learn react link', () => {
  
    const div = document.createElement("div")
    ReactDom.render(<Navebar />,div);
  
});

test("contains correct text", () => {
    render(<Navebar />);
    
    const link = screen.getByText(/home/i);
    expect(link).toBeInTheDocument();
    fireEvent.click(link);

    const Menu = screen.getByText("Menu");
    expect(Menu).toBeInTheDocument();
    const About = screen.getByText("About");
    expect(About).toBeInTheDocument();
    const Contact = screen.getByText("Contact");
    expect(Contact).toBeInTheDocument();
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
  });