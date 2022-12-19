import * as React from 'react';


export interface IHomePageProps {
}

export function HomePage (props: IHomePageProps) {
  return (
    <div className='homepage_des'>
      <h1>ReactLight-TV</h1>
      <h3>Данный каталог является пет-проетом и не несет никакой смысловой нагрузки</h3>
      <h3>Над дизайном и версткой не заморачивался - упор был сделан на функционал</h3>
      <h4>Технологии на проекте:</h4>
      <ul>
        <li>React</li>
        <li>React-router-DOM</li>
        <li>Typescript</li>
        <li>Json-Server</li>
      </ul>
      <a href='https://github.com/vbersenev72/Movie-List/' className='link'>Репозиторий на Github</a>
    </div>
  );
}
