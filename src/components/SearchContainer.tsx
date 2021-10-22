import React, { SetStateAction } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 30px;
  font-size: 12px;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  cursor: pointer;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

const StyledInput = styled.div``;

const Button = styled.button``;

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const SearchContainer = ({ value, setSearchValue }: Props): JSX.Element => {
  const resetInputField = () => {
    setSearchValue('');
  };

  return (
    <StyledInput className="inputWithIcon">
      <Input
        className="form-control"
        value={value}
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
      <Button type="button" onClick={resetInputField}>
        X
      </Button>
    </StyledInput>
  );
};
