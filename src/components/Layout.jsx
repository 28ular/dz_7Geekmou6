import {NavLink, Outlet} from "react-router-dom";
import {Header} from "./Header/Header.jsx";

export const Layout = () =>  {

    return(
    <>
    <Header/>
    <main className="main">
        <Outlet/>
    </main>
        <div className="footer"> <NavLink to={'https//t.me/uu_mrts'}>Made by Ular</NavLink> </div>
    </>
    )

}
