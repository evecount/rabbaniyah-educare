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
    { src: "/ceremony/490718403_986319863682208_3977818824518956521_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490732359_986321057015422_7674874529214033403_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490733923_986320423682152_6119001470317738810_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490745171_986320620348799_7483843148122270910_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490753353_986319947015533_4704021252396691680_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490755036_986320747015453_1679310620339592134_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490756962_986319723682222_8633652241131507706_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490765391_986321270348734_3440983525635898951_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490833109_986319983682196_5511174742351924137_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/489828278_986320317015496_8687854344072611592_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/489878215_986321160348745_7760231461277896645_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/489927520_986320393682155_7547366164051743157_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/489928475_986321010348760_6436966677572410916_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/489928866_986320163682178_3034092247812468645_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/489938085_986320983682096_5842648321054310927_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/489949727_986320587015469_2754756326433020277_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/489960358_986320710348790_1804103940384672715_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490029444_986320560348805_7883543369538252293_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490030742_986320093682185_7419064101843119371_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490033127_986320773682117_4647128994387192246_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490083057_986320230348838_6933355234516232591_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490142791_986320663682128_2616709150903827151_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490177387_986320360348825_2147985615093082165_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490269126_986320920348769_8161929600575613864_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490272890_986320023682192_3890847090263573426_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490294143_986319327015595_1220846640072945418_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490294773_986320470348814_6449318698351324681_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490299816_986320953682099_4520421550187055451_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490472919_986321310348730_3365028967132506628_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490473105_986320270348834_7677301646939874399_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490475606_986320887015439_6677475669547413750_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490476018_986320503682144_1282774722054412845_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490489665_986320197015508_787725861565718578_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490617277_986320807015447_8497410719340225764_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490623824_986320843682110_5237927526855628543_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490629607_986320120348849_4882346757221907928_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490636032_986321207015407_3303602103866373578_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490655190_986319820348879_8387649432269283621_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490656306_986320057015522_4440598147863333223_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490707474_986319667015561_380451589318025099_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490707927_986321343682060_5837460896327087679_n (1).jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490714891_986321097015418_6581145620932262196_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
    { src: "/ceremony/490715643_986319773682217_1565007057420124784_n.jpg", hint: "ceremony photo", alt: "Photo from the graduation ceremony." },
];

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
