import React from 'react';
import {client, character_info} from './Queries';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class Character extends React.Component<any, any> {
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
  const result:any = await client.query({query: character_info, variables:{input:this.props.match.params.id}});
  return(result.data.person);
  };

  display_homeworld(){
    if (this.state.toda_info.homeworld){
    return(
      <div>
      <br></br>
      Planeta al que Pertenece:
          <Typography>
          {<Link to={ `/planet/${this.state.toda_info.homeworld.id}`}> {this.state.toda_info.homeworld.name} </Link>}
          </Typography>
      </div>
    )
  }
  else{
    return("")
  }
  }

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
    const character = this.state.toda_info
    return(
      <div>
      <h1>
      {character.name}
      </h1>
      <p></p>
      <Paper>
      <Typography>
        Año de nacimiento: {character.birthYear}
      </Typography>
      <p></p>
      <Typography>
        Color de Ojos: {character.eyeColor}
      </Typography>
      <p></p>
      <Typography>
        Genero: {character.gender}
      </Typography>
      <p></p>
      <Typography>
        Color de Pelo: {character.hairColor}
      </Typography>
      <p></p>
      <Typography>
        Altura: {character.height}
      </Typography>
      <p></p>
      <Typography>
        Masa: {character.mass}
      </Typography>
      <p></p>
      <Typography>
        Color de Piel: {character.skinColor}
      </Typography>
      <p></p>
      <Typography>
        Creada: {character.created}
      </Typography>
      <p></p>
      <Typography>
        Editada: {character.edited}
      </Typography>
      {this.display_homeworld()}
      {this.display_films()}
      {this.display_starships()}
      </Paper>
      <p></p>
      <Typography>{<Link to={ `/`}> Volver a la pagina principal</Link>}</Typography>

      </div>
    )
  }
}
