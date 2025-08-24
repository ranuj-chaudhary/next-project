import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "images-source";
const outputDir = "public/images";

// target sizes
const sizes = [600, 1200, 1920];

// formats to export
const formats = ["avif", "webp", "jpg"];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function processImage(file) {
  const inputPath = path.join(inputDir, file);
  const name = path.parse(file).name;

  for (const size of sizes) {
    for (const format of formats) {
      const outPath = path.join(outputDir, name, format, `${size}.${format}`);
      ensureDir(path.dirname(outPath));

      await sharp(inputPath)
        .resize({ width: size })
        .toFormat(format, { quality: 80 })
        .toFile(outPath);

      console.log(`✅ ${outPath}`);
    }
  }
}

async function run() {
  const files = fs
    .readdirSync(inputDir)
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f));
  for (const file of files) {
    await processImage(file);
  }
}

run();
