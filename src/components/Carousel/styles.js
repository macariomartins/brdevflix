import React from 'react';
import styled from 'styled-components';

export const LabelColor = styled.div`
    width: 16px;
    height: 100%;
    margin-right: 10px;
    background: ${props => props.categoryColor ? props.categoryColor : 'var(--primary)'};
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: bolder;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  color: white;
  line-height: 1;
  display: flex;
  align-items: center;
  height: 80px;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export function TitleWrapper({ categoryColor, children }) {
  return (
    <Title>
      <LabelColor
        categoryColor={categoryColor}
      />
      {children}
    </Title>
  );
}

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
