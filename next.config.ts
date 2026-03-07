import assert from "node:assert";
import { dirname } from "node:path";
import type { NextConfig } from "next";

assert(process.env.BLOB_STORAGE_URL, "you must have defined BLOB_STORAGE_URL");

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.BLOB_STORAGE_URL}/**`)],
  },
  turbopack: {
    root: dirname(__filename),
  },
};

export default nextConfig;
