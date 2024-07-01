import style from './Header.module.css'



function Header({headerName}) {
  return ( <>
   <div className={style.headerName}>
  <h1 >{headerName}</h1>
  </div>
  </> );
}

export default Header;