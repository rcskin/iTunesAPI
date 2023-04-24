import React from "react";
//import screen to query elements on screen and fireEvent to test user events
import { render, screen, fireEvent } from "@testing-library/react";
import Favorites from "../components/Favorites";
// import the logo image
import Logo from "../ituneslogo.png"; 

describe("Favorites component", () => {

//test 1 - no favorites in array
  test("should render correctly with no favorites", () => {
    const favorites = [];
    //mock function
    const handleRemoveFavorite = jest.fn(); 

    // render the Favorites component with empty favorites array and the mock function
    render(<Favorites favorites={favorites} handleRemoveFavorite={handleRemoveFavorite} />);

    // expect that the "My Favorites:" text is not present in the component
    expect(screen.queryByText("My Favorites:")).toBeNull();
  });

//test 2 - favorites in array  
  test("should render correctly with favorites", () => {
    //use mock data
    const favorites = [
      { trackId: 1, artworkUrl100: "http://example.com/image.jpg", trackName: "Track 1", artistName: "Artist 1" },
      { trackId: 2, artworkUrl100: null, collectionName: "Album 2", artistName: "Artist 2" }
    ];
    // mock function
    const handleRemoveFavorite = jest.fn(); 

    // render the Favorites component with the favorites array and the mock function
    render(<Favorites favorites={favorites} handleRemoveFavorite={handleRemoveFavorite} />);

    // expect that the "My Favorites:" text is present in the component
    expect(screen.getByText("My Favorites:")).toBeInTheDocument();


    // get all the list items in the component and expect that the number of list items is equal to the length of the favorites array
    const favoriteItems = screen.getAllByRole("listitem");
    expect(favoriteItems).toHaveLength(favorites.length);

    //forEach loop through all the list items and expect that the image source, track/collection name and artist name are correct
    favoriteItems.forEach((favoriteItem, index) => {
      const favorite = favorites[index];
      //check that the image source is equal to the artworkUrl100 or the logo image
      expect(favoriteItem.querySelector("img")).toHaveAttribute("src", favorite.artworkUrl100 || Logo); 
      //check that the track/collection name is correct
      expect(favoriteItem.querySelector("h3")).toHaveTextContent(favorite.trackName || favorite.collectionName); 
      //check that the artist name is correct
      expect(favoriteItem.querySelector("h4")).toHaveTextContent(favorite.artistName); 

      //click on the remove button
      const removeButton = favoriteItem.querySelector("button");
      fireEvent.click(removeButton);
      //expect that the handleRemoveFavorite mock function is called with the correct favorite object
      expect(handleRemoveFavorite).toHaveBeenCalledWith(favorite);
    });
  });
});


/* Note to reviewer:
I had to do a lot of research for the unit tests as this was much more comprehensive than our L2T17 and the notes
provided didn't give much help into testing these different functions etc. 
I found the React-Testing library to be a good source of different tests and also used a lot of stack overflow to 
help understand what to test and how to use testing methods to do so. 
I used the following sources for my .test.js files:
Sources:
https://legacy.reactjs.org/docs/testing.html
https://jestjs.io/docs/getting-started
https://testing-library.com/docs/react-testing-library/intro/
https://testing-library.com/docs/react-testing-library/api/#screen
https://stackoverflow.com/questions/53174202/how-to-mock-a-function-in-jest
https://jestjs.io/docs/mock-functions
https://testing-library.com/docs/dom-testing-library/api-events/
*/