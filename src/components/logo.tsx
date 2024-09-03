
import Image from "next/image";
import { ReactNode } from "react";
interface LogoProps {
  children?: ReactNode;
}

const Logo: React.FC<LogoProps> = ({ children }) => {
  children = (
    <div>
    
    </div>
  );
  return (
    <div className=" px-5 py-2  flex items-center">
      <div className="h-[100%] w-[100%] mt-8">
        <Image src="/images/logo.png" alt="logo" height={200} width={200} />
      </div>
      <div className=" w-12 h-12 bg-primary  flex items-center justify-center"></div>
      <div>{children}</div>
    </div>
  );
};

export default Logo;
