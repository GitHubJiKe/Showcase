import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Zoom } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'

export default function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const images = [
    'https://source.unsplash.com/random/800x600/?product,front',
    'https://source.unsplash.com/random/800x600/?product,side',
    'https://source.unsplash.com/random/800x600/?product,back',
    'https://source.unsplash.com/random/800x600/?product,detail'
  ]

  return (
    <section className="section product-gallery">
      <div className="container">
        <h2 className="section-title">Product Gallery</h2>
        <div className="gallery-container">
          <Swiper
            modules={[Navigation, Thumbs, Zoom]}
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            zoom
            className="main-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img src={img} alt={`Product view ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            className="thumb-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}