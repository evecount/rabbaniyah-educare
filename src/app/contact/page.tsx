import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
       <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            We'd love to hear from you. Whether you have a question, a suggestion, or want to partner with us, please reach out.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-10 gap-12">
                <div className="md:col-span-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-4">
                    <div className="space-y-2 mb-8 text-muted-foreground">
                        <p>Established in 2008, the Rabbaniyah Rohingya School for Refugees (Malaysia) wants to spread our message of hope and compassion. We focus on providing a future by giving children access to education.</p>
                        <p>Our school is located in Ampang-Malaysia, and we focus on providing education to children of the Rohingya refugee community in Kuala Lumpur, Malaysia.</p>
                    </div>
                    <h2 className="text-2xl font-bold font-headline mb-6">Our Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="bg-primary/10 p-3 rounded-full">
                             <MapPin className="h-6 w-6 text-primary" />
                           </div>
                            <div>
                                <h3 className="font-semibold font-headline">Address</h3>
                                <p className="text-muted-foreground">Lot 12421, Jalan Bunga Melati 15A,<br/>Taman Seraya, 56100 Ampang,<br/>Selangor Du, Malaysia</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="bg-primary/10 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold font-headline">Email</h3>
                                <a href="mailto:rabbaniyaheducare@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">rabbaniyaheducare@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold font-headline">Phone</h3>
                                <a href="tel:+601164099760" className="text-muted-foreground hover:text-primary transition-colors">+60 11-6409 9760</a>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Facebook className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold font-headline">Join Our Community</h3>
                                <a href="https://www.facebook.com/rabbaniyaheducare/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Follow us on Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
