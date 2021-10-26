import React, { SetStateAction } from 'react';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';

const Input = styled.input`
  height: 30px;
  font-size: 12px;
  width: 100%;
  min-width: 100px;
  border: 2px solid #aaa;
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding: 2px 23px 2px 30px;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;

const StyledInput = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
`;

const Button = styled.button`
  position: absolute;
  top: 14px;
  right: 8px;
  width: 12px;
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  visibility: ${props => (props?.value !== '' ? 'visible' : 'hidden')};
`;

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const SearchContainer = ({ value, setSearchValue }: Props): JSX.Element => {
  const resetInputField = () => {
    setSearchValue('');
  };

  return (
    <StyledInput>
      <Input
        className="form-control"
        value={value}
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
      <Button type="button" onClick={resetInputField}>
        <ClearIcon />
      </Button>
    </StyledInput>
  );
};
