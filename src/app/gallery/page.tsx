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
    { src: "https://placehold.co/800x600.png", hint: "graduate student portrait", alt: "A portrait of a recent graduate" },
    { src: "https://placehold.co/800x600.png", hint: "graduation ceremony students", alt: "Students celebrating at their graduation ceremony" },
    { src: "https://placehold.co/800x600.png", hint: "graduates group photo", alt: "A group photo of the graduating class" },
    { src: "https://placehold.co/800x600.png", hint: "student receiving diploma", alt: "A student proudly receiving their diploma" },
    { src: "https://placehold.co/800x600.png", hint: "happy graduate", alt: "A smiling graduate looking towards the future" },
    { src: "https://placehold.co/800x600.png", hint: "students throwing caps", alt: "Graduates throwing their caps in the air" },
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
                {galleryImages.concat(galleryImages).slice(0, 8).map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint + " square"}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
