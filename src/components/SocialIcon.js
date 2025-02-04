// components/SocialIcon.js
import Image from 'next/image';

export default function SocialIcon({ href, src, alt }) {
  return (
    <div className="flex justify-center items-center rounded-full size-16 hover:bg-gradient-button hover:scale-[1.2] transition duration-[800ms]">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image className="size-8" src={src} alt={alt}  width={40} height={40} />
      </a>
    </div>
  );
}
  