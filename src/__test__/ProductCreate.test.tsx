import React from 'react';
import { findByTestId, fireEvent, render, screen } from '@testing-library/react';
import * as ReactDom from 'react-dom'
import ProductCreate from '../admin/ProductCreate'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new EnzymeAdapter() });


it('can render the About page', () => {
  const tree = renderer.create(<ProductCreate />).toJSON();
  expect(tree).toMatchSnapshot();
})

describe("component test", () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDom.render(<ProductCreate />, container);
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
  render(<ProductCreate />);
  const title = screen.getByText("Title");
  expect(title).toBeInTheDocument();
  const description = screen.getByText("Description");
  expect(description).toBeInTheDocument();
  const button = screen.getByTestId("submit");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});


test("should display a form with values ", () => {
  render(<ProductCreate />);
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

// describe('Test case for testing login', () => {
// let wrapper;
//   test('username check', () => {
//     wrapper = shallow(<Login />);
//     wrapper
//       .find('input[type="text"]')
//       .simulate('change', { target: { name: 'username', value: 'ccduser' } });
//     expect(wrapper.state('username')).toEqual('ccduser');
//   });
//   it('password check', () => {
//     wrapper = shallow(<Login />);
//     wrapper
//       .find('input[type="password"]')
//       .simulate('change', { target: { name: 'password', value: 'CC!@WER' } });
//     expect(wrapper.state('password')).toEqual('CC!@WER');
//   });