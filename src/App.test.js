import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("First Name Input", () => {
  const { getByTestId } = render(<App />);

  // different type of access
  fireEvent( 
     getByTestId(/first-name/i), 
      );

  
  //getByText(/Last Name*/i);
});

test("Last Name Input", () => {
   const { getByText } = render(<App />);
    
   getByText(/Last Name*/i);
 });

