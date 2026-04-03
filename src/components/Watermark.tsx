import Image from "next/image";

export default function Watermark() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-[0.03]">
        <Image
          src="/images/logo-color.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
