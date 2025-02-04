// components/SocialIcon.js

export default function SocialIcon({ href, src, alt }) {
  return (
    <div className="flex justify-center items-center rounded-full size-16 hover:bg-gradient-button hover:scale-[1.2] transition duration-[800ms]">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img className="size-8" src={src} alt={alt} />
      </a>
    </div>
  );
}
