// this is the single page

import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import HeaderContact from "../components/headercontact"

function Cover(props) {
  var medium = props.medium // query the cover if its has been set to video
  var video = props.video // the vimeo id
  var photo = props.photo // if there isnt a video cover insert a photo
  
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
          frameBorder="0" allow="autoplay; fullscreen" allowFullScreen />
      </div>
  }
  return <Img fluid={photo} />
}
// End of Cover

// Part of the gallery
// returns each photo as a list item
function Photos(props) {
  return <li className="blocks-gallery-item">
      <img src={props.psrc} alt={props.palt} loading="lazy" /> {/* I guess the props are coming through the Gallery */}
  </li>
}

function Gallery(props) {
  var has = props.has // this is a variable I define manually if we have a gallery make it 1 otherwise it's undefined as the boolean function of strapi was not working for me
  var loop = props.loop // I dont understand this but its needed to spin the <Photos function from above

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

            {/* This is confusing maybe it works but it needs to be documented when I can understand it */}
            {/* not gatsby Img so and not responsive image but day 1 this is atleast working */}
            {/* // needs a lozad lazy load for everything other than chrome */}
            {/* make this a variable and do some work on it, remove the extension, change it, add sizes etc */}

            {loop}

          </ul>
        </figure>
      </div> {/* column */}
    </div>
  </> } // return
  return null // no gallery 
}
// END OF GALLERY

function Sec(props) { // seperator between the secondary videos
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

        {/* title and content area open */}
        <div style={{
            display: 'flex',
            marginBottom: '28px',
            justifyContent: 'space-between'
        }}
        className="service-info">
          <h2 className="wp-block-colum">{data.strapiService.Title}</h2>
          <p className="wp-block-colum">{data.strapiService.Content}</p>
        </div>
        {/* title and content area close */}

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
              frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>
            </figure>

            <div className="wp-block-media-text__content">
              <h3>{vids.title}</h3>
              {vids.content}
            </div>
          </div>
          </>
        )} {/* close out the videos area */}

        <Gallery has={data.strapiService.nn} loop={data.strapiService.Gallery.map(photos => <Photos psrc={photos.url} palt={photos.name} /> )} /> {/* I dont entirley understand how this works */}

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
      id
      nn
      medium
      CoverVideo
      videos {
        title
        content
        vimeo
      }
      hasVideo
    }
  }
`
