import fs from "node:fs/promises";
import path from "node:path";
import { CustomMDX } from "../components/mdx";

export const metadata = { title: "Histoire & Patrimoine" };

export default async function Page() {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, "association.mdx");

  // DEBUG (shows in your terminal running `npm run dev`)
  console.log("CWD:", process.cwd());
  console.log("Looking for:", filePath);
  try {
    console.log("Content entries:", await fs.readdir(contentDir));
  } catch (e) {
    console.error("Cannot read content dir:", e);
  }

  const file = await fs.readFile(filePath, "utf8");
  return (
    <main className="prose mx-auto px-4">
      <CustomMDX source={file} />
    </main>
  );
}