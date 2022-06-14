import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getpopular();
  }, []);

  const getpopular = async () => {
    const RECIPIE_APIKEY = "98a4bd55f2bf43ab9629dd5ccd6cf09e";
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${RECIPIE_APIKEY}&number=20`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular picks</h3>
        {popular.map((recipe) => {
          return(
            <div key={recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height:4rem;
  border-radius:5rem;
  overflow:hidden;
`;

export default Popular;
