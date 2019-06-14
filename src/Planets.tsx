import React from 'react';
import {client, planet_info} from './Queries';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class Planet extends React.Component<any, any> {
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
  const result:any = await client.query({query: planet_info, variables:{input:this.props.match.params.id}});
  return(result.data.planet);
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
    if (this.state.toda_info.residentConnection){
    return(
      <div>
      <br></br>
      Residentes:
        {this.state.toda_info.residentConnection.residents.map((persona:any)=>(
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
    const planet = this.state.toda_info
    return(
      <div>
      <h1>
      {planet.name}
      </h1>
      <p></p>
      <Paper>
      <Typography>
        Diametro: {planet.diameter}
      </Typography>
      <p></p>
      <Typography>
        Periodo de Rotacion: {planet.rotationPeriod}
      </Typography>
      <p></p>
      <Typography>
        Periodo de Orbita: {planet.orbitalPeriod}
      </Typography>
      <p></p>
      <Typography>
        Gravedad: {planet.gravity}
      </Typography>
      <p></p>
      <Typography>
        Poblacion: {planet.population}
      </Typography>
      <p></p>
      <Typography>
        Clima: {planet.climates}
      </Typography>
      <p></p>
      <Typography>
        Terreno: {planet.terrains}
      </Typography>
      <p></p>
      <Typography>
        Superficie de Agua: {planet.surfaceWater}
      </Typography>
      <p></p>
      <Typography>
        Creada: {planet.created}
      </Typography>
      <p></p>
      <Typography>
        Editada: {planet.edited}
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
