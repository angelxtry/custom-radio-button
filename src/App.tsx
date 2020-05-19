import React from 'react';
import styled from 'styled-components';
import { CustonRadioButton } from './CustonRadioButton';

const H1 = styled.div`
  font-family: 'apple sd gothic neo';
`;

export default function App() {
  const initialColor = { name: 'RED', hex: '#ffb598' };
  return (
    <div>
      <H1>색깔을 선택하세요!</H1>
      <CustonRadioButton initialColor={initialColor} />
    </div>
  );
}
