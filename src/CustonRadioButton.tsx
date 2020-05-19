import React, { useState } from 'react';
import styled from 'styled-components';
import selectIconUrl from './images/ic-selected.svg';

type Color = {
  name: string;
  hex: string;
};

const Colors: Color[] = [
  { name: 'RED', hex: '#ffb598' },
  { name: 'ORANGE', hex: '#ffdcaa' },
  { name: 'PURPLE', hex: '#d7beff' },
  { name: 'CYAN', hex: '#c7f5ed' },
  { name: 'BLUE', hex: '#c2dbff' },
];

const ColorSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-top: 8px;
  padding: 10px;
  border: 5px solid ${(props) => props.color};
`;

const Label = styled.label`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;

const RadioButton = styled.input`
  display: none;
  &:checked + ${Label} {
    background: center url(${selectIconUrl}) no-repeat ${(props) => props.color};
  }
`;

const SelectResult = styled.div`
  font-family: 'apple sd gothic neo';
`;

interface CustonRadioButtonProps {
  initialColor: Color;
}

export function CustonRadioButton({ initialColor }: CustonRadioButtonProps) {
  const [selectedColor, setSelectedColor] = useState<Color>(initialColor);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = Colors.filter((color) => color.name === value);
    if (selected) {
      setSelectedColor(selected[0]);
    }
  };

  return (
    <>
      <ColorSelectorContainer color={selectedColor.hex}>
        {Colors.map((color) => (
          <div key={color.name}>
            <RadioButton
              id={color.name}
              type="radio"
              name="color-selector"
              value={color.name}
              checked={color.name === selectedColor.name}
              color={color.hex}
              onChange={onChange}
            />
            {/* {color.name} */}
            <Label htmlFor={color.name} color={color.hex} />
          </div>
        ))}
      </ColorSelectorContainer>
      <SelectResult>{selectedColor.name}</SelectResult>
    </>
  );
}
