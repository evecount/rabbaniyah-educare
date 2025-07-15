import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookCopy, GraduationCap, Leaf, Users, Zap } from "lucide-react";

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
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Programs</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
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
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground text-center p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Have a Program Idea?</h2>
              <p className="mt-4 text-lg max-w-2xl mx-auto">
                We are always open to new partnerships and ideas. If you want to collaborate, please get in touch.
              </p>
              <Button size="lg" variant="secondary" className="mt-8" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </Card>
          </div>
        </section>
    </div>
  );
}
