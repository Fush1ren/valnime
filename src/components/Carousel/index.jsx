import React from 'react';
import Slider from 'react-slick';
import Link from "next/link";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Carousel = ({ api }) => {
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide:  0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

    return (
        <Slider {...settings} className=' text-white'>
            {api.data.map((item, index) => {
                const title = item.title.replaceAll(" ", "_").replaceAll(":","_")
                return(
                    <Link href={`/anime/${item.mal_id}/${title}`} key={index} className='px-2 flex justify-center text-center items-center cursor-pointer text-white hover:text-indigo-400 transition-all'>
                       <div className='py-2'>
                         <Image src={item.images?.webp?.image_url} alt="..." priority={true} width={350} height={350} className='card rounded-lg w-72 md:h-80 h-72'/>
                       </div>
                        <p className=' text-lg'>{item?.title}</p>
                    </Link>
                )
            })}
        </Slider>
    );
};

export default Carousel;