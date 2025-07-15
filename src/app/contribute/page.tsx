
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Utensils, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contributionOptions = [
    {
        id: "food-donation",
        icon: Utensils,
        title: "Friday Food Donation Drop-off",
        description: "Help us provide nutritious meals. We welcome food donations to support our students and their families, with a special drop-off every Friday.",
        buttonText: "Get Details",
        href: "/contact"
    },
    {
        id: "school-supplies",
        icon: BookOpen,
        title: "Donate School Supplies",
        description: "Support our students' learning by donating new or gently used school supplies and stationery. Every pencil and notebook makes a difference.",
        buttonText: "Learn More",
        href: "/contact"
    },
    {
        id: "volunteer",
        icon: Users,
        title: "Teaching Volunteer",
        description: "Join our team of passionate volunteers. Whether you can help in the classroom or with administrative tasks, your time is invaluable to us.",
        buttonText: "Help Us Soar",
        href: "/contact"
    },
    {
        id: "parent-support",
        icon: Handshake,
        title: "Parent Support Program",
        description: "Partner with us to empower parents and guardians within the community. Your support helps us provide workshops and resources for families.",
        buttonText: "Have an Impact",
        href: "/contact"
    }
]

export default function ContributePage() {
  return (
    <div className="bg-background">
       <section className="relative py-20 md:py-32 text-white">
         <div className="absolute inset-0">
            <Image 
                src="/481073502_951477263833135_8640512998525980846_n.jpg"
                alt="Students collaborating in a classroom"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
                data-ai-hint="students classroom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get Involved</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Your support is crucial to our success. Discover the many ways you can contribute to our cause and help us create brighter futures.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
            <div id="contribute-options" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contributionOptions.map((option) => (
                    <Card key={option.title} id={option.id} className="flex flex-col text-center">
                        <CardHeader className="items-center">
                           <div className="p-4 bg-primary/10 rounded-full w-fit">
                             <option.icon className="w-10 h-10 text-primary" />
                           </div>
                            <CardTitle className="font-headline mt-4">{option.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{option.description}</p>
                        </CardContent>
                        <CardContent>
                            <Button asChild size="lg">
                                <Link href={option.href}>{option.buttonText}</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
