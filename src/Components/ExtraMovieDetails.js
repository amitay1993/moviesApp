import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

const  ExtraMovieDetails=({id,selectedId,movie})=> {

    const categories=["Released","Year","Genre","Director"]

    const row=categories.map(category=><p key={category}>{`${category}:${movie[category]}`}</p>)

   // console.log(selectedId===id);

    return (

        <ExtraDetailsContainer hidden={id!==selectedId}>
            {row}
            <StyledLink to={`/movieReview/${id}`}>More Details...</StyledLink>
        </ExtraDetailsContainer>

    );
}

const ExtraDetailsContainer=styled.div`
 color: white;
`

const StyledLink=styled(Link)`
    color: lightgray;
  
    &:hover {
        color: lightblue;
    }
    
`



export default ExtraMovieDetails;