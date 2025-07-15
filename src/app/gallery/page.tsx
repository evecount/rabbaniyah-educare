"use client"
import * as React from "react"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
    { src: "/OurGraduates/IMG_4526.jpeg", hint: "graduates group photo", alt: "A group photo of the Rabbaniyah Educare graduating class" },
    { src: "/OurGraduates/IMG_4532.jpeg", hint: "student receiving award", alt: "A student receiving an award on stage" },
    { src: "/OurGraduates/IMG_4541.jpeg", hint: "students performing on stage", alt: "Students performing during the graduation ceremony" },
    { src: "/OurGraduates/IMG_4542.jpeg", hint: "graduates holding certificates", alt: "Graduates proudly holding their certificates" },
    { src: "/OurGraduates/IMG_4549.jpeg", hint: "graduate giving speech", alt: "A graduate giving a speech at the podium" },
    { src: "/OurGraduates/IMG_4550.jpeg", hint: "happy graduates", alt: "A group of happy graduates posing for a photo" },
]

export default function GraduatesPage() {
  return (
    <div className="bg-background">
       <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Graduates</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Celebrating the achievements and bright futures of our students. See the faces of the next generation of leaders, thinkers, and innovators.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                        <Image 
                            src={image.src} 
                            alt={image.alt}
                            data-ai-hint={image.hint}
                            width={800} 
                            height={600} 
                            className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </div>
      </section>

       <section className="py-16 md:py-24">
         <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.concat(galleryImages.slice(0, 2)).map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint + " square"}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-4">
                            <p className="text-white text-sm font-medium">{image.alt}</p>
                         </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
