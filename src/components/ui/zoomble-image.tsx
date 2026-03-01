import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  /** thumbnail size */
  width?: number;
  height?: number;
};

export default function ZoomableImage({
  src,
  alt = "",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* thumbnail / clickable image */}
      <div className="cursor-pointer inline-block" onClick={() => setOpen(true)}>
        <Image
          src={src}
          alt={alt}
          className="object-cover object-top"
          fill
          priority
        />
      </div>

      {/* modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setOpen(false)}            // click outside closes
        >
          <div className="overflow-auto max-w-full max-h-full p-4">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setOpen(false)}          // close button
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}