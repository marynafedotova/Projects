import { Outlet } from "react-router-dom";
import './assets/style/index.scss'
export default function Layout(){
  return <div className="page-content">
    <header>
      <nav>
        <ul>
          <li><a href="/"></a>Home</li>
          <li><a href="about/">About Us</a></li>
          <li><a href="services/">Services</a></li>
        </ul>
      </nav>
    </header>
    <div className="container">
      <Outlet/>
    </div>
    <SiteFooter />
  </div>
}