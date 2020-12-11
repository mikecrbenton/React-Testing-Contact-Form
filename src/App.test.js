import React from "react";
import ReactDOM from 'react-dom'
import { render, fireEvent, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./App";

test("test site", () => {
   render(<App />);
   //const {} = render(<App />);
})

test("----", () => {
   //RETURNS FUNCTIONS TO USE TO { DEREFERENCE }
   const { getByText } = render(<App />)
   // --> getBy, async--> findBy, checknull -->QueryBy
   getByText(/First Name*/i); // will throw error if doesn't find

})

test("----", () => {
   //RETURNS FUNCTIONS TO USE TO { DEREFERENCE }
   const { getByTestId } = render(<App />);
   // --> getBy, async--> findBy, checknull -->QueryBy
   const btn = getByTestId(/thisbutton/i); // will throw error if doesn't find
   console.log(btn);
})

test("test length of input", () => {
   const { getByText } = render(<App />);
   // ???

})

test("Full Form Test", () => {

  const { getByTestId } = render(<App />);
  const firstName = getByTestId("first-name");
  const lastName = getByTestId(/^last-name$/i);
  const email = getByTestId(/email/i);
  const message = getByTestId(/text-area/i);
  // BUTTON
  const button = getByTestId("thisbutton");
  //get the error by the test id - 
  
   //act( () => {
   // fireEvent.change( firstName, { target: { value: "Michael" } });
   // fireEvent.change( lastName, { target: { value: "Benton" } });
   // fireEvent.change( email, { target: { value: "mikecrbenton@gmail.com" } });
   // fireEvent.change( message, { target: { value: "Some message here" } });
   // fireEvent.click(button); //  get button by text, use that var.click()
   // get the JSON data event by the data test id
   //})

  userEvent.type( firstName, "Michael");
  userEvent.type( lastName, "Benton");
  userEvent.type( email, "mikecrbenton@gmail.com");
  userEvent.type( message, "Some message here");
  userEvent.click(button); //  get button by text, use that var.click()

  expect(firstName).toBeVisible();
  expect(lastName).toBeVisible();
  expect(email).toBeVisible();
  expect(message).toBeVisible();

  expect(firstName.value).toBe("Michael");
  expect(lastName.value).toBe("Benton");
  expect(email.value).toBe("mikecrbenton@gmail.com");
  expect(message.value).toBe("Some message here");
  //expect(button).toBeVisible();

});