import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Handshake, Shirt, Users } from "lucide-react";
import Link from "next/link";

const contributionOptions = [
    {
        icon: Shirt,
        title: "Donate Your School Uniforms",
        description: "Have under-sized school uniforms that are used but not abused? We welcome in-kind donations to help our students look smart and feel confident.",
        buttonText: "Learn More",
        href: "/contact"
    },
    {
        icon: Users,
        title: "Volunteer Your Time",
        description: "Join our team of passionate volunteers. Whether you can help in the classroom, with administrative tasks, or at events, your time is invaluable to us.",
        buttonText: "Help Us Soar",
        href: "/contact"
    },
    {
        icon: DollarSign,
        title: "Make a Donation",
        description: "Your financial support helps us fund our core programs, from school supplies to teacher salaries. Every contribution, big or small, makes a significant impact.",
        buttonText: "Show Your Support",
        href: "/contact"
    },
    {
        icon: Handshake,
        title: "Partner With Us",
        description: "Partner with us to create a lasting impact. We offer various corporate sponsorship opportunities that align with your company's social responsibility goals.",
        buttonText: "Have an Impact",
        href: "/contact"
    }
]

export default function ContributePage() {
  return (
    <div className="bg-background">
       <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get Involved</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Your support is crucial to our success. Discover the many ways you can contribute to our cause and help us create brighter futures.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contributionOptions.map((option) => (
                    <Card key={option.title} className="flex flex-col text-center">
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

       <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4">
            <Card className="bg-white">
                <CardHeader className="text-center">
                    <h2 className="text-3xl font-bold font-headline text-primary">Frequently Asked Questions</h2>
                    <CardDescription>Find answers to common questions about contributing.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <div>
                            <h3 className="font-semibold font-headline">Is my donation tax-deductible?</h3>
                            <p className="text-sm text-muted-foreground">Yes, Rabbaniyah Educare is a registered non-profit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a receipt for your records.</p>
                        </div>
                        <div className="border-t pt-4">
                            <h3 className="font-semibold font-headline">How much of my donation goes to the programs?</h3>
                            <p className="text-sm text-muted-foreground">We are proud to say that 90% of every donation goes directly to our educational and community programs. The remaining 10% covers essential administrative costs to keep our organization running smoothly.</p>
                        </div>
                        <div className="border-t pt-4">
                            <h3 className="font-semibold font-headline">Can I donate items other than money?</h3>
                            <p className="text-sm text-muted-foreground">Absolutely! We welcome in-kind donations such as books, school supplies, computers, and furniture. Please contact us to coordinate a drop-off or pickup.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>
       </section>

    </div>
  );
}
