import React, { ReactElement } from 'react';
import StyledCarouselCard from './CarouselCard.styled';
import CarouselCardProps from './CarouselCard.type';

export default function CarouselCard({
  title,
  description,
  href,
  className,
}: CarouselCardProps): ReactElement {
  return (
    <StyledCarouselCard className={className}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <hr />
      <a href={href}>
        <span>바로가기</span>
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
        </svg>
      </a>
    </StyledCarouselCard>
  );
}
