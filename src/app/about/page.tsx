import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Target, Users } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  { name: "Ahmad Abdullah", role: "Founder & CEO", image: "https://placehold.co/100x100.png", hint: "man portrait" },
  { name: "Siti Fatimah", role: "Head of Education", image: "https://placehold.co/100x100.png", hint: "woman portrait" },
  { name: "Zainab Yusuf", role: "Community Outreach Lead", image: "https://placehold.co/100x100.png", hint: "woman portrait" },
  { name: "Omar Rashid", role: "Operations Manager", image: "https://placehold.co/100x100.png", hint: "man portrait" },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Rabbaniyah Educare</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Learn about our journey, our values, and the passionate team dedicated to making a difference.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4 text-primary flex items-center gap-3"><Building className="w-8 h-8"/> Our History</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Established in 2008, the Rabbaniyah Rohingya School for Refugees (Malaysia) wants to spread our message of hope and compassion. We focus on providing a future by giving children access to education. 
                </p>
                <p>
                  Our school is located in Ampang-Malaysia, and we focus on providing education to children of the Rohingya refugee community in Kuala Lumpur, Malaysia.
                </p>
              </div>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image src="https://placehold.co/600x450.png" data-ai-hint="refugee children school" alt="The first Rabbaniyah Educare center" layout="fill" objectFit="cover" />
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
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-none">
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