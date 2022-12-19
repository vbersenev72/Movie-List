import "../styles/style.css"


import { Link } from "react-router-dom";

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {

  return (
    <>
    <header className="header">
        <h1 className="header_logo">  ReactLight-TV  </h1>
        <Link className="header_link" to='/'>Home</Link>
        <Link className="header_link" to='/Movies'>Movies</Link>
        <Link className="header_link" to='/About'>About</Link>
    </header>
    </>
  );
}
