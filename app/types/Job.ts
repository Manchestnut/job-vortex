import { PortableTextBlock } from "next-sanity";

export type Job = {
    _id: string;
    _createdAt: Date;
    job_title: string;
    slug: string;
    job_description: PortableTextBlock[];
    job_location: string;
}