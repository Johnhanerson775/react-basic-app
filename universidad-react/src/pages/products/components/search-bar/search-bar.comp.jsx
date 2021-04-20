import React from 'react';
import'./search-bar.style.css';
const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-input">
                 <input type="text" placeholder="search..."/>
            </div>
            <div>
                 <input type="checkbox"/> only show products in stock
            </div>
        </div>
    );
}
export default SearchBar;          