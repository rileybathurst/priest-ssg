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
            }
        }
    `)

    return <>{data.strapiService.id}</>

  }
  
  export default Turny