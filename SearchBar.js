import React, {useState} from "react";
const SearchBar = props => {
    return(
        <input value ={props.search} placeholder = "Search" onChange={e => props.setSearch(e.target.value)}/>
    )
};
export default SearchBar;