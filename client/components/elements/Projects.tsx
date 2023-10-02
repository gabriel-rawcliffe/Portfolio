import { useState, useEffect, useRef } from 'react'

export default function Projects() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div>
          <img
            src="/images/beatblocks.png"
            alt="Beat Blocks project thumbnail"
            className="w-full"
          />
          <div className="absolute bottom-0 flex items-center justify-center bg-secondary transparency-0.5">
            Slide 1
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div>
          <img
            src="/images/beatblocks.png"
            alt="Beat Blocks project thumbnail"
            className="w-full"
          />
          <div className="absolute bottom-0 flex items-center justify-center bg-secondary transparency-0.5">
            Slide 2
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div>
          <img
            src="/images/beatblocks.png"
            alt="Beat Blocks project thumbnail"
            className="w-full"
          />
          <div className="absolute bottom-0 flex items-center justify-center bg-secondary transparency-0.5">
            Slide 3
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div>
          <img
            src="/images/beatblocks.png"
            alt="Beat Blocks project thumbnail"
            className="w-full"
          />
          <div className="absolute bottom-0 flex items-center justify-center bg-secondary transparency-0.5">
            Slide 4
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}
