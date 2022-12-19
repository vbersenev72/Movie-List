import * as React from 'react';
import { Link } from 'react-router-dom';
export interface INotFoundProps {
}

export default function NotFound (props: INotFoundProps) {
  return (
    <div>
      <h1>Not Found Page</h1>
      <h1>Go <Link to={"/Home"}>Home</Link></h1>
    </div>
  );
}
