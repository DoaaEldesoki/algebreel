import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputDir = path.resolve("public/images");
const outputDir = path.resolve("public/images-optimized");

const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (allowedExt.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const relativePath = path.relative(inputDir, filePath);
  const outputPath = path.join(outputDir, relativePath).replace(/\.(jpe?g|png|webp)$/i, ".webp");

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const sharpImage = sharp(filePath);
  const metadata = await sharpImage.metadata();

  let width = metadata.width ?? 1600;
  const height = metadata.height ?? 0;

  if (width > 1600) {
    width = 1600;
  }

  await sharp(filePath)
    .resize({
      width,
      height: height && width ? undefined : undefined,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 75, effort: 6 })
    .toFile(outputPath);

  return outputPath;
}

async function main() {
  const files = await walk(inputDir);
  let count = 0;

  for (const file of files) {
    await optimizeImage(file);
    count += 1;
  }

  console.log(`Optimized ${count} images into ${outputDir}`);
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exit(1);
});
