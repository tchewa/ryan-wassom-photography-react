import React from 'react'
import styled from '@emotion/styled'


const GalleryBox = styled.a`
  width: 31%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;

  &:hover {
    opacity: 0.7;

    span {
      &:after {
        width: 100%;
        transition: .5s;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    height: 200px;
  }

  .titleBox {
    width: 100%;
    text-align: center;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6525381734725141) 55%, rgba(255,255,255,0) 100%);
    margin: 0;
    padding: 10px 0;
  }

  span {
    text-transform: uppercase;
    color: white;
    margin: 0;
    font-size: 26px;

    &:after {
      content: '';
      max-width: 100px;
      margin: 0 auto;
      width: 0;
      height: 2px;
      background-color: white;
      display: block;
      transition: .2s ease-out;
    }
  }
`

const GalleryItem = ({title, backgroundImage, galleryLink}) => {
  return (
    <GalleryBox href={galleryLink} style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="titleBox">
        <span>{title}</span>
      </div>
    </GalleryBox>
  );
}

export default GalleryItem