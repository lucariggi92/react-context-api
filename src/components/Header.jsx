import { Link, NavLink } from "react-router-dom"
import logo from "/src/assets/logo.jpeg";
import {useBudget} from "../context/BudgetContext"

export default function Header() {

    const {toggleBudget, isBudget} = useBudget();



    const navLinks = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "ChiSiamo",
            path: "/chi-siamo"
        },
        {
            title: "Prodotti",
            path: "/prodotti"
        }
    ]



    return (
        <header className="bg-dark">

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid ">
    <Link className="navbar-brand " to="/"><img src={logo}alt="" className="navbar-logo-luca"/></Link>
   
    <div className="collapse navbar-collapse " id="navbarNav">

      <ul className="navbar-nav">

         {navLinks.map((link, index) => (
                                <li key={index} className="nav-item">
                                    <NavLink to={link.path} className="nav-link active text-light" aria-current="page" >{link.title}</NavLink>
                                </li>))}    
      </ul>

      <button className={`mx-3 btn btn-${isBudget? "success":"light"}`} onClick={toggleBudget}>{isBudget ? "Disattiva modalità risparmio" : "Attiva modalità risparmio"}</button>
    </div>
  </div>
</nav>                                     

        </header>


    )
}