import React from 'react';

import * as Styled from './styles';
import { StyledProps } from './styles';

interface Props extends StyledProps {
  title: string;
  date?: string;
  readingTime?: string;
}

const TitleSection: React.FC<Props> = ({ center, title, date, readingTime }) => (
  <Styled.TitleSection>
    {date && (
      <Styled.SubTitle center={center}>
        {date} - {readingTime}
      </Styled.SubTitle>
    )}
    <Styled.Title center={center}>{title}</Styled.Title>
    <Styled.Separator center={center} />
  </Styled.TitleSection>
);

export default TitleSection;
