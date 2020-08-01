import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  color: var(--blackLighter);
  text-align: center;
  font-size: 38px;
  font-weight: lighter;
  min-height: calc(50vh - var(--bodyPaddingTop));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loading;
