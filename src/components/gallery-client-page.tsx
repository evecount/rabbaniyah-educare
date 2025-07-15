"use client"
import * as React from "react"
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook } from "lucide-react";

const graduatesImages = [
    { src: "/graduates/491548966_989507160030145_8572996303758288139_n.jpg", hint: "graduates group photo", alt: "A group photo of the Rabbaniyah Educare graduating class" },
    { src: "/graduates/491883381_989507426696785_3985075876813173429_n.jpg", hint: "student receiving award", alt: "A student receiving an award on stage" },
    { src: "/graduates/491917541_989507546696773_672397877554336226_n.jpg", hint: "students performing on stage", alt: "Students performing during the graduation ceremony" },
    { src: "/graduates/491919471_989507460030115_146997472358180735_n.jpg", hint: "graduates holding certificates", alt: "Graduates proudly holding their certificates" },
    { src: "/graduates/491936879_989507390030122_2885219441418217231_n.jpg", hint: "graduate giving speech", alt: "A graduate giving a speech at the podium" },
    { src: "/graduates/491979112_989507243363470_7331383508753631244_n.jpg", hint: "happy graduates", alt: "A group of happy graduates posing for a photo" },
    { src: "/graduates/491997131_989507536696774_1924886347511733963_n.jpg", hint: "graduates group photo", alt: "A group photo of the Rabbaniyah Educare graduating class" },
    { src: "/graduates/492004025_989507276696800_7050939593771973697_n.jpg", hint: "student receiving award", alt: "A student receiving an award on stage" },
    { src: "/graduates/492189362_989507483363446_2035013827886497409_n.jpg", hint: "students performing on stage", alt: "Students performing during the graduation ceremony" },
    { src: "/graduates/490298103_989507660030095_5276181332123475723_n.jpg", hint: "graduates holding certificates", alt: "Graduates proudly holding their certificates" },
    { src: "/graduates/490363833_989507343363460_6500094328738724323_n.jpg", hint: "graduate giving speech", alt: "A graduate giving a speech at the podium" },
    { src: "/graduates/490442754_989507436696784_3183949203183527555_n.jpg", hint: "happy graduates", alt: "A group of happy graduates posing for a photo" },
    { src: "/graduates/490514138_989507293363465_8687828806908394336_n.jpg", hint: "graduates group photo", alt: "A group photo of the Rabbaniyah Educare graduating class" },
    { src: "/graduates/490636032_986321207015407_3303602103866373578_n.jpg", hint: "student receiving award", alt: "A student receiving an award on stage" },
    { src: "/graduates/490707927_986321343682060_5837460896327087679_n.jpg", hint: "students performing on stage", alt: "Students performing during the graduation ceremony" },
    { src: "/graduates/490712079_989507380030123_3282182186785866711_n.jpg", hint: "graduates holding certificates", alt: "Graduates proudly holding their certificates" },
    { src: "/graduates/490765391_986321270348734_3440983525635898951_n.jpg", hint: "graduate giving speech", alt: "A graduate giving a speech at the podium" },
    { src: "/graduates/490774431_989507333363461_4009593706366031136_n.jpg", hint: "happy graduates", alt: "A group of happy graduates posing for a photo" },
    { src: "/graduates/490914786_991263799854481_3413721374011061677_n.jpg", hint: "graduates group photo", alt: "A group photo of the Rabbaniyah Educare graduating class" },
];

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

function GalleryGrid({ 
    images,
    onImageClick 
}: { 
    images: { src: string; alt: string; hint: string; }[];
    onImageClick: (image: { src: string; alt: string; }) => void;
}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
                <div 
                    key={index} 
                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                    onClick={() => onImageClick(image)}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint + " square"}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
            ))}
        </div>
    )
}

export default function GalleryClientPage() {
  const [selectedImage, setSelectedImage] = React.useState<{src: string, alt: string} | null>(null);

  return (
    <div className="bg-background">
      <section className="relative py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto max-w-7xl px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Our Community</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Celebrating the achievements and bright futures of our students. See the faces of the next generation of leaders, thinkers, and innovators.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
            <Tabs defaultValue="community" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12">
                <TabsTrigger value="community">Community Photos</TabsTrigger>
                <TabsTrigger value="graduates">Our Graduates</TabsTrigger>
                <TabsTrigger value="ceremony">Ceremony</TabsTrigger>
              </TabsList>
              <TabsContent value="community">
                 <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline">Latest Updates from Our Community</CardTitle>
                        <CardDescription>
                            See the latest photos and events directly on our Facebook page.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center p-8">
                        <div className="mb-6">
                            <Image 
                                src="/FBinvite.png" 
                                alt="Screenshot of the Rabbaniyah Educare Facebook page photo gallery"
                                width={500}
                                height={262}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            Our Facebook community is always active with new photos from school events, student activities, and graduation ceremonies. Click the button below to see what's new!
                        </p>
                        <Button asChild size="lg">
                            <Link href="https://www.facebook.com/rabbaniyaheducare/photos" target="_blank" rel="noopener noreferrer">
                                <Facebook className="mr-2 h-5 w-5" /> View on Facebook
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="graduates">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-center">Celebrating Our Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <GalleryGrid images={graduatesImages} onImageClick={setSelectedImage} />
                    </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ceremony">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-center">Graduation Day</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <GalleryGrid images={ceremonyImages} onImageClick={setSelectedImage} />
                    </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0">
            {selectedImage && (
                <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg"
                />
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
