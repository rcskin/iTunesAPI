import React from "react";
import Logo from "../ituneslogo.png";

const Display = ({ searchItems, searchCategory, handleAddFavorite }) => {
  return (
    <div>
      {/* Display the list of searched items */}
      {searchItems && searchItems.length > 0 && (
        <div className="display-container">
          <h2>Search Results:</h2>
          {/* create an unordered list */}
          <ul className="display-items">
            {/* map over results array from API and render a list item for each 'result' */}
            {searchItems.map((result) => (
              // set the key prop of the list item to the unique trackId
              <li key={result.trackId}>
                <div className="display-item-details">
                  <div className="display-artwork">
                    {result.artworkUrl100 ? (
                      <img src={result.artworkUrl100} alt={result.trackName} />
                    ) : (
                      //if artwork is not available, display the iTunes logo
                      <img src={Logo} alt="itunes logo"></img>
                    )}
                  </div>
                  <div className="display-title">
                    <h3>
                      {searchCategory === "tvShow"
                        ? result.collectionName
                        : result.trackName || result.collectionName}
                    </h3>
                    <h4>
                      <i>{result.artistName}</i>
                    </h4>
                  </div>
                </div>
                {/* create button to add a result as a 'favorite' and call handleAdd function when clicked */}
                <button onClick={() => handleAddFavorite(result)}>
                  Add Favorite
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Display;


