import "./SignIn.css"
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const SignIn = () => {

  const [check, setcheck] = useState("false")
  const navigate = useNavigate()
  const [, setError] = useState("")
  const validationSchema = Yup.object({
    email: Yup.string().email("email is invalid").required("email is requrid"),
    password: Yup.string().required("password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d ]{8,}$/, "Enter a password with- At least one letter (uppercase or lowercase).At least one digit (0-9).Minimum length of 8 characters"),
  })

  const signInSubmit = async (values) => {
    setcheck("true")
    const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
      "email": values.email,
      "password": values.password
    }).catch((error) => {
      setcheck("false")
      setError(error.response.data.message)
    }
    )
    if (data.message === "success") {
      setcheck("true")
      localStorage.setItem("token", data.token)
      navigate('/')

    }
  }


  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }, onSubmit: signInSubmit, validationSchema

  })


  const { t } = useTranslation();
  const crrentLanguage = localStorage.getItem("language")

  return <>
    <section dir={`${crrentLanguage === "ar" ? "rtl" : "ltr"}`} className="signIn   ">
      <div className={`container   shadow-lg rounded-3 w-50 `}   >

        <h2>{t("signIn")}</h2>
        <form onSubmit={formik.handleSubmit}  >
          <label className="pt-4 mt-4 fw-medium" htmlFor="email">{t("email")}</label>
          <input id="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className="form-control mt-3" type="text" name="email" />
          {(formik.touched.email && formik.errors.email) ? <div className=" alert alert-danger py-2 mt-2">{formik.errors.email}</div> : ""}

          <label className="pt-4 fw-medium" htmlFor="password">{t("password")}</label>
          <input id="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} className="form-control mt-3" type="password" name="password" />

          {(formik.touched.password && formik.errors.password) ? <div className=" alert alert-danger py-2 mt-2">{formik.errors.password}</div> : ""}
          {check === "true" ? <button type="submit" disabled={!(formik.dirty && formik.isValid)} className="signInBtn  shadow  py-2 disabled mt-4 mb-1 ">
            Loading...
            <span class="spinner-border spinner-border-sm fs" aria-hidden="true"></span>
          </button>

            : <button type="submit" disabled={!(formik.dirty && formik.isValid)} className="signInBtn  shadow disabled mt-4 mb-1 ">{t("signIn")}</button>
          }



          <p className="m-0 mt-2">{t("ForgotYourPassword")}</p>

          <div className="d-flex mt-2 justify-content-center  ">
            <Link to={"/signup"}><h6 className="m-0">{t("signUp")}</h6></Link>
          </div>

        </form>
      </div>

    </section>
  </>

}



export default SignIn;