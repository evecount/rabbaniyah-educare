import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookCopy, GraduationCap, Leaf, Users, Zap } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Educational Programs',
  description: 'Explore the educational programs at Rabbaniyah Educare, including Pre-Primary, Primary, Secondary, Intensive Courses, and Tahfiz. Learn how we empower refugee students.',
  alternates: {
    canonical: '/programs',
  },
};

const programs = [
  {
    title: "Pre-Primary",
    description: "Our Pre-Primary program nurtures young minds, fostering a love for learning in a playful and supportive environment.",
    icon: Users,
    hint: "young children learning",
  },
  {
    title: "Primary",
    description: "The Primary program builds a strong foundation in core subjects, encouraging critical thinking and personal growth.",
    icon: BookCopy,
    hint: "students classroom",
  },
  {
    title: "Secondary",
    description: "Our Secondary program prepares students for higher education and future careers with a comprehensive and challenging curriculum.",
    icon: GraduationCap,
    hint: "teenagers studying",
  },
  {
    title: "Intensive Courses",
    description: "Specialized intensive courses to accelerate learning in key areas and provide students with a competitive edge.",
    icon: Zap,
    hint: "focused student",
  },
  {
    title: "Tahfiz",
    description: "A dedicated program for memorizing the Quran, focusing on tajweed and a deep understanding of the holy text.",
    icon: Leaf,
    hint: "quran study",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 md:py-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/482346712_962123602768501_369481951629583065_n.jpg"
            alt="Students listening attentively to a teacher in a classroom"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
            data-ai-hint="students classroom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Programs</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Explore the initiatives that are transforming lives and communities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {programs.map((program) => (
              <Card key={program.title} className="flex flex-col overflow-hidden group text-center">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full w-fit">
                    <program.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Join Our Remote Education Program</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you a parent or student looking for education opportunities? Register for our remote learning classes and join a community dedicated to growth and knowledge.
          </p>
          <Button size="lg" asChild>
            <Link href="/programs/register">Register Now</Link>
          </Button>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Sponsor Our Programs</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Your sponsorship can provide essential resources for our students and help us sustain our educational programs. Partner with us to make a lasting impact.
            </p>
            <Button size="lg" variant="secondary" className="mt-8" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div >
  );
}
