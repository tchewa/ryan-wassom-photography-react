import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import styled from '@emotion/styled'
import GalleryBox from '../components/gallery-box'
import Portrait from '../gallery-images/portraits.jpg'
import Buffalo from '../gallery-images/buffalo.jpg'
import Landscape from '../gallery-images/landscape.jpg'
import Urban from '../gallery-images/urban.jpg'
import Astro from '../gallery-images/astro.jpg'
import Wedding from '../gallery-images/wedding.jpg'


const GalleryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: 0;
  }
`

// markup
const GalleryPage = () => {
  return (
    <Layout>
      <Container>
        <GalleryRow>
          <GalleryBox title="Wildlife" backgroundImage={Buffalo} galleryLink="/gallery/wildlife"/>
          <GalleryBox title="Portraits" backgroundImage={Portrait} galleryLink="/gallery/portraits"/>
          <GalleryBox title="Landscapes" backgroundImage={Landscape} galleryLink="/gallery/landscapes"/>
        </GalleryRow>
        <GalleryRow>
          <GalleryBox title="Event" backgroundImage={Wedding} galleryLink="/gallery/event"/>
          <GalleryBox title="Astro" backgroundImage={Astro} galleryLink="/gallery/astro"/>
          <GalleryBox title="Urban" backgroundImage={Urban} galleryLink="/gallery/urban"/>
        </GalleryRow>
      </Container>
    </Layout>
  )
}

export default GalleryPage
