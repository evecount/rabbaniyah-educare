
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const initiatives = [
  {
    title: "Friday Food Donation Drop-off",
    image: "/fridayfooddonation.jpeg",
    hint: "food donation",
    link: "/contribute#food-donation"
  },
  {
    title: "Donate School Supplies",
    image: "/donatesupplies.jpeg",
    hint: "school supplies",
    link: "/contribute#school-supplies"
  },
  {
    title: "Teaching Volunteer",
    image: "/teachingvolunteer.jpeg",
    hint: "teaching online",
    link: "/contribute#volunteer"
  },
  {
    title: "Parent Support Program",
    image: "/parentsupportprogram.jpeg",
    hint: "woman writing",
    link: "/contribute#parent-support"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full bg-secondary">
          <div className="container px-4 md:px-6 pt-12 pb-12">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="w-full max-w-[25vw] mx-auto">
                    <Image
                        src="/RabbaniyahLogo_Large.png"
                        alt="Rabbaniyah Educare Logo"
                        width={400}
                        height={400}
                        className="w-full h-auto mb-4"
                        priority
                    />
                </div>
                <div className="text-3xl md:text-4xl font-headline tracking-tight text-foreground">
                    <p className="font-extrabold">RABBANIYAH EDUCARE</p>
                    <p className="text-xl md:text-2xl mt-2 font-body">(REFUGEE EDUCATION CENTER, MALAYSIA)</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                      <Link href="/programs">Our Programs</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                      <Link href="/contribute">Get Involved</Link>
                  </Button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/485721469_970378141943047_4986339430387739828_n.jpg"
              alt="A group of Rabbaniyah Educare students and staff"
              width="1920"
              height="1080"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section id="mission" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">RABBANIYAH EDUCARE (REFUGEE EDUCATION CENTER, MALAYSIA)</h2>
              <div className="max-w-3xl mx-auto text-muted-foreground text-lg space-y-4">
                <p>
                  Established in 2008, the Rabbaniyah Rohingya School for Refugees (Malaysia) wants to spread our message of hope and compassion. We focus on providing a future by giving children access to education.
                </p>
                <p>
                  Our school is located in Ampang-Malaysia, and we focus on providing education to children of the Rohingya refugee community in Kuala Lumpur, Malaysia.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">Quality Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Providing comprehensive learning programs that foster intellectual and personal growth.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Building strong communities by involving parents, volunteers, and partners in the educational process.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">Holistic Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Focusing on the emotional, social, and physical well-being of our students, not just academics.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="initiatives" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Our Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {initiatives.map((item) => (
                <Link key={item.title} href={item.link} className="flex items-center gap-6 group">
                  <div className="relative w-24 h-24 shrink-0 rounded-md overflow-hidden shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      data-ai-hint={item.hint}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-headline group-hover:text-primary transition-colors">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground text-center p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Make a Difference?</h2>
              <p className="mt-4 text-lg max-w-2xl mx-auto">
                Your support can change lives. Whether you donate, volunteer, or spread the word, you are a vital part of our mission.
              </p>
              <Button size="lg" variant="secondary" className="mt-8" asChild>
                <Link href="/contribute">Contribute Today</Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
