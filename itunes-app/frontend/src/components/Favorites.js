import React from "react";
import Logo from "../ituneslogo.png";

const Favorites = ({ favorites, handleRemoveFavorite }) => {
  return (
    <div>
      {/* Display the list of favorites when item is added*/}
      {favorites.length > 0 && (
        <div className="favorites-container">
          <h2>My Favorites:</h2>
          {/* create an unordered list */}
          <ul className="favorite-items">
            {/* map over favorites array and render a list item for each 'favorite' */}
            {favorites.map((favorite) => (
              // set the key prop of the list item to the unique trackId
              <li key={favorite.trackId}>
                <div className="favorite-item-details">
                  <div className="favorite-image">
                    {/* Display image for favourite item */}
                    {favorite.artworkUrl100 ? (
                      <img
                        src={favorite.artworkUrl100}
                        alt={favorite.trackName}
                      />
                    ) : (
                      //if artwork is not available, display the iTunes logo
                      <img src={Logo} alt="itunes logo"></img>
                    )}
                  </div>
                  <div className="favorite-title">
                    <h3>{favorite.trackName || favorite.collectionName}</h3>
                    <h4>
                      <i>{favorite.artistName}</i>
                    </h4>
                  </div>
                </div>
                {/* create button to remove favorite item and call handleRemove function when clicked */}
                <button onClick={() => handleRemoveFavorite(favorite)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Favorites;
