import "./Home.css"
import HomeSlider from "./HomeSlider";
import CategorySlider from './../CategorySlider/CategorySlider';
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";



const Home = () => {


  const token = localStorage.getItem("token")
  const AllProducts = () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  const { data, isLoading } = useQuery("allProducts", AllProducts);

  return <>
    <section className="home pb-5">

      <HomeSlider />
      <CategorySlider />
      {/* cart=======================> */}
      {isLoading ? <div className="loadingScreen d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div> : <div className="container pt-2 ">

        <div className="row ">

          {data?.data.data.map((product) =>

            <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 carts  ">
              <Link className="HomeLink" to={`/productdetails/${product.id}`}>
                <div className="pb-3 rounded-2 mt-4 cart  overflow-hidden shadow ">
                  <div className="overflow-hidden">

                    <img height={350} className="w-100 overflow-hidden " src={`${product.imageCover}`} alt="" />
                  </div>
                  <div className="cartContent px-3">
                    <h5 className="mt-2 fw-semibold productCategory ">{product.category.name}</h5>
                    <h6 className="fw-normal fw-medium ">{product.title.split(" ").slice(0, 2).join(" ")}</h6>
                    <div className="priceAndRate d-flex justify-content-between">
                      <span className="fw-medium" >{product.price} EGP</span>
                      <span className="fw-medium"><i className='fas fa-star rating-color star pe-1 '></i>{product.ratingsAverage}</span>
                    </div>
                    {token ? <div className="d-flex mt-2 mb-0 justify-content-between align-items-center">
                      <i className="fa-solid fs-4 test fa-cart-shopping"></i>
                      <i className="fa-solid fa-heart fs-4  m-0 pt-1 cursor-pointer "></i>
                    </div> : ""}

                  </div>
                </div>
              </Link>
            </div>




          )}
        </div>
      </div>
      }


    </section>
    <Footer />
  </>

}



export default Home;