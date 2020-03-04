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
            }
        }
    `)

    var a = 1
    // var a = {data.strapiService.Title}
    // hmmm Im not allowed this its kinda needs to come in the return

    if (a === 1) {
        return <>2</>
    }
  

  }
  
  export default Turny