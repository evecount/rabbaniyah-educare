"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const images = [
    { src: "/482346712_962123602768501_369481951629583065_n.jpg", alt: "Students in a classroom" },
    { src: "/490022399_986321943682000_6575542716052706994_n.jpg", alt: "Students learning" },
    { src: "/481073502_951477263833135_8640512998525980846_n.jpg", alt: "Students collaborating" },
    { src: "/485721469_970378141943047_4986339430387739828_n.jpg", alt: "Group photo of students and staff" },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
