import React, { useEffect } from 'react'

function Popular() {

    useEffect(()=>{
        getpopular();
    },[])

    const getpopular = async () =>{
        const RECIPIE_APIKEY = "98a4bd55f2bf43ab9629dd5ccd6cf09e";
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${RECIPIE_APIKEY}&number=9`
        );
        const data = await api.json();
        console.log(data);
    }
  return (
    <div>Popular</div>
  )
}

export default Popular;