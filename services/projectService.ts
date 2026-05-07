"use server";
import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { redirect } from "next/navigation";

const getString = (value: FormDataEntryValue | null): string => {
  return typeof value === "string" ? value : "";
};

const getProjects = async () => {
  await connectDB();
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return projects;
  } catch (error) {
    console.error("Error Getting the Projects:", error);
  }
};

const addProjects = async (formData: FormData) => {
  const title = getString(formData.get("title"));
  const slug = getString(formData.get("slug"));
  const shortDescription = getString(formData.get("shortDescription"));
  const fullDescription = getString(formData.get("fullDescription"));
  const image = getString(formData.get("image"));
  const link = getString(formData.get("link"));
  const github = getString(formData.get("github"));
  const tags = getString(formData.get("tags"))
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const categories = getString(formData.get("categories"))
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);
  const techStack = getString(formData.get("techStack"))
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const featured = getString(formData.get("featured"));

  if (!title || !slug || !shortDescription || !image) {
    throw new Error("Missing required fields");
  }

  await connectDB();

  const existingProject = await Project.findOne({ slug });
  if (existingProject) {
    throw new Error("Project Already Exists");
  }
  try {
    await Project.create({
      title,
      slug,
      shortDescription,
      fullDescription,
      image,
      link,
      github,
      tags,
      categories,
      techStack,
      featured,
    });
    redirect("/");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to Create Project");
  }
};

export { getProjects, addProjects };
