import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as ReactDom from 'react-dom'
import ProdutEdit from '../admin/ProdutEdit'
import renderer from 'react-test-renderer'
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new EnzymeAdapter() });


it('can render the About page', () => {
  const tree = renderer.create(<ProdutEdit />).toJSON();
  expect(tree).toMatchSnapshot();
})

describe("component test", () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDom.render(<ProdutEdit />, container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it("contains the ellements", () => {
    expect(container.querySelector("[data-testid = 'pro-input']")?.getAttribute('name')).toBe('Title');
    expect(container.querySelector("[data-testid = 'pro-textarea']")?.getAttribute('name')).toBe('body');
  })
})


test("contains correct text", () => {
  render(<ProdutEdit />);
  const title = screen.getByText("Title");
  expect(title).toBeInTheDocument();
  const description = screen.getByText("Description");
  expect(description).toBeInTheDocument();
  const button = screen.getByTestId("submit");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});


test("should display a form with values ", () => {
  render(<ProdutEdit />);
  const input = screen.getByTestId("pro-input");
  expect(input).toBeInTheDocument();
  fireEvent.change(input);
  const textarea = screen.getByTestId("pro-textarea");
  expect(textarea).toBeInTheDocument();
  fireEvent.change(textarea);

  const form = screen.getByTestId("pro-form");
  expect(form).toBeInTheDocument();
  expect(form).toHaveFormValues({
    Title: "",
    body:""
  });
});