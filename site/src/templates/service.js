// this is the single page

import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import HeaderContact from "../components/headercontact"

// import Turny from "../components/either"

function Cover(props) {
  var medium = props.medium
  var video = props.video
  var photo = props.photo
  
  if (medium === 'video') {
    return  <div style={{
      padding:'56.25% 0 0 0',
      position:'relative'
      }}>
        <iframe src={'https://player.vimeo.com/video/' + video + '?background=1'}
        title='cover video'
        style={{
          position:'absolute',
          top:0,
          left:0,
          width:'100%',
          height:'100%'
          }}
          frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
      </div>
  }
  return <Img fluid={photo} />
}

// Oh man this is confusing maybe it works but it needs to be documented
function Photos(props) {
  return <li className="blocks-gallery-item">
    {/* <figure> */}
      <img src={props.psrc} alt={props.palt} loading="lazy" />
    {/* </figure> */}
  </li>
}

// I cant figure out how to remove this but I should be able to
function Loop(props) {
  var opener = props.open

  return <>
    {opener}
  </>
}

function Gallery(props) {
  var has = props.has
  var open = props.open

  if (has === 1) {
    return <>
      <hr className="swiss" />

      <div style={{
        display: 'flex',
        marginBottom: '28px'
      }}
      className="services-photogallery"
      >
      <h3 className="wp-block-colum">Photo Gallery</h3>
      <div className="wp-block-colum">
        <figure className="wp-block-gallery columns-2 is-cropped">
          <ul className="blocks-gallery-grid">

            {/* Oh man this is confusing maybe it works but it needs to be documented */}
            {/* not gatsby Img so and not responsive image but day 1 this is atleast working */}
            {/* // needs a lozad lazy load for everything other than chrome */}
            {/* make this a variable and do some work on it, remove the extension, change it, add sizes etc */}
            <Loop open={open} />

            {/*
              Run a loop here? its doing something if i remove it the photos go away
              I think maybe this can go straight to photos?
              Im just running the loop in a prop because I cant run it here so maybe that is smart?
              Photos are used in the loop?
            */}

          </ul>
        </figure>
      </div> {/* column */}
    </div>
  </> } // return
      return null // no gallery 
}
// END OF GALLERY

/* function Clips(props) {
  if (props.hasVideo > 0) {
    return <><hr className="swiss" /></>
  }
  return null
} */

function Sec(props) {
  if (props.hasVideo > 1) {
    return <><hr className="swiss" /></>
  }
  return null
}

const ArticleTemplate = ({ data }) => (
  <Layout>
      <HeaderContact />

      <article style={{ 
          maxWidth: '75rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '1rem'
      }}>

        <Cover medium={data.strapiService.medium} video={data.strapiService.CoverVideo} photo={data.strapiService.Cover.childImageSharp.fluid} />
        {/* https://help.vimeo.com/hc/en-us/articles/115011183028-Embedding-background-videos */}

        <hr className="swiss" />
        <div style={{
            display: 'flex',
            marginBottom: '28px',
            justifyContent: 'space-between'
        }}
        className="service-info">
            <h2 className="wp-block-colum">{data.strapiService.Title}</h2>
            <p className="wp-block-colum">{data.strapiService.Content}</p>
        </div>

        {/* <Clips hasVideo={data.strapiService.hasVideo} /> */}

        
        {data.strapiService.videos.map(vids => <>
          
          <Sec hasVideo={data.strapiService.hasVideo} />

          <div className="wp-block-media-text">
            <figure className="wp-block-media-text__media">
              <div style={{
                padding: '56.25% 0 0 0',
                position: 'relative'
              }}><iframe title={vids.title} src={'https://player.vimeo.com/video/' + vids.vimeo + '?title=0&byline=0&portrait=0'}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
            </figure>

            <div className="wp-block-media-text__content">
              <h3>{vids.title}</h3>
              {vids.content}
            </div>
          </div>
          </>
        )}

              {/* <Sec hasVideo={data.strapiService.hasVideo} /> */}


        <Gallery has={data.strapiService.nn} open={data.strapiService.Gallery.map(photos => <Photos psrc={photos.url} palt={photos.name} /> )}/>
        {/*
          Call the gallery function
          pass it open as a prop
          open has has the loop
          with a nested <Photos loopinside of that
          Photos has its own props
        */}

        
    </article>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiService(id: {eq: $id}) {
      Title
      Content
      Cover {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Gallery {
        name
        url
      }
      pg
      id
      nn
      medium
      CoverVideo
      isthis
      videos {
        title
        content
        vimeo
      }
      hasVideo
    }
  }
`
