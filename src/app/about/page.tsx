import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Users } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  { name: "Dr Qutub Shah", role: "Main Contact", image: "https://placehold.co/100x100.png", hint: "man portrait" },
  { name: "Teacher", role: "Teacher", image: "https://placehold.co/100x100.png", hint: "person portrait" },
  { name: "Teacher", role: "Teacher", image: "https://placehold.co/100x100.png", hint: "person portrait" },
  { name: "Teacher", role: "Teacher", image: "https://placehold.co/100x100.png", hint: "person portrait" },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full h-[50vh] bg-secondary">
        <Image 
          src="/482346712_962123602768501_369481951629583065_n.jpg" 
          alt="Rabbaniyah Educare students in a classroom" 
          layout="fill" 
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4 text-primary flex items-center gap-3"><BookOpen className="w-8 h-8"/> Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2008, our non-profit school was established with the help of Rohingya individuals and local Malaysian supporters, to serve the Rohingya refugee community residing in Kuala Lumpur.
                </p>
                <p>
                  We currently serve 80 families in Kampung Tasik Tambahan located in Ampang, Selangor.
                </p>
                <p>
                  More than 150,000 Rohingya refugees live in Malaysia. While some are registered under the United Nations High Commissioner for Refugees (UNHCR), a majority of them remain unregistered and unable to access medical and education resources or have stable careers.
                </p>
                <p>
                  Currently, refugees are not allowed to attend any public school in Malaysia under existing Malaysian law.
                </p>
                <p>
                  With a shortage of schools under the supervision of the UNHCR, the majority of refugee children are deprived of any kind of education.
                </p>
                <p className="font-bold text-foreground">
                  Let's break this cycle. Help us build a new future.
                </p>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image src="https://placehold.co/600x400.png" alt="Placeholder image" layout="fill" objectFit="cover" data-ai-hint="classroom students" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center">
                 <h2 className="text-3xl font-bold font-headline mb-4 text-primary flex items-center justify-center gap-3"><Target className="w-8 h-8"/> Our Values</h2>
                 <p className="max-w-3xl mx-auto text-muted-foreground text-lg mb-12">
                    Our core values guide every decision we make and every program we implement.
                </p>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">We operate with transparency and accountability in all our actions, ensuring that our resources are used effectively to serve our community.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">We believe in creating a nurturing and empathetic environment where every child feels safe, valued, and understood.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">We strive to empower our students with the knowledge, skills, and confidence they need to become self-reliant and positive contributors to society.</p>
                </CardContent>
            </Card>
           </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4 text-primary flex items-center justify-center gap-3"><Users className="w-8 h-8"/> Meet Our Team</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg mb-12">
              The driving force behind our mission is our dedicated team of educators, administrators, and volunteers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-none">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-headline font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
