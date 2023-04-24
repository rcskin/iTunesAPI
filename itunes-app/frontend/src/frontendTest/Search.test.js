import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Search from "../components/Search";

test("renders search form correctly and updates search term and media", () => {
  //Define mock functions to be used later
  const setTerm = jest.fn();
  const setMedia = jest.fn();
  const handleSearch = jest.fn();

  //Set initial values for term and media
  const term = "test";
  const media = "music";

  //Render the Search component with the mock functions and initial values
  const { getByLabelText, getByText } = render(
    <Search term={term} media={media} setTerm={setTerm} setMedia={setMedia} handleSearch={handleSearch} />
  );

  //Find the search term input field and verify that it initially has the correct value
  const searchTermInput = getByLabelText("Search:");
  expect(searchTermInput).toHaveValue(term);

  //Simulate a change to the search term input field and verify that the mock function was called with the correct value
  fireEvent.change(searchTermInput, { target: { value: "new test" } });
  expect(setTerm).toHaveBeenCalledWith("new test");

  //Find the media select input field and verify that it initially has the correct value
  const mediaSelectInput = getByLabelText("Media:");
  expect(mediaSelectInput).toHaveValue(media);

  // Simulate a change to the media select input field and verify that the mock function was called with the correct value
  fireEvent.change(mediaSelectInput, { target: { value: "movie" } });
  expect(setMedia).toHaveBeenCalledWith("movie");

  //Find the search button and simulate a click
  const searchButton = getByText("Search");
  fireEvent.click(searchButton);
  //Expect that the handleSearch mock function was called exactly once
  expect(handleSearch).toHaveBeenCalledTimes(1);
});

/* Note to reviewer:
I passed all the tests but still have problems with what looks like a console error for the
HTMLFormElement.prototype.submit method that is not being implemented in the version of jsdom 
that I'm using. I have tried to get help with this and have tried updating it and it still won't 
work. Since the task asks that the unit and snapshot tests are passing, and this is the case, I 
have decided to submit it as this was what the task requires and there is limited time for the 
rest of the bootcamp. */ 


