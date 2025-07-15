import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary">
                  Education, Empowerment, Excellence.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join Rabbaniyah Educare in our mission to provide quality education and create brighter futures for every child.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                      <Link href="/programs">Our Programs</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                      <Link href="/contribute">Get Involved</Link>
                  </Button>
              </div>
              <div className="w-full max-w-4xl pt-8">
                <Image
                  src="/485721469_970378141943047_4986339430387739828_n.jpg"
                  alt="A group of Rabbaniyah Educare students and staff"
                  width="1200"
                  height="675"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Mission</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                We are dedicated to breaking barriers in education, ensuring every child has the opportunity to learn, grow, and achieve their full potential in a nurturing and supportive environment.
              </p>
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

        <section id="projects" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Programs</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                From building schools to launching digital literacy programs, see how our work is making an impact.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Program 1" data-ai-hint="school building" width={600} height={400} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <CardHeader>
                  <CardTitle className="font-headline">Pre-Primary Education</CardTitle>
                  <CardDescription>Nurturing young minds from the very beginning in a supportive learning environment.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/programs">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Program 2" data-ai-hint="library books" width={600} height={400} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <CardHeader>
                  <CardTitle className="font-headline">Primary & Secondary School</CardTitle>
                  <CardDescription>Providing a comprehensive curriculum for primary and secondary level students.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/programs">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Program 3" data-ai-hint="quran study" width={600} height={400} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <CardHeader>
                  <CardTitle className="font-headline">Tahfiz Program</CardTitle>
                  <CardDescription>A dedicated program for memorizing the Quran and understanding its teachings.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/programs">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
             <div className="text-center mt-12">
                <Button size="lg" variant="outline" asChild>
                    <Link href="/programs">View All Programs</Link>
                </Button>
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
