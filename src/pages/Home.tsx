import React from "react"
import { Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
        <u className="d-flex justify-content-center pb-4 pt-4 fs-1" style={{ fontFamily: 'Kaisei Decol' }}>Welcome To Cooper's Candles</u>
        <p className="d-flex justify-content-center fs-4 lh-lg pt-4" style={{fontFamily: 'Kaisei Decol'}}>
        Keep your home smelling fresh day and night with these candles and other scented products from Cooper's Candles. Our selection makes it easy to customize the impression your space imparts. With options that range from classic jar candles and tea lights to room sprays and scented plug-ins, you’ll always be able to find something that’s just right for you. Browse through our scented candles and fragrance products to discover a wide variety of scents, sizes and styles to enjoy.
        </p>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTmywWMQUrXWw35Or7ciLNITwonqkWsrSCafPnQlqe1zxqypCoHqyLyXGceMaosTfMW0&usqp=CAU" 
        className="d-block mx-auto img-fluid w-50 pt-4">
        </Image>
        <Link className="d-flex justify-content-center pt-4 pb-4" to="/store">
  <Button >
    <span>Shop Now!</span>
  </Button>
</Link>
        </>
    )
}