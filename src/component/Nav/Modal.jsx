import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Modal.css"


const Modal = () => {

    const { t } = useTranslation();

    return <>

        {/* modal===========================================> */}

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content ">
                    <div className="modal-header border-0">
                        <h1 className="modal-title fs-5 " id="exampleModalLabel">Navigation</h1>
                        <i data-bs-dismiss="modal" className="fa-solid cursor-pointer fa-xmark fs-5"></i>
                    </div>

                    <div className="modal-body  d-flex flex-column align-items-center">

                        <NavLink exact="true" activeclassname="active" className={"navItem pt-3 "} to={"/"}>{t("home")}</NavLink>

                        <NavLink activeclassname="active " data-bs-toggle="dropdown" aria-expanded="false" className="navItem mt-4 allProductLink" to={"AllProducts"} >{t("products")}</NavLink>

                            
                            <ul class="dropdown-menu allProductMeun ">
                                <li><Link class="dropdown-item" to="#">{t("menClothing")}</Link></li>
                                <li><Link class="dropdown-item" to="#">{t("WomenClothing")}</Link></li>
                                <li><Link class="dropdown-item" to="#">{t("ElectronicDevices")}</Link></li>
                            </ul>
                     

                        <NavLink activeclassname="active" className={"navItem pb-4 mt-4  "} to={"/sale"}>{t("sale")}</NavLink>

                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Modal;
