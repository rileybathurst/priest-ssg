import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const Turny = () => {
    const data = useStaticQuery(graphql`
        query Turny {
            strapiService(id: {eq: "Service_2"}) {
                Title
                id
                strapiId
                Gallery {
                    name
                }
                pg
                video {
                    a
                    b
                }
            }
        }
    `)

    return <>
        {/* {data.strapiService.videos} */}
        <hr />
        {data.strapiService.Gallery.map(things => <>{things.name}</> )}
        {/* hey */}
        <hr />
    </>

  }
  
  export default Turny