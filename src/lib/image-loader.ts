export default function imageLoader({ src }: { src: string }) {
  if (/^(https?:)?\/\//.test(src)) return src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}
