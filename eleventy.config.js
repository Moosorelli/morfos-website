import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  // Assets are plain files: copy them as they are.
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("media");
  eleventyConfig.addPassthroughCopy("*.{png,webp,svg,ico}");
  eleventyConfig.addPassthroughCopy({ "blogg/bilder": "blogg/bilder" });

  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("node_modules/**");

  // Posts marked `draft: true` are never published.
  eleventyConfig.addPreprocessor("drafts", "md", (data) => {
    if (data.draft) return false;
  });

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("blogg/inlagg/*.md").sort((a, b) => b.date - a.date)
  );

  const months = ["januari", "februari", "mars", "april", "maj", "juni", "juli",
    "augusti", "september", "oktober", "november", "december"];
  eleventyConfig.addFilter("svDate", (d) => `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`);
  eleventyConfig.addFilter("isoDate", (d) => d.toISOString().slice(0, 10));

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/blogg/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: {
      language: "sv",
      title: "Morfos Edtech Akademi – Blogg",
      subtitle: "Tankar om e-lärande, kursdesign och kompetensutveckling.",
      base: "https://www.morfos.se/",
      author: { name: "Morfos Edtech Akademi", email: "info@morfos.se" },
    },
  });

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: false,
  };
}
