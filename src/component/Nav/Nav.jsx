import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css"
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import DarkMode from "./DarkMode";
import Modal from './Modal';



const Nav = () => {

  const navigate = useNavigate();

  // signOut================================>
  const [signOut, setSignOut] = useState("false");
  useEffect(() => {

    if (signOut === "true") {
      localStorage.removeItem("token");
      navigate('/signin')
    }
  }, [navigate, signOut])
  // token==================================>
  const [token, setToken] = useState(localStorage.getItem("token"));

  // set languages==========================>
  const { t, i18n } = useTranslation();
  const [language, setlanguage] = useState(localStorage.getItem("language") ?? "en")

  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem("language") === "ar") {
      i18n.changeLanguage('ar');
    } else {
      i18n.changeLanguage('en');
    }
    setToken(localStorage.getItem("token"))
  }, [i18n, location.pathname]);


  return <>
    <nav className="fw-semibold">

      <div className="container d-flex  justify-content-between align-items-center">

        <Link to={"/"} className="logo">{t("shopWithUs")}</Link>

        {token ? <div dir={`${language === "ar" ? "rtl" : "ltr"}`} className="d-flex align-items-center ">

          <h6 className="d-flex align-items-center me-2   m-0">
            <i className="fa-solid fs-5 px-1 mainColor  fa-cart-shopping"></i>
            {t("shoppingCart")}
          </h6>
          <h6 className="d-felx align-items-center me-2    m-0">
            <i className="fa-solid fa-heart fs-5  m-0 px-1 navCart  cursor-pointer "></i>
            {t("Favorite")}
          </h6>

        </div> : ""}

        {/* navItems==================================================> */}
        {token ? "" : <div />}
        <div dir={`${language === "ar" ? "rtl" : "ltr"}`} className="navItems  d-flex align-items-center  position-relative  ">
          <NavLink exact="true" activeclassname="active" className={"navItem py-4 "} to={"/"}>{t("home")}</NavLink>

          <div className=" allProducts ">
            <NavLink activeclassname="active " className={"navItem py-4"} to={"AllProducts"} >{t("products")}</NavLink>

            <div className=" position-absolute  animate__animated allProductMeun cursor-pointer  px-3   rounded-1 d-none shadow py-3 d-flex flex-column align-items-center">
              <h6 >{t("menClothing")}</h6>
              <h6>{t("WomenClothing")}</h6>
              <h6>{t("ElectronicDevices")}</h6>
            </div>

          </div>

          <NavLink activeclassname="active" className={"navItem py-4"} to={"/sale"}>{t("sale")}</NavLink>
          <div>
            <i></i>
          </div>

          <div />
        </div>
        <div />
        {token ? <>
          <div />
          <div />
          <div />
        </>
          : ""}

        <div className="d-flex align-items-center   ">

          {/* languageToggle===========================================> */}

          <p onClick={() => { i18n.changeLanguage(language === "ar" ? "en" : "ar"); localStorage.setItem("language", language === "ar" ? "en" : "ar"); setlanguage(localStorage.getItem("language")) }} className="m-0 pe-3 cursor-pointer text-uppercase">{language === "ar" ? "en" : "ar"}</p>

          {token ?
            <Link>
              <p onClick={() => setSignOut("true")} className="cursor-pointer m-0 pe-3 ">{t("signOut")}</p>
            </Link> :

            <Link to={"/signIn"}>
              <p className="cursor-pointer m-0 pe-3 ">{t("title")}</p>
            </Link>
          }

          <DarkMode />
          <Modal />
          <i className="fa-solid fa-bars fs-4 mainColor ms-3 navBarMenu d-none cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>


        </div>

      </div>

    </nav>
  </>


}



export default Nav;