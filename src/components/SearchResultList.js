import React from 'react';
import './SearchResultList.css'
import SearchResult from './SearchResult';

const SearchResultList = ({results}) => {
    return (
            <div className="search-result-list">
                 {results.map((result,id)=>{
                    return <SearchResult key={id} result={result}/>
                 })}
        </div>
    );
}



export default SearchResultList;
