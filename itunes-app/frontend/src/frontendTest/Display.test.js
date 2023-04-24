import React from "react";
import renderer from "react-test-renderer";
import Display from "../components/Display";

test("Display component renders correctly", () => {
  // Define variables and functions needed for the test
  const searchItems = [];
  const searchCategory= "music";
  const handleAddFavorite = jest.fn();

  // Render the component and create a snapshot of the rendered tree
  const tree = renderer
    .create(
      <Display
        searchItems={searchItems}
        searchCategory={searchCategory}
        handleAddFavorite={handleAddFavorite}
      />
    )
    .toJSON();
  
  // Compare the rendered tree with the saved snapshot
  expect(tree).toMatchSnapshot();
});

/*Note to reviewer: used task notes and my previous L2T17 to help remember how to do a snapshot 
test. I had to do a lot of trial and error, but then realised I needed to define my props and 
use a mock function as described on jest literature.
Sources:
L2T17 Task notes
https://legacy.reactjs.org/docs/test-renderer.html
https://jestjs.io/docs/getting-started
https://jestjs.io/docs/mock-functions
*/
