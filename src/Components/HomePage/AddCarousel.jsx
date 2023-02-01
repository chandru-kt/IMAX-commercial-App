import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const dataList = [
    "https://wallpapercave.com/wp/wp8213638.jpg",
    "https://wallpapercave.com/uwp/uwp2925190.jpeg",
    "https://wallpapercave.com/uwp/uwp2887476.jpeg",
    "https://wallpapercave.com/dwp1x/wp11050009.jpg",
    "https://wallpapercave.com/dwp1x/wp11235800.jpg",
    "https://wallpapercave.com/dwp1x/wp11614820.jpg",
    "https://wallpapercave.com/dwp1x/wp10082419.jpg"
]

export const AddCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{ padding: "5px 0px", backgroundColor: "black"}}>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]} autoPlay infinite>
                {
                    dataList?.map((banner, index) => (
                        <div style={{ padding: "0px 15px" }} key={index + 1}>
                            <img style={{ width: "102%", cursor: "pointer" }} src={banner} alt="Advertisement banner" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}