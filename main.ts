import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "PLEASE KNOCK FIRST. The ghost in here died rebooting this server and is still on call.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
