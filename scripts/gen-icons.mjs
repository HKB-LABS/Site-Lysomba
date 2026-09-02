import sharp from "sharp";
import { renameSync, statSync } from "fs";

const master = "uploads/lysomba_icon_master.png";

await sharp(master).resize(512, 512).png({ compressionLevel: 9, quality: 90 }).toFile("src/app/icon.png");
await sharp(master).resize(180, 180).png({ compressionLevel: 9, quality: 90 }).toFile("src/app/apple-icon.png");
await sharp(master).resize(1024, 1024).png({ compressionLevel: 9, quality: 92 }).toFile("uploads/_tmp.png");
renameSync("uploads/_tmp.png", master);

for (const f of [master, "src/app/icon.png", "src/app/apple-icon.png", "assets/screen-rayons.png", "assets/screen-listes.png", "public/og.png"]) {
  console.log(f, (statSync(f).size / 1024).toFixed(0) + " KB");
}
