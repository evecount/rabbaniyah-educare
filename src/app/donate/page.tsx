import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Landmark, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate to Rabbaniyah Educare',
  description: 'Make a donation to Rabbaniyah Educare and help provide quality education to Rohingya refugee children. Your contribution can change a life.',
  alternates: {
    canonical: '/donate',
  },
};

const bankDetails = {
  bankName: "Public Bank",
  accountName: "RABBANIYAH EC LEGACY",
  accountNumber: "3820849416",
  swiftCode: "PBBEMYKL"
}

// A simple client component to handle the copy-to-clipboard functionality
const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleCopy} aria-label={`Copy ${textToCopy}`}>
      <Copy className="h-4 w-4" />
    </Button>
  );
};


export default function DonatePage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 md:py-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/481073502_951477263833135_8640512998525980846_n.jpg"
            alt="Hopeful student smiling in a classroom"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
            data-ai-hint="student smiling"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Your Gift, Their Future</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Every donation, no matter the size, helps us provide essential education and a safe learning environment for refugee children.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 text-primary">Sponsor a Student's Education</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For just RM 50 a month, you can provide a student with the supplies and resources they need to learn. Your sponsorship changes lives directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Supplies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">RM 50</p>
                <p className="text-sm text-muted-foreground">Provides books & stationery for one student.</p>
              </CardContent>
            </Card>
            <Card className="bg-background border-primary border-2 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1">POPULAR</div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Full Sponsorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">RM 150</p>
                <p className="text-sm text-muted-foreground">Covers fees, supplies & meals for one student.</p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Classroom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">RM 300</p>
                <p className="text-sm text-muted-foreground">Supports utilities & teacher stipends for a class.</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-md text-muted-foreground mb-4">
            To sponsor, please make a transfer with the reference <strong>"SPONSOR"</strong> or <strong>"STUDENT"</strong>.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary">How You Can Donate</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              We rely on direct bank transfers to ensure that 100% of your donation reaches us without any processing fees.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Landmark className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">Official Bank Transfer</CardTitle>
              </div>
              <CardDescription>
                Please use the following details to make a direct deposit to our school's official bank account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm font-mono text-muted-foreground p-4 bg-secondary rounded-md">
                <div className="flex justify-between items-center">
                  <span>BANK NAME:</span>
                  <span className="font-bold text-foreground">{bankDetails.bankName.toUpperCase()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ACCOUNT NAME:</span>
                  <span className="font-bold text-foreground">{bankDetails.accountName.toUpperCase()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ACCOUNT NO:</span>
                  <span className="font-bold text-foreground">{bankDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>SWIFT CODE:</span>
                  <span className="font-bold text-foreground">{bankDetails.swiftCode.toUpperCase()}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                For international transfers, a SWIFT code is required. Please consider mentioning "Donation" in the transaction reference.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Other Ways to Help?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              If you would like to contribute in other ways, such as volunteering or donating supplies, please visit our contribution page.
            </p>
            <Button size="lg" variant="secondary" className="mt-8" asChild>
              <Link href="/contribute">See Contribution Options</Link>
            </Button>
          </Card>
        </div>
      </section>

    </div>
  );
}