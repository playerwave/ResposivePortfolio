import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
            {menu == "home" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => {
                setMenu("about");
              }}
            >
              About Me
            </p>
            {menu == "about" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              onClick={() => {
                setMenu("services");
              }}
            >
              Services
            </p>
            {menu == "services" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => {
                setMenu("work");
              }}
            >
              Portfolio
            </p>
            {menu == "work" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
            {menu == "contact" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default NavBar;
