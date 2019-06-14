import React from 'react';
import {client, film_info} from './Queries';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class Film extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      toda_info:[],
    };
    // console.log(this.props.match.params)
    this.get_info().then((informacion)=>{
      this.setState({toda_info:informacion});
    });
  }
  async get_info(){
  const result:any = await client.query({query: film_info, variables:{input:this.props.match.params.id}});
  return(result.data.film);
  };

  display_characters(){
    if (this.state.toda_info.characterConnection){
    return(
      <div>
      <br></br>
      Personajes:
        {this.state.toda_info.characterConnection.characters.map((persona:any)=>(
          <Typography>
          {<Link to={ `/character/${persona.id}`}> {persona.name} </Link>}
          </Typography>
        ))}
      </div>
    )
  }
  else{
    return("")
  }
  }

  display_planets(){
    if (this.state.toda_info.planetConnection){
    return(
      <div>
      <br></br>
      Planetas:
        {this.state.toda_info.planetConnection.planets.map((planeta:any)=>(
          <Typography>
          {<Link to={ `/planet/${planeta.id}`}> {planeta.name} </Link>}
          </Typography>
        ))}
      </div>
    )
  }
  else{
    return("")
  }
  }

  display_starships(){
    if (this.state.toda_info.starshipConnection){
    return(
      <div>
      <br></br>
      Naves Espaciales:
        {this.state.toda_info.starshipConnection.starships.map((nave:any)=>(
          <Typography>
          {<Link to={ `/starship/${nave.id}`}> {nave.name} </Link>}
          </Typography>
        ))}
      </div>
    )
  }
  else{
    return("")
  }
  }

  render() {
    const peli = this.state.toda_info
    return(
      <div>
      <h1>
      {peli.title}
      </h1>
      <p></p>
      <Paper>
      <Typography>
        Director: {peli.director}
      </Typography>
      <p></p>
      <Typography>
        Opening Crawl: {peli.openingCrawl}
      </Typography>
      <p></p>
      <Typography>
        Numero de episodio: {peli.episodeID}
      </Typography>
      <p></p>
      <Typography>
        Productor(es): {peli.producers}
      </Typography>
      <p></p>
      <Typography>
        Fecha de Estreno: {peli.releaseDate}
      </Typography>
      <p></p>
      <Typography>
        Creada: {peli.created}
      </Typography>
      <p></p>
      <Typography>
        Editada: {peli.edited}
      </Typography>
      {this.display_characters()}
      {this.display_planets()}
      {this.display_starships()}
      </Paper>
      <p></p>
      <Typography>{<Link to={ `/`}> Volver a la pagina principal</Link>}</Typography>

      </div>
    )
  }
}
