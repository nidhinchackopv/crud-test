import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import * as ReactDom from 'react-dom'
import Products from '../admin/Products'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new EnzymeAdapter() });


it('can render the About page', () => {
  const tree = renderer.create(<Products />).toJSON();
  expect(tree).toMatchSnapshot();
})

// global.fetch = jest.fn(() => Promise.resolve({
//   tect: () => Promise.resolve({
  
//   })
// }))

// test('hello', () => {
//   const {container} = render(<Products />)
//   expect(container.innerHTML).toBe("string")
// })


describe("component test", () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDom.render(<Products />, container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove(),
    cleanup
  })

  it("table delete and edit", () => {
    expect(container.querySelector("[data-testid = 'table']"))
    expect(container.querySelector("[data-testid = 'delete']"))
    expect(container.querySelector("[data-testid = 'edit']"))
  })
})


test('products', () => {
  
  const div = document.createElement("div")
  ReactDom.render(<Products />,div);
  
});

test("table items", () => {
  render(<Products />);
  const id = screen.getByText("#id");
  expect(id).toBeInTheDocument();
  const Title = screen.getByText("Title");
  expect(Title).toBeInTheDocument();
  const Body = screen.getByText("Body");
  expect(Body).toBeInTheDocument();
  const tbody = screen.getByTestId("tbody");
  expect(tbody).toBeInTheDocument();
  fireEvent.change(tbody)
  });
