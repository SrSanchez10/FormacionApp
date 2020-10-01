import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function SearchBar() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Buscar curso" variant="outlined" />}
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