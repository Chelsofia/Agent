import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}
const Heading = ({ children, className }: HeadingProps) => {
  return <h1 className={`text-[20px] font-[600] ${className}`}>{children}</h1>;
};
export default Heading;
