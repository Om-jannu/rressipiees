import { Splide , SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import React, { useEffect, useState } from "react";
// import styled from "styled-components";


function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getpopular();
  }, []);

  const getpopular = async () => {
    const RECIPIE_APIKEY = "98a4bd55f2bf43ab9629dd5ccd6cf09e";
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${RECIPIE_APIKEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <div>
      <div>
        <h3>Popular picks</h3>
        <Splide options={{perPage : 4,}}>
        {popular.map((recipe) => {
          return(
            <SplideSlide> 
              <div key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </div>
            </SplideSlide>
          );
        })}
        </Splide>
      </div>
    </div>
  );
}

export default Popular;
