import Image, { type ImageProps } from "next/image";

type SmartImageProps = Omit<ImageProps, "src"> & { src: string };

/**
 * Remote (http) sources skip Next's image optimizer and load directly in the
 * visitor's browser — some of our work images live on a client's own CDN
 * (e.g. WordPress media) that may not be reachable from Vercel's optimizer,
 * so we don't want a build-time or request-time dependency on it.
 */
export default function SmartImage({
  src,
  alt,
  fill,
  className,
  sizes,
  priority,
}: SmartImageProps) {
  if (src.startsWith("http")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={
          fill ? `absolute inset-0 w-full h-full ${className ?? ""}` : className
        }
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
