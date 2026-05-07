import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { getProjects } from "@/services/projectService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await getProjects();
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json(); // ✅ JSON

    await connectDB();

    // optional: check slug uniqueness
    const existing = await Project.findOne({ slug: body.slug });
    if (existing) {
      return NextResponse.json(
        { error: "Project already exists" },
        { status: 400 },
      );
    }

    const project = await Project.create({
      title: body.title,
      slug: body.slug,
      shortDescription: body.shortDescription,
      fullDescription: body.fullDescription,
      image: body.image,
      link: body.link,
      github: body.github,
      tags: body.tags ?? [],
      categories: body.categories ?? [],
      techStack: body.techStack ?? [],
      featured: body.featured ?? false,
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error adding project:", error);

    return NextResponse.json(
      { error: "Failed to add project" },
      { status: 500 },
    );
  }
}
