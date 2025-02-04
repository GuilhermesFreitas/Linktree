
import SocialIcon from '../components/SocialIcon'; 

export default function Home() {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-color-font-primary animate-fade-right animate-once animate-duration-[950ms] animate-ease-in">
          Guilherme <strong className='bg-gradient bg-gradient-color text-transparent bg-clip-text' >Freitas</strong>
        </h1>
        <p className="digitacao text-center text-color-font-p text-lg sm:text-2xl lg:text-3xl mb-[3rem]">
          Minhas redes <strong className='bg-gradient bg-gradient-color text-transparent bg-clip-text' >sociais</strong>
        </p>
        <main>
          <div className="cards flex gap-8">
            <SocialIcon
              href="https://github.com/GuilhermesFreitas"
              src="/Icons/github-logo.svg"
              alt="GitHub"
            />
            <SocialIcon
              href="https://www.instagram.com/guilhermesfreitass/"
              src="/Icons/instagram-logo.svg"
              alt="Instagram"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/guilherme-silva-freitasea/"
              src="/Icons/LinkedinLogo.svg"
              alt="LinkedIn"
            />
            <SocialIcon
              href="mailto:guilhermefreitas@gmail.com"
              src="/Icons/email-logo.svg"
              alt="Email"
            />
          </div>
        </main>
      </div>
      <footer className="text-center py-4">
        <div className="text-color-font-p text-xl">
          <p>Desenvolvido por <span className="bg-gradient bg-gradient-color text-transparent bg-clip-text">Guilherme Freitas</span></p>
        </div>
      </footer>
    </div>
  );
}