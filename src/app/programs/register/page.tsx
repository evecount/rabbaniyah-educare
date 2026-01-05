"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    studentName: z.string().min(2, {
        message: "Student name must be at least 2 characters.",
    }),
    age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Please enter a valid age.",
    }),
    parentName: z.string().min(2, {
        message: "Parent/Guardian name must be at least 2 characters.",
    }),
    contactNumber: z.string().min(8, {
        message: "Please enter a valid contact number.",
    }),
    address: z.string().min(5, {
        message: "Address must be at least 5 characters.",
    }),
    educationLevel: z.string({
        required_error: "Please select a current education level.",
    }),
    additionalInfo: z.string().optional(),
});

export default function RegisterPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            studentName: "",
            age: "",
            parentName: "",
            contactNumber: "",
            address: "",
            additionalInfo: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // In a real application, this would send data to a backend
        console.log(values);
        alert("Registration submitted successfully! We will contact you soon.");
        form.reset();
    }

    return (
        <div className="container mx-auto max-w-2xl py-12 px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Student Registration</CardTitle>
                    <CardDescription>
                        Register your child for Rabbaniyah Educare's remote education program.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="studentName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Student Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Full Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="age"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Age</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Age" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="parentName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Parent/Guardian Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Parent Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="contactNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contact Number (WhatsApp)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+60 12-345 6789" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            We will use this number to contact you regarding classes.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current Address</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Full address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="educationLevel"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current Education Level</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select level" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="none">No formal education</SelectItem>
                                                <SelectItem value="pre-primary">Pre-Primary (Kindergarten)</SelectItem>
                                                <SelectItem value="primary-1-3">Primary (Year 1-3)</SelectItem>
                                                <SelectItem value="primary-4-6">Primary (Year 4-6)</SelectItem>
                                                <SelectItem value="secondary">Secondary</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="additionalInfo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional Information (Optional)</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Any special needs or questions?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full">Submit Registration</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
