"use client"
import * as React from "react"
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const graduatesImages = [
    { src: "/graduates/489828278_986320317015496_8687854344072611592_n.jpg", hint: "graduates group photo", alt: "A group photo of the Rabbaniyah Educare graduating class" },
    { src: "/graduates/489878215_986321160348745_7760226463942364009_n.jpg", hint: "student receiving award", alt: "A student receiving an award on stage" },
    { src: "/graduates/489927520_986320393682155_7547361732644265057_n.jpg", hint: "students performing on stage", alt: "Students performing during the graduation ceremony" },
    { src: "/graduates/489928475_986321010348760_643690623694086886_n.jpg", hint: "graduates holding certificates", alt: "Graduates proudly holding their certificates" },
    { src: "/graduates/490294143_986319327015595_1220846640072945418_n.jpg", hint: "graduate giving speech", alt: "A graduate giving a speech at the podium" },
    { src: "/graduates/490294773_986320470348814_6449333909180769396_n.jpg", hint: "happy graduates", alt: "A group of happy graduates posing for a photo" },
]

const ceremonyImages = [
    { src: "/ceremony/489828278_986320317015496_8687854344072611592_n.jpg", hint: "award ceremony", alt: "Student receiving an award during the ceremony." },
    { src: "/ceremony/489878215_986321160348745_7760226463942364009_n.jpg", hint: "students on stage", alt: "Students gathered on stage for a photo." },
    { src: "/ceremony/489927520_986320393682155_7547361732644265057_n.jpg", hint: "students performance", alt: "A group of students performing a dance." },
    { src: "/ceremony/489928475_986321010348760_643690623694086886_n.jpg", hint: "graduation photo", alt: "A graduate receiving their certificate." },
    { src: "/ceremony/490294143_986319327015595_1220846640072945418_n.jpg", hint: "guest speaker", alt: "A speaker addressing the audience at the ceremony." },
    { src: "/ceremony/490294773_986320470348814_6449333909180769396_n.jpg", hint: "students posing", alt: "A group of students smiling and posing." },
    { src: "/ceremony/490472919_986321310348730_336502758178114144_n.jpg", hint: "audience photo", alt: "The audience watching the graduation ceremony." },
    { src: "/ceremony/490617277_986320807015447_8497441589136932483_n.jpg", hint: "graduation diplomas", alt: "A stack of graduation diplomas ready to be presented." },
]

function GalleryGrid({ images }: { images: { src: string; alt: string; hint: string; }[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
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
    )
}

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
        <div className="container mx-auto max-w-7xl px-4">
            <Tabs defaultValue="graduates" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger value="graduates">Our Graduates</TabsTrigger>
                <TabsTrigger value="ceremony">Ceremony</TabsTrigger>
              </TabsList>
              <TabsContent value="graduates">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-center">Celebrating Our Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <GalleryGrid images={graduatesImages} />
                    </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ceremony">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-center">Graduation Day</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <GalleryGrid images={ceremonyImages} />
                    </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
        </div>
      </section>
    </div>
  );
}
