import type { Metadata } from "next";
import ComingSoonCaseStudy from "@/components/ComingSoonCaseStudy";

export const metadata: Metadata = {
  title: "Structuring a Design Chapter at Gupy — Bia Rodrigues",
};

export default function DesignChapterGupyCaseStudy() {
  return (
    <ComingSoonCaseStudy
      title="Structuring a Design Chapter at Gupy"
      subtitle="Design Ops / Team Structure"
      overview="Overview coming soon."
    />
  );
}
