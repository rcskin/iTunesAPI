import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  test("renders the header text and logo", () => {
    // Render the Header component and get elements by text and alt text
    const { getByText, getByAltText } = render(<Header />);
    const headerText = getByText("iTunes Media Search");
    const logo = getByAltText("itunes logo");
    const description = getByText(
      "Search for your favorite media using this iTunes app!"
    );

    // Check that the expected elements are in the document
    expect(headerText).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});

/* Note to Reviewer:
As mentioned in a larger explanation on the Favorites.test.js file, I had to do a lot of
additional research to know how to perform better tests than what was provided on our task notes.
I used the suggested reading from the task notes on Jest - specifically with 'expect'
Sources:
https://jestjs.io/docs/expect
https://jestjs.io/docs/mock-functions
*/