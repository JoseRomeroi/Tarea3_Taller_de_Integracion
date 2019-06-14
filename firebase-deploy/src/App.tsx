import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import {client, all_films} from './Queries';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      herma: false,
      todas_peliculas:[],
    };
    this.get_films().then((peliculas)=>{
      this.setState({todas_peliculas:peliculas});
    });
  }
  async get_films(){
  const result:any = await client.query({query: all_films});
  return(result.data.allFilms.films);
  };

  display_movies(){
    return(
      <div>
      <br></br>
        {this.state.todas_peliculas.map((pelicula:any)=>(
          <p>
          <Paper>
          <Typography variant="h5">
            {pelicula.title}
          </Typography>
          <Typography>
            Año: {pelicula.releaseDate}
          </Typography>
          <Typography>
            Director: {pelicula.director}
          </Typography>
          <Typography>
            Productores: {pelicula.producers}
          </Typography>
          <Typography>
            Número de episodio: {pelicula.episodeID}
          </Typography>
          <Typography>
          {<Link to={ `/film/${pelicula.id}`}> Ver mas info </Link>}
          </Typography>
          </Paper>
          </p>
        ))}
      </div>
    )
  }

  render() {
    return(
      <div>
      <h1>
      Peliculas de Starwars:
      </h1>
      {this.display_movies()}
      </div>
    )
  }
}
