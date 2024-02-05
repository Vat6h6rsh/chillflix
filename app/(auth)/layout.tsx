import { ReactNode, FC } from "react";
import BackgroundImage from '../../public/login_background.jpg'
import Image from "next/image";
import Logo from '../../public/netflix_logo.svg'

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="reletive flex h-screen w-screen flex-col bg-black md:justify-center md:bg-transparent">

      <Image
         src={BackgroundImage} 
         alt="Background_Image" 
         className="hidden sm:flex sm:object-cover -z-10 brightness-50" 
         priority 
         fill/>
      <Image 
        src={Logo}
        alt='Logo'
        width={120}
        height={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-5"/>
      {children}
    </div>
  );
};

export default AuthLayout;
