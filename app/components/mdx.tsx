import { MDXRemote } from "next-mdx-remote/rsc";

export function CustomMDX({ source }: { source: string }) {
  // You can map MDX elements (like <h1>, <code>, etc.) to custom components here
  return <MDXRemote source={source} />;
}