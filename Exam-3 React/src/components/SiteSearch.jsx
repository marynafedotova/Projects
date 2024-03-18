import React, { useState } from 'react';

export default function SiteSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='container'>
    <div className='containerSearch'>
      <div id='search'>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <input type="text" id="search-input" className="form-control" value={searchQuery} onChange={handleChange} />
              </div>
              <div className="col-2">
                <button type="button" className="btn" id="search-btn" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
