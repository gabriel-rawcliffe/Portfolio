import { useState, useEffect, useRef } from 'react'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselContainerRef = useRef(null)

  // Query the carousel items within the .carousel container
  const items = carouselContainerRef.current?.querySelectorAll('.carousel-item')

  useEffect(() => {
    if (!items || items.length === 0) {
      return
    }

    // Define the click handlers for prevBtn and nextBtn
    const prevBtnClick = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length,
      )
    }

    const nextBtnClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }

    // Attach the click event listeners to the buttons
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')

    prevBtn?.addEventListener('click', prevBtnClick)
    nextBtn?.addEventListener('click', nextBtnClick)

    // Clean up event listeners when the component unmounts
    return () => {
      prevBtn?.removeEventListener('click', prevBtnClick)
      nextBtn?.removeEventListener('click', nextBtnClick)
    }
  }, [items])

  return (
    <div className="carousel-container relative overflow-hidden flex-1">
      <div
        className="carousel rounded-box h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={carouselContainerRef} // Reference to the carousel container
      >
        {/* Your carousel items */}
        <div className="carousel-item w-full h-full">
          <div
            className="hero h-full"
            style={{
              backgroundImage:
                'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Testing</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full h-full">
          <div
            className="hero h-full"
            style={{
              backgroundImage:
                'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full h-full">
          <div
            className="hero h-full"
            style={{
              backgroundImage:
                'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Going</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button id="prevBtn" className="carousel-btn left-0">
        &#8249;
      </button>
      <button id="nextBtn" className="carousel-btn right-0">
        &#8250;
      </button>
    </div>
  )
}
