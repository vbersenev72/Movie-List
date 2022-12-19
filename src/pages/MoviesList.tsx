import { Card } from "../components/card_movie";


export interface IMoviesListProps {
  movies: any

}

export function MoviesList (props: IMoviesListProps) {

  const moviesCopy = props.movies

  return (
          <>
          {
            moviesCopy.map((item:any) => (
              <Card image = {item.image} key={item.id} name={item.name} subdescripton={item.subdescripton} descripton={item.description}/>
            ))
          }
          </>

  );
}