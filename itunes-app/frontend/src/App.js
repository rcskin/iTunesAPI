import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Display from './components/Display';
import Favorites from './components/Favorites';
import { useItunesSearch } from './hooks/useItunesSearch';

function App() {
  const {
    term,
    setTerm,
    media,
    setMedia,
    searchItems,
    searchCategory,
    favorites,
    handleSearch,
    handleAddFavorite,
    handleRemoveFavorite,
  } = useItunesSearch();


  return (
    <div className="App">
      <Header />
      <Search term={term} media={media} setTerm={setTerm} setMedia={setMedia} handleSearch={handleSearch} />
      <Display searchItems={searchItems} searchCategory={searchCategory} handleAddFavorite={handleAddFavorite}/>
      <Favorites favorites={favorites} handleRemoveFavorite={handleRemoveFavorite} />  
    </div>
  );
}

export default App;

/* Note to reviewer:
I used previous React tasks of mine to help set up my app page, specifically adding props on App.js so that
App.js is the parent and can pass these props to the child components. 
At first the app was working just fine and adding favorites to my list, however when I added duplicates I noticed that
the button and handle functions would do this, but then the trackId was the same and so when trying to remove the 
duplicate it removed all of them and I had issues with the delete function. I asked for help from my partner and they
pointed me in the direction of the some() method. After looking at how to use this javascript method on mozilla, I added
this to my code and after changing some syntax with trial and error, this started to work and doesn't add a duplicate, which 
then doesn't lead to errors in the code. 
I have also used the following additional sources to help with this task after reviewing notes and pseudocode written on 
past mentor calls.
Sources:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://www.freecodecamp.org/learn/front-end-development-libraries/react/use-array-filter-to-dynamically-filter-an-array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */ 
