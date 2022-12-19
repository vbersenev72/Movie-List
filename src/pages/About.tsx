import * as React from 'react';


export interface IAboutProps {
}

export function About (props: IAboutProps) {
  return (
    <div className='about_des'>
      <h1>Владислав, Frontent-Developer.</h1>

      <a className='link' href='https://kwork.ru/user/vladbers123458775'> Kwork </a>
      <a className='link' href='https://t.me/SuperParavozik2006'> Telegram </a>
      <a className='link' href='https://github.com/vbersenev72/Movie-List/'> GitHub </a>
    </div>
  );
}
