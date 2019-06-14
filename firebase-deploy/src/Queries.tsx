import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { gql } from 'apollo-boost';

const link = createHttpLink({
  uri: "https://swapi-graphql-integracion-t3.herokuapp.com/"
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const all_films = gql`
    query allFilms {
      allFilms{
        films {
          id
          title
          releaseDate
          director
          openingCrawl
          producers
          episodeID
        }
      }
    }
  `;

  export const film_info = gql`
    query film($input: ID!) {
      film(id: $input){
        id
        title
        episodeID
        openingCrawl
        director
        producers
        releaseDate
        created
        edited
        starshipConnection{
          starships{
            id
            name
          }
        }
        characterConnection{
          characters{
            id
            name
          }
        }
        planetConnection{
          planets{
            id
            name
          }
        }
      }
    }
  `;

  export const character_info = gql`
    query person($input: ID!) {
      person(id: $input){
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
        homeworld{
          id
          name
        }
        filmConnection{
          films{
            id
            title
          }
        }
        starshipConnection{
          starships{
            id
            name
          }
        }
        created
        edited
      }
    }
  `;

  export const planet_info = gql`
    query person($input: ID!) {
      planet(id: $input){
        id
        name
        diameter
        rotationPeriod
        orbitalPeriod
        gravity
        population
        climates
        terrains
        surfaceWater
        created
        edited
        residentConnection{
          residents{
            id
            name
          }
        }
        filmConnection{
          films{
            id
            title
          }
        }
      }
    }
  `;

  export const starship_info = gql`
    query starship($input: ID!) {
      starship(id: $input){
        id
        name
        model
        starshipClass
        manufacturers
        costInCredits
        length
        crew
        passengers
        maxAtmospheringSpeed
        hyperdriveRating
        MGLT
        cargoCapacity
        consumables
        created
        edited
        pilotConnection{
          pilots{
            id
            name
          }
        }
    		filmConnection{
          films{
            id
            title
          }
        }
      }
    }
  `;
