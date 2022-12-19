

export interface ICardProps {
    image: any
    name: any
    subdescripton: string
    descripton: string
}

export function Card (props: ICardProps) {
  return (
    <div className='movie'>
      <div className="movie_info">
        <h1 className='movie_info_name'>{props.name}</h1>
        <img className='movie_info_image' src={props.image} alt="фоточка" />
      </div>


      <div className="movie_content">
        <h2 className="movie_content_description">{props.descripton}</h2>
        <h3 className="movie_content_subdescription">{props.subdescripton}</h3>
        <button className="movie_content_watch">Смотреть {props.name}</button>
      </div>
    </div>
  );
}
