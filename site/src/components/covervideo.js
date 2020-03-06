import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const CoverVideo = () => {
    const data = useStaticQuery(graphql`
        query CoverVideo {
            allStrapiService {
                edges {
                  node {
                      id
                        medium
                        CoverVideo
                  }
                }
              }
        }
    `)

    return <>
            {data.allStrapiService.medium}
            {/* test */}
        </>
  }
  
  export default CoverVideo