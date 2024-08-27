import { useState, ReactNode, FC } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
}

const Accordion: FC<AccordionProps> = ({ title, children, isOpen = false }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(isOpen);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{title}</span>
        {isExpanded ? (
          <FaChevronUp className="text-xl" />
        ) : (
          <FaChevronDown className="text-xl" />
        )}
      </button>
      {isExpanded && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
