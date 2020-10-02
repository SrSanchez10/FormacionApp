import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import './searchbar.scss';

function SearchBar() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.name}
      className="searchBox"
      renderInput={(params) => <TextField {...params} label={(<div className="searchText"><SearchIcon className="icon" /> Buscar curso</div>)} variant="outlined" />}
    />
  );
}

const data = [
  { name: 'React' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'HTML5' },
  { name: 'CSS' },
  { name: 'JavaScript' }
];

export default SearchBar;