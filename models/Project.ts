import mongoose from "mongoose";

export interface ProjectDocument extends mongoose.Document {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  link?: string;
  github?: string;
  tags: string[];
  categories: string[];
  techStack: string[];
  featured: boolean;
}

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    shortDescription: { type: String, required: true },
    fullDescription: { type: String },
    image: { type: String, required: true },
    link: { type: String },
    github: { type: String },
    tags: [{ type: String, default: [] }],
    categories: [
      { type: String, enum: ["ecommerce", "dashboard", "landing", "saas"] },
    ],
    techStack: [{ type: String, default: [] }],
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
