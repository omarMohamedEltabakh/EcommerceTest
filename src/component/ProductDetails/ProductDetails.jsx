import { useParams } from "react-router-dom";
import "./ProductDetails.css"
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";


const ProductDetails = () => {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,


  };


  let { id } = useParams()


  const getProductDetails = (id) => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  const { data,isLoading } = useQuery("getProductDetails", () => getProductDetails(id))

  console.log(data?.data.data);
  useEffect(() => {
    getProductDetails(id)
  }, [id])
  console.log(data?.data.data.images);


  return <>
    <section className="ProductDetails">

      {data?.data.data ? <div className="row py-2 align-items-center container pt-4  mx-auto">
        <div className="col-md-4 rounded-2 ">
          <Slider className="rounded-3  overflow-hidden" {...settings}>
            {data?.data.data.images.map((image) => <img key={data?.data.data.id} src={image} className='w-100 '></img>)}
          </Slider>
        </div>
        <div className="col-md-8">
          <h2 className='h3 fw-semibold'>{data?.data.data.title}</h2>
          <p className="h5 fw-normal mainColor ">{data?.data.data.description}</p>
          <h4 className=' fw-normal'>{data?.data.data.category.name}</h4>
          <h6 className='mt-3 fw-normal '>Price:{data?.data.data.price} EGP</h6>
          <div className='d-flex justify-content-between mt-3 w-75 fw-normal '>
            <span >{data?.data.data.price} EGP</span>
            <span><i className='fas fa-star rating-color star '></i>{data?.data.data.ratingsAverage}</span>
          </div>
          <div className="d-flex justify-content-center  w-75">

            <button className="addToCartBtn shadow  ">أضف الي العربه</button>
          </div>

        </div>

      </div> : ""}
    </section>

  </>

}



export default ProductDetails;