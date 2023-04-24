//component for search bar
import React from "react";

//create Search component with destructured props
const Search = ({ term, media, setTerm, setMedia, handleSearch }) => {
  return (
    <div className="search-container">
      {/*create a form for the search functionality*/}
      <form className="search-form" onSubmit={handleSearch}>
        <label>
          Search:
          {/* input to set value of term for user's search */}
          <input
            className="search-input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
        <label>
          Media:
          {/* dropdown menu for user to selct media type based on itunes literature */}
          <select value={media} onChange={(e) => setMedia(e.target.value)}>
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="music">Music</option>
            <option value="podcast">Podcast</option>
            <option value="tvShow">TV show</option>
            <option value="musicVideo">Music Video</option>
            <option value="shortFilm">Short Film</option>
            <option value="audiobook">Audiobook</option>
            <option value="software">Software</option>
            <option value="ebook">eBook</option>
          </select>
        </label>
        {/* button for user to submit search */}
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

//Source for using select element in react:
//https://react.dev/reference/react-dom/components/select
