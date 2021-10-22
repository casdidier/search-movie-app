import React, { SetStateAction } from 'react';

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const SearchContainer = ({ value, setSearchValue }: Props): JSX.Element => (
  <div className="">
    <input
      className="form-control"
      value={value}
      onChange={event => setSearchValue(event.target.value)}
      placeholder="Type to search..."
    />
  </div>
);
