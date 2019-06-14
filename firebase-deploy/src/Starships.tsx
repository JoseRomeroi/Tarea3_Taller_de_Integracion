import React from 'react';
import {client, starship_info} from './Queries';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class Starship extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      toda_info:[],
    };
    this.get_info().then((informacion)=>{
      this.setState({toda_info:informacion});
    });
  }
  async get_info(){
  const result:any = await client.query({query: starship_info, variables:{input:this.props.match.params.id}});
  return(result.data.starship);
  };

  display_films(){
    if (this.state.toda_info.filmConnection){
    return(
      <div>
      <br></br>
      Peliculas en las que aparece:
        {this.state.toda_info.filmConnection.films.map((peli:any)=>(
          <Typography>
          {<Link to={ `/film/${peli.id}`}> {peli.title} </Link>}
          </Typography>
        ))}
      </div>
    )
  }
  else{
    return("")
  }
  }

  display_characters(){
    if (this.state.toda_info.pilotConnection){
    return(
      <div>
      <br></br>
      Pilotos:
        {this.state.toda_info.pilotConnection.pilots.map((persona:any)=>(
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
    const nave = this.state.toda_info
    return(
      <div>
      <h1>
      {nave.name}
      </h1>
      <p></p>
      <Paper>
      <Typography>
        Modelo: {nave.model}
      </Typography>
      <p></p>
      <Typography>
        Clase: {nave.starshipClass}
      </Typography>
      <p></p>
      <Typography>
        Manufactureros: {nave.manufacturers}
      </Typography>
      <p></p>
      <Typography>
        Costo en creditos: {nave.costInCredits}
      </Typography>
      <p></p>
      <Typography>
        Largo: {nave.length}
      </Typography>
      <p></p>
      <Typography>
        Tripulación: {nave.crew}
      </Typography>
      <p></p>
      <Typography>
        Pasajeros: {nave.passengers}
      </Typography>
      <p></p>
      <Typography>
        Máxima velocidad atmosférica: {nave.maxAtmospheringSpeed}
      </Typography>
      <p></p>
      <Typography>
        Ratio de Hyperdrive: {nave.hyperdriveRating}
      </Typography>
      <p></p>
      <Typography>
        MGLT: {nave.MGLT}
      </Typography>
      <p></p>
      <Typography>
        Capacidad de Carga: {nave.cargoCapacity}
      </Typography>
      <p></p>
      <Typography>
        Consumible: {nave.consumables}
      </Typography>
      <p></p>
      <Typography>
        Creada: {nave.created}
      </Typography>
      <p></p>
      <Typography>
        Editada: {nave.edited}
      </Typography>
      {this.display_films()}
      {this.display_characters()}
      </Paper>
      <p></p>
      <Typography>{<Link to={ `/`}> Volver a la pagina principal</Link>}</Typography>
      </div>
    )
  }
}
