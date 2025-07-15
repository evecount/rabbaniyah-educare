import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "New School Construction",
    description: "Building a safe and modern learning space for over 200 students in a rural community, complete with classrooms, a library, and a playground.",
    image: "https://placehold.co/600x400.png",
    hint: "school construction",
    tags: ["Infrastructure", "Completed"],
    status: "Completed",
  },
  {
    title: "Mobile Library Initiative",
    description: "Bringing books and the joy of reading to remote villages with our custom-equipped library van. We reach over 500 children weekly.",
    image: "https://placehold.co/600x400.png",
    hint: "library books",
    tags: ["Literacy", "Ongoing"],
    status: "Ongoing",
  },
  {
    title: "Teacher Training Program",
    description: "Empowering local educators with modern teaching techniques and resources for better student outcomes. Over 50 teachers trained to date.",
    image: "https://placehold.co/600x400.png",
    hint: "teacher training",
    tags: ["Education", "Ongoing"],
    status: "Ongoing",
  },
  {
    title: "Student Nutrition Program",
    description: "Providing daily nutritious meals to all our students to ensure they have the energy to learn and thrive.",
    image: "https://placehold.co/600x400.png",
    hint: "children eating",
    tags: ["Health", "Ongoing"],
    status: "Ongoing",
  },
  {
    title: "Digital Literacy for All",
    description: "Equipping our students with essential computer skills for the future. We've set up a computer lab with 20 workstations.",
    image: "https://placehold.co/600x400.png",
    hint: "computer lab",
    tags: ["Technology", "Completed"],
    status: "Completed",
  },
  {
    title: "Girls' Education Scholarship",
    description: "A scholarship fund dedicated to supporting girls in pursuing higher education and breaking the cycle of poverty.",
    image: "https://placehold.co/600x400.png",
    hint: "female student",
    tags: ["Empowerment", "Ongoing"],
    status: "Ongoing",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Projects</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Explore the initiatives that are transforming lives and communities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden group">
                <div className="relative">
                    <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.hint}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge variant={project.status === 'Completed' ? "secondary" : "default"} className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        {project.status}
                    </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                   <div className="flex gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                   </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground text-center p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Have a Project Idea?</h2>
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
